const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

// Path to your build folder
const directoryPath = path.resolve('./out/_next/static')

const kvNamespace = '7e4963ca204a4783bd576a3b361017eb'

function uploadToKV(filePath, kvKey) {
  return new Promise((resolve, reject) => {
    const command = `npx wrangler@latest kv key put "${kvKey}" --path "${filePath}" --namespace-id ${kvNamespace}`
    console.log(command)
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

// Modified processDirectory function for serial uploads
async function processDirectory(directory) {
  const items = fs.readdirSync(directory)

  for (const item of items) {
    const fullPath = path.join(directory, item)
    
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath)
    } else {
      let kvKey = '_next/' + path.relative('./out/_next', fullPath).replace(/\\/g, '/')
      
      // Upload serially - wait for each upload to complete before starting the next
      await uploadToKV(fullPath, kvKey)
    }
  }
}

// Start processing from the static directory
processDirectory(directoryPath)
