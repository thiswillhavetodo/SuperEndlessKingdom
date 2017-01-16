/*global game*/
/*global Phaser*/
var preloadState = {
    preload: function() {
    
        game.preloadBar = game.add.sprite(game.world.centerX-64, game.world.centerY + 128, 'preloadBar');
        game.preloadBar.anchor.setTo(0);
     
        game.load.setPreloadSprite(game.preloadBar);
        game.load.audio('pew', '/assets/laserfire01.ogg');
        game.load.audio('collect', '/assets/itemCollect.ogg');
        game.load.audio('reduce', '/assets/reduceFunds.ogg');
        game.load.audio('slotMachine', '/assets/slotMachine.ogg');
        game.load.audio('shortExplode', '/assets/shorter-explosion.ogg');
        game.load.audio('flameShot', '/assets/flameShot.ogg');
        game.load.audio('sizzle', '/assets/sizzle.ogg');
        game.load.audio('skeletonDeath', '/assets/skeletonDeath.ogg');
        game.load.audio('maleDeath', '/assets/maleDeath.ogg');
        game.load.audio('femaleDeath', '/assets/femaleDeath.ogg');
        game.load.audio('spiderDeath', '/assets/spiderDeath.ogg');
        game.load.audio('mummyDeath', '/assets/mummyDeath.ogg');
        game.load.audio('grunt', '/assets/grunt.ogg');
        game.load.audio('zombieRising', '/assets/mnstr9.ogg');
        game.load.audio('birdDeath', '/assets/birdDeath.ogg');
        game.load.audio('zombieDeath', '/assets/zombieDeath.ogg');
        game.load.audio('woodSmash', '/assets/woodSmash.ogg');
        game.load.audio('teleport', '/assets/teleport.ogg');
        game.load.audio('levelUpSound', '/assets/Accept.ogg');
        game.load.audio('titleTheme', '/assets/titleTheme.ogg');
        game.load.audio('bubbles', '/assets/bubbles.ogg');
        game.load.audio('creakylightwoodendoor1', '/assets/creakylightwoodendoor1.ogg');
        game.load.audio('shotSFX', '/assets/shotSFX.ogg');
        game.load.audio('swampCreatureDeath', '/assets/swampCreatureDeath.ogg');
        game.load.audio('defence', '/assets/Tower-Defense.ogg');
        game.load.audio('forestMusic', '/assets/Fantasy-Forest-Battle.ogg');
        game.load.audio('ruinsMusic', '/assets/Ominous_Goings-On.ogg');
        game.load.audio('wastelandMusic', '/assets/The-Castle-Beyond-the-Forest.ogg');
        game.load.audio('introCreditsMusic', '/assets/Fantasy_Game_Background.ogg');
        game.load.audio('tutorialMusic', '/assets/Left-Behind.ogg');
        game.load.audio('cityMusic', '/assets/Our_Mountain_v003.ogg');
        game.load.image('rock', '/assets/boulder.png');
        game.load.image('tree', '/assets/Tree.png');
        game.load.image('treeShadow', '/assets/treeShadow.png');
        game.load.image('field', '/assets/wasteland.png');
        //game.load.image('wood', '/assets/logpile.png');
        //game.load.image('stone', '/assets/stone.png');
        game.load.image('gravestone', '/assets/gravestone.png');
        game.load.image('ChestRed', '/assets/ChestRed.png');
        game.load.image('ChestBlue', '/assets/ChestBlue.png');
        game.load.image('ChestYellow', '/assets/ChestYellow.png');
        game.load.image('ChestGreen', '/assets/ChestGreen.png');
        game.load.image('iceBeamMini', '/assets/iceBeamMini.png');
        game.load.image('doorway', '/assets/doorway.png');
        game.load.image('title', '/assets/SUPER1.png');
        game.load.image('stonepaving', '/assets/stonepaving.png');
        game.load.image('HousingDpt', '/assets/HousingDpt.png');
        game.load.image('CommerceDpt', '/assets/CommerceDpt.png');
        game.load.image('IndustryDpt', '/assets/IndustryDpt.png');
        game.load.image('EducationDpt', '/assets/EducationDpt.png');
        game.load.image('HealthDpt', '/assets/HealthDpt.png');
        game.load.image('JusticeDpt', '/assets/JusticeDpt.png');
        game.load.image('DefenceDpt', '/assets/DefenceDpt.png');
        game.load.image('UtilitiesDpt', '/assets/UtilitiesDpt.png');
        game.load.image('weaponsmith', '/assets/weaponsmith.png');
        game.load.image('armourer', '/assets/armourer.png');
        game.load.image('enchanter', '/assets/enchanter.png');
        game.load.image('trainer', '/assets/trainer.png');
        game.load.image('castle', '/assets/castle.png');
        game.load.image('deptHighlight', '/assets/deptHighlight.png');
        game.load.image('shopBackground', '/assets/shopBackground.png');
        game.load.spritesheet('animateddoor', '/assets/animateddoor.png', 63.5, 72);
        game.load.spritesheet('zombieBird', '/assets/zombieBird.png', 32, 25);
        game.load.spritesheet('miniZombieBird', '/assets/miniZombieBird.png', 16, 13);
        game.load.spritesheet('blueCharge', '/assets/blueCharge.png', 16, 16);
        game.load.spritesheet('evilWizard', '/assets/evilWizard.png', 32, 36);
        game.load.spritesheet('coin', '/assets/coin.png', 26, 26);
        game.load.spritesheet('bullet', '/assets/bullet1.png', 16, 16);
        game.load.spritesheet('bulletParticles', '/assets/bulletParticles.png', 12, 12);
        game.load.spritesheet('explosionMini', '/assets/explosionMini.png', 16, 16);
        game.load.spritesheet('levelUp', '/assets/levelUp.png', 570, 80);
        game.load.spritesheet('spider', '/assets/spiderGreen.png', 32, 32);
        game.load.image('startButton', '/assets/START.png');
        game.load.image('titleBack', '/assets/titleBack1.png');
        game.load.image('loadButton', '/assets/LOAD.png');
        game.load.image('creditsButton', '/assets/CREDITS.png');
        game.load.image('blankButton', '/assets/blankButton.png');
        game.load.image('plusButton', '/assets/plusButton.png');
        game.load.image('minusButton', '/assets/minusButton.png');
        game.load.image('questButton', '/assets/QUEST-NOW.png');
        game.load.image('defendButton', '/assets/DEFEND-THE-CITY.png');
        game.load.image('border', '/assets/border.png');
        game.load.image('smileyFace', '/assets/smileyFace.png');
        game.load.image('wand', '/assets/W_Mace007.png');
        game.load.image('armour', '/assets/A_Armour02.png');
        game.load.image('ring', '/assets/Ac_Ring04.png');
        game.load.image('buff', '/assets/S_Buff01.png');
        game.load.image('assistant', '/assets/assistant.png');
        game.load.image('speechBubble', '/assets/speechBubble.png');
        game.load.image('leftArrow', '/assets/leftArrow.png');
        game.load.image('rightArrow', '/assets/rightArrow.png');
        game.load.spritesheet('statue', '/assets/statue.png', 32, 68);
        game.load.spritesheet('pillars', '/assets/pillars.png', 32, 96);
        game.load.image('menuBackground', '/assets/menuBackground.png');
        game.load.image('shopBorder', '/assets/shopBorder.png');
        game.load.image('barrel', '/assets/barrel.png');
        game.load.image('chestWooden', '/assets/chestWooden.png');
        game.load.image('tower', '/assets/tower.png');
        game.load.image('pineTree', '/assets/pineTree.png');
        game.load.image('cityOutskirts', '/assets/cityOutskirts.png');
        game.load.image('stonepavingOvergrown', '/assets/stonepavingOvergrown.png');
        game.load.image('forestBackground', '/assets/forestBackground.png');
        game.load.image('largeTree', '/assets/largeTree.png');
        game.load.image('scrollBox', '/assets/ui_square.png');
        game.load.image('ui_213x220', '/assets/ui_213x220.png');
        game.load.image('ui_213x150', '/assets/ui_213x150.png');
        game.load.image('ui_213x255', '/assets/ui_213x255.png');
        game.load.image('scrollStrip', '/assets/dialog_box.png');
        game.load.image('dialog_box_thin', '/assets/dialog_box_thin.png');
        game.load.image('dbox_thinShort', '/assets/dbox_thinShort.png');
        game.load.image('waterShot', '/assets/waterShot.png');
        game.load.image('rubble', '/assets/rubble.png');
        game.load.image('trainerSprite', '/assets/trainerSprite.png');
        game.load.image('introCutscene', '/assets/introCutscene.png');
        game.load.image('marriageCutscene', '/assets/marriageCutscene.png');
        game.load.image('cutsceneBorder', '/assets/cutsceneBorder.png');
        game.load.image('tutorialBackground', '/assets/tutorialBackground.png');
        game.load.image('hudBarBlue', '/assets/hudBarBlue.png');
        game.load.image('hudBarGreen', '/assets/hudBarGreen.png');
        game.load.image('hudBarRed', '/assets/hudBarRed.png');
        game.load.image('hudDisplay', '/assets/hudDisplay.png');
        game.load.spritesheet('tutorialBarriers32x32', '/assets/tutorialBarriers32x32.png', 32, 32);
        game.load.spritesheet('tutorialDecorations36x32', '/assets/tutorialDecorations36x32.png', 36, 32);
        game.load.spritesheet('tutorialObstacles32x44', '/assets/tutorialObstacles32x44.png', 32, 44);
        game.load.spritesheet('swordZombie', '/assets/swordZombie.png', 31, 42);
        game.load.spritesheet('forestScenery', '/assets/forestScenery.png', 27, 24);
        game.load.spritesheet('wandAnimation', '/assets/wandAnimation.png', 68, 68);
        game.load.spritesheet('shieldAnimation', '/assets/shieldAnimation.png', 68, 68);
        game.load.spritesheet('armourAnimation', '/assets/armourAnimation.png', 68, 68);
        game.load.spritesheet('hatAnimation', '/assets/hatAnimation.png', 68, 68);
        game.load.spritesheet('bootAnimation', '/assets/bootAnimation.png', 68, 68);
        game.load.spritesheet('ringAnimation', '/assets/ringAnimation.png', 68, 68);
        game.load.spritesheet('amuletAnimation', '/assets/animatedAmulet.png', 68, 68);
        game.load.spritesheet('skillAnimation', '/assets/skillAnimation.png', 68, 68);
        game.load.spritesheet('enduranceAnimation', '/assets/enduranceAnimation.png', 68, 68);
        game.load.spritesheet('dude', '/assets/king.png', 31.3, 36);
        game.load.spritesheet('playerTeleport', '/assets/playerTeleport.png', 38, 38);
        game.load.spritesheet('attacker', '/assets/attacker.png', 32, 36);
        game.load.spritesheet('baddie', '/assets/zombie.png', 24, 42);
        game.load.spritesheet('zombieRising', '/assets/zombieRising.png', 24, 41);
        game.load.spritesheet('zombieRed', '/assets/zombieRed.png', 24, 42);
        game.load.spritesheet('bossZombie', '/assets/bossZombie.png', 72, 126);
        game.load.spritesheet('flame', '/assets/flames.png', 16, 24);
        game.load.spritesheet('skeleton', '/assets/skeleton.png', 31, 48);  
        game.load.spritesheet('townWoman', '/assets/townfolk1_f.png', 32, 36); 
        game.load.spritesheet('townMan', '/assets/townfolk1_m.png', 32, 36); 
        game.load.spritesheet('children', '/assets/children.png', 33, 36); 
        game.load.spritesheet('warriorWoman', '/assets/warrior_f.png', 32, 36); 
        game.load.spritesheet('warriorMan', '/assets/warrior_m.png', 31.5, 36); 
        game.load.spritesheet('sword', '/assets/sword.png', 24, 24); 
        game.load.spritesheet('mummy', '/assets/mummy.png', 31, 36); 
        game.load.spritesheet('swampCreature', '/assets/swampCreature.png', 36, 36); 
        game.load.spritesheet('deathSheet', '/assets/deathSheet.png', 48, 48); 
        game.load.spritesheet('golem', '/assets/golem.png', 64, 64); 
        game.load.spritesheet('princesses', '/assets/princesses.png', 64, 72); 
        game.load.spritesheet('treeBeast', '/assets/treeBeast1.png', 105, 53); 
        game.load.spritesheet('bottle', '/assets/bottle.png', 34, 34); 
        game.load.spritesheet('beamIcon', '/assets/beamIcon.png', 68, 34); 
        game.load.spritesheet('evilRoot', '/assets/evilRoot.png', 22, 30); 
        game.load.bitmapFont('font', '/assets/font.png', '/assets/font.fnt');
        game.load.bitmapFont('fontWhite', '/assets/fontWhite.png', '/assets/fontWhite.fnt');
    },
    create: function() {
        game.state.start('menu');
    }
};