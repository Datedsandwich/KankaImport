import * as kanka from './utils/kanka.js'
import * as worldAnvil from './utils/worldanvil.js'

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function importEntities(uri, entities) {
    for (const entity of entities) {
        await sleep(2000)
        await kanka.post(uri, entity)
        console.log(`Imported ${entity.name}`)
    }
}

async function importSpecies() {
    const races = worldAnvil.getSpecies()

    await importEntities('races', races)

    console.log('Finished Importing Races')
}

async function importLocations() {
    const locations = worldAnvil.getLocations()

    await importEntities('locations', locations)

    console.log('Finished Importing Locations')
}

async function importOrganisations() {
    const organisations = worldAnvil.getOrganisations()

    await importEntities('organisations', organisations)

    console.log('Finished Importing Organisations')
}

async function importCharacters() {
    const characters = worldAnvil.getCharacters()

    await importEntities('characters', characters)

    console.log('Finished Importing Characters')
}

async function importGenericArticles() {
    const notes = worldAnvil.getGenericArticles()

    await importEntities('notes', notes)

    console.log('Finished Importing Notes')
}

async function importReports() {
    const reports = worldAnvil.getReports()

    await importEntities('journals', reports)

    console.log('Finished Importing Reports')
}

async function importDocuments() {
    const documents = worldAnvil.getDocuments()

    await importEntities('notes', documents)

    console.log('Finished Importing Documents')
}

async function importItems() {
    const items = worldAnvil.getItems()

    await importEntities('items', items)

    console.log('Finished Importing Items')
}

worldAnvil.loadEntities()