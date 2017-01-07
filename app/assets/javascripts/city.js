/* global game */
/* global Phaser */
/* global coins */
/* global wood */
/* global stone */

var currentTime = 0;
var year = 0;
var population = 100;
var happiness = 44;
var popScore = 0;
var popText;
var cityCoinsText;
var cityHappinessText;
var cityYearText;
var questStartTime = 0;
var questEndTime = 0;
var questYears = 0;
var questStartCoins = 0;
var questEndCoins = 0;
var housing = 25;
var commercial = 25;
var industrial = 25;
var education = 25;
var popHealth = 25;
var justice = 25;
var defence = 25;
var utilities = 25;
var weaponsmith = 25;
var armourer = 25;
var enchanter = 25;
var trainer = 25;
var income = 0;
var expenditure = 0;
var tax = 40;
var economyMod = 1;
var totalFunding;
var netIncome;
var previousPopulation = 100;
var previousEconomyMod = 0;
var previousIncome = 0;
var previousExpenditure = 0;
var previousNetIncome = 0;
var previousCoins = 0;

var messageText;
var residentialButton;
var industrialButton;
var commerceButton;
var educationButton;
var healthButton;
var justiceButton;
var armyButton;
var utilitiesButton;
var weaponerButton;
var armourerButton;
var magicGoodsButton;
var trainerButton;
var questButton;
var defendButton;
var castleButton;
var shop;
var defending = true;
var defenceChance = 0;

var townWoman1;
var townMan1;
var townWoman2;
var townMan2;
var warriorMan1;
var warriorWoman1;

var assistant = "first";
var assistantSprite;
var assistantSpeechBubble;
var assistantText = "";
var assistantText2 = "";
var assistantText3 = "";
var assistantText4 = "";
var assistantText5 = "";
var assistantText6 = "";
var tutorial = true;
var debtWarnYear = 0;

var xpReduction;
var xpReduction1;
var xpReduction2;
var xpReduction3;
var startingPopIncrease = 0;
var startingPopIncrease1;
var startingPopIncrease2;
var startingPopIncrease3;
var startingGoldIncrease = 0;
var startingGoldIncrease1;
var startingGoldIncrease2;
var startingGoldIncrease3;
var artisanIncrease;
var artisanIncrease1;
var artisanIncrease2;
var artisanIncrease3;
var deptEffectIncrease = 0;
var deptEffectIncrease1;
var deptEffectIncrease2;
var deptEffectIncrease3;
var marriageOptions = false;

var beamUnlockShown = false;
var manaRefillUnlockShown = false;

var questHappinessModifier = 0;
var questsUndertaken = 0;

var marriageOptionsPromptButton;
var marriageOptionsPromptText;
var marriageOptionsBackground;
var marriageOptionsText1;
var marriageOptionsText2;
var marriageOptionsText3;
var marriageOptionsDisplayButton;
var marriageOptionsDisplayText;
var marriageOptionsHideButton;
var marriageOptionsHideText;

