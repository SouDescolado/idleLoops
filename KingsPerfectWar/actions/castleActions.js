let castle = {
    actions:[],
    tick: function() {
        let addedWood = 0;
        addedWood += created.castle.scavenger;
        addedWood += created.castle.logger * 5;
        addedWood += created.castle.forester * 25;
        addedWood *= king.curData.aura === "wood" ? (2 + king.savedData.cha / 20) : 1;
        wood += addedWood;

        let addedGold = 0;
        addedGold += created.castle.beg;
        addedGold += created.castle.merchant * 5;
        addedGold += created.castle.tax * 25;
        addedGold *= king.curData.aura === "gold" ? (2 + king.savedData.cha / 20) : 1;
        gold += addedGold;
    },
    initial: {
        addCastleAction(action) {
            if(window.language !== "eng") {
                action.name = action["name"+window.language];
                action.desc = action["desc"+window.language];
            }

            if(!action.unlocked) {
                action.unlocked = function() { return true; }
            }
            if(!action.visible) {
                action.visible = function() { return true; }
            }

            if(!action.seconds) {
                action.seconds = 1;
            }
            action.cost.push({
                resource:"seconds",
                type:"static",
                starting:action.seconds
            });

            if(!created.castle[action.varName]) {
                created.castle[action.varName] = 0;
            }
            if(!action.buy) {
                action.buy = function() {
                    if(this.createdWith) { //is army unit
                        if(created.castle[this.createdWith]) {
                            warMap.units.createUnit(this.varName, true, "home", created.castle[this.createdWith]);
                        }
                    }
                    created.castle[this.varName]++;
                }
            }
            action.canBuy = function() {
                return gold >= this.costgold && wood >= this.costwood && mana >= this.costmana && (!this.createdWith || created.castle[this.createdWith] > 0);
            };

            castle.actions.push(action);
        },
        createCastleActions() {
            castle.initial.createEconomyActions();
            castle.initial.createArmyActions();
            castle.initial.createLabActions();
        },
        createEconomyActions() {
            castle.initial.addCastleAction({
                varName:"beg",
                name:"Hire Beggar",
                desc:"Strategically placed begging gets a steady pittance. What nice citizens you have. Gives 1 gold per tick.",
                cost: [
                    {
                        resource:"gold",
                        type:"linear",
                        starting:50,
                        growth:50
                    }
                ],
                seconds:10,
                xPos:20,
                yPos:110
            });

            castle.initial.addCastleAction({
                varName:"merchant",
                name:"Hire Merchant",
                desc:"Invest in a Merchant. They'll make it back eventually. Gives 5 gold per tick.",
                cost: [
                    {
                        resource:"gold",
                        type:"linear",
                        starting:500,
                        growth:500
                    }
                ],
                seconds:40,
                xPos:70,
                yPos:110
            });

            castle.initial.addCastleAction({
                varName:"tax",
                name:"Hire Tax Collector",
                desc:"The more you ask, the more they have! Isn't economics amazing? Gives 25 gold per tick.",
                cost: [
                    {
                        resource:"gold",
                        type:"linear",
                        starting:5000,
                        growth:5000
                    }
                ],
                seconds:160,
                xPos:120,
                yPos:110
            });

            castle.initial.addCastleAction({
                varName:"scavenger",
                name:"Scavenger's Den",
                desc:"Scavengers are weak, but know where the dead trees are to find branches that would otherwise need special tools. Gives 1 wood per tick.",
                cost: [
                    {
                        resource:"gold",
                        type:"linear",
                        starting:50,
                        growth:50
                    }
                ],
                seconds:10,
                xPos:20,
                yPos:25
            });

            castle.initial.addCastleAction({
                varName:"logger",
                name:"Logger's Hut",
                desc:"The forest is magical, and some of the trees are tougher than iron. Woodcutters can take all but the toughest trees. Gives 5 wood per tick.",
                cost: [
                    {
                        resource:"gold",
                        type:"linear",
                        starting:500,
                        growth:500
                    }
                ],
                seconds:40,
                xPos:70,
                yPos:25
            });

            castle.initial.addCastleAction({
                varName:"forester",
                name:"Forester's Cabin",
                desc:"The forester knows the best trees to cut down without hurting the forest, and has the tools to take them down. Gives 25 wood per tick.",
                cost: [
                    {
                        resource:"gold",
                        type:"linear",
                        starting:5000,
                        growth:5000
                    }
                ],
                seconds:160,
                xPos:120,
                yPos:25
            });
        },
        createArmyActions() {
            castle.initial.addCastleAction({
                varName:"barracks",
                name:"Build Barracks",
                desc:"Recruit some spearmen here to take the hits. Each barracks increases spearman equipped by 1.",
                cost: [
                    {
                        resource:"gold",
                        type:"linear",
                        starting:500,
                        growth:500
                    }
                ],
                unit:true,
                seconds:10,
                xPos:250,
                yPos:25
            });

            castle.initial.addCastleAction({
                varName:"spearman",
                name:"Equip Spearman",
                desc:"The meat of your army, they'll take damage before your other units.",
                cost: [
                    // {
                    //     resource:"wood",
                    //     type:"static",
                    //     starting:200
                    // }
                    { //debug
                        resource:"gold",
                        type:"static",
                        starting:5
                    }
                ],
                createdWith:"barracks",
                seconds:5,
                xPos:250,
                yPos:110
            });

            castle.initial.addCastleAction({
                varName:"range",
                name:"Build Archery Range",
                desc:"Train archers here to take enemies down from behind the front line. Each archery range increases archers trained by 1.",
                cost: [
                    {
                        resource:"gold",
                        type:"linear",
                        starting:1500,
                        growth:1500
                    }
                ],
                seconds:10,
                xPos:300,
                yPos:25
            });

            castle.initial.addCastleAction({
                varName:"archer",
                name:"Train Archer",
                desc:"Elite archers capable of dealing death to your enemies. Requires archery range.",
                cost: [
                    {
                        resource:"wood",
                        type:"static",
                        starting:1000
                    }
                ],
                createdWith:"range",
                seconds:10,
                xPos:300,
                yPos:110
            });

            castle.initial.addCastleAction({
                varName:"designer",
                name:"Hire Designer",
                desc:"Designers know the ins and outs of mass production. Each designer increases catapults built by 1.",
                cost: [
                    {
                        resource:"gold",
                        type:"linear",
                        starting:4500,
                        growth:4500
                    }
                ],
                seconds:10,
                xPos:350,
                yPos:25
            });

            castle.initial.addCastleAction({
                varName:"catapult",
                name:"Build Catapult",
                desc:"For when you have a lot of enemies to kill and a lot of resoures to throw at the problem. Requires designer.",
                cost: [
                    {
                        resource:"wood",
                        type:"static",
                        starting:5000
                    }
                ],
                createdWith:"designer",
                seconds:20,
                xPos:350,
                yPos:110
            });
        },
        createLabActions() {

        }
    }
};
created.castle = {};

function getCastleActionByVarName(varName) {
    let found = null;
    castle.actions.forEach(function(action) {
        if(action.varName === varName) {
            found = action;
        }
    });
    return found;
}

castle.initial.createCastleActions();