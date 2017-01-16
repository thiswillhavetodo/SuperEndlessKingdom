var platforms;
var player;
var playerLevel = 1;
var facing;
var bullets;
var bulletTimer = 0;
var bulletSpacing = 525;
var beamWeapon = false;
var shotSpeed = 320;
var manaCost = 5;
var flameBullets;
var flameBulletSpacing = 3300;
var iceBeams;
var waterShots;
var iceBeamSpacing = 50;
var freezeTimer = 0;
var invulnerableTimer = 0;
var invulnerableSpacing = 800;
var manaRegenTimer = 0;
var manaRegenHolder = 500;
var manaRegenEndLevelAdjust = 0;
var manaRegenInterval = manaRegenHolder;
var manaRefillAvailable = false;
var first = true;

var timerBeam;
var timerBeamEvent;
var timerMana;
var timerManaEvent;

var baddies;
var flames;
var skeletons;
var swordZombies;
var mummies;
var evilwizards;
var zombieBirds;
var miniZombieBirds;
var spiders;
var swampCreatures;
var treeBeasts;
var evilRoots;
var bossZombies;
var bossZombieKilled = false;
var bossTreeBeastKilled = false;

var cursors;
var fireButton;
var wKey;
var aKey;
var sKey;
var dKey;
var qKey;

var stars;
var door;
var doorway;
var doorAvailable = false;
var levelUpImage;
var coins = 1500;
var stage = 1;
var bestStage = 0;
var reward = 0;

var hudDisplay;
var hpBar;
var manaBar;
var xpBar;
var hpCrop;
var manaCrop;
var xpCrop;
var stageText;
var coinDisplay;
var coinsText;
var healthText;
var resultBackground;
var levelRecordBackground;
var resultText;
var resultText2;
var resultText3;
var levelRecord;
var levelRecord2;
var levelRecord3;
var playerLevelText;
var xpText;
var manaText;
var beamSprite;
var beamText;
var bottleSprite;
var bottleText;
var nextLevelButton;
var xp = 0;
var xpDisplay = 0;
var nextLevelXp = 10;
var nextLevelXpDisplay = 10;
var health = 3;
var maxHealth = 3;
var mana = 60;
var maxMana = 60;
var starTotal = 6;
var baddieTotal = 7;
var baddieCount = 7;
var baddieCreated = 0;
var chestCreated = 0;
var flameCount = 0;
var evilwizardCount = 0;
var zombieBirdCount = 0;
var swampCreatureCount = 0;
var shotPower = 1.25;
var knockback = 1;
var runSpeed = 190;
var runSpeedEndLevelAdjust = 0;
var nullArray = [66, 67, 68, 69, 70, 71, 79, 80, 81, 82, 83, 84, 92, 93, 94, 95, 96, 97, 105, 106,
            107, 108, 109, 110, 118, 119, 120, 121, 122, 123];
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
             23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
             43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
             63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
             83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
             102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
             118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130];
