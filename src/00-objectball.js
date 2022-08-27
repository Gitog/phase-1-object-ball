function gameObject() {

    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }

            }
        },
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2
            },
            "Bismak Biyombo": {
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10
            },
            "DeSagna Diop": {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5
            },
            "Ben Gordon": {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0
            },
            "Brendan Haywood": {
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12
            }
        }
    }
    //return teamsObject;
}

// console.log(gameObject())

// function homeTeamName() {
//     let object = gameObject()
//     return object['home']['teamName']
// }

// console.log(homeTeamName())

function numPointsScored(playerName) {

    let object = gameObject();
    //const points = object`['home']['players'][${playerName}]['points']`;
    // debugger
    for (const eachKey in object) {
        const teamObj = object[eachKey]
        const playerObject = teamObj.players
        // debugger
        console.log(playerObject)
        for (const playerKey in playerObject) {
            if (playerKey === playerName) {
                //console.log(playerObject[playerKey].points)
                return playerObject[playerKey].points
            }
        }
    }
}
numPointsScored('Alan Anderson')



function shoeSize(playerName) {
    for (const eachKey in object) {
        const teamObj = object[eachKey]
        const playerObject = teamObj.players
        // debugger
        console.log(playerObject)
        for (const playerKey in playerObject) {
            if (playerKey === playerName) {
                //console.log(playerObject[playerKey].shoes)
                return playerObject[playerKey].shoe
            }
        }
    }
}

shoeSize()

function teamColors(teamName) {
    let obj = gameObject()
    for (teamKey in obj) {
        if (teamName === obj[teamKey]["teamName"]) {
            const colors = obj[teamKey]['colors']
            //  console.log(colors)
            return colors;
        }
    }
}

console.log(teamColors("Charlotte Hornets"))

function teamNames() {
    let obj = gameObject();
    const allTeamNames = []
    for (let key in obj) {
        allTeamNames.push(obj[key]['teamName'])
    }
    // console.log(allTeamNames)
    return allTeamNames;
}
//console.log(teamNames())


function playerNumbers(teamName) {
    let object = gameObject();
    const playerNo = []
    for (let key in object) {
        if (teamName === object[key]['teamName']) {
            let teamObj = object[key]['players']
            for (let pKey in teamObj) {
                playerNumbers.push(teamObj[pKey]['number'])
            }
        }
    }
    return playerNo;
}
//console.log(playerNumbers("Brooklyn Nets"))


// to-do
function playerStats(playerN) {
    let obj = gameObject()

    if (obj.home.players['playerName'] === playerN) {
        //console.log(obj.home.players['playerName'])
        return obj.home.players['playerName']
        //debugger
    } else {
        // console.log( obj.away.players['playerName'])
        return obj.away.players['playerName']
    }
}

playerStats("Charlotte Hornets")