let levelData = {};

function createLevel(num) {
    let curLevel = levelInitials[num];
    levelData = copyArray(curLevel);

    levelData.data.people = levelData.initial.people;
    //TODO override levelData.data with saved data


    levelData.home.units = [];
    levelData.home.fightCounter = 20;
    levelData.traveling = [];
    //turn unit mentions into actual units
    warMap.units.createUnit("king", true, "home", 1);
    for(let i = 0; i < curLevel.dungeons.length; i++) {
        levelData.dungeons[i].units = [];
        levelData.dungeons[i].fightCounter = 20;
        let dungeon = curLevel.dungeons[i];
        for (let property in dungeon.units) {
            if (dungeon.units.hasOwnProperty(property)) {
                warMap.units.createUnit(property, false, "dungeon_"+i, dungeon.units[property]);
            }
        }
    }
    for(let i = 0; i < curLevel.hideouts.length; i++) {
        levelData.hideouts[i].units = [];
        levelData.hideouts[i].fightCounter = 20;
        let hideout = curLevel.hideouts[i];
        if(hideout.creates) {
            levelData.hideouts[i].createCounter = hideout.creates.initialTime;
        }
        for (let property in hideout.units) {
            if (hideout.units.hasOwnProperty(property)) {
                warMap.units.createUnit(property, false, "hideout_"+i, hideout.units[property]);
            }
        }
    }
}

levelInitials = [{
    data: { //overriden if in save file
        // people: 30,
        nextLists:{},
        uniqueCleared:false,
        knowledge:0,
        knowledgeCap:0,
        rapport:0
    },
    initial: {
        people:30, //5270
        gold: 100,
        wood: 0,
        mana: 1200,
        peopleDifficulty: 1,
        rapport: 0
    },
    home: {
        coords: {x: 0, y: 100},
        units: { king: 1 }
    },
    dungeons:[
        {
            units: { goblin:10, hobgoblin:1 },
            reward: [{
                type:"mana",
                amount:600
            }],
            coords:{x:30, y:50},
        },
        {
            units: { goblin:20, hobgoblin:2 },
            reward: [{
                type:"mana",
                amount:600
            }],
            coords:{x:110, y:90},
        },
        {
            units: { goblin:10, hobgoblin:10 },
            reward: [{
                type:"mana",
                amount:1200
            }],
            coords:{x:165, y:60},
        }
    ],
    hideouts:[
        {
            units: { thug:10 },
            creates: { thug:1, initialTime: 5, period: 20 },
            reward: [{
                type:"gold",
                amount:2000
            }],
            coords:{x:70, y:20},
        },
        {
            units: { thug:30, brigand:5, bandit:2 },
            creates: { brigand:2, initialTime: 90, period: 30 },
            reward: [{
                type:"gold",
                amount:5000
            }],
            coords:{x:190, y:0},
        }
    ]
}];