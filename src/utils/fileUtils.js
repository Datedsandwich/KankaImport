import * as fs from 'fs'
import path from 'path'

const isDirectory = filePath => fs.statSync(filePath).isDirectory()
const getDirectories = filePath =>
    fs.readdirSync(filePath).map(name => path.join(filePath, name)).filter(isDirectory)

const isJson = filePath => fs.statSync(filePath).isFile() && path.extname(filePath) === '.json' && !filePath.includes('metadata')
const getFiles = filePath =>
    fs.readdirSync(filePath).map(name => path.join(filePath, name)).filter(isJson)

const getFilesRecursively = (filePath) => {
    let directories = getDirectories(filePath)
    let files = directories
        .map(dir => getFilesRecursively(dir))
        .reduce((a, b) => a.concat(b), [])

    return files.concat(getFiles(filePath))
}

function parseFile(file) {
    const fileData = fs.readFileSync(file, 'utf-8')
    return JSON.parse(fileData)
}

function parseJsonInDirectories(dir) {
    return getFilesRecursively(dir).map(file => parseFile(file))
}


export { parseJsonInDirectories }