/*global game*/
/*global Phaser */
/* global player */
/* global bullets */
var wallEdgeArray = [0, 1, 2, 3, 4];
var wallArray = [1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24];
var torchArray = [1, 3, 9, 13, 17, 19];
var barriers;
var targets;
var lights;
var soundTriggers;

var tutorialPractice = "first";
var tutorialPracticeSprite;
var tutorialPracticeSpeechBubble;
var tutorialPracticeText = "";
var tutorialPracticeText2 = "";
var tutorialPracticeText3 = "";
var tutorialPracticeText4 = "";
var tutorialPracticeText5 = "";
var tutorialPracticeText6 = "";

var trainerSpeechBubble;
var trainerText = "";
var trainerText2 = "";
var trainerText3 = "";
var trainerText4 = "";
var trainerText5 = "";
var trainerText6 = "";
var nextPractice = "right";

var tutorialMusic;
var tutorialMusicPlaying;
var successSFX;

var tutorialState = {
    create: function() {
        game.add.sprite(0, 0, 'tutorialBackground');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        if (tutorialMusicPlaying!=true) {
            tutorialMusic = game.add.audio('tutorialMusic');
            tutorialMusic.allowMultiple = false;
            tutorialMusic.play();
            tutorialMusicPlaying = true;
        }
       
        // The player and its settings
        player = game.add.sprite(224, 126, 'dude');
        successSFX = game.add.audio('collect');
        //  We need to enable physics on the player
        game.physics.arcade.enable(player);
        player.body.setSize(26, 30, 3, 3);
        player.body.collideWorldBounds = true;
        player.isAlive = true;
        //  Our animations, walking left, right, up and down.
        player.animations.add('left', [9, 10, 11], 10, true);
        player.animations.add('right', [3, 4, 5], 10, true);
        player.animations.add('up', [0, 1, 2], 10, true);
        player.animations.add('down', [6, 7, 8], 10, true);
        player.animations.add('stop', [4], 10, true);
        player.animations.play('stop');
        
        bullets = game.add.group();
        bullets.enableBody = true;
        barriers = game.add.group();
        barriers.enableBody = true;
        targets = game.add.group();
        targets.enableBody = true;
        soundTriggers = game.add.group();
        soundTriggers.enableBody = true;
        lights = game.add.group();
        
        for (var i=0; i<wallEdgeArray.length; i++) {
            var wallEdgeRight = barriers.create(128, wallEdgeArray[i]*32, 'tutorialBarriers32x32');
            wallEdgeRight.frame = 4;
            wallEdgeRight.body.immovable = true;
            var wallEdgeLeft = barriers.create(352, wallEdgeArray[i]*32, 'tutorialBarriers32x32');
            wallEdgeLeft.frame = 5;
            wallEdgeLeft.body.immovable = true;
        }
        for (var i=0; i<wallArray.length; i++) {
            var wall = barriers.create(wallArray[i]*32, 160, 'tutorialBarriers32x32');
            wall.frame = 0;
            wall.body.immovable = true;
            if (i>2 && i<7) {
               wall = barriers.create(wallArray[i]*32, 96, 'tutorialBarriers32x32');
               wall.frame = 0; 
               wall.body.immovable = true;
               wall = barriers.create(wallArray[i]*32, 0, 'tutorialBarriers32x32');
               wall.frame = 0; 
               wall.body.immovable = true;
            }
        }
        wall = barriers.create(160, 0, 'tutorialBarriers32x32');
        wall.frame = 0; 
        wall.body.immovable = true;
        wall = barriers.create(320, 0, 'tutorialBarriers32x32');
        wall.frame = 0; 
        wall.body.immovable = true;
        var wallEdgeCorner = barriers.create(288, 64, 'tutorialBarriers32x32');
        wallEdgeCorner.frame = 2;
        wallEdgeCorner.body.immovable = true;
        var wallEdgeTop = barriers.create(192, 64, 'tutorialBarriers32x32');
        wallEdgeTop.frame = 3;
        wallEdgeTop.body.immovable = true;
        wallEdgeTop = barriers.create(224, 64, 'tutorialBarriers32x32');
        wallEdgeTop.frame = 3;
        wallEdgeTop.body.immovable = true;
        wallEdgeTop = barriers.create(256, 64, 'tutorialBarriers32x32');
        wallEdgeTop.frame = 3;
        wallEdgeTop.body.immovable = true;
        var halfWall = barriers.create(0, 160, 'tutorialBarriers32x32');
        halfWall.frame = 6;
        halfWall.body.immovable = true;
        halfWall = barriers.create(790, 160, 'tutorialBarriers32x32');
        halfWall.frame = 6;
        halfWall.body.immovable = true;
        var door = barriers.create(64, 160, 'tutorialBarriers32x32');
        door.frame = 1;
        door.body.immovable = true;
        door = barriers.create(576, 160, 'tutorialBarriers32x32');
        door.frame = 1;
        door.body.immovable = true;
        var steps = barriers.create(192, 116, 'tutorialObstacles32x44');
        steps.frame = 0;
        steps.body.immovable = true;
        
        var soundTrigger = soundTriggers.create(320, 128, 'tutorialBarriers32x32');
        soundTrigger.visible = false;
        soundTrigger = soundTriggers.create(320, 32, 'tutorialBarriers32x32');
        soundTrigger.visible = false;
        soundTrigger = soundTriggers.create(160, 32, 'tutorialBarriers32x32');
        soundTrigger.visible = false;
        soundTrigger = soundTriggers.create(160, 192, 'tutorialBarriers32x32');
        soundTrigger.visible = false;
        
        var suitOfArmour = targets.create(64, 352, 'tutorialObstacles32x44');
        suitOfArmour.frame = 1;
        suitOfArmour.body.immovable = true;
        suitOfArmour = targets.create(64, 446, 'tutorialObstacles32x44');
        suitOfArmour.frame = 1;
        suitOfArmour.body.immovable = true;
        suitOfArmour = targets.create(288, 256, 'tutorialObstacles32x44');
        suitOfArmour.frame = 1;
        suitOfArmour.body.immovable = true;
        suitOfArmour = targets.create(288, 544, 'tutorialObstacles32x44');
        suitOfArmour.frame = 1;
        suitOfArmour.body.immovable = true;
        suitOfArmour = targets.create(512, 256, 'tutorialObstacles32x44');
        suitOfArmour.frame = 1;
        suitOfArmour.body.immovable = true;
        suitOfArmour = targets.create(512, 544, 'tutorialObstacles32x44');
        suitOfArmour.frame = 1;
        suitOfArmour.body.immovable = true;
        suitOfArmour = targets.create(768, 352, 'tutorialObstacles32x44');
        suitOfArmour.frame = 1;
        suitOfArmour.body.immovable = true;
        suitOfArmour = targets.create(768, 446, 'tutorialObstacles32x44');
        suitOfArmour.frame = 1;
        suitOfArmour.body.immovable = true;
        
        var axeDecoration = game.add.sprite(196, 2, 'tutorialDecorations36x32');
        axeDecoration.frame = 1;
        axeDecoration = game.add.sprite(352, 162, 'tutorialDecorations36x32');
        axeDecoration.frame = 1;
        axeDecoration = game.add.sprite(672, 162, 'tutorialDecorations36x32');
        axeDecoration.frame = 1;
        var swordDecoration = game.add.sprite(286, 2, 'tutorialDecorations36x32');
        swordDecoration.frame = 0;
        swordDecoration = game.add.sprite(224, 162, 'tutorialDecorations36x32');
        swordDecoration.frame = 0;
        swordDecoration = game.add.sprite(478, 162, 'tutorialDecorations36x32');
        swordDecoration.frame = 0;
        swordDecoration = game.add.sprite(734, 162, 'tutorialDecorations36x32');
        swordDecoration.frame = 0;
        for (var i=0; i<torchArray.length; i++) {
            this.torchCreate(torchArray[i]*32, 160, 'centre');
        }
        game.add.sprite(775, 165, 'trainerSprite');
        trainerSpeechBubble = game.add.sprite(-580, 35, 'speechBubble'); 
        trainerText = game.add.bitmapText(630, 45, 'fontWhite', '', 15);
        trainerText2 = game.add.bitmapText(600, 60, 'fontWhite', '', 15);
        trainerText3 = game.add.bitmapText(588, 75, 'fontWhite', '', 15);
        trainerText4 = game.add.bitmapText(588, 90, 'fontWhite', '', 15);
        trainerText5 = game.add.bitmapText(600, 105, 'fontWhite', '', 15);
        trainerText6 = game.add.bitmapText(620, 120, 'fontWhite', '', 15);
        trainerText.tint = 000000;
        trainerText2.tint = 000000;
        trainerText3.tint = 000000;
        trainerText4.tint = 000000;
        trainerText5.tint = 000000;
        trainerText6.tint = 000000;
        
        tutorialPracticeSpeechBubble = game.add.button(-200, 410, 'speechBubble', this.tutorialChange, this); 
        tutorialPracticeText = game.add.bitmapText(450, 418, 'fontWhite', '', 15);
        tutorialPracticeText2 = game.add.bitmapText(420, 435, 'fontWhite', '', 15);
        tutorialPracticeText3 = game.add.bitmapText(408, 450, 'fontWhite', '', 15);
        tutorialPracticeText4 = game.add.bitmapText(408, 465, 'fontWhite', '', 15);
        tutorialPracticeText5 = game.add.bitmapText(420, 480, 'fontWhite', '', 15);
        tutorialPracticeText6 = game.add.bitmapText(440, 495, 'fontWhite', '', 15);
        tutorialPracticeText.tint = 000000;
        tutorialPracticeText2.tint = 000000;
        tutorialPracticeText3.tint = 000000;
        tutorialPracticeText4.tint = 000000;
        tutorialPracticeText5.tint = 000000;
        tutorialPracticeText6.tint = 000000;
        
        this.torchCreate(-4, 288, 'left');
        this.torchCreate(-4, 544, 'left');
        this.torchCreate(799, 288, 'right');
        this.torchCreate(799, 544, 'right');
        
        //  Our controls.
        cursors = game.input.keyboard.createCursorKeys();
        spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    },
    update: function() {
         //  Reset the players velocity (movement)
        player.body.velocity.x = 0;
        player.body.velocity.y= 0;
        
        game.physics.arcade.collide(player, barriers);
        game.physics.arcade.overlap(player, soundTriggers, this.triggerSound, null, this);
        game.physics.arcade.collide(bullets, targets, this.targetKill, null, this);
        game.physics.arcade.collide(bullets, barriers, this.bulletKill, null, this);
        game.physics.arcade.collide(player, door, this.endTutorial, null, this);
        
        if (tutorialPractice!="first") {
            if (aKey.isDown)        {
                //  Move to the left
                player.body.velocity.x = -runSpeed;
                player.animations.play('left');
                facing = 'left';
            }
            else if (dKey.isDown)      {
                //  Move to the right
                player.body.velocity.x = runSpeed;
                player.animations.play('right');
                facing = 'right';
            }
            else if (wKey.isDown)       {
                //  Move up
                player.body.velocity.y = -runSpeed;
                player.animations.play('up');
                facing = 'up';
            }
            else if (sKey.isDown)        {
                //  Move down
                player.body.velocity.y = runSpeed;
                player.animations.play('down');
                facing = 'down';
            }
            else        {
                //  Stand still
                player.animations.stop();
            }
            
            if ((cursors.right.isDown || cursors.left.isDown || cursors.up.isDown || cursors.down.isDown) && game.time.now>bulletTimer && player.isAlive && mana>=5) {
                this.fire();
            }
        }
        
        if (spaceBar.isDown && tutorialPractice!="" && game.time.now>assistantChangeTimer) {
            this.tutorialChange();
            assistantChangeTimer = game.time.now + 1000;
        }
        
        this.torchUpdate();
        this.tutorialShow();
        this.trainerPlayerPositionCheck();
        this.trainerUpdate();
    },
    bulletKill: function(bullet) {
        bullet.kill();
    },
    targetKill: function(bullet, target) {
        if (target.isDead) {
            bullet.kill();
        }
        else {
            this.smallExplosion(bullet.x, bullet.y);
            bullet.kill();
            target.isDead = true;
            if (player.x<target.x) {
                target.x += 44;
                target.y += 12;
                target.rotation = 1.57; 
            }
            else {
                target.x -= 12;
                target.y += 44;
                target.rotation = -1.57; 
            }
            
            //this.maleDeathSFX(); add metal clanging SFX
            xp += 1;
            //xpText.text = 'XP: ' + xp + '/' + nextLevelXp;
            this.checkLevelUp();
            this.checkTutorialComplete();
        }
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
            shotPower += 0.05;
            health = maxHealth;
            mana = maxMana;
            playerLevel ++;
            //xpText.text = 'XP: ' + xp + '/' + nextLevelXp;
            //manaText.text = "Mana: " + mana;
            //healthText.text = 'Health: ' + health + "/" + maxHealth;
            //playerLevelText.text = 'Player Level: ' + playerLevel;
        }
    },
    checkTutorialComplete: function() {
        if (xp>=8) {
            xp += 5;
            this.checkLevelUp();
            tutorialPractice = "second";
            nextPractice = "";
            if (player.x < 416) {
                doorway = game.add.sprite(512, 352, 'doorway');
                door = game.add.sprite(512, 352, 'animateddoor');
            }
            else {
                doorway = game.add.sprite(288, 352, 'doorway');
                door = game.add.sprite(288, 352, 'animateddoor');
            }
            door.animations.add('openDoor', [0, 1, 2, 3], 4, false);
            game.physics.arcade.enable(door);
            door.body.immovable = true;
            //game.add.button(303, 282, 'blankButton', this.endTutorial, this);
            //game.add.bitmapText(370, 312, 'fontWhite', 'Continue', 18);
        }
    },
    endTutorial: function() {
        tutorialMusicPlaying = false;
        tutorialMusic.destroy();
        door.animations.play('openDoor');
        var doorOpenSFX = game.add.audio('creakylightwoodendoor1');
        doorOpenSFX.play();
        player.kill();
        game.time.events.add(Phaser.Timer.SECOND * 2, function () {   game.state.start('defence');  });
    },
    smallExplosion: function(x, y) {
        var explode = game.add.sprite(x, y, 'explosionMini');
        explode.animations.add('explosion', [0, 1, 2, 3], 30, false);
        explode.animations.play('explosion');
        this.shortExplodeSFX();
        game.time.events.add(Phaser.Timer.SECOND * 0.2, function () {   explode.destroy();  });
    },
    fire: function() {
        var bullet = bullets.create(player.x + 10, player.y + 15, 'bullet');
        bullet.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 26, true);
        
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
    shortExplodeSFX: function() {
        var shortExplodeSound = game.add.audio('shortExplode');
        shortExplodeSound.play();
    },
    torchCreate: function(x, y, direction) {
        var torch = lights.create(x, y, 'tutorialDecorations36x32');
        torch.animations.add('centre', [2, 3], 10, true);
        torch.animations.add('left', [4, 5], 10, true);
        torch.animations.add('right', [6, 7], 10, true);
        if (direction=='centre') {
            torch.direction = 'centre'
        }
        else if (direction=='left') {
            torch.direction = 'left'
        }
        else if (direction=='right') {
            torch.direction = 'right'
        }
    },
    torchUpdate: function() {
        lights.forEach(function(torch) {
            if (torch.direction == 'centre') {
                torch.animations.play('centre');
            }
            else if (torch.direction == 'left') {
                torch.animations.play('left');
            }
            else if (torch.direction == 'right') {
                torch.animations.play('right');
            }
        });
    },
    tutorialShow: function() {
        switch(tutorialPractice) {
            case "first":
                tutorialPracticeSprite = game.add.sprite(550, 469, 'assistant');
                tutorialPracticeSpeechBubble.x = 400;
                tutorialPracticeText.text = "  Your Majesty!";
                tutorialPracticeText2.text = " The Royal Trainer feels";
                tutorialPracticeText3.text = " of late you have neglected ";
                tutorialPracticeText4.text = " your training and insists on";
                tutorialPracticeText5.text = " a refresher before you";
                tutorialPracticeText6.text = "   join the battle.";
                break;
            case "second":
                tutorialPracticeSprite = game.add.sprite(550, 469, 'assistant');
                tutorialPracticeSpeechBubble.x = 400;
                tutorialPracticeText.text = "  Excellent,  ";
                tutorialPracticeText2.text = "  Your Majesty. Use the ";
                tutorialPracticeText3.text = "  door when you're ready to";
                tutorialPracticeText4.text = "  lead your troops. Your";
                tutorialPracticeText5.text = "   soldiers await you at";
                tutorialPracticeText6.text = "  the city's edge.";
                break;
            case "": 
                tutorialPracticeSprite.destroy();
                tutorialPracticeText.text = "";
                tutorialPracticeText2.text = "";
                tutorialPracticeText3.text = "";
                tutorialPracticeText4.text = "";
                tutorialPracticeText5.text = "";
                tutorialPracticeText6.text = "";
                break;
        }
    },
    tutorialChange: function() {
        switch(tutorialPractice) {
            case "first":
                tutorialPractice = "";
                tutorialPracticeSprite.kill();
                tutorialPracticeSpeechBubble.kill();
                this.tutorialShow();
                this.create();
                break;
            case "second":
                tutorialPractice = "";
                tutorialPracticeSprite.kill();
                tutorialPracticeSpeechBubble.kill();
                this.tutorialShow();
                break;
        }
    },
    trainerPlayerPositionCheck: function() {
        if (player.x>=288 && nextPractice=="right") {
            nextPractice = "up";
        }
        else if (nextPractice=="up" && player.y<=32) {
            nextPractice = "left";
        }
        else if (nextPractice=="left" && player.x<=160) {
            nextPractice = "down";
        }
        else if (nextPractice=="down" && player.y>=192) {
            nextPractice = "shoot";
        }
    },
    triggerSound: function(player, soundTrigger) {
        soundTrigger.kill();
        successSFX.play();
    },
    trainerUpdate: function() {
        if (nextPractice=="right" && tutorialPractice=="") {
            trainerSpeechBubble.x = 580;
            trainerText.text = " Your Majesty!";
            trainerText2.text = "   It's been too long.";
            trainerText3.text = "      Let us start with a";
            trainerText4.text = "     review of the basics.";
            trainerText5.text = "    Use the 'D' key to"; 
            trainerText6.text = "      walk right.";
        }
        else if (nextPractice=="up") {
            trainerText.text = "  Excellent!";
            trainerText2.text = "     Now use the 'W' ";
            trainerText3.text = "         key to walk up.";
            trainerText4.text = " ";
            trainerText5.text = " "; 
            trainerText6.text = " ";
        }
        else if (nextPractice=="left") {
            trainerText4.text = "         And now the 'A'";
            trainerText5.text = "      key to walk left."; 
            trainerText6.text = " ";
        }
        else if (nextPractice=="down") {
            trainerText.text = "  Jolly good!";
            trainerText2.text = "    Finally use the 'S'";
            trainerText3.text = "     key to walk down to";
            trainerText4.text = "      the target room for";
            trainerText5.text = "        some shooting"; 
            trainerText6.text = "        practice.";
        }
        else if (nextPractice=="shoot" && tutorialPractice=="") {
            trainerText.text = "  Wonderful!";
            trainerText2.text = "    Now use the four ";
            trainerText3.text = "   arrow keys to shoot in ";
            trainerText4.text = " each direction. See if you";
            trainerText5.text = "  can hit all eight suits"; 
            trainerText6.text = "     of armour.";
        }
        else if (nextPractice=="") {
            trainerText.text = " ";
            trainerText2.text = " ";
            trainerText3.text = "          My work here";
            trainerText4.text = "              is done.";
            trainerText5.text = " "; 
            trainerText6.text = " ";
        }
    },
};