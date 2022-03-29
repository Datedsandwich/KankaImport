import * as kanka from './utils/kanka.js'
import * as worldAnvil from './utils/worldanvil.js'

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function importSpecies() {
    const races = worldAnvil.getSpecies()

    for(const race of races) {
        await sleep(2000)
        await kanka.post('races', race)
        console.log(`Imported ${race.name}`)
    }

    console.log('Finished Importing Races')
}

importSpecies()