var cityState = {
    create: function() {
        game.add.sprite(0, 0, 'stonepaving');
        game.add.sprite(16, 80, 'shopBorder');
        game.add.sprite(176, 80, 'shopBorder');
        game.add.sprite(336, 80, 'shopBorder');
        game.add.sprite(496, 80, 'shopBorder');
        game.add.sprite(656, 80, 'shopBorder');
        game.add.sprite(16, 250, 'shopBorder');
        game.add.sprite(656, 250, 'shopBorder');
        game.add.sprite(16, 415, 'shopBorder');
        game.add.sprite(176, 415, 'shopBorder');
        game.add.sprite(336, 415, 'shopBorder');
        game.add.sprite(496, 415, 'shopBorder');
        game.add.sprite(656, 415, 'shopBorder');
        
        residentialButton = game.add.button(32, 40, 'HousingDpt', this.resOptions, this);
        game.add.sprite(124, 148, 'barrel');
        commerceButton = game.add.button(192, 40, 'CommerceDpt', this.comOptions, this);
        game.add.sprite(285, 150, 'chestWooden');
        industrialButton = game.add.button(352, 40, 'IndustryDpt', this.indOptions, this);
        educationButton = game.add.button(512, 40, 'EducationDpt', this.eduOptions, this);
        healthButton = game.add.button(672, 40, 'HealthDpt', this.healthOptions, this);
        game.add.sprite(764, 148, 'barrel');

        townWoman1 = game.add.sprite(850, 160, 'townWoman');
        game.physics.arcade.enable(townWoman1);
        townWoman1.animations.add('left', [9, 10, 11], 10, true);
        
        townWoman2 = game.add.sprite(157, 700, 'townWoman');
        game.physics.arcade.enable(townWoman2);
        townWoman2.animations.add('up', [0, 1, 2], 10, true);
        
        townMan1 = game.add.sprite(-50, 170, 'townMan');
        game.physics.arcade.enable(townMan1);
        townMan1.animations.add('right', [3, 4, 5], 10, true);
        
        townMan2 = game.add.sprite(641, -50, 'townMan');
        game.physics.arcade.enable(townMan2);
        townMan2.animations.add('down', [6, 7, 8], 10, true);
        
        justiceButton = game.add.button(32, 210, 'JusticeDpt', this.justiceOptions, this);
        game.add.sprite(37, 318, 'barrel');
        castleButton = game.add.button(290, 180, 'castle', this.castleOptions, this);
        armyButton = game.add.button(672, 210, 'DefenceDpt', this.armyOptions, this);

        warriorMan1 = game.add.sprite(-50, 348, 'warriorMan');
        game.physics.arcade.enable(warriorMan1);
        warriorMan1.animations.add('right', [3, 4, 5], 10, true);
        
        warriorWoman1 = game.add.sprite(-56, 369, 'warriorWoman');
        game.physics.arcade.enable(warriorWoman1);
        warriorWoman1.animations.add('right', [3, 4, 5], 10, true);
        warriorWoman1.speechBubble = warriorWoman1.addChild(game.add.sprite(-195, -115, 'speechBubble'));
        warriorWoman1.speech1 = warriorWoman1.addChild(game.add.bitmapText(-145, -106, 'font', '    Testing...', 15));
        warriorWoman1.speech2 = warriorWoman1.addChild(game.add.bitmapText(-175, -89, 'font', '           One...', 15));
        warriorWoman1.speech3 = warriorWoman1.addChild(game.add.bitmapText(-187, -72, 'font', '              Two...', 15));
        warriorWoman1.speech4 = warriorWoman1.addChild(game.add.bitmapText(-187, -55, 'font', '              Three...', 15));
        warriorWoman1.speech5 = warriorWoman1.addChild(game.add.bitmapText(-175, -38, 'font', '           Err...', 15));
        warriorWoman1.speech6 = warriorWoman1.addChild(game.add.bitmapText(-145, -21, 'font', '    Hello?', 15));
        warriorWoman1.speech1.tint = 000000;
        warriorWoman1.speech2.tint = 000000;
        warriorWoman1.speech3.tint = 000000;
        warriorWoman1.speech4.tint = 000000;
        warriorWoman1.speech5.tint = 000000;
        warriorWoman1.speech6.tint = 000000;
        
        utilitiesButton = game.add.button(32, 375, 'UtilitiesDpt', this.utilOptions, this);
        weaponerButton = game.add.button(192, 375, 'weaponsmith', this.weaponOptions, this);
        game.add.sprite(197, 485, 'chestWooden');
        armourerButton = game.add.button(352, 375, 'armourer', this.armourOptions, this);
        magicGoodsButton = game.add.button(512, 375, 'enchanter', this.magicGoodsOptions, this);
        trainerButton = game.add.button(672, 375, 'trainer', this.trainerOptions, this);
        if (assistant!="") {
            
        }
        else if (defending == false) {
            console.log(defending);
            questButton = game.add.button(115, 540, 'questButton', this.quest, this);
        }
        else {
            defendButton = game.add.button(0, 540, 'defendButton', this.defend, this);
        }
        popText = game.add.bitmapText(10, 10, 'font', 'Population: ' + population, 26);
        cityCoinsText = game.add.bitmapText(260, 10, 'font', 'Coins: ' + coins, 26);
        cityHappinessText = game.add.bitmapText(480, 10, 'font', 'Happiness: ' + happiness, 26);
        cityYearText = game.add.bitmapText(700, 10, 'font', 'Year: ' + year, 26);
        messageText = game.add.bitmapText(250, 370, 'font', '', 26);
        
        assistantSpeechBubble = game.add.button(-200, 469, 'speechBubble', this.assistantChange, this); 
        assistantText = game.add.bitmapText(200, 477, 'font', '', 15);
        assistantText2 = game.add.bitmapText(170, 494, 'font', '', 15);
        assistantText3 = game.add.bitmapText(158, 509, 'font', '', 15);
        assistantText4 = game.add.bitmapText(158, 524, 'font', '', 15);
        assistantText5 = game.add.bitmapText(170, 539, 'font', '', 15);
        assistantText6 = game.add.bitmapText(190, 554, 'font', '', 15);
        assistantText.tint = 000000;
        assistantText2.tint = 000000;
        assistantText3.tint = 000000;
        assistantText4.tint = 000000;
        assistantText5.tint = 000000;
        assistantText6.tint = 000000;
        this.warriorWomanAdvice();
    },
    update: function() {
        this.timeCheck();
        if (coins<=0 && year>debtWarnYear+1) {
            assistant = "debt";
        }
        this.assistantShow();
        townWoman1.body.velocity.x = -40;
        townWoman1.animations.play('left');
        if (townWoman1.x < -50) {
            townWoman1.x = 900;
        }
        townWoman2.body.velocity.y = -50;
        townWoman2.animations.play('up');
        if (townWoman2.y < -50) {
            townWoman2.y = 700;
        }
        townMan1.body.velocity.x = 50;
        townMan1.animations.play('right');
        if (townMan1.x > 850) {
            townMan1.x = -50;
        }
        townMan2.body.velocity.y = 50;
        townMan2.animations.play('down');
        if (townMan2.y > 700) {
            townMan2.y = -50;
        }
        warriorWoman1.body.velocity.x = 55;
        warriorWoman1.animations.play('right');
        if (warriorWoman1.x > 850) {
            warriorWoman1.x = -50;
        }
        warriorMan1.body.velocity.x = 55;
        warriorMan1.animations.play('right');
        if (warriorMan1.x > 850) {
            warriorMan1.x = -50;
        }
        if ((housing+commercial+industrial+education+popHealth+justice+defence+utilities+weaponsmith+armourer+enchanter+trainer)/12>95 && marriageOptions==false) {
            this.marriageOptionsPrompter();
            marriageOptions = true;
        }
    },
    timeCheck: function() {
        if (questStartTime<questEndTime) {
            questYears = Math.round((questEndTime - questStartTime)/150000);
            questStartTime = 0;
            questEndTime = 0;
        }
        while (game.time.now > currentTime+30000 || questYears>0) {
            year++;
          console.log("Year: " + year);
          housing += (housingFunding-housing)/12;
          console.log("housing: " + housing); 
          commercial += (commercialFunding-commercial)/12;
          console.log("commercial: " + commercial);    
          industrial += (industrialFunding-industrial)/12;
          console.log("industrial: " + industrial);   
          education += (educationFunding-education)/12;
          console.log("education: " + education); 
          popHealth += (healthFunding-popHealth)/12;
          console.log("Health: " + popHealth);
          justice += (justiceFunding-justice)/12;
          console.log("justice: " + justice);
          defence += (defenceFunding-defence)/12;
          console.log("defence: " + defence);   
          utilities += (utilitiesFunding-utilities)/12;
          console.log("utilities: " + utilities);
          weaponsmith += (weaponsmithFunding-weaponsmith)/12;
          console.log("weaponsmith: " + weaponsmith);    
          armourer += (armourerFunding-armourer)/12;
          console.log("armourer: " + armourer);   
          enchanter += (enchanterFunding-enchanter)/12;
          console.log("enchanter: " + enchanter); 
          trainer += (trainerFunding-trainer)/12;
          console.log("trainer: " + trainer);  
          previousPopulation = population;
          population += population*((housing-33)/4000);
          population += population*((education-33)/9000);
          population += population*((popHealth-33)/2000);
          population += population*((justice-33)/13000);
          population += population*((defence-33)/14000);
          population += population*((utilities-33)/9000);
          population += population*((trainer-33)/14300);
          population -= population*((tax-30)/2000);
          if (year<=30) {
            population += 1 + year/10;
          }
          else {
            population += 9 - year/6;
          }
          if (population>5000000) {
             coins += population-5000000;
             population = 5000000;
          }
          else if (population>0) {
            population = Math.round(population);
          }
          else {
            population = 0;
          }
          console.log("Population: " + population);
          questHappinessModifier = Math.floor(stage/5) + questsUndertaken;
          happiness = Math.round(20 + questHappinessModifier + (4*(housing/15 + commercial/100 + industrial/100 + education/100 + popHealth/15 + justice/20 + defence/100 + utilities/80)));
          if (happiness>100) {
              happiness = 100;
          }
          console.log("Happiness: " + happiness);
          previousEconomyMod = economyMod;
          economyMod = 1;
          economyMod += ((commercial-34)/950);
          economyMod += ((industrial-34)/950);
          economyMod += ((education-34)/950);
          economyMod += ((justice-34)/6000);
          economyMod += ((weaponsmith-34)/5000);
          economyMod += ((armourer-34)/5000);
          economyMod += ((enchanter-34)/5000);
          economyMod += ((trainer-34)/6000);
          economyMod += ((utilities-33)/9000);
          economyMod -= ((tax-30)/3000);
          console.log("Productivity Modifier: " + economyMod);
          previousIncome = income;
          income = (population*economyMod*(1.17*tax))+105;
          console.log("Income: " + income);
          averageFunding = Math.round((housingFunding + commercialFunding + industrialFunding + educationFunding + healthFunding
                         + justiceFunding + defenceFunding + utilitiesFunding + weaponsmithFunding + armourerFunding
                          + enchanterFunding + trainerFunding)/12);
          totalFunding = housingFunding + commercialFunding+ industrialFunding + educationFunding + healthFunding
                         + justiceFunding + defenceFunding + utilitiesFunding + weaponsmithFunding + armourerFunding
                          + enchanterFunding + trainerFunding;
          previousExpenditure = expenditure;
          expenditure = totalFunding*(5 + year/32) + (population*(totalFunding/20));
          console.log("Expenditure: " + expenditure);
          previousNetIncome = netIncome;
          netIncome = income - expenditure;
          console.log("Net Income: " + netIncome);
          previousCoins = coins;
          coins = Math.round(coins + income - expenditure);
          console.log("Balance: " + coins);
            currentTime = game.time.now;
            if (questYears>0) {
                questYears --;
            }
            if (Math.random()>0.9-(defenceChance/10)) {
                defending = true;
                defenceChance = 0;
                game.world.removeAll();
                this.create();
            }
        }
        popText.text = 'Population: ' + population;
        if (coins>=1000000) {
            cityCoinsText.text = 'Coins: ' + (Math.round(coins/1000))/1000 + "M";
        }
        else {
            cityCoinsText.text = 'Coins: ' + coins;
        }
        cityHappinessText.text = 'Happiness: ' + happiness;
        cityYearText.text = "Year: " + year;
        this.popScoreCalc();
        this.save();
    },
    popScoreCalc: function() {
        var x = 1000;
        var popHolder = population;
        while (popHolder>x) {
            popScore ++;
            popHolder -= x;
            x += 1000;
        }
        if (popScore > 100) {
            popScore = 100;
        }
    },
    castleOptions: function() {
        game.world.removeAll();
        shop = "castle";
        game.state.start('shop');
    },
    resOptions: function() {
        if (coins>=0) {
            game.world.removeAll();
            shop = "housing";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    comOptions: function() {
        if (coins>=0) {
            game.world.removeAll();
            shop = "commercial";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    indOptions: function() {
        if (coins>=0) {
            game.world.removeAll();
            shop = "industrial";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    eduOptions: function() {
        if (coins>=0 || educationFunding<=40) {
            game.world.removeAll();
            shop = "education";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    healthOptions: function() {
        if (coins>=0 || healthFunding<=40) {
            game.world.removeAll();
            shop = "health";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    justiceOptions: function() {
        if (coins>=0) {
            game.world.removeAll();
            shop = "justice";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    armyOptions: function() {
        if (coins>=0) {
            game.world.removeAll();
            shop = "defence";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    utilOptions: function() {
        if (coins>=0) {
            game.world.removeAll();
            shop = "utilities";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    weaponOptions: function() {
        if (coins>=0) {
            game.world.removeAll();
            shop = "weaponsmith";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    armourOptions: function() {
        if (coins>=0) {
            game.world.removeAll();
            shop = "armourer";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    magicGoodsOptions: function() {
        if (coins>=0) {
            game.world.removeAll();
            shop = "enchanter";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    trainerOptions: function() {
        if (coins>=0) {
            game.world.removeAll();
            shop = "trainer";
            game.state.start('shop');
        }
        else {
            this.shopClosed();
        }
    },
    quest: function() {
        game.world.removeAll();
        stage = Math.floor(stage/5)*5;
        if (stage<1) {
            stage = 1;
        }
        baddieTotal = stage + (0+6);
        baddieCount = stage + (0+6);
        baddieCreated = 0;
        chestCreated = 0;
        flameCount = 0;
        evilwizardCount = 0;
        zombieBirdCount = 0;
        swampCreatureCount = 0;
        starTotal = ((stage-1)*0.75) + (0+6);
        health = maxHealth;
        mana = maxMana;
        array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
             23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
             43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
             63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
             83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
             102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
             118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130];
        sceneryCount = 0;
        if (beamUnlockShown==true) {
            beamWeapon = true;
        }
        if (manaRefillUnlockShown==true) {
            manaRefillAvailable = true;
        }
        defenceChance ++;
        questsUndertaken ++;
        questStartTime = game.time.now;
        questStartCoins = coins;
        game.state.start('play');
    },
    defend: function() {
        game.world.removeAll();
        health = maxHealth;
        mana = maxMana;
        attackerCount = attackStrength;
        defenceStrength = Math.round(defence/4);
        defenderCount = Math.round(defence/4);
        game.state.start('defence');
    },
    collectSFX: function() {
        var itemCollect = game.add.audio('collect');
        itemCollect.play();
    },
    assistantShow: function() {
        switch(assistant) {
            case "first":
                assistantSprite = game.add.sprite(350, 469, 'assistant');
                assistantSpeechBubble.x = 150;
                assistantText.text = "Your Majesty!";
                assistantText2.text = "   This year's census is ";
                assistantText3.text = "very worrying. Your people's";
                assistantText4.text = "   health and education is";
                assistantText5.text = "still in decline. We must";
                assistantText6.text = "   do something.";
                break;
            case "second":
                assistantSprite = game.add.sprite(350, 469, 'assistant');
                assistantSpeechBubble.x = 150;
                assistantText.text = "  We should";
                assistantText2.text = "  undertake to increase";
                assistantText3.text = "      the budget of the";
                assistantText4.text = "   Departments of Health";
                assistantText5.text = "      and Education.";
                assistantText6.text = "";
                break;
            case "defend":
                if (educationFunding>40 && healthFunding>40) {
                    assistantSprite = game.add.sprite(350, 469, 'assistant');
                    assistantSpeechBubble.x = 150;
                    assistantText.text = " Your Majesty!";
                    assistantText2.text = "     Our city is under";
                    assistantText3.text = "    attack. You must lead";
                    assistantText4.text = "      the Army in our";
                    assistantText5.text = "         Defence.";
                    assistantText6.text = "";
                }
                break;
            case "debt":
                assistantSprite = game.add.sprite(350, 469, 'assistant');
                assistantSpeechBubble.x = 150;
                assistantText.text = " Our funds";
                assistantText2.text = " are gone. Our enemies";
                assistantText3.text = " see our weakness and we";
                assistantText4.text = " cannot pay our troops. You";
                assistantText5.text = "  must undertake a quest";
                assistantText6.text = " to raise funds.";
                break;
            case "marriage":
                assistantSprite = game.add.sprite(350, 469, 'assistant');
                assistantSpeechBubble.x = 150;
                assistantText.text = " Your Majesty!";
                assistantText2.text = " Your people are happy.";
                assistantText3.text = " Your borders are secure.";
                assistantText4.text = " Your neighbours are lining";
                assistantText5.text = " up to offer alliances on";
                assistantText6.text = " generous terms.";
                break;
        }
        
    },
    assistantChange: function() {
        switch(assistant) {
            case "first":
                assistant = "second";
                this.assistantShow();
                break;
            case "second":
                assistant = "defend";
                assistantSprite.kill();
                assistantSpeechBubble.kill();
                assistantText.text = "";
                assistantText2.text = "";
                assistantText3.text = "";
                assistantText4.text = "";
                assistantText5.text = "";
                assistantText6.text = "";
                this.assistantShow();
                break;
            case "defend":
                assistant = "";
                assistantSprite.kill();
                assistantSpeechBubble.kill();
                assistantText.text = "";
                assistantText2.text = "";
                assistantText3.text = "";
                assistantText4.text = "";
                assistantText5.text = "";
                assistantText6.text = "";
                this.create();
                break;
            case "debt":
                debtWarnYear = year+3;
                assistant = "";
                assistantSprite.kill();
                assistantSpeechBubble.kill();
                assistantText.text = "";
                assistantText2.text = "";
                assistantText3.text = "";
                assistantText4.text = "";
                assistantText5.text = "";
                assistantText6.text = "";
                this.create();
                break;
            case "marriage":
                assistant = "";
                assistantSprite.kill();
                assistantSpeechBubble.kill();
                assistantText.text = "";
                assistantText2.text = "";
                assistantText3.text = "";
                assistantText4.text = "";
                assistantText5.text = "";
                assistantText6.text = "";
                this.create();
                break;
        }
    },
    save: function() {
        var saveObject = {};
        saveObject.time = game.time.now;
        saveObject.playerLevel = playerLevel;
        saveObject.bulletSpacing = bulletSpacing;
        saveObject.invulnerableSpacing = invulnerableSpacing;
        saveObject.shotSpeed = shotSpeed;
        saveObject.manaRegenHolder = manaRegenHolder;
        saveObject.bossZombieKilled = bossZombieKilled;
        saveObject.coins = coins;
        saveObject.stage = stage;
        saveObject.bestStage = bestStage;
        saveObject.xp = xp;
        saveObject.nextLevelXp = nextLevelXp;
        saveObject.maxHealth = maxHealth;
        saveObject.maxMana = maxMana;
        saveObject.shotPower = shotPower;
        saveObject.knockback = knockback;
        saveObject.runSpeed = runSpeed;
        saveObject.currentTime = currentTime;
        saveObject.year = year;
        saveObject.population = population;
        saveObject.happiness = happiness;
        saveObject.popScore = popScore;
        saveObject.housing = housing;
        saveObject.commercial = commercial;
        saveObject.industrial = industrial;
        saveObject.education = education;
        saveObject.popHealth = popHealth;
        saveObject.justice = justice;
        saveObject.defence = defence;
        saveObject.utilities = utilities;
        saveObject.weaponsmith = weaponsmith;
        saveObject.armourer = armourer;
        saveObject.enchanter = enchanter;
        saveObject.trainer = trainer;
        saveObject.tax = tax;
        saveObject.income = income;
        saveObject.expenditure = expenditure;
        saveObject.totalFunding = totalFunding;
        saveObject.netIncome = netIncome;
        saveObject.defending = defending;
        saveObject.defenceChance = defenceChance;
        saveObject.assistant = assistant;
        saveObject.tutorial = tutorial;
        saveObject.housingFunding = housingFunding;
        saveObject.commercialFunding = commercialFunding;
        saveObject.industrialFunding = industrialFunding;
        saveObject.educationFunding = educationFunding;
        saveObject.healthFunding = healthFunding;
        saveObject.justiceFunding = justiceFunding;
        saveObject.defenceFunding = defenceFunding;
        saveObject.utilitiesFunding = utilitiesFunding;
        saveObject.weaponsmithFunding = weaponsmithFunding;
        saveObject.armourerFunding = armourerFunding;
        saveObject.enchanterFunding = enchanterFunding;
        saveObject.trainerFunding = trainerFunding;
        saveObject.averageFunding = averageFunding;
        saveObject.weaponsmithDropReward = weaponsmithDropReward;
        saveObject.weaponsmithTimer = weaponsmithTimer;
        saveObject.wandTimer = wandTimer;
        saveObject.wandShotPower = wandShotPower;
        saveObject.wandShotSpeed = wandShotSpeed;
        saveObject.wandBulletSpacing = wandBulletSpacing;
        saveObject.shieldTimer = shieldTimer;
        saveObject.shieldKnockback = shieldKnockback;
        saveObject.shieldMaxHealth = shieldMaxHealth;
        saveObject.shieldInvulnerableSpacing = shieldInvulnerableSpacing;
        saveObject.armourerDropReward = armourerDropReward;
        saveObject.armourerTimer = armourerTimer;
        saveObject.armourTimer = armourTimer;
        saveObject.armourMaxHealth = armourMaxHealth;
        saveObject.armourManaRegenInterval = armourManaRegenInterval;
        saveObject.armourInvulnerableSpacing = armourInvulnerableSpacing;
        saveObject.hatTimer = hatTimer;
        saveObject.hatMaxHealth = hatMaxHealth;
        saveObject.hatManaRegenInterval = hatManaRegenInterval;
        saveObject.hatMaxMana = hatMaxMana;
        saveObject.bootTimer = bootTimer;
        saveObject.bootRunSpeed = bootRunSpeed;
        saveObject.bootManaRegenInterval = bootManaRegenInterval;
        saveObject.bootInvulnerableSpacing = bootInvulnerableSpacing;
        saveObject.enchanterDropReward = enchanterDropReward;
        saveObject.enchanterTimer = enchanterTimer;
        saveObject.ringTimer = ringTimer;
        saveObject.ringShotPower = ringShotPower;
        saveObject.ringMaxMana = ringMaxMana;
        saveObject.ringKnockback = ringKnockback;
        saveObject.amuletTimer = amuletTimer;
        saveObject.amuletRunSpeed = amuletRunSpeed;
        saveObject.amuletShotSpeed = amuletShotSpeed;
        saveObject.amuletBulletSpacing = amuletBulletSpacing;
        saveObject.trainerDropReward = trainerDropReward;
        saveObject.trainerTimer = trainerTimer;
        saveObject.skillTimer = skillTimer;
        saveObject.skillShotPower = skillShotPower;
        saveObject.skillMaxMana = skillMaxMana;
        saveObject.skillKnockback = skillKnockback;
        saveObject.enduranceTimer = enduranceTimer;
        saveObject.enduranceRunSpeed = enduranceRunSpeed;
        saveObject.enduranceShotSpeed = enduranceShotSpeed;
        saveObject.enduranceBulletSpacing = enduranceBulletSpacing;
        saveObject.attackStrength = attackStrength;
        saveObject.tutorialDefence = tutorialDefence;
        saveObject.weaponsmithUpgradeCost = weaponsmithUpgradeCost;
        saveObject.armourerUpgradeCost = armourerUpgradeCost;
        saveObject.enchanterUpgradeCost = enchanterUpgradeCost;
        saveObject.trainerUpgradeCost = trainerUpgradeCost;
        saveObject.previousPopulation = previousPopulation;
        saveObject.previousEconomyMod = previousEconomyMod;
        saveObject.previousIncome = previousIncome;
        saveObject.previousExpenditure = previousExpenditure;
        saveObject.previousNetIncome = previousNetIncome;
        saveObject.previousCoins = previousCoins;
        saveObject.startingGoldIncrease = startingGoldIncrease;
        saveObject.startingPopIncrease = startingPopIncrease;
        saveObject.deptEffectIncrease = deptEffectIncrease;
        saveObject.beamUnlockShown = beamUnlockShown;
        saveObject.manaRefillUnlockShown = manaRefillUnlockShown;
        saveObject.weaponsmithAdTimer = weaponsmithAdTimer;
        saveObject.armourerAdTimer = armourerAdTimer;
        saveObject.enchanterAdTimer = enchanterAdTimer;
        saveObject.trainerAdTimer = trainerAdTimer;
        localStorage.setItem("save", JSON.stringify(saveObject));
    },
    restart: function() {
        bossZombieKilled = false;
        coins = 1000 + startingGoldIncrease;
        stage = 1;
        bestStage = 0;
        year = 0;
        population = 100 + startingPopIncrease;
        happiness = 44;
        popScore = 0;
        housing = 25 + deptEffectIncrease/10;
        commercial = 25 + deptEffectIncrease/10;
        industrial = 25 + deptEffectIncrease/10;
        education = 25 + deptEffectIncrease/10;
        popHealth = 25 + deptEffectIncrease/10;
        justice = 25 + deptEffectIncrease/10;
        defence = 25 + deptEffectIncrease/10;
        utilities = 25 + deptEffectIncrease/10;
        weaponsmith = 25 + deptEffectIncrease/10;
        armourer = 25 + deptEffectIncrease/10;
        enchanter = 25 + deptEffectIncrease/10;
        trainer = 25 + deptEffectIncrease/10;
        tax = 40;
        income = 0;
        expenditure = 0;
        defending = true;
        defenceChance = 0;
        housingFunding = 40;
        commercialFunding = 40;
        industrialFunding = 40;
        educationFunding = 40;
        healthFunding = 40;
        justiceFunding = 40;
        defenceFunding = 40;
        utilitiesFunding = 40;
        weaponsmithFunding = 40;
        armourerFunding = 40;
        enchanterFunding = 40;
        trainerFunding = 40;
        averageFunding = 40;
        attackStrength = 8;
        weaponsmithUpgradeCost = 200;
        armourerUpgradeCost = 200;
        enchanterUpgradeCost = 200;
        trainerUpgradeCost = 200;
        questHappinessModifier = 0;
        questsUndertaken = 0;
        nextLevelXp = Math.floor(nextLevelXp*(1-(xpReduction/100)));
        weaponsmithDropReward += artisanIncrease;
        armourerDropReward += artisanIncrease;
        enchanterDropReward += artisanIncrease;
        trainerDropReward += artisanIncrease;
        marriageOptions = false;
        this.create();
    },
    marriageOptionsPrompter: function() {
        assistant = "marriage";
        marriageOptionsPromptButton = game.add.button(10, 50, 'blankButton', this.marriageOptionsChoose, this);
        marriageOptionsPromptText = game.add.bitmapText(20, 75, 'font', 'View Alliance Offers', 16);
    },
    marriageOptionsChoose: function() {
        marriageOptionsBackground = game.add.sprite(96, 150, 'scrollStrip');
        marriageOptionsText1 = game.add.bitmapText(205, 160, 'font', 'Choose an Alliance?', 24);
        marriageOptionsText2 = game.add.bitmapText(110, 190, 'font', 'Your city, gold and stage progress will be reset,', 18);
        marriageOptionsText3 = game.add.bitmapText(110, 190, 'font', '    but you will be rewarded very generously.', 18);
        marriageOptionsDisplayButton = game.add.button(190, 250, 'blankButton', this.marriageOptions, this);
        marriageOptionsDisplayText = game.add.bitmapText(220, 275, 'font', 'Yes', 16);
        marriageOptionsHideButton = game.add.button(410, 250, 'blankButton', this.marriageOptionsHide, this);
        marriageOptionsHideText = game.add.bitmapText(440, 275, 'font', 'No, not yet', 16);
    },
    marriageOptionsHide: function() {
        marriageOptionsBackground.kill();
        marriageOptionsText1.text = '';
        marriageOptionsText2.text = '';
        marriageOptionsText3.text = '';
        marriageOptionsDisplayButton.kill();
        marriageOptionsDisplayText.text = '';
        marriageOptionsHideButton.kill();
        marriageOptionsHideText.text = '';
    },
    marriageOptions: function() {
        this.marriageOptionsHide();
        var names = ["Elsbeth", "Anastasia", "Matthe", "Susan", "Bob", "Esmerelda", "Leia", "Victoria", "Alexandra", "Emmeline", "Christabel", "Buttercup", "Cassandra", "Correen"];
        var places = ["Dunnovia", "Somethingia", "Madeupistan", "Nextdoorbutone", "Farfaraway", "The Silly Isles", "Belgium"];
        
        game.add.button(48, 150, 'ui_213x255', this.choiceOne, this);
        var name1 =  names[Math.floor(Math.random()*13.99)];
        game.add.bitmapText(102, 162, 'font', "Princess " + name1, 14);
        var place1 =  places[Math.floor(Math.random()*6.99)];
        game.add.bitmapText(102, 180, 'font', "Of " + place1, 14);
        var princess1 = game.add.sprite(125, 200, 'princesses');
        princess1.frame = Math.floor(Math.random()*23.99);
        xpReduction1 = Math.round(Math.random()*40)+10;
        startingPopIncrease1 = Math.floor(Math.random()*6)-3;
        startingGoldIncrease1 = Math.round(Math.random()*150)-50;
        artisanIncrease1 = Math.floor(Math.random()*3)-1;
        deptEffectIncrease1 = Math.round(Math.random()*10)-5;
        if (startingPopIncrease1<0) {
            startingPopIncrease1 = 0;
        }
        if (startingGoldIncrease1<0) {
            startingGoldIncrease1 = 0;
        }
        if (artisanIncrease1<0) {
            artisanIncrease1 = 0;
        }
        if (deptEffectIncrease1<0) {
            deptEffectIncrease1 = 0;
        }
        game.add.bitmapText(110, 280, 'font', "Alliance Dowry: ", 14);
        game.add.bitmapText(60, 300, 'font', "Level Up XP Reduction: " + xpReduction1 + "%", 14);
        game.add.bitmapText(60, 315, 'font', "Starting Population: + " + startingPopIncrease1, 14);
        game.add.bitmapText(60, 330, 'font', "Starting Gold: + " + startingGoldIncrease1, 14);
        game.add.bitmapText(60, 345, 'font', "Artisan Effectiveness: + " + artisanIncrease1, 14);
        game.add.bitmapText(60, 360, 'font', "Starting Govt Dept Level: + " + deptEffectIncrease1, 14);
        
        game.add.button(309, 150, 'ui_213x255', this.choiceTwo, this);
        var name2 =  names[Math.floor(Math.random()*13.99)];
        game.add.bitmapText(363, 162, 'font', "Princess " + name2, 14);
        var place2 =  places[Math.floor(Math.random()*6.99)];
        game.add.bitmapText(363, 180, 'font', "Of " + place2, 14);
        var princess2 = game.add.sprite(386, 200, 'princesses');
        princess2.frame = Math.floor(Math.random()*23.99);
        xpReduction2 = Math.round(Math.random()*40)+10;
        startingPopIncrease2 = Math.floor(Math.random()*6)-3;
        startingGoldIncrease2 = Math.round(Math.random()*300)-100;
        artisanIncrease2 = Math.floor(Math.random()*3)-1;
        deptEffectIncrease2 = Math.round(Math.random()*10)-5;
        if (startingPopIncrease2<0) {
            startingPopIncrease2 = 0;
        }
        if (startingGoldIncrease2<0) {
            startingGoldIncrease2 = 0;
        }
        if (artisanIncrease2<0) {
            artisanIncrease2 = 0;
        }
        if (deptEffectIncrease2<0) {
            deptEffectIncrease2 = 0;
        }
        game.add.bitmapText(371, 280, 'font', "Alliance Dowry: ", 14);
        game.add.bitmapText(321, 300, 'font', "Level Up XP Reduction: " + xpReduction2 + "%", 14);
        game.add.bitmapText(321, 315, 'font', "Starting Population: + " + startingPopIncrease2, 14);
        game.add.bitmapText(321, 330, 'font', "Starting Gold: + " + startingGoldIncrease2, 14);
        game.add.bitmapText(321, 345, 'font', "Artisan Effectiveness: + " + artisanIncrease2, 14);
        game.add.bitmapText(321, 360, 'font', "Starting Govt Dept Level: + " + deptEffectIncrease2, 14);
        
        game.add.button(570, 150, 'ui_213x255', this.choiceThree, this);
        var name3 =  names[Math.floor(Math.random()*13.99)];
        game.add.bitmapText(624, 162, 'font', "Princess " + name3, 14);
        var place3 =  places[Math.floor(Math.random()*6.99)];
        game.add.bitmapText(624, 180, 'font', "Of " + place3, 14);
        var princess3 = game.add.sprite(647, 200, 'princesses');
        princess3.frame = Math.floor(Math.random()*23.99);
        xpReduction3 = Math.round(Math.random()*40)+10;
        startingPopIncrease3 = Math.floor(Math.random()*6)-3;
        startingGoldIncrease3 = Math.round(Math.random()*150)-50;
        artisanIncrease3 = Math.floor(Math.random()*3)-1;
        deptEffectIncrease3 = Math.round(Math.random()*10)-5;
        if (startingPopIncrease3<0) {
            startingPopIncrease3 = 0;
        }
        if (startingGoldIncrease3<0) {
            startingGoldIncrease3 = 0;
        }
        if (artisanIncrease3<0) {
            artisanIncrease3 = 0;
        }
        if (deptEffectIncrease3<0) {
            deptEffectIncrease3 = 0;
        }
        game.add.bitmapText(632, 280, 'font', "Alliance Dowry: ", 14);
        game.add.bitmapText(582, 300, 'font', "Level Up XP Reduction: " + xpReduction3 + "%", 14);
        game.add.bitmapText(582, 315, 'font', "Starting Population: + " + startingPopIncrease3, 14);
        game.add.bitmapText(582, 330, 'font', "Starting Gold: + " + startingGoldIncrease3, 14);
        game.add.bitmapText(582, 345, 'font', "Artisan Effectiveness: + " + artisanIncrease3, 14);
        game.add.bitmapText(582, 360, 'font', "Starting Govt Dept Level: + " + deptEffectIncrease3, 14);
    },
    choiceOne: function() {
        xpReduction = xpReduction1;
        startingPopIncrease += startingPopIncrease1;
        startingGoldIncrease += startingGoldIncrease1;
        artisanIncrease = artisanIncrease1;
        deptEffectIncrease += deptEffectIncrease1;
        this.restart();
    },
    choiceTwo: function() {
        xpReduction = xpReduction2;
        startingPopIncrease += startingPopIncrease2;
        startingGoldIncrease += startingGoldIncrease2;
        artisanIncrease = artisanIncrease2;
        deptEffectIncrease += deptEffectIncrease2;
        this.restart();
    },
    choiceThree: function() {
        xpReduction = xpReduction3;
        startingPopIncrease += startingPopIncrease3;
        startingGoldIncrease += startingGoldIncrease3;
        artisanIncrease = artisanIncrease3;
        deptEffectIncrease += deptEffectIncrease3;
        this.restart();
    },
    warriorWomanAdvice: function() {
        var advice = Math.floor(Math.random()*7.99);
        switch(advice) {
            case 0:
                warriorWoman1.speech1.text = "   Opening";
                warriorWoman1.speech2.text = " chests while questing";
                warriorWoman1.speech3.text = " gives a small mana boost.";
                warriorWoman1.speech4.text = "        Use it wisely.";
                warriorWoman1.speech5.text = "";
                warriorWoman1.speech6.text = "";
                break;
            case 1:
                warriorWoman1.speech1.text = "       Mana";
                warriorWoman1.speech2.text = "     recharges much ";
                warriorWoman1.speech3.text = "   faster while standing ";
                warriorWoman1.speech4.text = "          still.";
                warriorWoman1.speech5.text = "";
                warriorWoman1.speech6.text = "";
                break;
            case 2:
                warriorWoman1.speech1.text = "      Your";
                warriorWoman1.speech2.text = " level and any Artisan";
                warriorWoman1.speech3.text = "  bonuses will pass to your";
                warriorWoman1.speech4.text = "  children, should you have";
                warriorWoman1.speech5.text = "             any.";
                warriorWoman1.speech6.text = "";
                break;
            case 3:
                warriorWoman1.speech1.text = "   If your";
                warriorWoman1.speech2.text = " approval rating reaches ";
                warriorWoman1.speech3.text = "  at least 95, neighbouring";
                warriorWoman1.speech4.text = "  kingdoms may offer you ";
                warriorWoman1.speech5.text = "      an alliance.";
                warriorWoman1.speech6.text = "";
                break;
            case 4:
                warriorWoman1.speech1.text = "  Alliances";
                warriorWoman1.speech2.text = "  with neighbours are ";
                warriorWoman1.speech3.text = " often sealed by marriage.";
                warriorWoman1.speech4.text = "   The dowries can be very";
                warriorWoman1.speech5.text = "        generous.";
                warriorWoman1.speech6.text = "";
                break;
            case 5:
                warriorWoman1.speech1.text = "    Items";
                warriorWoman1.speech2.text = "     found in chests";
                warriorWoman1.speech3.text = "       can boost your";
                warriorWoman1.speech4.text = "    Artisans' skill level.";
                warriorWoman1.speech5.text = "";
                warriorWoman1.speech6.text = "";
                break;
            case 6:
                warriorWoman1.speech1.text = "Taxes can fund";
                warriorWoman1.speech2.text = " services and help your";
                warriorWoman1.speech3.text = "  kingdom grow. But if they";
                warriorWoman1.speech4.text = " are too high they may drive";
                warriorWoman1.speech5.text = "      people away.";
                warriorWoman1.speech6.text = "";
                break;
            case 7:
                warriorWoman1.speech1.text = "  The years ";
                warriorWoman1.speech2.text = "     still pass in the ";
                warriorWoman1.speech3.text = "   city while you are out ";
                warriorWoman1.speech4.text = "    questing, but at a slower";
                warriorWoman1.speech5.text = "         rate.";
                warriorWoman1.speech6.text = "";
                break;
        }
        
    },
    shopClosed: function() {
        var closedBack = game.add.sprite(310, 245, 'ui_213x150');
        var closedText1 = game.add.bitmapText(313, 265, 'font', 'CLOSED', 50);
        var closedText2 = game.add.bitmapText(350, 325, 'font', 'Due to lack', 26);
        var closedText3 = game.add.bitmapText(360, 355, 'font', ' of funds', 26);
        game.time.events.add(Phaser.Timer.SECOND * 3, function () {   closedBack.destroy(); closedText1.destroy(); closedText2.destroy(); closedText3.destroy();});
    },
};

