const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

// Path to your build folder
const directoryPath = path.resolve('./out/_next/static')

const kvNamespace = '7e4963ca204a4783bd576a3b361017eb'
const BATCH_SIZE = 5 // Adjust this number based on your needs

// Add Semaphore implementation
class Semaphore {
  constructor(max) {
    this.max = max
    this.current = 0
    this.queue = []
  }

  async acquire() {
    if (this.current < this.max) {
      this.current++
      return
    }
    await new Promise(resolve => this.queue.push(resolve))
  }

  release() {
    if (this.queue.length > 0) {
      const next = this.queue.shift()
      next()
    } else {
      this.current--
    }
  }
}

function uploadToKV(filePath, kvKey) {
  return new Promise((resolve, reject) => {
    const command = `npx wrangler kv key put "${kvKey}" --path "${filePath}" --namespace-id ${kvNamespace}`
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Failed to upload ${kvKey}:`, error.message);
        reject(error);
        return;
      }
      console.log(`Uploaded: ${kvKey}`);
      resolve();
    });
  });
}

// Modified processDirectory function
async function processDirectory(directory) {
  const items = fs.readdirSync(directory)
  const semaphore = new Semaphore(BATCH_SIZE)
  const uploadPromises = []

  for (const item of items) {
    const fullPath = path.join(directory, item)
    
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath)
    } else {
      let kvKey = '_next/' + path.relative('./out/_next', fullPath).replace(/\\/g, '/')
      kvKey = kvKey.replace('[', '%5B').replace(']', '%5D')
      
      // Add semaphore-controlled upload
      const uploadWithSemaphore = async () => {
        await semaphore.acquire()
        try {
          await uploadToKV(fullPath, kvKey)
        } finally {
          semaphore.release()
        }
      }
      
      uploadPromises.push(uploadWithSemaphore())
    }
  }

  // Wait for all uploads in this directory to complete
  await Promise.all(uploadPromises)
}

// Start processing from the static directory
processDirectory(directoryPath)
