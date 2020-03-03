import path from 'path'
import { readSync, INCLUDE_DIRECTORIES } from 'readdir'
import { isDirectorySync } from 'path-type'

const generator = class Generator {

    data = {}

    fileDisplay(filePath, data) {
        data = data ? data : this.data
        let filesArray = readSync( filePath, ['*/', '*.svg'], INCLUDE_DIRECTORIES )

        let self = this
        filesArray.forEach(function(filename){
            let newFilePath = path.join(filePath, filename)
            let isDirectory = isDirectorySync(newFilePath)
            if (isDirectory) {
                filename = filename.split('/')[0]
                data[filename] = {}
                self.fileDisplay(newFilePath, data[filename])
            } else {
                data[filename] = filename
            }
        })
    }

    run(filePath) {
        this.fileDisplay(filePath, false)
    }
}

export default generator