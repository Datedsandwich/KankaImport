import * as kanka from './kanka.js'

async function getCharacters() {
    return kanka.get('characters')
}

const characters = await getCharacters()

console.log(characters)