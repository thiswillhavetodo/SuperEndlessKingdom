var titlePlayer,themeSound,currentTimeHolder,previousTime,weaponsmithTimerHolder,wandTimerHolder,shieldTimerHolder,armourerTimerHolder,armourTimerHolder,hatTimerHolder,bootTimerHolder,enchanterTimerHolder,ringTimerHolder,amuletTimerHolder,trainerTimerHolder,enduranceTimerHolder,skillTimerHolder,weaponsmithAdTimerHolder,armourerAdTimerHolder,enchanterAdTimerHolder,trainerAdTimerHolder,canvasElement,menuBackground,loggedIn=!1,menuState={create:function(){menuBackground=game.add.sprite(0,0,"menuBackground"),menuBackground.scale.x=.356,menuBackground.scale.y=.376;game.add.button(0,0,"creditsButton",this.credits,this),game.add.button(210,420,"startButton",this.start,this),game.add.button(450,420,"loadButton",this.loadSave,this);themeSound=game.add.audio("titleTheme"),console.log(loggedIn),loggedIn&&themeSound.play()},start:function(){game.world.removeAll(),game.state.start("intro"),themeSound.stop()},credits:function(){game.world.removeAll(),game.state.start("credits"),themeSound.stop()},loadSave:function(){var e;for(console.log("local storage"),e=0;e<localStorage.length;e++)console.log(localStorage.key(e)+"=["+localStorage.getItem(localStorage.key(e))+"]");var a=localStorage.getItem("save");saveObject=JSON.parse(a),previousTime=saveObject.time,playerLevel=saveObject.playerLevel,bulletSpacing=saveObject.bulletSpacing,invulnerableSpacing=saveObject.invulnerableSpacing,shotSpeed=saveObject.shotSpeed,manaRegenHolder=saveObject.manaRegenHolder,bossZombieKilled=saveObject.bossZombieKilled,bossTreeBeastKilled=saveObject.bossTreeBeastKilled,bossSkeletonKilled=saveObject.bossSkeletonKilled,bossZombieBirdKilled=saveObject.bossZombieBirdKilled,bossMummyKilled=saveObject.bossMummyKilled,coins=saveObject.coins,stage=saveObject.stage,bestStage=saveObject.bestStage,xp=saveObject.xp,nextLevelXp=saveObject.nextLevelXp,maxHealth=saveObject.maxHealth,maxMana=saveObject.maxMana,shotPower=saveObject.shotPower,knockback=saveObject.knockback,runSpeed=saveObject.runSpeed,currentTimeHolder=saveObject.currentTime,currentTime=currentTimeHolder-previousTime,year=saveObject.year,population=saveObject.population,happiness=saveObject.happiness,popScore=saveObject.popScore,housing=saveObject.housing,commercial=saveObject.commercial,industrial=saveObject.industrial,education=saveObject.education,popHealth=saveObject.popHealth,justice=saveObject.justice,defence=saveObject.defence,utilities=saveObject.utilities,weaponsmith=saveObject.weaponsmith,armourer=saveObject.armourer,enchanter=saveObject.enchanter,trainer=saveObject.trainer,tax=saveObject.tax,income=saveObject.income,expenditure=saveObject.expenditure,totalFunding=saveObject.totalFunding,netIncome=saveObject.netIncome,defending=saveObject.defending,defenceChance=saveObject.defenceChance,assistant=saveObject.assistant,tutorial=saveObject.tutorial,tutorialDefence=saveObject.tutorialDefence,first=saveObject.first,housingFunding=saveObject.housingFunding,commercialFunding=saveObject.commercialFunding,industrialFunding=saveObject.industrialFunding,educationFunding=saveObject.educationFunding,healthFunding=saveObject.healthFunding,justiceFunding=saveObject.justiceFunding,defenceFunding=saveObject.defenceFunding,utilitiesFunding=saveObject.utilitiesFunding,weaponsmithFunding=saveObject.weaponsmithFunding,armourerFunding=saveObject.armourerFunding,enchanterFunding=saveObject.enchanterFunding,trainerFunding=saveObject.trainerFunding,averageFunding=saveObject.averageFunding,weaponsmithDropReward=saveObject.weaponsmithDropReward,weaponsmithTimerHolder=saveObject.weaponsmithTimer,weaponsmithTimer=weaponsmithTimerHolder-previousTime,wandTimerHolder=saveObject.wandTimer,wandTimer=wandTimerHolder-previousTime,wandShotPower=saveObject.wandShotPower,wandShotSpeed=saveObject.wandShotSpeed,wandBulletSpacing=saveObject.wandBulletSpacing,shieldTimerHolder=saveObject.shieldTimer,shieldTimer=shieldTimerHolder-previousTime,shieldKnockback=saveObject.shieldKnockback,shieldMaxHealth=saveObject.shieldMaxHealth,shieldInvulnerableSpacing=saveObject.shieldInvulnerableSpacing,armourerDropReward=saveObject.armourerDropReward,armourerTimerHolder=saveObject.armourerTimer,armourerTimer=armourerTimerHolder-previousTime,armourTimerHolder=saveObject.armourTimer,armourTimer=armourTimerHolder-previousTime,armourMaxHealth=saveObject.armourMaxHealth,armourManaRegenInterval=saveObject.armourManaRegenInterval,armourInvulnerableSpacing=saveObject.armourInvulnerableSpacing,hatTimerHolder=saveObject.hatTimer,hatTimer=hatTimerHolder-previousTime,hatMaxHealth=saveObject.hatMaxHealth,hatManaRegenInterval=saveObject.hatManaRegenInterval,hatMaxMana=saveObject.hatMaxMana,bootTimerHolder=saveObject.bootTimer,bootTimer=bootTimerHolder-previousTime,bootRunSpeed=saveObject.bootRunSpeed,bootManaRegenInterval=saveObject.bootManaRegenInterval,bootInvulnerableSpacing=saveObject.bootInvulnerableSpacing,enchanterDropReward=saveObject.enchanterDropReward,enchanterTimerHolder=saveObject.enchanterTimer,enchanterTimer=enchanterTimerHolder-previousTime,ringTimerHolder=saveObject.ringTimer,ringTimer=ringTimerHolder-previousTime,ringShotPower=saveObject.ringShotPower,ringMaxMana=saveObject.ringMaxMana,ringKnockback=saveObject.ringKnockback,amuletTimerHolder=saveObject.amuletTimer,amuletTimer=amuletTimerHolder-previousTime,amuletRunSpeed=saveObject.amuletRunSpeed,amuletShotSpeed=saveObject.amuletShotSpeed,amuletBulletSpacing=saveObject.amuletBulletSpacing,trainerDropReward=saveObject.trainerDropReward,trainerTimerHolder=saveObject.trainerTimer,trainerTimer=trainerTimerHolder-previousTime,skillTimerHolder=saveObject.skillTimer,skillTimer=skillTimerHolder-previousTime,skillShotPower=saveObject.skillShotPower,skillMaxMana=saveObject.skillMaxMana,skillKnockback=saveObject.skillKnockback,enduranceTimerHolder=saveObject.enduranceTimer,enduranceTimer=enduranceTimerHolder-previousTime,enduranceRunSpeed=saveObject.enduranceRunSpeed,enduranceShotSpeed=saveObject.enduranceShotSpeed,enduranceBulletSpacing=saveObject.enduranceBulletSpacing,attackStrength=saveObject.attackStrength,tutorialDefence=saveObject.tutorialDefence,weaponsmithUpgradeCost=saveObject.weaponsmithUpgradeCost,armourerUpgradeCost=saveObject.armourerUpgradeCost,enchanterUpgradeCost=saveObject.enchanterUpgradeCost,trainerUpgradeCost=saveObject.trainerUpgradeCost,previousPopulation=saveObject.previousPopulation,previousEconomyMod=saveObject.previousEconomyMod,previousIncome=saveObject.previousIncome,previousExpenditure=saveObject.previousExpenditure,previousNetIncome=saveObject.previousNetIncome,previousCoins=saveObject.previousCoins,startingGoldIncrease=saveObject.startingGoldIncrease,startingPopIncrease=saveObject.startingPopIncrease,deptEffectIncrease=saveObject.deptEffectIncrease,beamUnlockShown=saveObject.beamUnlockShown,manaRefillUnlockShown=saveObject.manaRefillUnlockShown,weaponsmithAdTimerHolder=saveObject.weaponsmithAdTimer,armourerAdTimerHolder=saveObject.armourerAdTimer,enchanterAdTimerHolder=saveObject.enchanterAdTimer,trainerAdTimerHolder=saveObject.trainerAdTimer,weaponsmithAdTimer=weaponsmithAdTimerHolder-previousTime,armourerAdTimer=armourerAdTimerHolder-previousTime,enchanterAdTimer=enchanterAdTimerHolder-previousTime,trainerAdTimer=trainerAdTimerHolder-previousTime,null!=saveObject.baddieAdjuster?(baddieAdjuster=saveObject.baddieAdjuster,baddieDamageAdjuster=saveObject.baddieDamageAdjuster,baddieHpAdjuster=saveObject.baddieHpAdjuster,baddieXpAdjuster=saveObject.baddieXpAdjuster,baddieSpeedAdjuster=saveObject.baddieSpeedAdjuster):(baddieAdjuster=0,baddieDamageAdjuster=1,baddieHpAdjuster=1,baddieXpAdjuster=1,baddieSpeedAdjuster=1),null!=saveObject.stageMilestone?(stageMilestone=saveObject.stageMilestone,bossFinalKilled=saveObject.bossFinalKilled):(stageMilestone=100*Math.floor(bestStage/100),bossFinalKilled=!1),game.world.removeAll(),game.state.start("city"),themeSound.stop()}};