let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log("All Data:", netflix);
console.log("Just season info:" , netflix.season1.seasonInfo);
console.log("Specific episode name:", netflix.season1.seasonInfo.episodeInfo[3]);
console.log("Specific episode name:" , netflix.season1.seasonInfo.episodeInfo[3].episodeName)

console.log("Episode number:", netflix.season1.seasonInfo.episodeInfo[5].episode);
console.log("Episode name:", netflix.season1.seasonInfo.episodeInfo[5].episodeName);

/*
-JSON stands for JavaScript Object Notation
-The JSON is derived from Java Script Object Notation syntax, but the JSON format is text only
-JSON exists as a string which is useful when you want to fetch data from a server. It needs to be converted to a native JavaScript object if you want to access it.

Example JSON data - https://rickandmortyapi.com/api/character/

--JSONView extension will present the JSON in JS--
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam.nbaPlayers));
console.log(Object.values(spaceJam.toonSquad));