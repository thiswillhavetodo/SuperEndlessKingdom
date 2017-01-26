/* global game */
/* global Phaser */
/* global coins */
/* global player */
/* global bullets */
/* global defence */
var attackers;
var defenders;
var obstacles;
//var attacker;
//var defender;
var attackStrength = 8;
var attackerCount = attackStrength;
var defenceStrength = Math.round(defence/4);
var defenderCount = Math.round(defence/4);
var defenceAudio;
var newCitizens;

var tutorialDefence = "first";
var tutorialSprite;
var tutorialSpeechBubble;
var tutorialText = "";
var tutorialText2 = "";
var tutorialText3 = "";
var tutorialText4 = "";
var tutorialText5 = "";
var tutorialText6 = "";

var defenceState = {
    create: function() {
        game.world.removeAll();
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'cityOutskirts');
        
        defenceAudio = game.add.audio('defence');
        defenceAudio.stop();
        defenceAudio.loopFull(0.5);
        // The player and its settings
        player = game.add.sprite(16, 120, 'dude');
        
        //  We need to enable physics on the player
        game.physics.arcade.enable(player);
        player.body.setSize(28, 32, 2, 2);
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
        bullets.createMultiple(90, 'bullet');
        attackers = game.add.group();
        attackers.enableBody = true;  
        defenders = game.add.group();
        defenders.enableBody = true;  
        obstacles = game.add.group();
        obstacles.enableBody = true;  
        
        for (var i=1; i<=attackStrength; i++) {
            this.attackerCreate(680, i*32);
        }
        if (coins>=0) {
            for (var i=0; i<=defenceStrength; i++) {
                if (i<=12) {
                    this.defenderCreate(224, i*32);
                }
                else {
                    this.defenderCreate(188, (i-12)*32);
                }
            }
        }
        for (var i=0; i<=17; i++) {
            if (i<=8) {
                var statue = obstacles.create(i*64, 160, 'statue');
                statue.body.setSize(30, 18, 1, 45);
                statue.body.immovable = true;
                statue.frame = 0;
            }
            else {
                var statue = obstacles.create((i-9)*64, 384, 'statue');
                statue.body.setSize(30, 18, 1, 45);
                statue.body.immovable = true;
                statue.frame = 0;
            }
        }
        //  Our controls.
        cursors = game.input.keyboard.createCursorKeys();
        spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
        
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
        if (playerLevel>=100) {
           playerLevelText = game.add.bitmapText(9, 23, 'font', playerLevel, 30);  
        }
        else if (playerLevel>=10) {
           playerLevelText = game.add.bitmapText(18, 23, 'font', playerLevel, 30);  
        }
        else {
           playerLevelText = game.add.bitmapText(26, 23, 'font', playerLevel, 30); 
        }
        
        coinsText.alpha = 0.7;
        xpText.alpha = 0.7;
        healthText.alpha = 0.7;
        manaText.alpha = 0.7;
        playerLevelText.alpha = 0.7;
        coinDisplay = game.add.sprite(360, 8, 'coin');
        coinDisplay.frame = 0;
        
        resultBackground = game.add.sprite(-1000, 150, 'scrollStrip');
        resultText = game.add.bitmapText(140, 185, 'font', '', 32);
        
        tutorialSpeechBubble = game.add.button(-200, 469, 'speechBubble', this.tutorialChange, this); 
        tutorialText = game.add.bitmapText(200, 477, 'font', '', 15);
        tutorialText2 = game.add.bitmapText(170, 494, 'font', '', 15);
        tutorialText3 = game.add.bitmapText(158, 509, 'font', '', 15);
        tutorialText4 = game.add.bitmapText(158, 524, 'font', '', 15);
        tutorialText5 = game.add.bitmapText(170, 539, 'font', '', 15);
        tutorialText6 = game.add.bitmapText(190, 554, 'font', '', 15);
        tutorialText.tint = 000000;
        tutorialText2.tint = 000000;
        tutorialText3.tint = 000000;
        tutorialText4.tint = 000000;
        tutorialText5.tint = 000000;
        tutorialText6.tint = 000000;
    },
    update: function() {
        if (tutorialDefence == "") {
        //game.physics.arcade.collide(player, defenders);
        game.physics.arcade.collide(defenders, attackers, this.npcFight, null, this);
        game.physics.arcade.collide(attackers, attackers);
        game.physics.arcade.collide(defenders, defenders);
        game.physics.arcade.collide(player, obstacles);
        game.physics.arcade.collide(attackers, obstacles, this.attackerMove, null, this);
        game.physics.arcade.collide(defenders, obstacles);
        if (game.time.now>invulnerableTimer){
            player.alpha = 1;
            game.physics.arcade.collide(player, attackers, this.badTouchDefence, null, this);
        }
        else {
            player.alpha = 0.5;
        }
        game.physics.arcade.collide(bullets, attackers, this.attackerKill, null, this);
        if (attackerCount<=0) {
            game.physics.arcade.collide(player, door, this.defenceDoorOpen, null, this);
        }
         //  Reset the players velocity (movement)
        player.body.velocity.x = 0;
        player.body.velocity.y= 0;
    
        if (aKey.isDown)        {
            //  Move to the left
            player.body.velocity.x = -runSpeed;
            player.animations.play('left');
            facing = 'left';
            manaRegenInterval = manaRegenHolder;
        }
        else if (dKey.isDown)      {
            //  Move to the right
            player.body.velocity.x = runSpeed;
            player.animations.play('right');
            facing = 'right';
            manaRegenInterval = manaRegenHolder;
        }
        else if (wKey.isDown)       {
            //  Move up
            player.body.velocity.y = -runSpeed;
            player.animations.play('up');
            facing = 'up';
            manaRegenInterval = manaRegenHolder;
        }
        else if (sKey.isDown)        {
            //  Move down
            player.body.velocity.y = runSpeed;
            player.animations.play('down');
            facing = 'down';
            manaRegenInterval = manaRegenHolder;
        }
        else        {
            //  Stand still
            player.animations.stop();
            manaRegenInterval = manaRegenHolder*0.4;
        }
        
        if ((cursors.right.isDown || cursors.left.isDown || cursors.up.isDown || cursors.down.isDown) && game.time.now>bulletTimer && player.isAlive && mana>=5) {
            this.fire();
            mana -= 5;
            manaText.text = 'MP: ' + mana + "/" + maxMana;
        }
        
        this.manaRegen();
        this.defenderUpdate();
        this.attackerUpdate();
        }
        else {
            player.body.velocity.x = 0;
            player.body.velocity.y= 0;
            this.tutorialShow();
        }
        if (spaceBar.isDown && tutorialDefence!="" && game.time.now>assistantChangeTimer) {
            this.tutorialChange();
            assistantChangeTimer = game.time.now + 1000;
        }
        hpCrop.x = (1-(health/maxHealth))*80;
        hpBar.updateCrop();
        manaCrop.x = (1-(mana/maxMana))*80;
        manaBar.updateCrop();
        xpCrop.x = (1-(xp/nextLevelXp))*80;
        xpBar.updateCrop();
    },
    defenderCreate: function(x, y) {
        if (Math.random()<0.5) {
            var defender = defenders.create(x, y, 'warriorMan');
            defender.gender = "male";
        }
        else {
            var defender = defenders.create(x, y, 'warriorWoman');
            defender.gender = "female";
        }
        defender.health = defenceStrength-2;
        defender.maxHealth = defenceStrength-2;
        defender.fighting = false;
        defender.timer = game.time.now;
        //  enable physics on the defender
        game.physics.arcade.enable(defender);
        defender.body.collideWorldBounds = true;
        
        defender.healthBarBack = defender.addChild(game.add.graphics(0, 0));
        defender.healthBarBack.lineStyle(3, 0xba3500, 1);
        defender.healthBarBack.moveTo(0, 0);
        defender.healthBarBack.lineTo(20, 0);
        defender.healthBar = defender.addChild(game.add.graphics(0, 0));
        defender.healthBar.lineStyle(3, 0xffd900, 1);
        defender.healthBar.moveTo(0, 0);
        defender.healthBar.lineTo(20*(defender.health/defender.maxHealth), 0);
        
        defender.healthBarBack.visible = false;
        defender.healthBar.visible = false;
    
        //  Our two animations, walking left and right.
        defender.animations.add('defenderLeft', [9, 10, 11], 15, true);
        defender.animations.add('defenderRight', [3, 4, 5], 15, true);
        defender.animations.add('defenderStop', [4], 15, true);
        defender.animations.play('defenderStop');
    },
    defenderUpdate: function() {
        defenders.forEach(function(defender) {
            defender.body.velocity.x = 0;
            defender.body.velocity.y = 0;
            
            defender.healthBar.clear();
            defender.healthBar.lineStyle(3, 0xffd900, 1);
            defender.healthBar.moveTo(0, 0);
            defender.healthBar.lineTo(20*(defender.health/defender.maxHealth), 0);
            
            if ((Math.abs(player.x - defender.x)) + (Math.abs(player.y - defender.y)) > 300 && (defender.fighting==false)) {
                game.physics.arcade.moveToObject(defender, player, 115);
                if (player.x < defender.x) {
                    defender.animations.play('defenderLeft');
                }
                else {
                    defender.animations.play('defenderRight');
                }
            }
            else {
                defender.animations.play('defenderStop');
            }
        });
    },
    attackerCreate: function(x, y) {
        var attacker = attackers.create(x, y, 'attacker');
        attacker.health = attackStrength-3;
        attacker.maxHealth = attackStrength-3;
        attacker.timer = game.time.now;
        attacker.fighting = false;
        //  enable physics on the attacker
        game.physics.arcade.enable(attacker);
        attacker.body.collideWorldBounds = true;
        
        attacker.healthBarBack = attacker.addChild(game.add.graphics(0, 0));
        attacker.healthBarBack.lineStyle(3, 0xba3500, 1);
        attacker.healthBarBack.moveTo(0, 0);
        attacker.healthBarBack.lineTo(20, 0);
        attacker.healthBar = attacker.addChild(game.add.graphics(0, 0));
        attacker.healthBar.lineStyle(3, 0xffd900, 1);
        attacker.healthBar.moveTo(0, 0);
        attacker.healthBar.lineTo(20*(attacker.health/attacker.maxHealth), 0);
        
        attacker.healthBarBack.visible = false;
        attacker.healthBar.visible = false;
    
        //  Our two animations, walking left and right.
        attacker.animations.add('attackerLeft', [9, 10, 11], 15, true);
        attacker.animations.add('attackerRight', [3, 4, 5], 15, true);
        attacker.animations.add('attackerStop', [10], 15, true);
        attacker.animations.play('attackerStop');
    },
    attackerUpdate: function() {
        attackers.forEach(function(attacker) {
            attacker.body.velocity.x = 0;
            attacker.body.velocity.y = 0;
            
            attacker.healthBar.clear();
            attacker.healthBar.lineStyle(3, 0xffd900, 1);
            attacker.healthBar.moveTo(0, 0);
            attacker.healthBar.lineTo(20*(attacker.health/attacker.maxHealth), 0);
            
            if (attacker.fighting == false) {
                game.physics.arcade.moveToObject(attacker, player, 110);
            }
            else {
                attacker.animations.play('attackerStop');
            }
            if (player.body.x < attacker.body.x) {
                attacker.animations.play('attackerLeft');
            }
            else {
                attacker.animations.play('attackerRight');
            }
        });
    },
    attackerMove: function(attacker) {
        if (attacker.y<player.y) {
            attacker.y += 2;
        }
        else {
            attacker.y -= 2;
        }
    },
    attackerKill: function(bullet, attacker) {
        this.smallExplosion(bullet.x, bullet.y);
        if (Math.random()>0.66) {
            if (bullet.travel == 'left') {
                attacker.x -= knockback;
            }
            else if (bullet.travel == 'right') {
                attacker.x += knockback;
            }
            else if (bullet.travel == 'up') {
                attacker.y -= knockback;
            }
            else if (bullet.travel == 'down') {
                attacker.y += knockback;
            }
        }
        bullet.kill();
        if (attacker.health <= shotPower) {
            attacker.kill();
            this.maleDeathSFX();
            var death = game.add.sprite(attacker.x, attacker.y, 'deathSheet');
            death.frame = 2;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
            xp += 3;
            this.xpDisplayConvert();
            attackerCount --;
            //console.log(attackerCount);
            this.checkLevelUp();
            this.checkDefenceComplete();
        }
        else {
            attacker.health -= shotPower;
            attacker.healthBarBack.visible = true;
            attacker.healthBar.visible = true;
        }
    },
    smallExplosion: function(x, y) {
        var explode = game.add.sprite(x, y, 'explosionMini');
        explode.animations.add('explosion', [0, 1, 2, 3], 30, false);
        explode.animations.play('explosion');
        this.shortExplodeSFX();
        game.time.events.add(Phaser.Timer.SECOND * 0.2, function () {   explode.destroy();  });
    },
    fire: function() {
        var bullet = bullets.getFirstExists(false);//bullets.create(player.x + 10, player.y + 15, 'bullet');
        bullet.reset(player.x + 10, player.y + 15);
        bullet.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 13, true);
        var emitter = game.add.emitter(game.world.centerX, game.world.centerY, 20);
        emitter.makeParticles('bulletParticles', [0, 1, 2, 3]);
        emitter.gravity.y = 0;
        emitter.forEach(function(particle) {
            particle.body.allowGravity = false;
        }, this);
        emitter.start(false, 500, 50);
        bullet.addChild(emitter);
        game.time.events.add(Phaser.Timer.SECOND * 1, function() { emitter.destroy();});
        emitter.x = 0;
        emitter.y = 0;
        bullet.scale.x = 0.8;
        bullet.scale.y = 0.8;
        bullet.lifespan = (832/shotSpeed)*1000;
        
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
    maleDeathSFX: function() {
        var maleDeath = game.add.audio('maleDeath');
        maleDeath.play();
    },
    femaleDeathSFX: function() {
        var femaleDeath = game.add.audio('femaleDeath');
        femaleDeath.play();
    },
    badTouchDefence: function() {
        if (health>(attackStrength-7)) {
            health -= (attackStrength-7);
            var grunt = game.add.audio('grunt');
            grunt.play();
            healthText.text = 'HP: ' + health + "/" + maxHealth;
            invulnerableTimer = game.time.now + invulnerableSpacing;
        }
        else {
        // Removes the player from the screen
            player.kill();
            this.maleDeathSFX();
            var death = game.add.sprite(player.x, player.y, 'deathSheet');
            death.frame = 0;
            var teleportSFX = game.add.audio('teleport');
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); 
                                                                     var playerTeleport = game.add.sprite(death.x+5, death.y+5, 'playerTeleport');
                                                                     playerTeleport.animations.add('teleport', [0, 1, 2, 3], 8, false);
                                                                     playerTeleport.animations.play('teleport');
                                                                     teleportSFX.play();
                                                                     defenceAudio.stop();
                                                                     game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {  playerTeleport.kill(); });
                                                                     });
            player.isAlive = false;
            population -= defenceStrength;
            tutorialDefence = "defeat";
            healthText.text = 'HP: 0/' + maxHealth;
            resultBackground.x = 96;
            resultText.text = ' Your Majesty, it is time to come home!';
            endLevelButton = game.add.button(305, 250, 'blankButton', this.defenceComplete, this);
            game.add.bitmapText(355, 280, 'font', 'Return to my City', 16);
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
            this.xpDisplayConvert();
            manaText.text = 'MP: ' + mana + "/" + maxMana;
            healthText.text = 'HP: ' + health + "/" + maxHealth;
            playerLevelText.text = playerLevel;
        }
    },
    checkDefenceComplete: function() {
        if (attackerCount <= 0 && player.isAlive) {
            if (player.x < 75 && player.y < 145) {
                doorway = game.add.sprite(750, 70, 'doorway');
                door = game.add.sprite(750, 70, 'animateddoor');
            }
            else {
                doorway = game.add.sprite(5, 70, 'doorway');
                door = game.add.sprite(5, 70, 'animateddoor');
            }
            door.animations.add('openDoor', [0, 1, 2, 3], 4, false);
            game.physics.arcade.enable(door);
            door.body.immovable = true;
            if (defenderCount/defenceStrength >= 0.5) {
                newCitizens = attackStrength-(defenceStrength-defenderCount)+2;
                population += newCitizens;
                attackStrength ++;
                tutorialDefence = "victory";
            }
            else if (defenderCount/defenceStrength >= 0.25) {
                newCitizens = Math.round(1+(attackStrength/10));
                population += newCitizens;
                tutorialDefence = "victory";
            }
            else {
                population ++;
                tutorialDefence = "narrowVictory";
            }
        }
    },
    defenceComplete: function() {
        defending = false;
        game.world.removeAll();
        game.state.start('city');
    },
    defenceDoorOpen: function() {
        door.animations.play('openDoor');
        var doorOpenSFX = game.add.audio('creakylightwoodendoor1');
        doorOpenSFX.play();
        player.kill();
        defenceAudio.stop();
        var self = this;
        game.time.events.add(Phaser.Timer.SECOND * 2, function () {   self.defenceComplete();  });
    },
    manaRegen: function() {
        if (game.time.now>manaRegenTimer && mana<maxMana) {
            mana++;
            manaRegenTimer = game.time.now + manaRegenInterval;
            manaText.text = 'MP: ' + mana + "/" + maxMana;
        }
    },
    npcFight: function(defender, attacker) {
        if (defender.timer<game.time.now) {
            defender.sword = defender.addChild(game.add.sprite(20, 0, 'sword'));
            defender.sword.animations.add('swing', [0, 1, 2, 2, 1, 0], 6, true);
            defender.sword.animations.play('swing');
            defender.fighting = true;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  defender.fighting = false; defender.sword.kill(); });
            if (defender.health <= (attackStrength-7)) {
                defender.kill();
                var death = game.add.sprite(defender.x, defender.y, 'deathSheet');
                if (defender.gender=="male") {
                    death.frame = 8;
                    this.maleDeathSFX();
                }
                else {
                    death.frame = 9;
                    this.femaleDeathSFX();
                }
                game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
                defenderCount --;
            }
            else {
                defender.health -= (attackStrength-7);
                defender.timer = game.time.now + 1000;
                defender.healthBarBack.visible = true;
                defender.healthBar.visible = true;
            }
        }
        if (attacker.timer<game.time.now) {
            attacker.sword = attacker.addChild(game.add.sprite(-12, 0, 'sword'));
            attacker.sword.animations.add('swing', [3, 4, 5, 5, 4, 3], 6, true);
            attacker.sword.animations.play('swing');
            attacker.fighting = true;
            game.time.events.add(Phaser.Timer.SECOND * 1, function () {  attacker.fighting = false; attacker.sword.kill();});
            if (attacker.health <= 1) {
                attacker.kill();
                this.maleDeathSFX();
                var death = game.add.sprite(attacker.x, attacker.y, 'deathSheet');
                death.frame = 2;
                game.time.events.add(Phaser.Timer.SECOND * 1, function () {  death.kill(); });
                attackerCount --;
                //console.log(attackerCount);
                this.checkDefenceComplete();
            }
            else {
                attacker.health --;
                attacker.timer = game.time.now + 1000;
                attacker.healthBarBack.visible = true;
                attacker.healthBar.visible = true;
            }
        }
    },
    tutorialShow: function() {
        switch(tutorialDefence) {
            case "first":
                tutorialSprite = game.add.sprite(350, 469, 'assistant');
                tutorialSpeechBubble.x = 150;
                tutorialText.text = " Your Majesty!";
                tutorialText2.text = "   Our defenders are ";
                tutorialText3.text = "outnumbered, but with you";
                tutorialText4.text = "     to rally them we may ";
                tutorialText5.text = "         yet prevail. ";
                tutorialText6.text = "";
                break;
            case "second":
                tutorialSprite = game.add.sprite(350, 469, 'assistant');
                tutorialSpeechBubble.x = 150;
                tutorialText.text = "  A convincing";
                tutorialText2.text = "     victory may even";
                tutorialText3.text = "    persuade the citizens";
                tutorialText4.text = "       of our neighbours";
                tutorialText5.text = "     to move here for";
                tutorialText6.text = "  their protection.";
                assistant = "tutorialEnd";
                break;
            case "victory":
                tutorialSprite = game.add.sprite(350, 469, 'assistant');
                tutorialSpeechBubble.x = 150;
                tutorialText.text = "  You fought";
                tutorialText2.text = "  them off! As news of";
                tutorialText3.text = "   your victory spread our";
                tutorialText4.text = "      city attracted " + newCitizens + " new ";
                tutorialText5.text = "   immigrants to bolster ";
                tutorialText6.text = "      our ranks.";
                break;
            case "narrowVictory":
                tutorialSprite = game.add.sprite(350, 469, 'assistant');
                tutorialSpeechBubble.x = 150;
                tutorialText.text = "  A narrow";
                tutorialText2.text = "   victory, but a victory";
                tutorialText3.text = "  nonetheless. 1 new citizen";
                tutorialText4.text = "  moved to our city when";
                tutorialText5.text = "  word of your success";
                tutorialText6.text = "      spread.";
                break;
            case "defeat":
                tutorialSprite = game.add.sprite(350, 469, 'assistant');
                tutorialSpeechBubble.x = 150;
                tutorialText.text = "  Oh no! Our";
                tutorialText2.text = "  forces were routed.";
                tutorialText3.text = "  Our reserves fought off";
                tutorialText4.text = "  the attackers but the raid";
                tutorialText5.text = "   killed " + defenceStrength + " of our";
                tutorialText6.text = "   citizens.";
                break;
            case "": 
                tutorialText.text = "";
                tutorialText2.text = "";
                tutorialText3.text = "";
                tutorialText4.text = "";
                tutorialText5.text = "";
                tutorialText6.text = "";
                tutorialSprite.kill();
                tutorialSpeechBubble.x = -200;
                break;
        }
        
    },
    tutorialChange: function() {
        switch(tutorialDefence) {
            case "first":
                tutorialDefence = "second";
                this.tutorialShow();
                break;
            case "second":
                tutorialDefence = "";
                tutorialSprite.kill();
                tutorialSpeechBubble.x = -200;
                this.tutorialShow();
                break;
            case "victory":
                tutorialDefence = "";
                tutorialSprite.kill();
                tutorialSpeechBubble.kill();
                this.tutorialShow();
                break;
            case "narrowVictory":
                tutorialDefence = "";
                tutorialSprite.kill();
                tutorialSpeechBubble.kill();
                this.tutorialShow();
                break;
            case "defeat":
                tutorialDefence = "";
                tutorialSprite.kill();
                tutorialSpeechBubble.kill();
                this.tutorialShow();
                break;
        }
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