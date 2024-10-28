
const srcsetBuilder = (location, n) => {
    let srcset = []
    for(let i = 0; i<n; i++ ) {
        srcset.push(`./${location}/screenshot${i+1}-540.webp 540w, ./${location}/screenshot${i+1}-320.webp 320w, ./${location}/screenshot${i+1}-200.webp 200w`)
    }
    return srcset
}


export const srcsets = {
    uberDeliverooClone: {
        main: "./uber-deliveroo-clone/MainScreenshot.webp",
        screenshots: srcsetBuilder("uber-deliveroo-clone", 4),
    },

    electrical1: {
        main: "./electrical-1/MainScreenshot.webp",
        screenshots: ["./electrical-1/screenshot1.webp", "./electrical-1/screenshot2.webp", "./electrical-1/screenshot3.webp", "./electrical-1/screenshot4.webp" ]
    },

    electrical2: {
        main: "./electrical-2/MainScreenshot.webp",
        screenshots: ["./electrical-2/screenshot1.webp", "./electrical-2/screenshot2.webp", "./electrical-2/screenshot3.webp", "./electrical-2/screenshot4.webp" ]
    },

    electrical3: {
        main: "./electrical-3/MainScreenshot.webp",
        screenshots: ["./electrical-3/screenshot1.webp", "./electrical-3/screenshot2.webp", "./electrical-3/screenshot3.webp", "./electrical-3/screenshot4.webp" ]
    },

    electrical4: {
        main: "./electrical-4/MainScreenshot.webp",
        screenshots: ["./electrical-4/screenshot1.webp", "./electrical-4/screenshot2.webp", "./electrical-4/screenshot3.webp", "./electrical-4/screenshot4.webp" ]
    },

    blueFin: {
        main: "./Blue-Fin/MainScreenshot.webp",
        screenshots: ["./Blue-Fin/screenshot1.webp", "./Blue-Fin/screenshot2.webp", "./Blue-Fin/screenshot3.webp", "./Blue-Fin/screenshot4.webp" ]
    },
    

}

    
   