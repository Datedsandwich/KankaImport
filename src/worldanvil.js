import { worldAnvilExportDir } from './variables.js';
import * as fs from 'fs'
import path from 'path'

function getJsonsInDirectory(dir) {
    return fs.readdirSync(dir).filter(file => path.extname(file) === '.json'&& !file.includes('metadata'));
}

function parseFile(dir, file) {
    const fileData = fs.readFileSync(path.join(dir, file), 'utf-8');
    return JSON.parse(fileData.toString());
}

function parseJsonInDirectory(dir) {
    const jsonsInDir = getJsonsInDirectory(dir)

    return jsonsInDir.map(file => parseFile(dir, file))
}

async function getSpecies() {
    const dir = `${worldAnvilExportDir}/Races and Cultures`

    const species = parseJsonInDirectory(dir).map(species => ({
        name: species.title,
        entry: species.content_parsed
    }))

    return species
}

export { getSpecies }