var sceneryCount = 0;
var backgroundScene = "";
var gameMusic;
/* global game */
/* global Phaser */
var playState = {

    create: function() {
        game.world.removeAll();
        //  enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        if (Math.random()>0.66 || stage == 65) { 
            game.add.sprite(0, 0, 'field');
            backgroundScene = "wasteland";
            gameMusic = game.add.audio('wastelandMusic');
            gameMusic.play();
        }
        else if(Math.random()<0.34) {
            game.add.sprite(0, 0, 'stonepavingOvergrown');
            backgroundScene = "ruins";
            gameMusic = game.add.audio('ruinsMusic');
            gameMusic.play();
        }
        else {
            game.add.sprite(0, 0, 'forestBackground');
            backgroundScene = "forest";
            gameMusic = game.add.audio('forestMusic');
            gameMusic.play();
        }
        
        //  Set up gui and display text
        if (coins>=1000000) {
            coinsText = game.add.bitmapText(395, 10, 'font', (Math.round(coins/1000))/1000 + "M", 30);
        }
        else {
            coinsText = game.add.bitmapText(395, 10, 'font', coins, 30);
        }
        hudDisplay = game.add.sprite(0, 0, 'hudDisplay');
        hudDisplay.scale.setTo(1.1, 1.1);
        hpBar = game.add.sprite(92, 7, 'hudBarRed');
        hpBar.scale.setTo(1.1, 1.1);
        hpCrop = new Phaser.Rectangle(0, 0, 88, 15);
        hpBar.crop(hpCrop);
        healthText = game.add.bitmapText(93, 7, 'fontWhite', 'HP: ' + health + "/" + maxHealth, 15);
        manaBar = game.add.sprite(92, 28, 'hudBarBlue');
        manaBar.scale.setTo(1.1, 1.1);
        manaCrop = new Phaser.Rectangle(0, 0, 88, 15);
        manaBar.crop(manaCrop);
        manaText = game.add.bitmapText(93, 28, 'fontWhite', 'MP: ' + mana + "/" + maxMana, 15); 
        xpBar = game.add.sprite(92, 50, 'hudBarGreen');
        xpBar.scale.setTo(1.1, 1.1);
        xpCrop = new Phaser.Rectangle(0, 0, 88, 15);
        xpBar.crop(xpCrop);
        xpText = game.add.bitmapText(93, 50, 'fontWhite', 'XP: ' + xpDisplay + '/' + nextLevelXpDisplay, 15);
        this.xpDisplayConvert();
        if (playerLevel>=10) {
           playerLevelText = game.add.bitmapText(18, 23, 'font', playerLevel, 30);  
        }
        else {
           playerLevelText = game.add.bitmapText(26, 23, 'font', playerLevel, 30); 
        }
        
        stageText = game.add.bitmapText(600, 10, 'font', 'Stage: ' + stage, 30); 
        coinsText.alpha = 0.7;
        xpText.alpha = 0.7;
        healthText.alpha = 0.7;
        manaText.alpha = 0.7;
        playerLevelText.alpha = 0.7;
        stageText.alpha = 0.7;
        coinDisplay = game.add.sprite(360, 8, 'coin');
        coinDisplay.frame = 0;
        
        // The player and its settings
        player = game.add.sprite(16, game.world.height - 50, 'dude');
        
        //  enable physics on the player
        game.physics.arcade.enable(player);
        player.body.setSize(27, 32, 2, 2);
        player.body.collideWorldBounds = true;
        player.isAlive = true;
        //  Our animations, walking left, right, up and down.
        player.animations.add('left', [9, 10, 11], 10, true);
        player.animations.add('right', [3, 4, 5], 10, true);
        player.animations.add('up', [0, 1, 2], 10, true);
        player.animations.add('down', [6, 7, 8], 10, true);
        
        bullets = game.add.group();
        bullets.enableBody = true;
        //enemy projectiles
        flameBullets = game.add.group();
        flameBullets.enableBody = true;   
        iceBeams = game.add.group();
        iceBeams.enableBody = true;
        waterShots = game.add.group();
        waterShots.enableBody = true; 
        miniZombieBirds = game.add.group();
        miniZombieBirds.enableBody = true;
        //enemies
        skeletons = game.add.group();
        skeletons.enableBody = true;
        mummies = game.add.group();
        mummies.enableBody = true;
        baddies = game.add.group();
        baddies.enableBody = true;
        swordZombies = game.add.group();
        swordZombies.enableBody = true;
        flames = game.add.group();
        flames.enableBody = true;
        evilwizards = game.add.group();
        evilwizards.enableBody = true;
        zombieBirds = game.add.group();
        zombieBirds.enableBody = true;
        spiders = game.add.group();
        spiders.enableBody = true;
        swampCreatures = game.add.group();
        swampCreatures.enableBody = true;
        treeBeasts = game.add.group();
        treeBeasts.enableBody = true;
        evilRoots = game.add.group();
        evilRoots.enableBody = true;
        bossZombies = game.add.group();
        bossZombies.enableBody = true;
        
        //  The platforms group
        platforms = game.add.group();
        //  We will enable physics for any object that is created in this group
        platforms.enableBody = true;
        
        if (stage==55 && bossZombieKilled==false) {
            this.bossZombieCreate(760, 200, "green");
            baddieCreated = baddieTotal;
        }
        if (stage==65 && bossTreeBeastKilled==false) {
            this.treeBeastCreate(64, 64);
            this.treeBeastCreate(448, 54);
            this.treeBeastCreate(704, 74);
            this.treeBeastCreate(192, 128);
            this.treeBeastCreate(458, 138);
            this.treeBeastCreate(438, 192);
            this.treeBeastCreate(640, 182);
            this.treeBeastCreate(128, 256);
            this.treeBeastCreate(384, 266);
            this.treeBeastCreate(128, 320);
            this.treeBeastCreate(694, 310);
            this.treeBeastCreate(512, 384);
            this.treeBeastCreate(320, 448);
            this.treeBeastCreate(650, 512);
            baddieCreated=baddieTotal;
            this.treeCreate(256, 64);
            this.treeCreate(576, 256);
            this.treeCreate(64, 384);
            this.treeCreate(704, 448);
            this.treeCreate(128, 512);
            this.treeCreate(448, 512);
            sceneryCount = 28;
        }
        while(baddieCreated<baddieTotal) {
          var i = array[Math.floor(Math.random() * array.length-1)];
          if (nullArray.indexOf(i) >= 0/*includes(i)*/) {
                //stops enemies spawning in bottom left of screen near the player
          }
          else if (array.indexOf(i) >= 0/*includes(i)*/) {
            if (Math.random()>(0.85-stage/100)) {
              remainder = i%13;
              if (remainder<1) {
                remainder = 13;
              }
              var baddieX = (remainder-1)*64;
              var baddieY = Math.floor((array[i]-1)/13)*64;
              if (baddieY<0 || baddieY.isNaN) {
                  baddieY = 0;
              }
              if (Math.random()>(0.6) && (baddieTotal>10) && ((baddieTotal-baddieCreated)*0.1365)>9&& evilwizardCount<1) {
                this.evilwizardCreate(baddieX, baddieY);
                console.log(i + ": evil wizard, " + baddieX + ", " + baddieY);
                baddieCreated += 10;
                evilwizardCount ++;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
              else if (backgroundScene=="wasteland" && (baddieTotal>9) && ((baddieTotal-baddieCreated)*0.135)>7.5) {
                this.treeBeastCreate(baddieX, baddieY);
                console.log(i + ": tree beast, " + baddieX + ", " + baddieY);
                baddieCreated += 9;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
              else if (Math.random()>(0.55) && (baddieTotal>9) && ((baddieTotal-baddieCreated)*0.135)>7.5&& swampCreatureCount<1) {
                this.swampCreatureCreate(baddieX, baddieY);
                console.log(i + ": swamp creature, " + baddieX + ", " + baddieY);
                baddieCreated += 9;
                swampCreatureCount ++;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
              else if (Math.random()>(0.5) && (baddieTotal>8) && ((baddieTotal-baddieCreated)*0.14)>6.5&& zombieBirdCount<=5) {
                this.zombieBirdCreate(baddieX, baddieY);
                console.log(i + ": zombie bird, " + baddieX + ", " + baddieY);
                baddieCreated += 8;
                zombieBirdCount ++;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
              else if (Math.random()>(0.45) && (baddieTotal>7) && ((baddieTotal-baddieCreated)*0.15)>5.5) {
                this.mummyCreate(baddieX, baddieY);
                console.log(i + ": mummy, " + baddieX + ", " + baddieY);
                baddieCreated += 7;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
              else if (Math.random()>(0.4) && (baddieTotal>6) && ((baddieTotal-baddieCreated)*0.21)>5 && flameCount<=2) {
                this.flameCreate(baddieX, baddieY);
                console.log(i + ": flame, " + baddieX + ", " + baddieY);
                baddieCreated += 6;
                flameCount += 1;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
              else if (Math.random()>(0.3) && (baddieTotal > baddieCreated)&&(baddieTotal>5)&&((baddieTotal-baddieCreated)*0.16)>3) {
                if (Math.random()*100>(115-stage)) {
                    this.skeletonCreate(baddieX, baddieY, "red");
                }
                else {
                    this.skeletonCreate(baddieX, baddieY, "grey");
                }
                console.log(i + ": skeleton, " + baddieX + ", " + baddieY);
                baddieCreated += 5;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
              else if (Math.random()>(0.25) && (baddieTotal > baddieCreated)&&(baddieTotal>4)&&((baddieTotal-baddieCreated)*0.14)>2) {
                this.swordZombieCreate(baddieX, baddieY, "green");
                console.log(i + ": swordZombie, " + baddieX + ", " + baddieY);
                baddieCreated += 4;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
              else if (Math.random()>(0.2) && (baddieTotal > baddieCreated)&&(baddieTotal>3)&&((baddieTotal-baddieCreated)*0.24)>2) {
                this.spiderCreate(baddieX, baddieY);
                console.log(i + ": spider, " + baddieX + ", " + baddieY);
                baddieCreated += 3;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
              else if (baddieTotal > baddieCreated) {
                if (Math.random()*100>(96-stage)) {
                    this.baddieCreate(baddieX, baddieY, "red");
                }
                else {
                    this.baddieCreate(baddieX, baddieY, "green");
                }
                console.log(i + ": zombie, " + baddieX + ", " + baddieY);
                baddieCreated ++;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
            }     
          }
        }
        stars = game.add.group();
        stars.enableBody = true;
        
        while (chestCreated < starTotal) {
            var starX = Math.random(0.05, 1) * 780;
            var starY = Math.random(0.1, 1) * 580;
            if (starTotal - chestCreated > 20) {
                this.coinCreate(starX, starY, "yellow"); 
                chestCreated += 10;
            }
            else if (starTotal - chestCreated > 10) {
                this.coinCreate(starX, starY, "green");
                chestCreated += 5;
            }
            else if (starTotal - chestCreated > 4) {
                this.coinCreate(starX, starY, "blue");
                chestCreated += 2;
            }
            else {
                this.coinCreate(starX, starY, "red");
                chestCreated ++;
            }
        }
    
        for (var i=0; i<117; i++) {
          if (array.indexOf(i) >= 0/*includes(i)*/) {
            if (((array[i]>14 && array[i]<117) && array[i]%13>1)&& sceneryCount<28) {
              var remainder = array[i]%13;
              if (remainder<1) {
                remainder = 13;
              }
              var blockX = (remainder-1)*64 + Math.round(Math.random()*10);
              var blockY = Math.floor((array[i]-1)/13)*64 + Math.round(Math.random()*10);
              var index;
              var sceneryModifier = 1 + (1-(sceneryCount/28)) + stage/1000;
              if ((Math.random()<(0.10*sceneryModifier))) {
                console.log(array[i] + ": tree, " + blockX + ", " + blockY);
                if (backgroundScene=="wasteland") {
                    var tree = platforms.create(blockX, blockY, 'tree');
                    tree.body.setSize(35, 20, 0, 33);
                    tree.body.immovable = true;
                    tree.Shadow = tree.addChild(game.add.sprite(-18, 11, 'treeShadow'));
                    tree.Shadow.alpha = 0.35;
                }
                else if (backgroundScene=="ruins") {
                    var statue = platforms.create(blockX, blockY, 'statue');
                    statue.body.setSize(30, 24, 1, 45);
                    statue.body.immovable = true;
                    statue.frame = Math.floor(Math.random()*4.99);
                }
                else {
                    var forestTree = platforms.create(blockX, blockY, 'largeTree');
                    forestTree.body.setSize(36, 21, 10, 50);
                    forestTree.body.immovable = true;
                }
                sceneryCount++;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              }
              else if (Math.random()>(1-(0.10*sceneryModifier))) {
                console.log(array[i] + ": rock, " + blockX + ", " + blockY);
                if (backgroundScene=="wasteland") {
                    var rock = platforms.create(blockX, blockY, 'rock');
                    rock.body.immovable = true;
                    rock.body.setSize(32, 17, 0, 9);
                }
                else if (backgroundScene=="ruins") {
                    var pillar = platforms.create(blockX, blockY-8, 'pillars');
                    pillar.body.immovable = true;
                    pillar.body.setSize(32, 32, 0, 64);
                    pillar.frame = Math.floor(Math.random()*2.99);
                }
                else {
                    var forestScenery = platforms.create(blockX, blockY, 'forestScenery');
                    forestScenery.body.setSize(23, 16, 4, 4);
                    forestScenery.body.immovable = true;
                    forestScenery.frame = Math.floor(Math.random()*2.99);
                }
                sceneryCount++;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              } 
              else if (Math.random()>=0.2 && Math.random()<(0.3*(sceneryModifier/3))) {
                console.log(array[i] + ": gravestone, " + blockX + ", " + blockY);
                if (backgroundScene=="wasteland") {
                    var gravestone = platforms.create(blockX, blockY, 'gravestone');
                    gravestone.body.immovable = true;
                    gravestone.body.setSize(19, 10, 0, 18);
                }
                else if (backgroundScene=="ruins") {
                    statue = platforms.create(blockX, blockY, 'statue');
                    statue.body.setSize(30, 18, 1, 45);
                    statue.body.immovable = true;
                    statue.frame = Math.floor(Math.random()*4.99);
                }
                else {
                    var forestTree = platforms.create(blockX, blockY, 'largeTree');
                    forestTree.body.setSize(36, 21, 10, 50);
                    forestTree.body.immovable = true;
                }
                sceneryCount++;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              } 
              else if ((28-sceneryCount)>=(116-array[i])) {
                console.log(array[i] + ": tree");
                if (backgroundScene=="wasteland") {
                    tree = platforms.create(blockX, blockY, 'tree');
                    tree.body.setSize(35, 20, 0, 33);
                    tree.body.immovable = true;
                    tree.Shadow = tree.addChild(game.add.sprite(-18, 11, 'treeShadow'));
                    tree.Shadow.alpha = 0.35;
                }
                else if (backgroundScene=="ruins") {
                    pillar = platforms.create(blockX, blockY-8, 'pillars');
                    pillar.body.immovable = true;
                    pillar.body.setSize(32, 32, 0, 64);
                    pillar.frame = Math.floor(Math.random()*2.99);
                }
                else {
                    var forestScenery = platforms.create(blockX, blockY, 'forestScenery');
                    forestScenery.body.setSize(23, 16, 4, 4);
                    forestScenery.body.immovable = true;
                    forestScenery.frame = Math.floor(Math.random()*2.99);
                }
                sceneryCount++;
                index = array.indexOf(i);
                if (index > -1) {
                  array.splice(index, 1);
                }
              } 
            }     
          }
        }
        
        //  Our controls.
        cursors = game.input.keyboard.createCursorKeys();
        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
        qKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        
        /*
        //  Set up gui and display text
        if (coins>=1000000) {
            coinsText = game.add.bitmapText(10, 600, 'font', 'Coins: ' + (Math.round(coins/1000))/1000 + "M", 30);
        }
        else {
            coinsText = game.add.bitmapText(10, 600, 'font', 'Coins: ' + coins, 30);
        }
        xpText = game.add.bitmapText(60, 10, 'font', 'XP: ' + Math.round(xp) + '/' + nextLevelXp, 30);
        healthText = game.add.bitmapText(600, 10, 'font', 'Health: ' + health + "/" + maxHealth, 30);
        playerLevelText = game.add.bitmapText(625, 600, 'font', 'Your Level: ' + playerLevel, 30);
        stageText = game.add.bitmapText(335, 600, 'font', 'Stage: ' + stage, 30);    
        manaText = game.add.bitmapText(330, 10, 'font', 'Mana: ' + mana, 30); 
        coinsText.alpha = 0.7;
        xpText.alpha = 0.7;
        healthText.alpha = 0.7;
        playerLevelText.alpha = 0.7;
        stageText.alpha = 0.7;
        manaText.alpha = 0.7; */
        if (beamUnlockShown==true) {
            beamSprite = game.add.sprite(223, 597, 'beamIcon');
            beamSprite.frame = 1;
            beamText = game.add.bitmapText(230, 608, 'font', 'SPACE', 16);
        }
        if (manaRefillUnlockShown==true) {
            bottleSprite = game.add.sprite(535, 597, 'bottle');
            bottleSprite.frame = 1;
            bottleText = game.add.bitmapText(536, 605, 'font', ' Q', 24);
        }
        resultBackground = game.add.sprite(-1000, 150, 'scrollStrip');
        levelRecordBackground = game.add.sprite(-1000, 370, 'scrollStrip');
        resultText = game.add.bitmapText(205, 160, 'font', '', 24);
        resultText2 = game.add.bitmapText(250, 190, 'font', '', 18);
        resultText3 = game.add.bitmapText(125, 215, 'font', '', 18);
        levelRecord = game.add.bitmapText(325, 380, 'font', '', 24);
        levelRecord2 = game.add.bitmapText(310, 410, 'font', '', 18);
        levelRecord3 = game.add.bitmapText(220, 435, 'font', '', 18);
    },
    
    update: function() {
        
        //  Collide the player and enemies with the platforms(obstacles)
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(baddies, baddies); 
        //game.physics.arcade.collide(baddies, bossZombies); 
        game.physics.arcade.collide(baddies, flames);
        game.physics.arcade.collide(flames, flames);  
        game.physics.arcade.collide(skeletons, baddies); 
        game.physics.arcade.collide(skeletons, flames);
        game.physics.arcade.collide(skeletons, skeletons); 
        game.physics.arcade.collide(mummies, baddies); 
        game.physics.arcade.collide(mummies, flames);
        game.physics.arcade.collide(mummies, skeletons); 
        game.physics.arcade.collide(mummies, spiders); 
        game.physics.arcade.collide(mummies, mummies); 
        game.physics.arcade.collide(spiders, baddies); 
        game.physics.arcade.collide(spiders, spiders); 
        game.physics.arcade.collide(spiders, flames);
        game.physics.arcade.collide(spiders, skeletons); 
        game.physics.arcade.collide(zombieBirds, zombieBirds); 
        //  Check to see if player overlaps with a chest    
        game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
        game.physics.arcade.overlap(door, stars, this.collectStar, null, this);
        if (baddieCount<=0) {
            game.physics.arcade.collide(player, door, this.doorOpen, null, this);        }
        
        if (game.time.now>invulnerableTimer){
            player.alpha = 1;
            game.physics.arcade.overlap(player, baddies, this.badTouch, null, this);
            game.physics.arcade.overlap(player, swordZombies, this.badTouch, null, this);
            game.physics.arcade.overlap(player, bossZombies, this.badTouchTwo, null, this);
            game.physics.arcade.overlap(player, flames, this.badTouch, null, this);
            game.physics.arcade.overlap(player, flameBullets, this.badTouch, null, this);
            game.physics.arcade.overlap(player, skeletons, this.badTouchTwo, null, this);
            game.physics.arcade.overlap(player, mummies, this.badTouchTwo, null, this);
            game.physics.arcade.overlap(player, iceBeams, this.badTouch, null, this);
            game.physics.arcade.overlap(player, iceBeams, this.freeze, null, this);
            game.physics.arcade.overlap(player, waterShots, this.badTouchTwo, null, this);
            game.physics.arcade.overlap(player, zombieBirds, this.badTouchTwo, null, this);
            game.physics.arcade.overlap(player, miniZombieBirds, this.badTouchTwo, null, this);
            game.physics.arcade.overlap(player, spiders, this.badTouch, null, this);
            game.physics.arcade.overlap(player, treeBeasts, this.badTouchTwo, null, this);
            game.physics.arcade.overlap(player, evilRoots, this.badTouchTwo, null, this);
        }
        else {
            player.alpha = 0.5;
        }
        game.physics.arcade.collide(bullets, baddies, this.badKill, null, this);
        game.physics.arcade.collide(bullets, bossZombies, this.bossZombieKill, null, this);
        game.physics.arcade.collide(bullets, flames, this.flameKill, null, this);
        game.physics.arcade.collide(bullets, skeletons, this.skeletonKill, null, this);
        game.physics.arcade.collide(bullets, mummies, this.mummyKill, null, this);
        game.physics.arcade.collide(bullets, spiders, this.spiderKill, null, this);
        game.physics.arcade.collide(bullets, evilwizards, this.evilwizardKill, null, this);
        game.physics.arcade.collide(bullets, swampCreatures, this.swampCreatureKill, null, this);
        game.physics.arcade.collide(bullets, zombieBirds, this.zombieBirdKill, null, this);
        game.physics.arcade.collide(bullets, miniZombieBirds, this.miniZombieBirdKill, null, this);
        game.physics.arcade.collide(bullets, platforms, this.bulletKill, null, this);
        game.physics.arcade.collide(bullets, treeBeasts, this.treeBeastKill, null, this);
        game.physics.arcade.collide(bullets, swordZombies, this.swordZombieKill, null, this);
        game.physics.arcade.overlap(skeletons, platforms, this.skeletonSmash, null, this);
        game.physics.arcade.overlap(mummies, platforms, this.mummySmash, null, this);
        game.physics.arcade.overlap(bossZombies, platforms, this.bossZombieSmash, null, this);
        game.physics.arcade.overlap(spiders, platforms, this.spiderClimb, null, this);
        game.physics.arcade.collide(swordZombies, platforms, this.swordZombieSteer, null, this);
        game.physics.arcade.overlap(platforms, stars, this.moveStar, null, this);
        game.physics.arcade.overlap(platforms, flames, this.moveFlame, null, this);
        game.physics.arcade.overlap(platforms, evilwizards, this.moveEvilWizard, null, this);
        //game.physics.arcade.overlap(stars, stars, this.moveStar, null, this);
    
        //  Reset the players velocity (movement)
        player.body.velocity.x = 0;
        player.body.velocity.y= 0;
    
        if (aKey.isDown)        {
            //  Move to the left
            player.body.velocity.x = -(runSpeed + runSpeedEndLevelAdjust);
            player.animations.play('left');
            facing = 'left';
            manaRegenInterval = manaRegenHolder- manaRegenEndLevelAdjust;
        }
        else if (dKey.isDown)      {
            //  Move to the right
            player.body.velocity.x = (runSpeed + runSpeedEndLevelAdjust);
            player.animations.play('right');
            facing = 'right';
            manaRegenInterval = manaRegenHolder- manaRegenEndLevelAdjust;
        }
        else if (wKey.isDown)       {
            //  Move up
            player.body.velocity.y = -(runSpeed + runSpeedEndLevelAdjust);
            player.animations.play('up');
            facing = 'up';
            manaRegenInterval = manaRegenHolder- manaRegenEndLevelAdjust;
        }
        else if (sKey.isDown)        {
            //  Move down
            player.body.velocity.y = (runSpeed + runSpeedEndLevelAdjust);
            player.animations.play('down');
            facing = 'down';
            manaRegenInterval = manaRegenHolder- manaRegenEndLevelAdjust;
        }
        else        {
            //  Stand still
            player.animations.stop();
            manaRegenInterval = (manaRegenHolder- manaRegenEndLevelAdjust)*0.25;
        }
        if (fireButton.isDown && beamWeapon==true) {
            this.beamWeaponActivate();
        }
        if (qKey.isDown && manaRefillAvailable==true) {
            this.manaRefillActivate();
        }
        if ((cursors.right.isDown || cursors.left.isDown || cursors.up.isDown || cursors.down.isDown) && game.time.now>bulletTimer && player.isAlive && mana>=manaCost) {
            this.fire();
            mana -= manaCost;
            manaText.text = "MP: " + mana + "/" + maxMana;
        }
        
        this.baddieUpdate();
        this.spiderUpdate();
        this.flameUpdate();
        this.skeletonUpdate();
        this.mummyUpdate();
        this.evilwizardUpdate();
        this.zombieBirdUpdate();
        this.miniZombieBirdUpdate();
        this.swampCreatureUpdate();
        this.treeBeastUpdate();
        this.evilRootUpdate();
        this.bossZombieUpdate();
        this.manaRegen();
        this.beamTimerUpdate();
        this.manaRefillTimerUpdate();
        this.swordZombieUpdate();
        //this.coinUpdate();
        hpCrop.x = (1-(health/maxHealth))*80;
        hpBar.updateCrop();
        manaCrop.x = (1-(mana/maxMana))*80;
        manaBar.updateCrop();
        xpCrop.x = (1-(xp/nextLevelXp))*80;
        xpBar.updateCrop();
    },
    baddieCreate: function(x, y, colour) {
        if (colour=="green") {
            var baddie = baddies.create(x, y, 'baddie');
            baddie.health = 4;
            baddie.maxHealth = 4;
            baddie.colour = "green";
        }
        else if (colour=="red") {
            var baddie = baddies.create(x, y, 'zombieRed');
            baddie.health = 6;
            baddie.maxHealth = 6;
            baddie.colour = "red";
        }
        //  enable physics on the baddie
        game.physics.arcade.enable(baddie);
        baddie.body.collideWorldBounds = true;
        
        baddie.healthBarBack = baddie.addChild(game.add.graphics(0, 0));
        baddie.healthBarBack.lineStyle(3, 0xba3500, 1);
        baddie.healthBarBack.moveTo(0, 0);
        baddie.healthBarBack.lineTo(20, 0);
        baddie.healthBar = baddie.addChild(game.add.graphics(0, 0));
        baddie.healthBar.lineStyle(3, 0xffd900, 1);
        baddie.healthBar.moveTo(0, 0);
        baddie.healthBar.lineTo(20*(baddie.health/baddie.maxHealth), 0);
        
        baddie.healthBarBack.visible = false;
        baddie.healthBar.visible = false;
        //  Our two animations, walking left and right.
        baddie.animations.add('baddieLeft', [0, 1, 2], 15, true);
        baddie.animations.add('baddieRight', [3, 4, 5], 15, true);
    },
    baddieUpdate: function() {
        baddies.forEach(function(baddie) {
            baddie.body.velocity.x = 0;
            baddie.body.velocity.y = 0;
        
            game.physics.arcade.collide(baddie, platforms);
            
            baddie.healthBar.clear();
            baddie.healthBar.lineStyle(3, 0xffd900, 1);
            baddie.healthBar.moveTo(0, 0);
            baddie.healthBar.lineTo(20*(baddie.health/baddie.maxHealth), 0);
            
            if (Math.random()<0.10) {
                baddie.body.velocity.x += 20;
                baddie.body.velocity.y += 20;
            }
            else if (Math.random()>0.9) {
                baddie.body.velocity.x -= 20;
                baddie.body.velocity.y -= 20;
            }
            else {
                if (baddie.colour=="green") {
                    game.physics.arcade.moveToObject(baddie, player, 130);
                }
                else if (baddie.colour=="red") {
                    game.physics.arcade.moveToObject(baddie, player, 155);
                }
            }
            if (player.body.x < baddie.body.x) {
                baddie.animations.play('baddieLeft');
            }
            else {
                baddie.animations.play('baddieRight');
            }
        });
    },
    bossZombieCreate: function(x, y, colour) {
        if (colour=="green") {
            var bossZombie = bossZombies.create(x, y, 'bossZombie');
            bossZombie.health = 250;
            bossZombie.maxHealth = 250;
            bossZombie.colour = "green"
        }
        else if (colour=="red") {
            var bossZombie = bossZombies.create(x, y, 'zombieRed');
            bossZombie.health = 375;
            bossZombie.maxHealth = 375;
            bossZombie.colour = "red"
        }
        //  enable physics on the bossZombie
        game.physics.arcade.enable(bossZombie);
        bossZombie.body.collideWorldBounds = true;
        bossZombie.timer = game.time.now;
        bossZombie.interval = 4000;
        
        bossZombie.healthBarBack = bossZombie.addChild(game.add.graphics(0, 0));
        bossZombie.healthBarBack.lineStyle(3, 0xba3500, 1);
        bossZombie.healthBarBack.moveTo(0, 0);
        bossZombie.healthBarBack.lineTo(20, 0);
        bossZombie.healthBar = bossZombie.addChild(game.add.graphics(0, 0));
        bossZombie.healthBar.lineStyle(3, 0xffd900, 1);
        bossZombie.healthBar.moveTo(0, 0);
        bossZombie.healthBar.lineTo(20*(bossZombie.health/bossZombie.maxHealth), 0);
        
        bossZombie.healthBarBack.visible = false;
        bossZombie.healthBar.visible = false;
        //  Our two animations, walking left and right.
        bossZombie.animations.add('bossZombieLeft', [0, 1, 2], 5, true);
        bossZombie.animations.add('bossZombieRight', [3, 4, 5], 5, true);
    },
    bossZombieUpdate: function() {
        bossZombies.forEach(function(bossZombie) {
            bossZombie.body.velocity.x = 0;
            bossZombie.body.velocity.y = 0;
            
            bossZombie.healthBar.clear();
            bossZombie.healthBar.lineStyle(3, 0xffd900, 1);
            bossZombie.healthBar.moveTo(0, 0);
            bossZombie.healthBar.lineTo(20*(bossZombie.health/bossZombie.maxHealth), 0);
    
            game.physics.arcade.collide(bossZombie, platforms);
            
            if (bossZombie.colour=="green") {
                    game.physics.arcade.moveToObject(bossZombie, player, 110);
            }
            else if (bossZombie.colour=="red") {
                    game.physics.arcade.moveToObject(bossZombie, player, 135);
            }
            if (player.body.x < bossZombie.body.x) {
                bossZombie.animations.play('bossZombieLeft');
            }
            else {
                bossZombie.animations.play('bossZombieRight');
            }
        });
    },
    bossZombieSmash: function(bossZombie, platforms) {
        platforms.kill(); 
        var woodSmash = game.add.audio('woodSmash'); 
        woodSmash.play(); 
        var self = this;
        game.time.events.add(Phaser.Timer.SECOND * 0.75, function () { self.rubbleCreate(platforms.x, platforms.y); });
    },
    rubbleCreate: function(x, y) {
        var rubble = platforms.create(x, y, 'rubble');
        console.log("rubble");
        rubble.body.setSize(32, 16, 0, 16);
        rubble.body.immovable = true;
    },
    spiderCreate: function(x, y) {
        var spider = spiders.create(x, y, 'spider');
        spider.health = 11;
        spider.maxHealth = 11;
        //  enable physics on the spider
        game.physics.arcade.enable(spider);
        spider.body.collideWorldBounds = true;
        spider.collide = false;
        
        spider.healthBarBack = spider.addChild(game.add.graphics(0, 0));
        spider.healthBarBack.lineStyle(3, 0xba3500, 1);
        spider.healthBarBack.moveTo(0, 0);
        spider.healthBarBack.lineTo(20, 0);
        spider.healthBar = spider.addChild(game.add.graphics(0, 0));
        spider.healthBar.lineStyle(3, 0xffd900, 1);
        spider.healthBar.moveTo(0, 0);
        spider.healthBar.lineTo(20*(spider.health/spider.maxHealth), 0);
        
        spider.healthBarBack.visible = false;
        spider.healthBar.visible = false;
        //  Our animations.
        spider.animations.add('spiderLeft', [6, 7, 8, 9, 10, 11], 10, true);
        spider.animations.add('spiderRight', [18, 19, 20, 21, 22, 23], 10, true); 
        spider.animations.add('climbUp', [0, 1, 2, 3, 4, 5], 10, true);
        spider.animations.add('climbDown', [12, 13, 14, 15, 16, 17], 10, true);
    },
    spiderUpdate: function() {
        spiders.forEach(function(spider) {
            spider.body.velocity.x = 0;
            spider.body.velocity.y = 0;
            
            spider.healthBar.clear();
            spider.healthBar.lineStyle(3, 0xffd900, 1);
            spider.healthBar.moveTo(0, 0);
            spider.healthBar.lineTo(20*(spider.health/spider.maxHealth), 0);
            
            //game.physics.arcade.collide(spider, platforms);
            
            if (spider.collide) {
                game.physics.arcade.moveToObject(spider, player, 60-spider.health);
                if (player.y>spider.y) {
                    spider.animations.play('climbDown');
                }
                else {
                    spider.animations.play('climbUp');
                }
            }
            else {
                game.physics.arcade.moveToObject(spider, player, 146-spider.health*2);
                if (player.body.x < spider.body.x) {
                    spider.animations.play('spiderLeft');
                }
                else {
                    spider.animations.play('spiderRight');
                }
            }
        });
    },
    spiderClimb: function(spider, platforms) {
        spider.collide = true;
        game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {   spider.collide = false; });
    },  
    swordZombieCreate: function(x, y, colour) {
        if (colour=="green") {
            var swordZombie = swordZombies.create(x, y, 'swordZombie');
            swordZombie.health = 14;
            swordZombie.maxHealth = 14;
            swordZombie.colour = "green";
        }
        else if (colour=="red") {
            swordZombie = swordZombies.create(x, y, 'swordZombie');
            swordZombie.health = 23;
            swordZombie.maxHealth = 23;
            swordZombie.colour = "red";
        }
        //  enable physics on the swordZombie
        game.physics.arcade.enable(swordZombie);
        swordZombie.body.collideWorldBounds = true;
        swordZombie.isAlive = true;
        swordZombie.collide = false;
        
        swordZombie.healthBarBack = swordZombie.addChild(game.add.graphics(0, 0));
        swordZombie.healthBarBack.lineStyle(3, 0xba3500, 1);
        swordZombie.healthBarBack.moveTo(0, 0);
        swordZombie.healthBarBack.lineTo(20, 0);
        swordZombie.healthBar = swordZombie.addChild(game.add.graphics(0, 0));
        swordZombie.healthBar.lineStyle(3, 0xffd900, 1);
        swordZombie.healthBar.moveTo(0, 0);
        swordZombie.healthBar.lineTo(20*(swordZombie.health/swordZombie.maxHealth), 0);
        
        swordZombie.healthBarBack.visible = false;
        swordZombie.healthBar.visible = false;
        //  Our two animations, walking left and right.
        swordZombie.animations.add('swordZombieLeft', [0, 1, 2], 15, true);
        swordZombie.animations.add('swordZombieRight', [3, 4, 5], 15, true);
    },
    swordZombieUpdate: function() {
        swordZombies.forEach(function(swordZombie) {
            swordZombie.body.velocity.x = 0;
            swordZombie.body.velocity.y = 0;
        
            game.physics.arcade.collide(swordZombie, platforms);
            
            swordZombie.healthBar.clear();
            swordZombie.healthBar.lineStyle(3, 0xffd900, 1);
            swordZombie.healthBar.moveTo(0, 0);
            swordZombie.healthBar.lineTo(20*(swordZombie.health/swordZombie.maxHealth), 0);
            
            if (swordZombie.colour=="green") {
                game.physics.arcade.moveToObject(swordZombie, player, 140);
            }
            else if (swordZombie.colour=="red") {
                game.physics.arcade.moveToObject(swordZombie, player, 165);
            }
            
            if (player.body.x < swordZombie.body.x) {
                swordZombie.animations.play('swordZombieLeft');
            }
            else {
                swordZombie.animations.play('swordZombieRight');
            }
        });
    },
    swordZombieSteer: function(swordZombie, platforms) {
        if (swordZombie.collide == false) {
            swordZombie.collide = true;
            if (swordZombie.x>=platforms.x && swordZombie.y>=platforms.y) {
                swordZombie.body.velocity.y -= 180;
                swordZombie.body.velocity.x += 50;
                game.time.events.add(Phaser.Timer.SECOND * 3, function () { swordZombie.body.velocity.y += 180; swordZombie.body.velocity.x -= 50; swordZombie.collide = false; });
            }
            else if (swordZombie.x>=platforms.x && swordZombie.y<platforms.y) {
                swordZombie.body.velocity.x -= 180;
                swordZombie.body.velocity.y += 50;
                game.time.events.add(Phaser.Timer.SECOND * 3, function () { swordZombie.body.velocity.x += 180; swordZombie.body.velocity.y -= 50; swordZombie.collide = false; });
            }
            else if (swordZombie.x<platforms.x && swordZombie.y>=platforms.y) {
                swordZombie.body.velocity.y += 180;
                swordZombie.body.velocity.x -= 50;
                game.time.events.add(Phaser.Timer.SECOND * 3, function () { swordZombie.body.velocity.y -= 180; swordZombie.body.velocity.x += 50; swordZombie.collide = false; });
            }
            else if (swordZombie.x<platforms.x && swordZombie.y<platforms.y) {
                swordZombie.body.velocity.x += 180;
                swordZombie.body.velocity.y -= 50;
                game.time.events.add(Phaser.Timer.SECOND * 3, function () { swordZombie.body.velocity.x -= 180; swordZombie.body.velocity.y += 50; swordZombie.collide = false; });
            }
        }
        else {
            
        }
    },
    skeletonCreate: function(x, y, colour) {
        if (colour=="grey") {
            var skeleton = skeletons.create(x, y, 'skeleton');
            skeleton.health = 18;
            skeleton.maxHealth = 18;
            skeleton.colour = "grey";
        }
        else if (colour=="red") {
            var skeleton = skeletons.create(x, y, 'skeleton');
            skeleton.health = 28;
            skeleton.maxHealth = 28;
            skeleton.colour = "red";
            skeleton.tint = 0xba3500;
        }
        //  enable physics on the skeleton
        game.physics.arcade.enable(skeleton);
        skeleton.body.collideWorldBounds = true;
        skeleton.collide = false;
        
        skeleton.healthBarBack = skeleton.addChild(game.add.graphics(0, 0));
        skeleton.healthBarBack.lineStyle(3, 0xba3500, 1);
        skeleton.healthBarBack.moveTo(0, 0);
        skeleton.healthBarBack.lineTo(20, 0);
        skeleton.healthBar = skeleton.addChild(game.add.graphics(0, 0));
        skeleton.healthBar.lineStyle(3, 0xffd900, 1);
        skeleton.healthBar.moveTo(0, 0);
        skeleton.healthBar.lineTo(20*(skeleton.health/skeleton.maxHealth), 0);
        
        skeleton.healthBarBack.visible = false;
        skeleton.healthBar.visible = false;
        //  Our animations.
        skeleton.animations.add('skeletonLeft', [3, 4, 5], 10, true);
        skeleton.animations.add('skeletonRight', [6, 7, 8], 10, true); 
        skeleton.animations.add('stomp', [0, 1, 2], 10, true);
        skeleton.animations.add('smash', [9, 10], 10, true);
    },
    skeletonUpdate: function() {
        skeletons.forEach(function(skeleton) {
            skeleton.body.velocity.x = 0;
            skeleton.body.velocity.y = 0;
            
            skeleton.healthBar.clear();
            skeleton.healthBar.lineStyle(3, 0xffd900, 1);
            skeleton.healthBar.moveTo(0, 0);
            skeleton.healthBar.lineTo(20*(skeleton.health/skeleton.maxHealth), 0);
            
            game.physics.arcade.collide(skeleton, platforms);
            
            if (skeleton.collide) {
                skeleton.animations.stop();
                skeleton.animations.play('smash');
            }
            else if ((Math.abs(player.x - skeleton.x)) + (Math.abs(player.y - skeleton.y)) < 275) {
                if (skeleton.colour=="grey") {
                    game.physics.arcade.moveToObject(skeleton, player, 178-skeleton.health*2);
                }
                else if (skeleton.colour=="red") {
                    game.physics.arcade.moveToObject(skeleton, player, 232-skeleton.health*2);
                }
                if (player.body.x < skeleton.body.x) {
                    skeleton.animations.play('skeletonLeft');
                }
                else {
                    skeleton.animations.play('skeletonRight');
                }
            }
            else if ((skeleton.colour=="grey" && skeleton.health<18)||(skeleton.colour=="red" && skeleton.health<28)) {
                if (skeleton.colour=="grey") {
                    game.physics.arcade.moveToObject(skeleton, player, 175-skeleton.health*2);
                }
                else if (skeleton.colour=="red") {
                    game.physics.arcade.moveToObject(skeleton, player, 223-skeleton.health*2);
                }
                if (player.body.x < skeleton.body.x) {
                    skeleton.animations.play('skeletonLeft');
                }
                else {
                    skeleton.animations.play('skeletonRight');
                }
            }
            else {
                skeleton.animations.play('stomp');
            }
        });
    },
    skeletonSmash: function(skeleton, platforms) {
        skeleton.collide = true;
        game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {   platforms.kill(); var woodSmash = game.add.audio('woodSmash'); woodSmash.play(); skeleton.collide = false; });
    },
    mummyCreate: function(x, y) {
        if (backgroundScene=="wasteland") {
            var mummy = mummies.create(x, y, 'mummy');
            mummy.animations.add('mummyLeft', [9, 10, 11], 10, true);
            mummy.animations.add('mummyRight', [3, 4, 5], 10, true); 
            mummy.animations.add('smash', [12, 7], 10, true);
        }
        else {
            var mummy = mummies.create(x, y, 'golem');
            mummy.animations.add('golemLeft', [9, 10, 11], 10, true);
            mummy.animations.add('golemRight', [6, 7, 8], 10, true); 
            mummy.animations.add('smashLeft', [10, 12], 4, true);
            mummy.animations.add('smashRight', [7, 13], 4, true);
        }
        mummy.health = 35;
        mummy.maxHealth = 35;
        //  enable physics on the mummy
        game.physics.arcade.enable(mummy);
        mummy.body.collideWorldBounds = true;
        mummy.collide = false;
        
        mummy.healthBarBack = mummy.addChild(game.add.graphics(0, 0));
        mummy.healthBarBack.lineStyle(3, 0xba3500, 1);
        mummy.healthBarBack.moveTo(0, 0);
        mummy.healthBarBack.lineTo(20, 0);
        mummy.healthBar = mummy.addChild(game.add.graphics(0, 0));
        mummy.healthBar.lineStyle(3, 0xffd900, 1);
        mummy.healthBar.moveTo(0, 0);
        mummy.healthBar.lineTo(20*(mummy.health/mummy.maxHealth), 0);
        
        mummy.healthBarBack.visible = false;
        mummy.healthBar.visible = false;
    },
    mummyUpdate: function() {
        mummies.forEach(function(mummy) {
            mummy.body.velocity.x = 0;
            mummy.body.velocity.y = 0;
        
            game.physics.arcade.collide(mummy, platforms);
            
            mummy.healthBar.clear();
            mummy.healthBar.lineStyle(3, 0xffd900, 1);
            mummy.healthBar.moveTo(0, 0);
            mummy.healthBar.lineTo(20*(mummy.health/mummy.maxHealth), 0);
            
            if (mummy.collide) {
                mummy.animations.stop();
                if (backgroundScene=="wasteland") {
                    mummy.animations.play('smash');
                }
                else if (mummy.x<player.x) {
                    mummy.animations.play('smashRight');
                }
                else {
                    mummy.animations.play('smashLeft');
                }
            }
            else {
                if ((baddieCount/baddieTotal)<0.75 || (Math.abs(player.x - mummy.x)) + (Math.abs(player.y - mummy.y)) < 150) {
                    game.physics.arcade.moveToObject(mummy, player, 210-mummy.health*4);
                }
                else {
                    if (player.y<320) {
                        game.physics.arcade.moveToXY(mummy, player.x, player.y+150, 225-mummy.health*4);
                    }
                    else {
                        game.physics.arcade.moveToXY(mummy, player.x, player.y-150, 225-mummy.health*4);
                    }
                }
                if (player.body.x < mummy.body.x) {
                    if (backgroundScene=="wasteland") {
                        mummy.animations.play('mummyLeft');
                    }
                    else {
                        mummy.animations.play('golemLeft');
                    }
                }
                else {
                    if (backgroundScene=="wasteland") {
                        mummy.animations.play('mummyRight');
                    }
                    else {
                        mummy.animations.play('golemRight');
                    }
                }
            }
        });
    },
    mummySmash: function(mummy, platforms) {
        mummy.collide = true;
        game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {   platforms.kill(); var woodSmash = game.add.audio('woodSmash'); woodSmash.play(); mummy.collide = false; });
    },
    flameCreate: function(x, y) {
        var flame = flames.create(x, y, 'flame');
        flame.health = 15;
        flame.maxHealth = 15;
        game.physics.arcade.enable(flame);
        flame.body.collideWorldBounds = true;
        flame.body.immovable = true;
        flame.isAlive = true;
        flame.timer = 0;
        flame.animations.add('flicker', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10, true);
        
        flame.healthBarBack = flame.addChild(game.add.graphics(0, 0));
        flame.healthBarBack.lineStyle(3, 0xba3500, 1);
        flame.healthBarBack.moveTo(0, 0);
        flame.healthBarBack.lineTo(20, 0);
        flame.healthBar = flame.addChild(game.add.graphics(0, 0));
        flame.healthBar.lineStyle(3, 0xffd900, 1);
        flame.healthBar.moveTo(0, 0);
        flame.healthBar.lineTo(20*(flame.health/flame.maxHealth), 0);
        
        flame.healthBarBack.visible = false;
        flame.healthBar.visible = false;
    },
    flameUpdate: function() {
        flames.forEach(function(flame) {
            flame.animations.play('flicker');
            if ((game.time.now > flame.timer) && flame.isAlive) {
                var flameBullet = flameBullets.create(flame.x, flame.y, 'flame');
                flameBullet.animations.add('fire', [0], true);
                game.physics.arcade.moveToXY(flameBullet, player.x, player.y, 130);
                flameBullet.animations.play('fire');
                flameBullet.checkWorldBounds = true;
                flameBullet.outOfBoundsKill = true;
                flame.timer = game.time.now + flameBulletSpacing;
                var flameShot = game.add.audio('flameShot');
                flameShot.play();
            }
            flame.healthBar.clear();
            flame.healthBar.lineStyle(3, 0xffd900, 1);
            flame.healthBar.moveTo(0, 0);
            flame.healthBar.lineTo(20*(flame.health/flame.maxHealth), 0);
        });
    },
    treeBeastCreate: function(x, y) {
        var treeBeast = treeBeasts.create(x, y, 'treeBeast');
        treeBeast.health = 44;
        treeBeast.maxHealth = 44;
        treeBeast.frame = 0;
        treeBeast.shadow = treeBeast.addChild(game.add.sprite(17, 11, 'treeShadow'));
        treeBeast.shadow.alpha = 0.35,
        game.physics.arcade.enable(treeBeast);
        treeBeast.body.immovable = true;
        treeBeast.isAlive = true;
        treeBeast.active = false;
        treeBeast.animations.add('reveal', [0, 1, 2], 3, false);
        treeBeast.animations.add('wiggle', [3, 4, 5, 5, 4, 3], 10, true);
        treeBeast.rootTimer = game.time.now + 1000 + (Math.random()*5000);
        
        treeBeast.healthBarBack = treeBeast.addChild(game.add.graphics(0, 0));
        treeBeast.healthBarBack.lineStyle(3, 0xba3500, 1);
        treeBeast.healthBarBack.moveTo(0, 0);
        treeBeast.healthBarBack.lineTo(20, 0);
        treeBeast.healthBar = treeBeast.addChild(game.add.graphics(0, 0));
        treeBeast.healthBar.lineStyle(3, 0xffd900, 1);
        treeBeast.healthBar.moveTo(0, 0);
        treeBeast.healthBar.lineTo(20*(treeBeast.health/treeBeast.maxHealth), 0);
        
        treeBeast.healthBarBack.visible = false;
        treeBeast.healthBar.visible = false;
    },
    evilRootWarning: function(x, y) {
        var evilRootShoot = game.add.sprite(x, y, 'evilRoot');
        evilRootShoot.animations.add('sprout', [0, 0, 0, 1, 2, 3], 4, false);
        evilRootShoot.animations.play('sprout');
        var self = this;
        game.time.events.add(Phaser.Timer.SECOND * 1.5, function () {  evilRootShoot.destroy(); self.evilRootCreate(evilRootShoot.x, evilRootShoot.y);});
    },
    treeBeastUpdate: function() {
        var self = this;
        treeBeasts.forEach(function(treeBeast) {
            if (treeBeast.active==true) {
                treeBeast.animations.play('wiggle');
            }
            else if ((((Math.abs(player.x - (treeBeast.x+52))) + (Math.abs(player.y - (treeBeast.y+26))) < 110) || treeBeast.health<treeBeast.maxHealth) && treeBeast.active==false) {
                treeBeast.animations.play('reveal');
                game.time.events.add(Phaser.Timer.SECOND * 1, function () { treeBeast.animations.stop(); treeBeast.active = true; treeBeast.animations.play('wiggle'); });
            }
            if (treeBeast.isAlive && treeBeast.rootTimer<game.time.now){
                var random = (Math.floor(Math.random()*20))-10;
                var randomX = random + player.x;
                var randomY = random + player.y;
                self.evilRootWarning(randomX, randomY);
                treeBeast.rootTimer = game.time.now + (Math.random()*15000);
            }
            treeBeast.healthBar.clear();
            treeBeast.healthBar.lineStyle(3, 0xffd900, 1);
            treeBeast.healthBar.moveTo(0, 0);
            treeBeast.healthBar.lineTo(20*(treeBeast.health/treeBeast.maxHealth), 0);
        });
    },
    evilRootCreate: function(x, y) {
        var evilRoot = evilRoots.create(x, y, 'evilRoot');
        evilRoot.animations.add('wave', [4, 3, 5, 3, 4], 10, true);
        evilRoot.animations.add('retreat', [3, 2, 1, 0], 4, false);
        evilRoot.timer = game.time.now + 5000;
    },
    evilRootUpdate: function() {
        evilRoots.forEach(function(evilRoot) {
            if (evilRoot.timer>game.time.now) {
                evilRoot.animations.play('wave');
            }
            else {
                evilRoot.animations.play('retreat');
                game.time.events.add(Phaser.Timer.SECOND * 1, function () {  evilRoot.destroy(); });
            }
        });
    },
    evilwizardCreate: function(x, y) {
        var evilwizard = evilwizards.create(x, y, 'evilWizard');
        evilwizard.health = 37;
        evilwizard.maxHealth = 37;
        //  We need to enable physics on the evilwizard
        game.physics.arcade.enable(evilwizard);
        evilwizard.body.collideWorldBounds = true;
        evilwizard.timer = game.time.now;
        evilwizard.chargeTimer = game.time.now + 1000;
        evilwizard.shotTimer = game.time.now + 3000;
        evilwizard.stopTimer = game.time.now + 8000;
        evilwizard.isAlive = true;
        
        evilwizard.healthBarBack = evilwizard.addChild(game.add.graphics(0, 0));
        evilwizard.healthBarBack.lineStyle(3, 0xba3500, 1);
        evilwizard.healthBarBack.moveTo(0, 0);
        evilwizard.healthBarBack.lineTo(20, 0);
        evilwizard.healthBar = evilwizard.addChild(game.add.graphics(0, 0));
        evilwizard.healthBar.lineStyle(3, 0xffd900, 1);
        evilwizard.healthBar.moveTo(0, 0);
        evilwizard.healthBar.lineTo(20*(evilwizard.health/evilwizard.maxHealth), 0);
        
        evilwizard.healthBarBack.visible = false;
        evilwizard.healthBar.visible = false;
        //  Our two animations, walking left and right.
        //evilwizard.animations.add('evilwizardLeft', [3, 4, 5], 10, true);
        //evilwizard.animations.add('evilwizardRight', [6, 7, 8], 10, true);
    },
    evilwizardUpdate: function() {
        evilwizards.forEach(function(evilwizard) {
            evilwizard.body.velocity.x = 0;
            evilwizard.body.velocity.y = 0;
        
            game.physics.arcade.collide(evilwizard, platforms);
            
            evilwizard.healthBar.clear();
            evilwizard.healthBar.lineStyle(3, 0xffd900, 1);
            evilwizard.healthBar.moveTo(0, 0);
            evilwizard.healthBar.lineTo(20*(evilwizard.health/evilwizard.maxHealth), 0);
            
            var x = 0;
            var y = 0;
            var beamSFX = game.add.audio('shotSFX');
            
            if (player.x < 400) {
                x = player.x + 100;
            }
            else {
                x = player.x - 100;
            }
            if (player.y < 300) {
                y = player.y + 100;
            }
            else {
                y = player.y - 100;
            }
            if (game.time.now > evilwizard.timer && evilwizard.isAlive) {
                var teleport = game.add.audio('teleport');
                teleport.play();
                evilwizard.x = x;
                evilwizard.y = y;
                evilwizard.timer = game.time.now + 10000;
            }
            if (game.time.now > evilwizard.chargeTimer && evilwizard.isAlive) {
                var charge = game.add.sprite (evilwizard.x + 16, evilwizard.y + 24, 'blueCharge');
                charge.animations.add('chargeUp', [0, 1, 2, 3, 4, 4], 2, false);
                charge.animations.play('chargeUp');
                evilwizard.chargeTimer = game.time.now + 10000;
                game.time.events.add(Phaser.Timer.SECOND * 2, function() { charge.kill(); beamSFX.play();});
            }
            if (game.time.now > evilwizard.shotTimer && evilwizard.isAlive) {
                var iceBeam = iceBeams.create(evilwizard.x + 16, evilwizard.y + 24, 'iceBeamMini');
                iceBeam.animations.add('beam', [0], true);
                game.physics.arcade.moveToXY(iceBeam, player.x, player.y, 625);
                iceBeam.rotation = game.physics.arcade.moveToXY(iceBeam, player.x, player.y, 625);
                iceBeam.animations.play('beam');
                evilwizard.shotTimer = game.time.now + 8;
                game.time.events.add(Phaser.Timer.SECOND * 5, function() { 
                                                                iceBeams.forEach(function(iceBeam) { 
                                                                    iceBeam.destroy(); 
                                                                    beamSFX.stop();
                                                                } 
                                                              );});
            }
            if (game.time.now > evilwizard.stopTimer) {
                evilwizard.shotTimer = game.time.now + 5000;
                evilwizard.stopTimer = game.time.now + 10000;
            }
            if (player.body.x < evilwizard.body.x) {
                evilwizard.frame = 10;
            }
            else {
                evilwizard.frame = 4;
            }
        });
    },
    swampCreatureCreate: function(x, y) {
        var swampCreature = swampCreatures.create(x, y, 'swampCreature');
        swampCreature.health = 35;
        swampCreature.maxHealth = 35;
        //  We need to enable physics on the swampCreature
        game.physics.arcade.enable(swampCreature);
        swampCreature.body.collideWorldBounds = true;
        swampCreature.crouchTimer = game.time.now;
        swampCreature.jumpTimer = game.time.now + 2000;
        swampCreature.shotTimer1 = game.time.now + 5000;
        swampCreature.shotTimer2 = game.time.now + 5500;
        swampCreature.shotTimer3 = game.time.now + 6000;
        swampCreature.shotTimer4 = game.time.now + 6500;
        swampCreature.shotTimer5 = game.time.now + 7000;
        swampCreature.isAlive = true;
        swampCreature.body.immovable = true;
        
        swampCreature.healthBarBack = swampCreature.addChild(game.add.graphics(0, 0));
        swampCreature.healthBarBack.lineStyle(3, 0xba3500, 1);
        swampCreature.healthBarBack.moveTo(0, 0);
        swampCreature.healthBarBack.lineTo(20, 0);
        swampCreature.healthBar = swampCreature.addChild(game.add.graphics(0, 0));
        swampCreature.healthBar.lineStyle(3, 0xffd900, 1);
        swampCreature.healthBar.moveTo(0, 0);
        swampCreature.healthBar.lineTo(20*(swampCreature.health/swampCreature.maxHealth), 0);
        
        swampCreature.healthBarBack.visible = false;
        swampCreature.healthBar.visible = false;
        //  Our two animations, walking left and right.
        swampCreature.animations.add('swampCreatureLeft', [9, 10, 11], 10, true);
        swampCreature.animations.add('swampCreatureRight', [3, 4, 5], 10, true);
    },
    swampCreatureUpdate: function() {
        swampCreatures.forEach(function(swampCreature) {
            //game.physics.arcade.collide(swampCreature, platforms);
            swampCreature.healthBar.clear();
            swampCreature.healthBar.lineStyle(3, 0xffd900, 1);
            swampCreature.healthBar.moveTo(0, 0);
            swampCreature.healthBar.lineTo(20*(swampCreature.health/swampCreature.maxHealth), 0);
            
            if (game.time.now > swampCreature.crouchTimer && swampCreature.isAlive) {
                console.log('crouch');
                swampCreature.body.velocity.x = 0;
                swampCreature.body.velocity.y = 0;
                swampCreature.animations.stop();
                swampCreature.frame = 6;
                swampCreature.crouchTimer = game.time.now + 10000;
            }
            if (game.time.now > swampCreature.jumpTimer && swampCreature.isAlive) {
                swampCreature.body.immovable = false;
                console.log('jump');
                swampCreature.body.velocity.x = 0;
                swampCreature.body.velocity.y = 0;
                swampCreature.frame = 7;
                game.physics.arcade.moveToXY(swampCreature, player.x, player.y, 350);
                swampCreature.jumpTimer = game.time.now + 10000;
            }
            if (game.time.now > swampCreature.shotTimer1 && swampCreature.isAlive) {
                swampCreature.body.immovable = true;
                console.log('fire');
                swampCreature.body.velocity.x = 0;
                swampCreature.body.velocity.y = 0;
                if (player.body.x < swampCreature.body.x) {
                    swampCreature.frame = 10;
                }
                else {
                    swampCreature.frame = 4;
                }
                var waterShot = waterShots.create(swampCreature.x+10, swampCreature.y+10, 'waterShot');
                game.physics.arcade.moveToXY(waterShot, player.x+25, player.y+15, 300);
                waterShot.rotation = game.physics.arcade.moveToXY(waterShot, player.x, player.y, 300);
                var waterShotSFX = game.add.audio('bubble');
                waterShotSFX.play();
                swampCreature.shotTimer1 = game.time.now + 10000;
            }
            if (game.time.now > swampCreature.shotTimer2 && swampCreature.isAlive) {
                console.log('fire');
                swampCreature.body.velocity.x = 0;
                swampCreature.body.velocity.y = 0;
                var waterShot = waterShots.create(swampCreature.x+10, swampCreature.y+10, 'waterShot');
                game.physics.arcade.moveToXY(waterShot, player.x+15, player.y+25, 300);
                waterShot.rotation = game.physics.arcade.moveToXY(waterShot, player.x, player.y, 300);
                var waterShotSFX = game.add.audio('bubble');
                waterShotSFX.play();
                swampCreature.shotTimer2 = game.time.now + 10000;
            }
            if (game.time.now > swampCreature.shotTimer3 && swampCreature.isAlive) {
                console.log('fire');
                swampCreature.body.velocity.x = 0;
                swampCreature.body.velocity.y = 0;
                var waterShot = waterShots.create(swampCreature.x+10, swampCreature.y+10, 'waterShot');
                game.physics.arcade.moveToXY(waterShot, player.x+5, player.y-15, 300);
                waterShot.rotation = game.physics.arcade.moveToXY(waterShot, player.x, player.y, 300);
                var waterShotSFX = game.add.audio('bubble');
                waterShotSFX.play();
                swampCreature.shotTimer3 = game.time.now + 10000;
            }
            if (game.time.now > swampCreature.shotTimer4 && swampCreature.isAlive) {
                console.log('fire');
                swampCreature.body.velocity.x = 0;
                swampCreature.body.velocity.y = 0;
                var waterShot = waterShots.create(swampCreature.x+10, swampCreature.y+10, 'waterShot');
                game.physics.arcade.moveToXY(waterShot, player.x-15, player.y-25, 300);
                waterShot.rotation = game.physics.arcade.moveToXY(waterShot, player.x, player.y, 300);
                var waterShotSFX = game.add.audio('bubble');
                waterShotSFX.play();
                swampCreature.shotTimer4 = game.time.now + 10000;
            }
            if (game.time.now > swampCreature.shotTimer5 && swampCreature.isAlive) {
                console.log('fire');
                swampCreature.body.velocity.x = 0;
                swampCreature.body.velocity.y = 0;
                var waterShot = waterShots.create(swampCreature.x+10, swampCreature.y+10, 'waterShot');
                game.physics.arcade.moveToXY(waterShot, player.x-25, player.y+15, 300);
                waterShot.rotation = game.physics.arcade.moveToXY(waterShot, player.x, player.y, 300);
                var waterShotSFX = game.add.audio('bubble');
                waterShotSFX.play();
                swampCreature.shotTimer5 = game.time.now + 10000;
            }
        });
    },
    zombieBirdCreate: function(x, y) {
        var zombieBird = zombieBirds.create(x, y, 'zombieBird');
        zombieBird.health = 13;
        zombieBird.maxHealth = 13;
        //  enable physics on the zombieBird
        game.physics.arcade.enable(zombieBird);
        zombieBird.body.collideWorldBounds = true;
        zombieBird.moveRight = true;
        zombieBird.moveRightTimer = game.time.now;
        zombieBird.moveLeftTimer = game.time.now + 5000;
        zombieBird.moveUp = true;
        zombieBird.moveUpTimer = game.time.now;
        zombieBird.moveDownTimer = game.time.now + 3000;
        //zombieBird.body.bounce.set(0.1);
        zombieBird.healthBarBack = zombieBird.addChild(game.add.graphics(0, 0));
        zombieBird.healthBarBack.lineStyle(3, 0xba3500, 1);
        zombieBird.healthBarBack.moveTo(0, 0);
        zombieBird.healthBarBack.lineTo(20, 0);
        zombieBird.healthBar = zombieBird.addChild(game.add.graphics(0, 0));
        zombieBird.healthBar.lineStyle(3, 0xffd900, 1);
        zombieBird.healthBar.moveTo(0, 0);
        zombieBird.healthBar.lineTo(20*(zombieBird.health/zombieBird.maxHealth), 0);
        
        zombieBird.healthBarBack.visible = false;
        zombieBird.healthBar.visible = false;
    
        //  Our animations.
        zombieBird.animations.add('zombieBirdLeft', [0, 1, 2, 3], 10, true);
        zombieBird.animations.add('zombieBirdRight', [4, 5, 6, 7], 10, true); 
    },
    zombieBirdUpdate: function() {
        zombieBirds.forEach(function(zombieBird) {
            zombieBird.body.velocity.x = 0;
            zombieBird.body.velocity.y = 0;
            
            zombieBird.healthBar.clear();
            zombieBird.healthBar.lineStyle(3, 0xffd900, 1);
            zombieBird.healthBar.moveTo(0, 0);
            zombieBird.healthBar.lineTo(20*(zombieBird.health/zombieBird.maxHealth), 0);
            
            game.physics.arcade.collide(zombieBird, platforms);
            if (game.time.now>zombieBird.moveRightTimer) {
                zombieBird.moveRight = true;
                zombieBird.moveRightTimer = game.time.now + 10000;
            }
            if (game.time.now>zombieBird.moveLeftTimer) {
                zombieBird.moveRight = false;
                zombieBird.moveLeftTimer = game.time.now + 10000;
            }
            if (game.time.now>zombieBird.moveUpTimer) {
                zombieBird.moveUp = true;
                zombieBird.moveUpTimer = game.time.now + 6000;
            }
            if (game.time.now>zombieBird.moveDownTimer) {
                zombieBird.moveUp = false;
                zombieBird.moveDownTimer = game.time.now + 6000;
            }
            if ((Math.abs(player.x - zombieBird.x)) + (Math.abs(player.y - zombieBird.y)) < 250) {
                game.physics.arcade.moveToObject(zombieBird, player, 146-zombieBird.health*2);
                if (player.body.x < zombieBird.body.x) {
                    zombieBird.animations.play('zombieBirdLeft');
                }
                else {
                    zombieBird.animations.play('zombieBirdRight');
                }
            }
            else {
                if (zombieBird.moveRight == false) {
                    zombieBird.animations.play('zombieBirdLeft');
                    if (zombieBird.moveRight == false) {
                        zombieBird.body.velocity.x -= 50;
                        if (zombieBird.moveUp == true) {
                            zombieBird.body.velocity.y += 15;
                        }
                        else {
                            zombieBird.body.velocity.y -= 15;
                        }
                    }
                }
                else {
                    zombieBird.animations.play('zombieBirdRight');
                    if (zombieBird.moveRight) {
                        zombieBird.body.velocity.x += 50;
                        if (zombieBird.moveUp == true) {
                            zombieBird.body.velocity.y += 15;
                        }
                        else {
                            zombieBird.body.velocity.y -= 15;
                        }
                    }
                }
            }
        });
    }, 
    miniZombieBirdCreate: function(x, y) {
        var miniZombieBird = miniZombieBirds.create(x, y, 'miniZombieBird');
        miniZombieBird.health = 10;
        miniZombieBird.maxHealth = 10;
        //  enable physics
        game.physics.arcade.enable(miniZombieBird);
        miniZombieBird.body.collideWorldBounds = true;
        
        miniZombieBird.healthBarBack = miniZombieBird.addChild(game.add.graphics(0, 0));
        miniZombieBird.healthBarBack.lineStyle(3, 0xba3500, 1);
        miniZombieBird.healthBarBack.moveTo(0, 0);
        miniZombieBird.healthBarBack.lineTo(20, 0);
        miniZombieBird.healthBar = miniZombieBird.addChild(game.add.graphics(0, 0));
        miniZombieBird.healthBar.lineStyle(3, 0xffd900, 1);
        miniZombieBird.healthBar.moveTo(0, 0);
        miniZombieBird.healthBar.lineTo(20*(miniZombieBird.health/miniZombieBird.maxHealth), 0);
        
        miniZombieBird.healthBarBack.visible = false;
        miniZombieBird.healthBar.visible = false;
        //  animations.
        miniZombieBird.animations.add('miniZombieBirdLeft', [0, 1, 2, 3], 10, true);
        miniZombieBird.animations.add('miniZombieBirdRight', [4, 5, 6, 7], 10, true); 
    },
    miniZombieBirdUpdate: function() {
        miniZombieBirds.forEach(function(miniZombieBird) {
            miniZombieBird.body.velocity.x = 0;
            miniZombieBird.body.velocity.y = 0;
            
            miniZombieBird.healthBar.clear();
            miniZombieBird.healthBar.lineStyle(3, 0xffd900, 1);
            miniZombieBird.healthBar.moveTo(0, 0);
            miniZombieBird.healthBar.lineTo(20*(miniZombieBird.health/miniZombieBird.maxHealth), 0);
            
            game.physics.arcade.collide(miniZombieBird, platforms);
            game.physics.arcade.moveToObject(miniZombieBird, player, 201-miniZombieBird.health*2);
            if (player.body.x < miniZombieBird.body.x) {
                    miniZombieBird.animations.play('miniZombieBirdLeft');
            }
            else {
                    miniZombieBird.animations.play('miniZombieBirdRight');
            }
        });
    }, 
    coinCreate: function(x, y, colour) {
        var star;
        if (colour=="red") {
            star = stars.create(x, y, 'ChestRed');
            star.contents = 2;
        }
        else if (colour=="blue") {
            star = stars.create(x, y, 'ChestBlue');
            star.contents = 5;
        }
        else if (colour=="green") {
            star = stars.create(x, y, 'ChestGreen');
            star.contents = 10;
        }
        else if (colour=="yellow") {
            star = stars.create(x, y, 'ChestYellow');
            star.contents = 25;
        }
        //
    },
    coinUpdate: function() {
        stars.forEach(function(coin) {
            //
        });
    },
    collectStar: function(player, star) {
        // Removes the item from the screen
        this.collectSFX();
        //  Add and update the items
        var chance = 1 + Math.random()*5;
        var coinAmount = Math.round(star.contents + (chance*star.contents));
        var coin = game.add.sprite(star.x, star.y, 'coin');
        coin.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10, true);
        coin.animations.play('rotate');
        var coinText = game.add.bitmapText(coin.x+6, coin.y+8, 'font', '', 12);
        coinText.text = coinAmount;
        coinText.tint = 000000;
        game.time.events.add(Phaser.Timer.SECOND * 1, function () {
            coin.kill();
            coinText.kill();
            if (chance<=1.06) {
               var wand = game.add.sprite(coin.x, coin.y, 'wand');
               var wandText = game.add.bitmapText(wand.x+6, wand.y+12, 'font', '', 12);
               wandText.text = "Weaponsmith +";
               wandText.tint = 000000;
               weaponsmithDropReward += weaponsmithDRBoost;
               game.time.events.add(Phaser.Timer.SECOND * 1, function () { wand.kill(); wandText.text = ""; });
            }
            else if (chance<=1.12) {
               var armour = game.add.sprite(coin.x, coin.y, 'armour');
               var armourText = game.add.bitmapText(armour.x+6, armour.y+12, 'font', '', 12);
               armourText.text = "Armourer +";
               armourText.tint = 000000;
               armourerDropReward += armourerDRBoost;
               game.time.events.add(Phaser.Timer.SECOND * 1, function () { armour.kill(); armourText.text = ""; });
            }
            else if (chance<=1.18) {
               var ring = game.add.sprite(coin.x, coin.y, 'ring');
               var ringText = game.add.bitmapText(ring.x+6, ring.y+12, 'font', '', 12);
               ringText.text = "Enchanter +";
               ringText.tint = 000000;
               enchanterDropReward += enchanterDRBoost;
               game.time.events.add(Phaser.Timer.SECOND * 1, function () { ring.kill(); ringText.text = ""; });
            }
            else if (chance<=1.24) {
               var buff = game.add.sprite(coin.x, coin.y, 'buff');
               var buffText = game.add.bitmapText(buff.x+6, buff.y+12, 'font', '', 12);
               buffText.text = "Trainer +";
               buffText.tint = 000000;
               trainerDropReward += trainerDRBoost;
               game.time.events.add(Phaser.Timer.SECOND * 1, function () { buff.kill(); buffText.text = ""; });
            }
        });
        coins += coinAmount;
        if (coins>=1000000) {
            coinsText.text = (Math.round(coins/1000))/1000 + "M";
        }
        else {
            coinsText.text = coins;
        }
        mana ++;
        manaText.text = "MP: " + mana + "/" + maxMana;
        star.kill();
    },
    badTouch: function() {
        var damage = Math.floor(1 + stage/32);
        console.log(damage);
        if (health>damage) {
            health -= damage;
            var grunt = game.add.audio('grunt');
            grunt.play();
            healthText.text = 'HP: ' + health + '/' + maxHealth;
            invulnerableTimer = game.time.now + invulnerableSpacing;
        }
        else {
            this.playerDeath();
        }
    },
    badTouchTwo: function() {
        var damage = Math.floor(2 + stage/25);
        console.log(damage);
        if (health>damage) {
            health -= damage;
            var grunt = game.add.audio('grunt');
            grunt.play();
            healthText.text = 'HP: ' + health + '/' + maxHealth;
            invulnerableTimer = game.time.now + invulnerableSpacing;
            if (stage==55 && bossZombieKilled==false) {
                this.badTouch();
            }
        }
        else {
            this.playerDeath();
        }
    },
    freeze: function() {
        if (game.time.now>freezeTimer) {
            console.log(runSpeed);
            runSpeed = 2*(runSpeed/3);
            console.log(runSpeed);
            freezeTimer = game.time.now + 4000;
            game.time.events.add(Phaser.Timer.SECOND * 3, function() { runSpeed = runSpeed*1.5; console.log(runSpeed);});
            }
    },
    moveStar: function(x, star) {
        star.y += 50;
    },
    moveEvilWizard: function(x, evilwizard) {
        evilwizard.x += 20;
    },
    /*moveFlame: function(x, flame) {
        flame.x += 20;
    },
    rockKill: function(rock) {
        rock.kill();
    },*/
    fire: function() {
        var bullet = bullets.create(player.x + 10, player.y + 15, 'bullet');
        bullet.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 13, true);
        var emitter = game.add.emitter(game.world.centerX, game.world.centerY, 20);
        emitter.makeParticles('bulletParticles', [0, 1, 2, 3]);
        emitter.gravity.y = 0;
        emitter.forEach(function(particle) {
            particle.body.allowGravity = false;
        }, this);
        emitter.start(false, 500, 50);
        bullet.addChild(emitter);
        emitter.y = 0;
        emitter.x = 0;
        emitter.lifespan = 500;
        bullet.scale.x = 0.8;
        bullet.scale.y = 0.8;
        bullet.checkWorldBounds = true;
        bullet.outOfBoundsKill = true;
        
        if (cursors.left.isDown) {
            game.physics.arcade.moveToXY(bullet, 0, bullet.y, shotSpeed);
            bullet.animations.play('spin');
            bullet.travel = "left";
            emitter.minParticleSpeed.set(-shotSpeed, 0);
            emitter.maxParticleSpeed.set(-shotSpeed, 0);
            emitter.rotation = 3.14;
            emitter.x = -14;
            emitter.y = -8;
        }
        else if (cursors.right.isDown) {
            game.physics.arcade.moveToXY(bullet, 832, bullet.y, shotSpeed);
            bullet.animations.play('spin');
            bullet.travel = "right";
            emitter.minParticleSpeed.set(shotSpeed, 0);
            emitter.maxParticleSpeed.set(shotSpeed, 0);
            emitter.rotation = 3.14;
            emitter.x = 14;
            emitter.y = -8;
        }
        else if (cursors.up.isDown) {
            game.physics.arcade.moveToXY(bullet, bullet.x, 0, shotSpeed);
            bullet.animations.play('spin');
            bullet.travel = "up";
            emitter.minParticleSpeed.set(0, -shotSpeed);
            emitter.maxParticleSpeed.set(0, -shotSpeed);
            emitter.rotation = 3.14;
            emitter.x = -8;
            emitter.y = -14;
        }
        else if (cursors.down.isDown) {
            game.physics.arcade.moveToXY(bullet, bullet.x, 600, shotSpeed);
            bullet.animations.play('spin');
            bullet.travel = "down";
            emitter.minParticleSpeed.set(0, shotSpeed);
            emitter.maxParticleSpeed.set(0, shotSpeed);
            emitter.rotation = 3.14;
            emitter.x = -8;
            emitter.y = 14;
        }
        this.pew();
        bulletTimer = game.time.now + bulletSpacing;
    },
    pew: function() {
        var pewSound = game.add.audio('pew');
        pewSound.play();
    },
    collectSFX: function() {
        var itemCollect = game.add.audio('collect');
        itemCollect.play();
    },
    shortExplodeSFX: function() {
        var shortExplodeSound = game.add.audio('shortExplode');
        shortExplodeSound.play();
    },
    /*flameShotSFX: function() {
        var flameShot = game.add.audio('flameShot');
        flameShot.play();
    },*/
    sizzleSFX: function() {
        var sizzle = game.add.audio('sizzle');
        sizzle.play();
    },
    skeletonDeathSFX: function() {
        var skeletonDeath = game.add.audio('skeletonDeath');
        skeletonDeath.play();
    },
    spiderDeathSFX: function() {
        var spiderDeath = game.add.audio('spiderDeath');
        spiderDeath.play();
    },
    mummyDeathSFX: function() {
        var mummyDeath = game.add.audio('mummyDeath');
        mummyDeath.play();
    },
    zombieDeathSFX: function() {
        var zombieDeath = game.add.audio('zombieDeath');
        zombieDeath.play();
    },
    zombieRisingSFX: function() {
        var zombieRising = game.add.audio('zombieRising');
        zombieRising.play();
    },
    maleDeathSFX: function() {
        var maleDeath = game.add.audio('maleDeath');
        maleDeath.play();
    },
    birdDeathSFX: function() {
        var birdDeath = game.add.audio('birdDeath');
        birdDeath.play();
    },
    woodSmashSFX: function() {
        var woodSmash = game.add.audio('woodSmash');
        woodSmash.play();
    },
    smallExplosion: function(x, y) {
        var explode = game.add.sprite(x, y, 'explosionMini');
        explode.animations.add('explosion', [0, 1, 2, 3], 30, false);
        explode.animations.play('explosion');
        this.shortExplodeSFX();
        game.time.events.add(Phaser.Timer.SECOND * 0.2, function () {   explode.destroy();  });
    },
    bulletKill: function(bullet) {
        bullet.kill();
    },
    badKill: function(bullet, baddie) {
        this.smallExplosion(bullet.x, bullet.y);
        if (Math.random()>0.66) {
            if (bullet.travel == 'left') {
                baddie.x -= knockback;
            }
            else if (bullet.travel == 'right') {
                baddie.x += knockback;
            }
            else if (bullet.travel == 'up') {
                baddie.y -= knockback;
            }
            else if (bullet.travel == 'down') {
                baddie.y += knockback;
            }
        }
        bullet.kill();
        if (baddie.health <= shotPower) {
            this.coinCreate(baddie.x, baddie.y, "red");
            if (Math.random()>0.88 && baddie.colour=="red") {
               this.coinCreate(baddie.x+5, baddie.y+5, "blue"); 
            }
            else if (Math.random()>0.92) {
               this.coinCreate(baddie.x+5, baddie.y+5, "red"); 
            }
            if (Math.random()>0.8) {
                var risenZombie = game.add.sprite(baddie.x, baddie.y, 'zombieRising');
                risenZombie.animations.add('rise', [0, 1, 2], 3, false);
                risenZombie.animations.play('rise');
                var self = this;
                game.time.events.add(Phaser.Timer.SECOND *1, function () { risenZombie.destroy(); self.zombieRisingSFX(); self.baddieCreate(baddie.x, baddie.y, "green"); baddieCount ++; });
            }
            baddie.kill();
            this.zombieDeathSFX();
            var death = game.add.sprite(baddie.x, baddie.y, 'deathSheet');
            if (baddie.colour=="red") {
                xp += 4;
                death.frame = 11;
            }
            else {
                xp += 3;
                death.frame = 10;
            }
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            this.xpDisplayConvert();
            baddieCount --;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            baddie.health -= shotPower;
            baddie.healthBarBack.visible = true;
            baddie.healthBar.visible = true;
        }
    },
    bossZombieKill: function(bullet, bossZombie) {
        this.smallExplosion(bullet.x, bullet.y);
        if (Math.random()>0.66) {
            if (bullet.travel == 'left') {
                bossZombie.x -= knockback/10;
            }
            else if (bullet.travel == 'right') {
                bossZombie.x += knockback/10;
            }
            else if (bullet.travel == 'up') {
                bossZombie.y -= knockback/10;
            }
            else if (bullet.travel == 'down') {
                bossZombie.y += knockback/10;
            }
        }
        bullet.kill();
        if (bossZombie.health <= shotPower) {
            this.coinCreate(bossZombie.x, bossZombie.y, "yellow");
            this.coinCreate(bossZombie.x+15, bossZombie.y-2, "yellow");
            this.coinCreate(bossZombie.x-15, bossZombie.y+2, "yellow");
            var wand = game.add.sprite(bossZombie.x-10, bossZombie.y+10, 'wand');
            weaponsmithDropReward ++;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () { wand.kill(); });
            var armour = game.add.sprite(bossZombie.x+10, bossZombie.y+10, 'armour');
            armourerDropReward ++;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () { armour.kill(); });
            var ring = game.add.sprite(bossZombie.x+10, bossZombie.y-10, 'ring');
            enchanterDropReward ++;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () { ring.kill(); });
            var buff = game.add.sprite(bossZombie.x-10, bossZombie.y-10, 'buff');
            trainerDropReward ++;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () { buff.kill(); });
            if (Math.random()>0.8 && bossZombie.colour=="red") {
               this.coinCreate(bossZombie.x+5, bossZombie.y+5, "yellow"); 
               this.coinCreate(bossZombie.x-5, bossZombie.y-5, "yellow"); 
            }
            else if (Math.random()>0.9) {
               this.coinCreate(bossZombie.x+5, bossZombie.y+5, "green"); 
               this.coinCreate(bossZombie.x-5, bossZombie.y-5, "green"); 
            }
            if (Math.random()>0.8) {
                this.baddieCreate(bossZombie.x, bossZombie.y, "red");
                baddieCount ++;
            }
            bossZombie.kill();
            bossZombieKilled = true;
            this.zombieDeathSFX();
            var death = game.add.sprite(bossZombie.x, bossZombie.y, 'deathSheet');
            if (bossZombie.colour=="red") {
                xp += 330;
                death.frame = 11;
            }
            else {
                xp += 220;
                death.frame = 10;
            }
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            this.xpDisplayConvert();
            baddieCount -= 62;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            bossZombie.health -= shotPower;
            //var self = this;
            if (bossZombie.timer+bossZombie.interval<=game.time.now) {
                this.baddieCreate(bossZombie.x, bossZombie.y, "red");
                bossZombie.timer = game.time.now;
                baddieCount ++;
            }
            bossZombie.healthBarBack.visible = true;
            bossZombie.healthBar.visible = true;
        }
    },
    spiderKill: function(bullet, spider) {
        this.smallExplosion(bullet.x, bullet.y);
        if (Math.random()>0.66) {
            if (bullet.travel == 'left') {
                spider.x -= knockback;
            }
            else if (bullet.travel == 'right') {
                spider.x += knockback;
            }
            else if (bullet.travel == 'up') {
                spider.y -= knockback;
            }
            else if (bullet.travel == 'down') {
                spider.y += knockback;
            }
        }
        bullet.kill();
        if (spider.health <= shotPower) {
            this.coinCreate(spider.x, spider.y, "red");
            if (Math.random()>0.85) {
               this.coinCreate(spider.x+5, spider.y+5, "red"); 
            }
            spider.kill();
            var death = game.add.sprite(spider.x, spider.y, 'deathSheet');
            death.frame = 7;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            this.spiderDeathSFX();
            xp += 5;
            this.xpDisplayConvert();
            baddieCount -= 3;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            spider.health -= shotPower;
            spider.healthBarBack.visible = true;
            spider.healthBar.visible = true;
        }
    },
    swordZombieKill: function(bullet, swordZombie) {
        this.smallExplosion(bullet.x, bullet.y);
        if (Math.random()>0.66) {
            if (bullet.travel == 'left') {
                swordZombie.x -= knockback;
            }
            else if (bullet.travel == 'right') {
                swordZombie.x += knockback;
            }
            else if (bullet.travel == 'up') {
                swordZombie.y -= knockback;
            }
            else if (bullet.travel == 'down') {
                swordZombie.y += knockback;
            }
        }
        bullet.kill();
        if (swordZombie.health <= shotPower) {
            this.coinCreate(swordZombie.x, swordZombie.y, "red");
            if (Math.random()>0.7) {
               this.coinCreate(swordZombie.x+5, swordZombie.y+5, "red"); 
            }
            swordZombie.kill();
            swordZombie.isAlive = false;
            var death = game.add.sprite(swordZombie.x, swordZombie.y, 'deathSheet');
            death.frame = 10;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            this.zombieDeathSFX();
            xp += 6;
            this.xpDisplayConvert();
            baddieCount -= 4;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            swordZombie.health -= shotPower;
            swordZombie.healthBarBack.visible = true;
            swordZombie.healthBar.visible = true;
        }
    },
    skeletonKill: function(bullet, skeleton) {
        this.smallExplosion(bullet.x, bullet.y);
        if (Math.random()>0.66) {
            if (bullet.travel == 'left') {
                skeleton.x -= knockback;
            }
            else if (bullet.travel == 'right') {
                skeleton.x += knockback;
            }
            else if (bullet.travel == 'up') {
                skeleton.y -= knockback;
            }
            else if (bullet.travel == 'down') {
                skeleton.y += knockback;
            }
        }
        bullet.kill();
        if (skeleton.health <= shotPower) {
            this.coinCreate(skeleton.x, skeleton.y, "blue");
            if (Math.random()>0.7 && skeleton.colour=="grey") {
               this.coinCreate(skeleton.x+5, skeleton.y+5, "red"); 
            }
            else if (Math.random()>0.6 && skeleton.colour=="red") {
               this.coinCreate(skeleton.x+5, skeleton.y+5, "blue"); 
            }
            skeleton.kill();
            var death = game.add.sprite(skeleton.x, skeleton.y, 'deathSheet');
            death.frame = 6;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            this.skeletonDeathSFX();
            if (skeleton.colour=="red") {
                xp += 8;
                death.tint = 0xba3500;
            }
            else {
                xp += 6;
            }
            this.xpDisplayConvert();
            baddieCount -= 5;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            skeleton.health -= shotPower;
            skeleton.healthBarBack.visible = true;
            skeleton.healthBar.visible = true;
        }
    },
    flameKill: function(bullet, flame) {
        this.smallExplosion(bullet.x, bullet.y);
        bullet.kill();
        if (flame.health <= shotPower) {
            this.coinCreate(flame.x, flame.y, "red");
            if (Math.random()>0.73) {
               this.coinCreate(flame.x+5, flame.y+5, "blue"); 
            }
            flame.kill();
            flame.isAlive = false;
            this.sizzleSFX();
            xp += 8;
            this.xpDisplayConvert();
            baddieCount -= 6;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            flame.health -= shotPower;
            flame.healthBarBack.visible = true;
            flame.healthBar.visible = true;
        }
    },
    mummyKill: function(bullet, mummy) {
        this.smallExplosion(bullet.x, bullet.y);
        if (Math.random()>0.75) {
            if (bullet.travel == 'left') {
                mummy.x -= knockback;
            }
            else if (bullet.travel == 'right') {
                mummy.x += knockback;
            }
            else if (bullet.travel == 'up') {
                mummy.y -= knockback;
            }
            else if (bullet.travel == 'down') {
                mummy.y += knockback;
            }
        }
        bullet.kill();
        if (mummy.health <= shotPower) {
            this.coinCreate(mummy.x, mummy.y, "blue");
            if (Math.random()>0.67) {
               this.coinCreate(mummy.x+5, mummy.y+5, "blue"); 
            }
            mummy.kill();
            if (backgroundScene=="wasteland") {
                var death = game.add.sprite(mummy.x, mummy.y, 'deathSheet');
                death.frame = 5;
            }
            else {
                var death = game.add.sprite(mummy.x, mummy.y, 'golem');
                death.frame = 14;
            }
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            this.mummyDeathSFX();
            xp += 9;
            this.xpDisplayConvert();
            baddieCount -= 7;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            mummy.health -= shotPower;
            mummy.healthBarBack.visible = true;
            mummy.healthBar.visible = true;
        }
    },
    zombieBirdKill: function(bullet, zombieBird) {
        this.smallExplosion(bullet.x, bullet.y);
        if (Math.random()>0.5) {
            if (bullet.travel == 'left') {
                zombieBird.x -= knockback;
            }
            else if (bullet.travel == 'right') {
                zombieBird.x += knockback;
            }
            else if (bullet.travel == 'up') {
                zombieBird.y -= knockback;
            }
            else if (bullet.travel == 'down') {
                zombieBird.y += knockback;
            }
        }
        bullet.kill();
        if (zombieBird.health <= shotPower) {
            this.miniZombieBirdCreate(zombieBird.x, zombieBird.y+50);
            this.miniZombieBirdCreate(zombieBird.x, zombieBird.y-50);
            if (player.x < zombieBird.x) {
               this.miniZombieBirdCreate(zombieBird.x+50, zombieBird.y); 
            }
            else {
               this.miniZombieBirdCreate(zombieBird.x-50, zombieBird.y); 
            }
            this.coinCreate(zombieBird.x, zombieBird.y, "blue");
            if (Math.random()>0.7) {
               this.coinCreate(zombieBird.x+5, zombieBird.y+5, "red"); 
            }
            zombieBird.kill();
            var death = game.add.sprite(zombieBird.x, zombieBird.y, 'deathSheet');
            death.frame = 12;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            this.birdDeathSFX();
            xp += 8;
            this.xpDisplayConvert();
            baddieCount -=2;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            zombieBird.health -= shotPower;
            zombieBird.healthBarBack.visible = true;
            zombieBird.healthBar.visible = true;
        }
    },
    miniZombieBirdKill: function(bullet, miniZombieBird) {
        this.smallExplosion(bullet.x, bullet.y);
        if (Math.random()>0.4) {
            if (bullet.travel == 'left') {
                miniZombieBird.x -= knockback;
            }
            else if (bullet.travel == 'right') {
                miniZombieBird.x += knockback;
            }
            else if (bullet.travel == 'up') {
                miniZombieBird.y -= knockback;
            }
            else if (bullet.travel == 'down') {
                miniZombieBird.y += knockback;
            }
        }
        bullet.kill();
        if (miniZombieBird.health <= shotPower) {
            this.coinCreate(miniZombieBird.x, miniZombieBird.y, "blue");
            if (Math.random()>0.7) {
               this.coinCreate(miniZombieBird.x+5, miniZombieBird.y+5, "red"); 
            }
            miniZombieBird.kill();
            var death = game.add.sprite(miniZombieBird.x, miniZombieBird.y, 'deathSheet');
            death.frame = 4;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            this.birdDeathSFX();
            xp += 6;
            this.xpDisplayConvert();
            baddieCount -= 2;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            miniZombieBird.health -= shotPower;
            miniZombieBird.healthBarBack.visible = true;
            miniZombieBird.healthBar.visible = true;
        }
    },
    swampCreatureKill: function(bullet, swampCreature) {
        this.smallExplosion(bullet.x, bullet.y);
        bullet.kill();
        if (swampCreature.health <= shotPower) {
            this.coinCreate(swampCreature.x, swampCreature.y, "green");
            if (Math.random()>0.5) {
               this.coinCreate(swampCreature.x+5, swampCreature.y+5, "blue"); 
            }
            swampCreature.kill();
            var death = game.add.sprite(swampCreature.x, swampCreature.y, 'deathSheet');
            death.frame = 13;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            var swampCreatureDeathSFX = game.add.audio('swampCreatureDeath');
            swampCreatureDeathSFX.play();
            swampCreature.isAlive = false;
            xp += 14;
            this.xpDisplayConvert();
            baddieCount -= 9;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            swampCreature.health -= shotPower;
            swampCreature.healthBarBack.visible = true;
            swampCreature.healthBar.visible = true;
        }
    },
    treeBeastKill: function(bullet, treeBeast) {
        this.smallExplosion(bullet.x, bullet.y);
        bullet.kill();
        if (treeBeast.health <= shotPower) {
            this.coinCreate(treeBeast.x, treeBeast.y, "green");
            if (Math.random()>0.5) {
               this.coinCreate(treeBeast.x+5, treeBeast.y+5, "blue"); 
            }
            treeBeast.kill();
            treeBeast.isAlive = false;
            this.woodSmashSFX();
            xp += 14;
            this.xpDisplayConvert();
            if (stage==65 && bossTreeBeastKilled==false) {
                baddieCount -= 5.2;
            }
            else {
                baddieCount -= 9;
            }
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            treeBeast.health -= shotPower;
            treeBeast.healthBarBack.visible = true;
            treeBeast.healthBar.visible = true;
        }
    },
    evilwizardKill: function(bullet, evilwizard) {
        this.smallExplosion(bullet.x, bullet.y);
        bullet.kill();
        if (evilwizard.health <= shotPower) {
            this.coinCreate(evilwizard.x, evilwizard.y, "yellow");
            if (Math.random()>0.5) {
               this.coinCreate(evilwizard.x+5, evilwizard.y+5, "green"); 
            }
            evilwizard.kill();
            var death = game.add.sprite(evilwizard.x, evilwizard.y, 'deathSheet');
            death.frame = 3;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            this.maleDeathSFX();
            evilwizard.isAlive = false;
            xp += 19;
            this.xpDisplayConvert();
            baddieCount -= 10;
            this.checkLevelUp();
            this.checkStageComplete();
        }
        else {
            evilwizard.health -= shotPower;
            evilwizard.healthBarBack.visible = true;
            evilwizard.healthBar.visible = true;
        }
    },
    checkStageComplete: function() {
        if (baddieCount <= 0 && doorAvailable==false) {
            if (player.x < 75 && player.y < 145) {
                doorway = game.add.sprite(750, 70, 'doorway');
                door = game.add.sprite(750, 70, 'animateddoor');
            }
            else {
                doorway = game.add.sprite(5, 70, 'doorway');
                door = game.add.sprite(5, 70, 'animateddoor');
            }
            doorAvailable = true;
            manaRegenEndLevelAdjust = 250;
            runSpeedEndLevelAdjust = 100;
            door.animations.add('openDoor', [0, 1, 2, 3], 4, false);
            game.physics.arcade.enable(door);
            door.body.immovable = true;
            if (stage==65) {
                bossTreeBeastKilled = true;
            }
        }
    },
    doorOpen: function() {
        door.animations.play('openDoor');
        var doorOpenSFX = game.add.audio('creakylightwoodendoor1');
        doorOpenSFX.play();
        manaRegenEndLevelAdjust = 0;
        runSpeedEndLevelAdjust = 0;
        player.kill();
        door.kill();
        doorAvailable = false;
        var self = this;
        game.time.events.add(Phaser.Timer.SECOND * 2, function () {   self.startNextLevel();  });
    },
    manaRegen: function() {
        if (game.time.now>manaRegenTimer && mana<maxMana) {
            mana++;
            manaRegenTimer = game.time.now + manaRegenInterval;
            manaText.text = "MP: " + mana + "/" + maxMana;
        }
    },
    questComplete: function() {
        questEndTime = game.time.now;
        game.state.start('city');
    },
    checkLevelUp: function() {
        while (xp >= nextLevelXp) {
            levelUpImage = game.add.sprite(132, 15, 'levelUp');
            levelUpImage.animations.add('flash', [0, 1, 2], 6, true);
            levelUpImage.animations.play('flash');
            var levelUpSFX = game.add.audio('levelUpSound');
            levelUpSFX.play();
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {   levelUpImage.kill();  });
            xp -= nextLevelXp;
            nextLevelXp += Math.round(9 + playerLevel/2);
            maxHealth ++;
            maxMana += 2;
            shotPower += 0.035;
            health++;
            mana = maxMana;
            playerLevel ++;
            this.xpDisplayConvert();
            manaText.text = "MP: " + mana + "/" + maxMana;
            healthText.text = 'HP: ' + health + "/" + maxHealth;
            playerLevelText.text = playerLevel;
        }
    },
    startNextLevel: function() {
        gameMusic.stop();
        stage ++;
        starTotal += 0.75;
        baddieTotal ++;
        baddieCount = baddieTotal;
        baddieCreated = 0;
        chestCreated = 0;
        flameCount = 0;
        evilwizardCount = 0;
        zombieBirdCount = 0;
        swampCreatureCount = 0;
        game.world.removeAll();
        array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
             23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
             43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
             63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
             83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
             102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
             118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130];
        sceneryCount = 0;
        /*if (beamUnlockShown==true) {
            beamWeapon = true;
        }*/
        if (manaRefillUnlockShown==true) {
            manaRefillAvailable = true;
        }
        this.create();
    },
    playerDeath: function() {
        // Removes the player from the screen
        player.kill();
        gameMusic.stop();
        this.maleDeathSFX();
        var death = game.add.sprite(player.x, player.y, 'deathSheet');
        death.frame = 0;
        var teleportSFX = game.add.audio('teleport');
        game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); 
                                                                     var playerTeleport = game.add.sprite(death.x+5, death.y+5, 'playerTeleport');
                                                                     playerTeleport.animations.add('teleport', [0, 1, 2, 3], 8, false);
                                                                     playerTeleport.animations.play('teleport');
                                                                     teleportSFX.play();
                                                                     game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {  playerTeleport.kill(); });
                                                                     });
        player.isAlive = false;
        healthText.text = "HP: 0/" + maxHealth;
        if (stage>bestStage) {
            while (stage>bestStage) {
                bestStage++;
                reward += bestStage;
            }
            if (stage>30) {
                reward = reward*1.1;
            }
            levelRecordBackground.x = 96;
            levelRecord.text = "Congratulations!";
            levelRecord2.text = "New Highest Stage Record!";
            levelRecord3.text = "            You receive " + Math.round(reward*10) + " XP and " + Math.round(reward*20) + " Coins!";
            xp += Math.round(reward*10);
            this.xpDisplayConvert();
            this.checkLevelUp();
            coins += Math.round(reward*20);
            if (coins>=1000000) {
                coinsText.text = (Math.round(coins/1000))/1000 + "M";
            }
            else {
                coinsText.text = coins;
            }
            reward = 0;
        }
        questEndCoins = coins;
        questTotalCoins = questEndCoins - questStartCoins;
        resultBackground.x = 96;
        resultText.text = ' Your Majesty, it is time to come home!';
        resultText2.text = ' You found ' + questTotalCoins + ' coins on your quest.'
        resultText3.text = "   The Merchant Guild will double your coins for a minute of your time."
        var addStartButton = game.add.button(190, 250, 'blankButton', this.adWatch, this);
        var addStartText = game.add.bitmapText(220, 275, 'font', 'Yes, watch ad', 16);
        var endLevelButton = game.add.button(410, 250, 'blankButton', this.questComplete, this);
        var endLevelText = game.add.bitmapText(440, 275, 'font', 'No, return to my City', 16);
        if (first==true) {
            assistant = "welcomeBack";
            first = false;
        }
    },
    adWatch: function() {
        coins += questTotalCoins;
        questEndTime = game.time.now;
        game.state.start('city');
    },
    beamWeaponActivate: function() {
        manaCost = 1;
        bulletSpacing = bulletSpacing/20;
        shotPower += shotSpeed/100;
        beamWeapon = false;
        beamSprite.frame = 0;
        var self = this;
        game.time.events.add(Phaser.Timer.SECOND * 5, function () {   manaCost = 5; bulletSpacing = bulletSpacing*20; shotPower -= shotSpeed/100; self.beamWeaponTimer(); });
    },
    beamWeaponTimer: function() {
        timerBeam = game.time.create();
        // Create a delayed event 5m from now
        timerBeamEvent = timerBeam.add(Phaser.Timer.MINUTE * 5, this.endBeamTimer, this);
        timerBeam.start();
    },
    beamTimerUpdate: function() {
        if (timerBeam!=null && timerBeam.running) {
            beamSprite.frame = 0;
            beamText.fontSize = 19;
            beamText.x = 234;
            beamText.y = 607;
            beamText.text = this.formatTime(Math.round((timerBeamEvent.delay - timerBeam.ms) / 1000));
        }
    },
    endBeamTimer: function() {
        // Stop the timer when the delayed event triggers
        timerBeam.stop();
        beamWeapon = true;
        beamSprite.frame = 1;
        beamText.fontSize = 16;
        beamText.x = 230;
        beamText.y = 608;
        beamText.text = 'SPACE';
    },
    manaRefillActivate: function() {
        mana = maxMana;
        manaRefillAvailable = false;
        bottleSprite.frame = 0;
        bottleText.text = '';
        this.manaRefillTimer();
    },
    manaRefillTimer: function() {
        timerMana = game.time.create();
        // Create a delayed event 5m from now
        timerManaEvent = timerMana.add(Phaser.Timer.MINUTE * 5, this.endManaRefillTimer, this);
        timerMana.start();
    },
    manaRefillTimerUpdate: function() {
        if (timerMana!=null && timerMana.running) {
            bottleSprite.frame = 0;
            bottleText.x = 532;
            bottleText.y = 607;
            bottleText.fontSize = 16;
            bottleText.text = this.formatTime(Math.round((timerManaEvent.delay - timerMana.ms) / 1000));
        }
    },
    endManaRefillTimer: function() {
        // Stop the timer when the delayed event triggers
        timerMana.stop();
        manaRefillAvailable = true;
        bottleSprite.frame = 1;
        bottleText.x = 536;
        bottleText.y = 605;
        bottleText.fontSize = 24;
        bottleText.text = ' Q';
    },
    formatTime: function(s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);   
    },
    treeCreate: function(x, y) {
        var tree = platforms.create(x, y, 'tree');
        tree.body.setSize(35, 20, 0, 33);
        tree.body.immovable = true;
        tree.Shadow = tree.addChild(game.add.sprite(-18, 11, 'treeShadow'));
        tree.Shadow.alpha = 0.35;
    },
    xpDisplayConvert: function() {
        if (xp>=1000) {
            xpDisplay = (Math.round(xp/100))/10 + 'k'; 
        }
        else {
            xpDisplay = Math.round(xp);
        }
        if (nextLevelXp>=1000) {
            nextLevelXpDisplay = (Math.round(nextLevelXp/100))/10 + 'k'; 
        }
        else {
            nextLevelXpDisplay = Math.round(nextLevelXp);
        }
        xpText.text = "XP: " + xpDisplay + '/' + nextLevelXpDisplay;
    },
};