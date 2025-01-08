const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

// Path to your build folder
const directoryPath = path.resolve('./out/_next/static')

const kvNamespace = '7e4963ca204a4783bd576a3b361017eb'

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

// Recursive function to process directories
async function processDirectory(directory) {
  const items = fs.readdirSync(directory);
  
  const promises = items.map(async (item) => {
    const fullPath = path.join(directory, item)
    
    if (fs.statSync(fullPath).isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(fullPath);
    } else {
      // For files, create KV key relative to ./out
      let kvKey = '_next/' + path.relative('./out/_next', fullPath).replace(/\\/g, '/')
      kvKey = kvKey.replace('[', '%5B').replace(']', '%5D')
      await uploadToKV(fullPath, kvKey)
    }
  })

  await Promise.all(promises)
}

// Start processing from the static directory
processDirectory(directoryPath)
