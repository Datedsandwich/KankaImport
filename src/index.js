import * as kanka from './kanka.js'
import * as worldAnvil from './worldanvil.js'

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
}

importSpecies()