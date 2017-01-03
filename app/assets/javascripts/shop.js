/* global game*/
/* global population*/
/* global coins*/
/* global year*/
var shop;
var close;
var closeText;
var shopPopText;
var shopCoinsText;
var shopMessageBackground;
var shopMessageText;
var taxHolder;
var taxLevelText;
var taxPlusButton;
var taxMinusButton;
var housingHolder;
var housingLevelText;
var housingFunding = 40;
var housingPlusButton;
var housingMinusButton;
var commercialHolder;
var commercialLevelText;
var commercialFunding = 40;
var commercialPlusButton;
var commercialMinusButton;
var industrialHolder;
var industrialLevelText;
var industrialFunding = 40;
var industrialPlusButton;
var industrialMinusButton;
var educationHolder;
var educationLevelText;
var educationFunding = 40;
var educationPlusButton;
var educationMinusButton;
var healthHolder;
var healthLevelText;
var healthFunding = 40;
var healthPlusButton;
var healthMinusButton;
var justiceHolder;
var justiceLevelText;
var justiceFunding = 40;
var justicePlusButton;
var justiceMinusButton;
var defenceHolder;
var defenceLevelText;
var defenceFunding = 40;
var defencePlusButton;
var defenceMinusButton;
var utilitiesHolder;
var utilitiesLevelText;
var utilitiesFunding = 40;
var utilitiesPlusButton;
var utilitiesMinusButton;
var weaponsmithHolder;
var weaponsmithLevelText;
var weaponsmithFunding = 40;
var weaponsmithPlusButton;
var weaponsmithMinusButton;
var armourerHolder;
var armourerLevelText;
var armourerFunding = 40;
var armourerPlusButton;
var armourerMinusButton;
var enchanterHolder;
var enchanterLevelText;
var enchanterFunding = 40;
var enchanterPlusButton;
var enchanterMinusButton;
var trainerHolder;
var trainerLevelText;
var trainerFunding = 40;
var trainerPlusButton;
var trainerMinusButton;
var averageFunding = 40;

var baseChance;

var weaponsmithDropReward = 0;
var weaponsmithDRBoost = 1;
var weaponsmithTimer = 0;
var weaponsmithAdTimer = 0;
var wandTimer = 0;
var wandImage;
var wandPerkButton;
var wandPerkText;
var wandPerkText2;
var wandShotPower = 0;
var wandShotPowerUpgrade;
var wandShotSpeed = 0;
var wandShotSpeedUpgrade;
var wandBulletSpacing = 0;
var wandBulletSpacingUpgrade;
var shieldTimer = 0;
var shieldImage;
var shieldPerkButton;
var shieldPerkText;
var shieldPerkText2;
var shieldKnockback = 0;
var shieldKnockbackUpgrade;
var shieldMaxHealth = 0;
var shieldMaxHealthUpgrade;
var shieldInvulnerableSpacing = 0;
var shieldInvulnerableSpacingUpgrade;

var armourerDropReward = 0;
var armourerDRBoost = 1;
var armourerTimer = 0;
var armourerAdTimer = 0;
var armourTimer = 0;
var armourImage;
var armourPerkButton;
var armourPerkText;
var armourPerkText2;
var armourMaxHealth = 0;
var armourMaxHealthUpgrade;
var armourManaRegenInterval = 0;
var armourManaRegenIntervalUpgrade;
var armourInvulnerableSpacing = 0;
var armourInvulnerableSpacingUpgrade;
var hatTimer = 0;
var hatImage;
var hatPerkButton;
var hatPerkText;
var hatPerkText2;
var hatMaxHealth = 0;
var hatMaxHealthUpgrade;
var hatManaRegenInterval = 0;
var hatManaRegenIntervalUpgrade;
var hatMaxMana = 0;
var hatMaxManaUpgrade;
var bootTimer = 0;
var bootImage;
var bootPerkButton;
var bootPerkText;
var bootPerkText2;
var bootRunSpeed = 0;
var bootRunSpeedUpgrade;
var bootManaRegenInterval = 0;
var bootManaRegenIntervalUpgrade;
var bootInvulnerableSpacing = 0;
var bootInvulnerableSpacingUpgrade;

var enchanterDropReward = 0;
var enchanterDRBoost = 1;
var enchanterTimer = 0;
var enchanterAdTimer = 0;
var ringTimer = 0;
var ringImage;
var ringPerkButton;
var ringPerkText;
var ringPerkText2;
var ringShotPower = 0;
var ringShotPowerUpgrade;
var ringMaxMana = 0;
var ringMaxManaUpgrade;
var ringKnockback = 0;
var ringKnockbackUpgrade;
var amuletTimer = 0;
var amuletImage;
var amuletPerkButton;
var amuletPerkText;
var amuletPerkText2;
var amuletRunSpeed = 0;
var amuletRunSpeedUpgrade;
var amuletShotSpeed = 0;
var amuletShotSpeedUpgrade;
var amuletBulletSpacing = 0;
var amuletBulletSpacingUpgrade;

var trainerDropReward = 0;
var trainerDRBoost = 1;
var trainerTimer = 0;
var trainerAdTimer = 0;
var skillTimer = 0;
var skillImage;
var skillPerkButton;
var skillPerkText;
var skillPerkText2;
var skillShotPower = 0;
var skillShotPowerUpgrade;
var skillMaxMana = 0;
var skillMaxManaUpgrade;
var skillKnockback = 0;
var skillKnockbackUpgrade;
var enduranceTimer = 0;
var enduranceImage;
var endurancePerkButton;
var endurancePerkText;
var endurancePerkText2;
var enduranceRunSpeed = 0;
var enduranceRunSpeedUpgrade;
var enduranceShotSpeed = 0;
var enduranceShotSpeedUpgrade;
var enduranceBulletSpacing = 0;
var enduranceBulletSpacingUpgrade;

var maxFunding = false;
var priorityService = true;
var shopSpeechBubble;
var shopText = "";
var shopText2 = "";
var shopText3 = "";
var shopText4 = "";
var shopText5 = "";
var shopText6 = "";
var efffectivenessScoreBackground;
var efffectivenessScoreText;

var nextHousing;
var nextCommercial;
var nextIndustrial;
var nextEducation;
var nextPopHealth;
var nextJustice;
var nextDefence;
var nextUtilities;
var nextWeaponsmith;
var nextArmourer;
var nextEnchanter;
var nextTrainer;
var nextPopulation;
var nextCoins;
var nextHappiness;
var nextEconomyMod;
var nextIncome;
var nextExpenditure;
var nextNetIncome;
var nextYearStatText;
var nextPopulationStatText;
var nextIncomeStatText;
var nextExpenditureStatText;
var nextNetIncomeStatText;
var nextBalanceStatText;
var nextYear;

var weaponsmithUpgradeText;
var weaponsmithUpgradeCost = 200;
var armourerUpgradeText;
var armourerUpgradeCost = 200;
var enchanterUpgradeText;
var enchanterUpgradeCost = 200;
var trainerUpgradeText;
var trainerUpgradeCost = 200;

var advert = false;

var bonusType;
var beamUnlockShown = false;
var manaRefillUnlockShown = false;

var shopState = {
    create: function() {
        advert = false;
        console.log("advertCreate = " + advert);
        game.world.removeAll();
        game.add.sprite(0, 0, 'shopBackground');
        close = game.add.button(607, 565,'blankButton', this.shopClose, this);
        closeText = game.add.bitmapText(657, 595, 'font', 'Return to Town', 18);
        shopPopText = game.add.bitmapText(70, 10, 'font', 'Population: ' + population, 26);
        shopCoinsText = game.add.bitmapText(550, 10, 'font', 'Coins: ' + coins, 26);
        shopMessageBackground = game.add.sprite(-1000, 357, 'dialog_box_thin');
        shopMessageText = game.add.bitmapText(200, 375, 'font',  '', 18);
        game.add.button(0, 250, 'leftArrow', this.shopLeft, this);
        game.add.button(755, 250, 'rightArrow', this.shopRight, this);
        shopSpeechBubble = game.add.sprite(180, 35, 'speechBubble'); 
        shopText = game.add.bitmapText(230, 45, 'font', '', 15);
        shopText2 = game.add.bitmapText(200, 60, 'font', '', 15);
        shopText3 = game.add.bitmapText(188, 75, 'font', '', 15);
        shopText4 = game.add.bitmapText(188, 90, 'font', '', 15);
        shopText5 = game.add.bitmapText(200, 105, 'font', '', 15);
        shopText6 = game.add.bitmapText(220, 120, 'font', '', 15);
        shopText.tint = 000000;
        shopText2.tint = 000000;
        shopText3.tint = 000000;
        shopText4.tint = 000000;
        shopText5.tint = 000000;
        shopText6.tint = 000000;
        efffectivenessScoreBackground = game.add.sprite(500, 60, 'dbox_thinShort');
        efffectivenessScoreText = game.add.bitmapText(530, 77, 'font', '', 14);
        this.dropRewardDiminishingReturns();
        switch(shop) {
            case "castle":
                taxHolder = game.add.sprite(305, 250, 'blankButton');
                taxLevelText = game.add.bitmapText(365, 280, 'font', "Tax Level: " + tax, 20);
                taxPlusButton = game.add.button(530, 250, 'plusButton', this.taxPlus, this);
                taxMinusButton = game.add.button(225, 250, 'minusButton', this.taxMinus, this);
                priorityService = false;
                efffectivenessScoreText.text = "Approval Rating: " + Math.round((housing+commercial+industrial+education+popHealth+justice+defence+utilities+weaponsmith+armourer+enchanter+trainer)/12);
                if (happiness>(tax*1.45)+20) {
                    shopText.text = " Your Majesty!";
                    shopText2.text = "  I believe the people";
                    shopText3.text = "      would be willing to";
                    shopText4.text = "  pay higher taxes to help";
                    shopText5.text = "       fund our vital"; 
                    shopText6.text = "      services."
                }
                else if (happiness<=(tax+5)) {
                    shopText.text = " Your Majesty!";
                    shopText2.text = "Your people are troubled.";
                    shopText3.text = "    I'm sure they would";
                    shopText4.text = "welcome a cut in taxes if";
                    shopText5.text = "    you feel the treasury";
                    shopText6.text = "   can afford it.";
                }
                else {
                    shopText.text = " Your Majesty!";
                    shopText2.text = "  The general feeling";
                    shopText3.text = "   among your people is";
                    shopText4.text = "     that the level of ";
                    shopText5.text = "    taxation is about "; 
                    shopText6.text = "    right.";
                }
                game.add.sprite(150, 340, 'scrollBox');
                game.add.bitmapText(180, 350, 'font', "Last Year", 18);
                var prevYearStatText = game.add.bitmapText(165, 385, 'font', "Year: " + (year-1), 14);
                var prevPopulationStatText = game.add.bitmapText(165, 400, 'font', "Population: " + previousPopulation, 14);
                var prevIncomeStatText = game.add.bitmapText(165, 415, 'font', "Income: " + Math.round(previousIncome), 14);
                var prevExpenditureStatText = game.add.bitmapText(165, 430, 'font', "Expenditure: " + Math.round(previousExpenditure), 14);
                var prevNetIncomeStatText = game.add.bitmapText(165, 445, 'font', "Net Income: " + Math.round(previousNetIncome), 14);
                var prevBalanceStatText = game.add.bitmapText(165, 460, 'font', "Balance: " + previousCoins, 14);
                game.add.sprite(350, 340, 'scrollBox');
                game.add.bitmapText(380, 350, 'font', "This Year", 18);
                var yearStatText = game.add.bitmapText(365, 385, 'font', "Year: " + year, 14);
                var populationStatText = game.add.bitmapText(365, 400, 'font', "Population: " + population, 14);
                var incomeStatText = game.add.bitmapText(365, 415, 'font', "Income: " + Math.round(income), 14);
                var expenditureStatText = game.add.bitmapText(365, 430, 'font', "Expenditure: " + Math.round(expenditure), 14);
                var netIncomeStatText = game.add.bitmapText(365, 445, 'font', "Net Income: " + Math.round(netIncome), 14);
                var balanceStatText = game.add.bitmapText(365, 460, 'font', "Balance: " + coins, 14);
                game.add.sprite(550, 340, 'scrollBox');
                game.add.bitmapText(580, 350, 'font', "Next Year", 18);
                nextYearStatText = game.add.bitmapText(565, 385, 'font', "Year: " + (year+1), 14);
                nextPopulationStatText = game.add.bitmapText(565, 400, 'font', "Population: " + nextPopulation, 14);
                nextIncomeStatText = game.add.bitmapText(565, 415, 'font', "Income: " + Math.round(nextIncome), 14);
                nextExpenditureStatText = game.add.bitmapText(565, 430, 'font', "Expenditure: " + Math.round(nextExpenditure), 14);
                nextNetIncomeStatText = game.add.bitmapText(565, 445, 'font', "Net Income: " + Math.round(nextNetIncome), 14);
                nextBalanceStatText = game.add.bitmapText(565, 460, 'font', "Balance: " + nextCoins, 14);
                this.nextYearEstimate();
                break;
            case "housing":
                housingHolder = game.add.sprite(305, 250, 'blankButton');
                housingLevelText = game.add.bitmapText(325, 280, 'font', "New Homes Funding: " + housingFunding, 16);
                housingPlusButton = game.add.button(530, 250, 'plusButton', this.housingPlus, this);
                housingMinusButton = game.add.button(225, 250, 'minusButton', this.housingMinus, this);
                if (housingFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = false;
                efffectivenessScoreText.text = "Department Effectiveness: " + Math.round(housing);
                break;
            case "commercial":
                commercialHolder = game.add.sprite(305, 250, 'blankButton');
                commercialLevelText = game.add.bitmapText(325, 280, 'font', "Commercial Funding: " + commercialFunding, 16);
                commercialPlusButton = game.add.button(530, 250, 'plusButton', this.commercialPlus, this);
                commercialMinusButton = game.add.button(225, 250, 'minusButton', this.commercialMinus, this);
                if (commercialFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = true;
                efffectivenessScoreText.text = "Department Effectiveness: " + Math.round(commercial);
                break;
            case "industrial":
                industrialHolder = game.add.sprite(305, 250, 'blankButton');
                industrialLevelText = game.add.bitmapText(325, 280, 'font', "New Farmland Funding: " + industrialFunding, 16);
                industrialPlusButton = game.add.button(530, 250, 'plusButton', this.industrialPlus, this);
                industrialMinusButton = game.add.button(225, 250, 'minusButton', this.industrialMinus, this);
                if (industrialFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = true;
                efffectivenessScoreText.text = "Department Effectiveness: " + Math.round(industrial);
                break;
            case "education":
                educationHolder = game.add.sprite(305, 250, 'blankButton');
                educationLevelText = game.add.bitmapText(325, 280, 'font', "School Funding: " + educationFunding, 16);
                educationPlusButton = game.add.button(530, 250, 'plusButton', this.educationPlus, this);
                educationMinusButton = game.add.button(225, 250, 'minusButton', this.educationMinus, this);
                if (educationFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = true;
                efffectivenessScoreText.text = "Department Effectiveness: " + Math.round(education);
                break;
            case "health":
                healthHolder = game.add.sprite(305, 250, 'blankButton');
                healthLevelText = game.add.bitmapText(325, 280, 'font', "Health Funding: " + healthFunding, 16);
                healthPlusButton = game.add.button(530, 250, 'plusButton', this.healthPlus, this);
                healthMinusButton = game.add.button(225, 250, 'minusButton', this.healthMinus, this);
                if (healthFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = true;
                efffectivenessScoreText.text = "Department Effectiveness: " + Math.round(popHealth);
                break;
            case "justice":
                justiceHolder = game.add.sprite(305, 250, 'blankButton');
                justiceLevelText = game.add.bitmapText(325, 280, 'font', "Police Funding: " + justiceFunding, 16);
                justicePlusButton = game.add.button(530, 250, 'plusButton', this.justicePlus, this);
                justiceMinusButton = game.add.button(225, 250, 'minusButton', this.justiceMinus, this);
                if (justiceFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = false;
                efffectivenessScoreText.text = "Department Effectiveness: " + Math.round(justice);
                break; 
            case "defence":
                defenceHolder = game.add.sprite(305, 250, 'blankButton');
                defenceLevelText = game.add.bitmapText(325, 280, 'font', "Defence Funding: " + defenceFunding, 16);
                defencePlusButton = game.add.button(530, 250, 'plusButton', this.defencePlus, this);
                defenceMinusButton = game.add.button(225, 250, 'minusButton', this.defenceMinus, this);
                if (defenceFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = true;
                efffectivenessScoreText.text = "Department Effectiveness: " + Math.round(defence);
                break; 
            case "utilities":
                utilitiesHolder = game.add.sprite(305, 250, 'blankButton');
                utilitiesLevelText = game.add.bitmapText(325, 280, 'font', "Utilities Funding: " + utilitiesFunding, 16);
                utilitiesPlusButton = game.add.button(530, 250, 'plusButton', this.utilitiesPlus, this);
                utilitiesMinusButton = game.add.button(225, 250, 'minusButton', this.utilitiesMinus, this);
                if (utilitiesFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = false;
                efffectivenessScoreText.text = "Department Effectiveness: " + Math.round(utilities);
                break; 
            case "weaponsmith":
                weaponsmithHolder = game.add.sprite(129, 175, 'blankButton');
                weaponsmithLevelText = game.add.bitmapText(149, 205, 'font', "Weaponsmith Funding: " + weaponsmithFunding, 16);
                weaponsmithPlusButton = game.add.button(354, 175, 'plusButton', this.weaponsmithPlus, this);
                weaponsmithMinusButton = game.add.button(49, 175, 'minusButton', this.weaponsmithMinus, this);
                game.add.sprite(310, 410, 'ui_213x150');
                game.add.bitmapText(317, 425, 'font', "Weaponsmith Skill Level: " + (Math.round(weaponsmithDropReward*10)/10), 14);
                game.add.bitmapText(317, 450, 'font', "Wand Power Bonus: " + wandShotPower, 14);
                game.add.bitmapText(317, 465, 'font', "Wand Shot Speed Bonus: " + wandShotSpeed, 14);
                game.add.bitmapText(317, 480, 'font', "Wand Attack Speed Bonus: " + wandBulletSpacing, 14);
                game.add.bitmapText(317, 500, 'font', "Shield Knockback Bonus: " + shieldKnockback, 14);
                game.add.bitmapText(317, 515, 'font', "Shield Health Bonus: " + shieldMaxHealth, 14);
                game.add.bitmapText(317, 530, 'font', "Shield Invulnerable Bonus: " + shieldInvulnerableSpacing, 14);
                game.add.sprite(483, 175, 'blankButton');
                weaponsmithUpgradeText = game.add.bitmapText(503, 205, 'font', "Buy Skill Material: " + weaponsmithUpgradeCost, 16);
                game.add.button(708, 175, 'plusButton', this.weaponsmithUpgrade, this);
                if (weaponsmithFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = false;
                this.weaponsmithImprove();
                efffectivenessScoreText.text = "Artisan Effectiveness: " + Math.round(weaponsmith);
                if (population>111 && weaponsmithTimer>game.time.now && weaponsmithAdTimer<game.time.now) {
                    advert = true;
                    console.log("advert = " + advert);
                    console.log("weaponsmithAdTimer = " + weaponsmithAdTimer);
                    console.log("game.time.now = " + game.time.now);
                }
                break; 
            case "armourer":
                armourerHolder = game.add.sprite(129, 175, 'blankButton');
                armourerLevelText = game.add.bitmapText(145, 205, 'font', "Armourer Funding: " + armourerFunding, 16);
                armourerPlusButton = game.add.button(354, 175, 'plusButton', this.armourerPlus, this);
                armourerMinusButton = game.add.button(49, 175, 'minusButton', this.armourerMinus, this);
                game.add.sprite(310, 410, 'ui_213x220');
                game.add.bitmapText(317, 425, 'font', "Armourer Skill Level: " + (Math.round(armourerDropReward*10)/10), 14);
                game.add.bitmapText(317, 450, 'font', "Armour Health Bonus: " + armourMaxHealth, 14);
                game.add.bitmapText(317, 465, 'font', "Armour Mana Regen Bonus: " + armourManaRegenInterval, 14);
                game.add.bitmapText(317, 480, 'font', "Armour Invulnerable Bonus: " + armourInvulnerableSpacing, 14);
                game.add.bitmapText(317, 500, 'font', "Crown Health Bonus: " + hatMaxHealth, 14);
                game.add.bitmapText(317, 515, 'font', "Crown Mana Regen Bonus: " + hatManaRegenInterval, 14);
                game.add.bitmapText(317, 530, 'font', "Crown Mana Bonus: " + hatMaxMana, 14);
                game.add.bitmapText(317, 550, 'font', "Boots Run Speed Bonus: " + bootRunSpeed, 14);
                game.add.bitmapText(317, 565, 'font', "Boots Mana Regen Bonus: " + bootManaRegenInterval, 14);
                game.add.bitmapText(317, 580, 'font', "Boots Invulnerable Bonus: " + bootInvulnerableSpacing, 14);
                game.add.sprite(483, 175, 'blankButton');
                armourerUpgradeText = game.add.bitmapText(503, 205, 'font', "Buy Skill Material: " + armourerUpgradeCost, 16);
                game.add.button(708, 175, 'plusButton', this.armourerUpgrade, this);
                if (armourerFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = false;
                this.armourerImprove();
                efffectivenessScoreText.text = "Artisan Effectiveness: " + Math.round(armourer);
                if (population>127 && armourerTimer>game.time.now && armourerAdTimer<game.time.now) {
                    advert = true;
                }
                break; 
            case "enchanter":
                enchanterHolder = game.add.sprite(129, 175, 'blankButton');
                enchanterLevelText = game.add.bitmapText(149, 205, 'font', "Enchanter Funding: " + enchanterFunding, 16);
                enchanterPlusButton = game.add.button(354, 175, 'plusButton', this.enchanterPlus, this);
                enchanterMinusButton = game.add.button(49, 175, 'minusButton', this.enchanterMinus, this);
                game.add.sprite(310, 410, 'ui_213x150');
                game.add.bitmapText(317, 425, 'font', "Enchanter Skill Level: " + (Math.round(enchanterDropReward*10)/10), 14);
                game.add.bitmapText(317, 450, 'font', "Ring Power Bonus: " + ringShotPower, 14);
                game.add.bitmapText(317, 465, 'font', "Ring Mana Bonus: " + ringMaxMana, 14);
                game.add.bitmapText(317, 480, 'font', "Ring Knockback Bonus: " + ringKnockback, 14);
                game.add.bitmapText(317, 500, 'font', "Amulet Run Speed Bonus: " + amuletRunSpeed, 14);
                game.add.bitmapText(317, 515, 'font', "Amulet Shot Speed Bonus: " + amuletShotSpeed, 14);
                game.add.bitmapText(317, 530, 'font', "Amulet Attack Speed Bonus: " + amuletBulletSpacing, 14);
                game.add.sprite(483, 175, 'blankButton');
                enchanterUpgradeText = game.add.bitmapText(503, 205, 'font', "Buy Skill Material: " + enchanterUpgradeCost, 16);
                game.add.button(708, 175, 'plusButton', this.enchanterUpgrade, this);
                if (enchanterFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = false;
                this.enchanterImprove();
                efffectivenessScoreText.text = "Artisan Effectiveness: " + Math.round(enchanter);
                if (population>153 && enchanterTimer>game.time.now && enchanterAdTimer<game.time.now) {
                    advert = true;
                }
                break; 
            case "trainer":
                trainerHolder = game.add.sprite(129, 175, 'blankButton');
                trainerLevelText = game.add.bitmapText(149, 205, 'font', "Trainer Funding: " + trainerFunding, 16);
                trainerPlusButton = game.add.button(354, 175, 'plusButton', this.trainerPlus, this);
                trainerMinusButton = game.add.button(49, 175, 'minusButton', this.trainerMinus, this);
                game.add.sprite(310, 410, 'ui_213x150');
                game.add.bitmapText(317, 425, 'font', "Trainer Skill Level: " + (Math.round(trainerDropReward*10)/10), 14);
                game.add.bitmapText(317, 450, 'font', "Skill Power Bonus: " + skillShotPower, 14);
                game.add.bitmapText(317, 465, 'font', "Skill Mana Bonus: " + skillMaxMana, 14);
                game.add.bitmapText(317, 480, 'font', "Skill Knockback Bonus: " + skillKnockback, 14);
                game.add.bitmapText(317, 500, 'font', "Stamina Run Speed Bonus: " + enduranceRunSpeed, 14);
                game.add.bitmapText(317, 515, 'font', "Stamina Shot Speed Bonus: " + enduranceShotSpeed, 14);
                game.add.bitmapText(317, 530, 'font', "Stamina Attack Speed Bonus: " + enduranceBulletSpacing, 14);
                game.add.sprite(483, 175, 'blankButton');
                trainerUpgradeText = game.add.bitmapText(503, 205, 'font', "Buy Skill Material: " + trainerUpgradeCost, 16);
                game.add.button(708, 175, 'plusButton', this.trainerUpgrade, this);
                if (trainerFunding<100) {
                    maxFunding = false;
                }
                else {
                    maxFunding = true;
                }
                priorityService = false;
                this.trainerImprove();
                efffectivenessScoreText.text = "Artisan Effectiveness: " + Math.round(trainer);
                if (population>205 && trainerTimer>game.time.now && trainerAdTimer<game.time.now) {
                    advert = true;
                }
                break; 
        }
        this.shopTextSelect();
        this.advertOptions();
    },
    shopClose: function() {
        game.world.removeAll();
        game.state.start('city');  
    },
    taxPlus: function() {
      if (tax<100 && happiness>tax) {
        tax += 1;
        taxLevelText.text = "Tax Level: " + tax;
        this.nextYearEstimate();
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Taxes can't be increased.";
      }
    },
    taxMinus: function() {
      if (tax>=10) {
        tax -= 1;
        taxLevelText.text = "Tax Level: " + tax;
        this.nextYearEstimate();
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Taxes can't be decreased.";
      }
    },
    housingPlus: function() {
      if (housingFunding<100 && happiness>housingFunding) {
        housingFunding += 1;
        housingLevelText.text = "New Homes Funding: " + housingFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    housingMinus: function() {
      if (housingFunding>=10) {
        housingFunding -= 1;
        housingLevelText.text = "New Homes Funding: " + housingFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    commercialPlus: function() {
      if (commercialFunding<100 && happiness>commercialFunding) {
        commercialFunding += 1;
        commercialLevelText.text = "Commercial Funding: " + commercialFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    commercialMinus: function() {
      if (commercialFunding>=10) {
        commercialFunding -= 1;
        commercialLevelText.text = "Commercial Funding: " + commercialFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    industrialPlus: function() {
      if (industrialFunding<100 && happiness>industrialFunding) {
        industrialFunding += 1;
        industrialLevelText.text = "New Farmland Funding: " + industrialFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    industrialMinus: function() {
      if (industrialFunding>=10) {
        industrialFunding -= 1;
        industrialLevelText.text = "New Farmland Funding: " + industrialFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    educationPlus: function() {
      if (educationFunding<100 && happiness>educationFunding) {
        educationFunding += 1;
        educationLevelText.text = "School Funding: " + educationFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    educationMinus: function() {
      if (educationFunding>=10) {
        educationFunding -= 1;
        educationLevelText.text = "School Funding: " + educationFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    healthPlus: function() {
      if (healthFunding<100 && happiness>healthFunding) {
        healthFunding += 1;
        healthLevelText.text = "Health Funding: " + healthFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    healthMinus: function() {
      if (healthFunding>=10) {
        healthFunding -= 1;
        healthLevelText.text = "Health Funding: " + healthFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    justicePlus: function() {
      if (justiceFunding<100 && happiness>justiceFunding) {
        justiceFunding += 1;
        justiceLevelText.text = "Police Funding: " + justiceFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    justiceMinus: function() {
      if (justiceFunding>=10) {
        justiceFunding -= 1;
        justiceLevelText.text = "Police Funding: " + justiceFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    defencePlus: function() {
      if (defenceFunding<100 && happiness>defenceFunding) {
        defenceFunding += 1;
        defenceLevelText.text = "Defence Funding: " + defenceFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    defenceMinus: function() {
      if (defenceFunding>=10) {
        defenceFunding -= 1;
        defenceLevelText.text = "Defence Funding: " + defenceFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    utilitiesPlus: function() {
      if (utilitiesFunding<100 && happiness>utilitiesFunding) {
        utilitiesFunding += 1;
        utilitiesLevelText.text = "Utilities Funding: " + utilitiesFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    utilitiesMinus: function() {
      if (utilitiesFunding>=10) {
        utilitiesFunding -= 1;
        utilitiesLevelText.text = "Utilities Funding: " + utilitiesFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    weaponsmithPlus: function() {
      if (weaponsmithFunding<100 && happiness>weaponsmithFunding) {
        weaponsmithFunding += 1;
        weaponsmithLevelText.text = "Weaponsmith Funding: " + weaponsmithFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    weaponsmithMinus: function() {
      if (weaponsmithFunding>=10) {
        weaponsmithFunding -= 1;
        weaponsmithLevelText.text = "Weaponsmith Funding: " + weaponsmithFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    armourerPlus: function() {
      if (armourerFunding<100 && happiness>armourerFunding) {
        armourerFunding += 1;
        armourerLevelText.text = "Armourer Funding: " + armourerFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    armourerMinus: function() {
      if (armourerFunding>=10) {
        armourerFunding -= 1;
        armourerLevelText.text = "Armourer Funding: " + armourerFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    enchanterPlus: function() {
      if (enchanterFunding<100 && happiness>enchanterFunding) {
        enchanterFunding += 1;
        enchanterLevelText.text = "Enchanter Funding: " + enchanterFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    enchanterMinus: function() {
      if (enchanterFunding>=10) {
        enchanterFunding -= 1;
        enchanterLevelText.text = "Enchanter Funding: " + enchanterFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    trainerPlus: function() {
      if (trainerFunding<100 && happiness>trainerFunding) {
        trainerFunding += 1;
        trainerLevelText.text = "Trainer Funding: " + trainerFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be increased.";
      }
    },
    trainerMinus: function() {
      if (trainerFunding>=10) {
        trainerFunding -= 1;
        trainerLevelText.text = "Trainer Funding: " + trainerFunding;
      }
      else {
          shopMessageBackground.x = 196;
        shopMessageText.text = "      Funding can't be decreased.";
      }
    },
    weaponsmithImprove: function() {
       if (game.time.now > weaponsmithTimer && population >= 110) {
         baseChance = Math.round(((popScore*0.25) + (weaponsmith*0.3) + (weaponsmithDropReward*0.45))/2);
         console.log("Base Chance: " + baseChance);
         game.add.sprite(100, 250, 'border');
         wandImage = game.add.sprite(108, 258, 'wandAnimation');
         wandImage.frame = 0;
         wandImage.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
         wandPerkButton = game.add.button(30, 330, 'blankButton', this.wandPerk, this);
         wandPerkText = game.add.bitmapText(100, 350, 'font', "Request", 15);
         wandPerkText2 = game.add.bitmapText(65, 370, 'font', "Wand Improvement", 15);
         game.add.sprite(650, 250, 'border');
         shieldImage = game.add.sprite(658, 258, 'shieldAnimation');
         shieldImage.frame = 0;
         shieldImage.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
         shieldPerkButton = game.add.button(580, 330, 'blankButton', this.shieldPerk, this);
         shieldPerkText = game.add.bitmapText(650, 350, 'font', "Request", 15);
         shieldPerkText2 = game.add.bitmapText(615, 370, 'font', "Shield Improvement", 15);
       }
       else if (population<110) {
           shopMessageBackground.x = 196;
         shopMessageText.text = "    Weaponsmith Perks unlock at 110 population."; 
       }
       else {
           shopMessageBackground.x = 196;
         shopMessageText.text = "The Weaponsmith offers upgrades every 30 minutes.";  
       }
    },
    wandPerk: function() {
        if (game.time.now > wandTimer) {
            var wandPerkChance = Math.random()*5;
            console.log(wandPerkChance);
            wandImage.animations.play('spin');
            var self = this;
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {   
                if (wandPerkChance<=1.66) {
                    wandShotPowerUpgrade = Math.round(baseChance + wandPerkChance);
                    console.log(wandShotPowerUpgrade);
                    if (wandShotPowerUpgrade>wandShotPower) {
                        shotPower += 0.01*(wandShotPowerUpgrade - wandShotPower);
                        wandShotPower = wandShotPowerUpgrade;
                        wandImage.animations.stop();
                        wandImage.frame = 0;
                        wandPerkText.text = "Upgrade:";
                        wandPerkText2.text = "Wand Power +" + wandShotPower;
                    }
                    else {
                        wandPerkText.text = "No upgrade this time";
                        wandImage.animations.stop();
                        wandImage.frame = 0;
                    }
                }
                else if (wandPerkChance>=3.34) {
                    wandShotSpeedUpgrade = Math.round(baseChance + wandPerkChance);
                    if (wandShotSpeedUpgrade>wandShotSpeed) {
                        shotSpeed += (wandShotSpeedUpgrade - wandShotSpeed)/2;
                        wandShotSpeed = wandShotSpeedUpgrade;
                        wandImage.animations.stop();
                        wandImage.frame = 2;
                        wandPerkText.text = "Upgrade:";
                        wandPerkText2.text = "Projectile Speed +" + wandShotSpeed;
                        self.bonusCheck();
                    }
                    else {
                        wandPerkText.text = "No upgrade this time";
                        wandImage.animations.stop();
                        wandImage.frame = 2;
                    }
                }
                else {
                    wandBulletSpacingUpgrade = Math.round(baseChance + wandPerkChance);
                    if (wandBulletSpacingUpgrade>wandBulletSpacing) {
                        bulletSpacing -= (wandBulletSpacingUpgrade - wandBulletSpacing)/2;
                        wandBulletSpacing = wandBulletSpacingUpgrade;
                        wandImage.animations.stop();
                        wandImage.frame = 4;
                        wandPerkText.text = "Upgrade:"; 
                        wandPerkText2.text = "Wand Attack Speed +" + wandBulletSpacing; 
                    }
                    else {
                        wandPerkText.text = "No upgrade this time";
                        wandImage.animations.stop();
                        wandImage.frame = 4;
                    }
                }
                wandTimer = game.time.now + 1800000;
                if (shieldTimer>game.time.now && wandTimer>game.time.now) {
                    weaponsmithTimer = game.time.now + 1800000;
                }
            });
        }
    },
    shieldPerk: function() {
        if (game.time.now > shieldTimer) {
            var shieldPerkChance = Math.random()*5;
            console.log(shieldPerkChance);
            shieldImage.animations.play('spin');
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {   
                if (shieldPerkChance<=1.66) {
                    shieldKnockbackUpgrade = Math.round(baseChance + shieldPerkChance);
                    console.log(shieldKnockbackUpgrade);
                    if (shieldKnockbackUpgrade>shieldKnockback) {
                        knockback += 0.1*(shieldKnockbackUpgrade - shieldKnockback);
                        shieldKnockback = shieldKnockbackUpgrade;
                        shieldImage.animations.stop();
                        shieldImage.frame = 0;
                        shieldPerkText.text = "Upgrade:";
                        shieldPerkText2.text = "Shield Knockback +" + shieldKnockback;
                    }
                    else {
                        shieldPerkText.text = "No upgrade this time";
                        shieldImage.animations.stop();
                        shieldImage.frame = 0;
                    }
                }
                else if (shieldPerkChance>=3.34) {
                    shieldMaxHealthUpgrade = Math.round((baseChance + shieldPerkChance)/2);
                    if (shieldMaxHealthUpgrade>shieldMaxHealth) {
                        maxHealth += (shieldMaxHealthUpgrade - shieldMaxHealth);
                        shieldMaxHealth = shieldMaxHealthUpgrade;
                        shieldImage.animations.stop();
                        shieldImage.frame = 2;
                        shieldPerkText.text = "Upgrade:";
                        shieldPerkText2.text = "Max Health +" + shieldMaxHealth;
                    }
                    else {
                        shieldPerkText.text = "No upgrade this time";
                        shieldImage.animations.stop();
                        shieldImage.frame = 2;
                    }
                }
                else {
                    shieldInvulnerableSpacingUpgrade = Math.round(baseChance + shieldPerkChance);
                    if (shieldInvulnerableSpacingUpgrade>shieldInvulnerableSpacing) {
                        invulnerableSpacing += (shieldInvulnerableSpacingUpgrade - shieldInvulnerableSpacing)/2;
                        shieldInvulnerableSpacing = shieldInvulnerableSpacingUpgrade;
                        shieldImage.animations.stop();
                        shieldImage.frame = 4;
                        shieldPerkText.text = "Upgrade:"; 
                        shieldPerkText2.text = "Invincible Period +" + shieldInvulnerableSpacing; 
                    }
                    else {
                        shieldPerkText.text = "No upgrade this time";
                        shieldImage.animations.stop();
                        shieldImage.frame = 4;
                    }
                }
                shieldTimer = game.time.now + 1800000;
                if (shieldTimer>game.time.now && wandTimer>game.time.now) {
                    weaponsmithTimer = game.time.now + 1800000;
                }
            });
        }
    },
    weaponsmithUpgrade: function() {
        if (coins>=weaponsmithUpgradeCost) {
            coins -= weaponsmithUpgradeCost;
            weaponsmithUpgradeCost = Math.round(weaponsmithUpgradeCost*1.2);
            weaponsmithDropReward += weaponsmithDRBoost;
            this.dropRewardDiminishingReturns();
            weaponsmithUpgradeText.text = "Buy Skill Material: " + weaponsmithUpgradeCost;
            shopCoinsText.text = 'Coins: ' + coins;
        }
        else {
            shopMessageBackground.x = 196;
            shopMessageText.text = "      Not enough coins.";
        }
    },
    armourerUpgrade: function() {
        if (coins>=armourerUpgradeCost) {
            coins -= armourerUpgradeCost;
            armourerUpgradeCost = Math.round(armourerUpgradeCost*1.2);
            armourerDropReward += armourerDRBoost;
            this.dropRewardDiminishingReturns();
            armourerUpgradeText.text = "Buy Skill Material: " + armourerUpgradeCost;
            shopCoinsText.text = 'Coins: ' + coins;
        }
        else {
            shopMessageBackground.x = 196;
            shopMessageText.text = "      Not enough coins.";
        }
    },
    enchanterUpgrade: function() {
        if (coins>=enchanterUpgradeCost) {
            coins -= enchanterUpgradeCost;
            enchanterUpgradeCost = Math.round(enchanterUpgradeCost*1.2);
            enchanterDropReward += enchanterDRBoost;
            this.dropRewardDiminishingReturns();
            enchanterUpgradeText.text = "Buy Skill Material: " + enchanterUpgradeCost;
            shopCoinsText.text = 'Coins: ' + coins;
        }
        else {
            shopMessageBackground.x = 196;
            shopMessageText.text = "      Not enough coins.";
        }
    },
    trainerUpgrade: function() {
        if (coins>=trainerUpgradeCost) {
            coins -= trainerUpgradeCost;
            trainerUpgradeCost = Math.round(trainerUpgradeCost*1.2);
            trainerDropReward += trainerDRBoost;
            this.dropRewardDiminishingReturns();
            trainerUpgradeText.text = "Buy Skill Material: " + trainerUpgradeCost;
            shopCoinsText.text = 'Coins: ' + coins;
        }
        else {
            shopMessageBackground.x = 196;
            shopMessageText.text = "      Not enough coins.";
        }
    },
    armourerImprove: function() {
       if (game.time.now > armourerTimer && population >= 125) {
         baseChance = Math.round(((popScore*0.25) + (armourer*0.3) + (armourerDropReward*0.45))/2);
         console.log("Base Chance: " + baseChance);
         game.add.sprite(100, 250, 'border');
         armourImage = game.add.sprite(108, 258, 'armourAnimation');
         armourImage.frame = 0;
         armourImage.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
         armourPerkButton = game.add.button(30, 330, 'blankButton', this.armourPerk, this);
         armourPerkText = game.add.bitmapText(100, 350, 'font', "     Request", 15);
         armourPerkText2 = game.add.bitmapText(65, 370, 'font', "  Armour Improvement", 15);
         game.add.sprite(380, 250, 'border');
         hatImage = game.add.sprite(388, 258, 'hatAnimation');
         hatImage.frame = 0;
         hatImage.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
         hatPerkButton = game.add.button(310, 330, 'blankButton', this.hatPerk, this);
         hatPerkText = game.add.bitmapText(380, 350, 'font', "     Request", 15);
         hatPerkText2 = game.add.bitmapText(345, 370, 'font', "     Crown Improvement", 15);
         game.add.sprite(650, 250, 'border');
         bootImage = game.add.sprite(658, 258, 'bootAnimation');
         bootImage.frame = 0;
         bootImage.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
         bootPerkButton = game.add.button(580, 330, 'blankButton', this.bootPerk, this);
         bootPerkText = game.add.bitmapText(650, 350, 'font', "     Request", 15);
         bootPerkText2 = game.add.bitmapText(615, 370, 'font', "    Boots Improvement", 15);
       }
       else if (population<125) {
           shopMessageBackground.x = 196;
         shopMessageText.text = "     Armourer Perks unlock at 125 population."; 
       }
       else {
           shopMessageBackground.x = 196;
         shopMessageText.text = "The Armourer offers upgrades every 30 minutes.";  
       }
    },
    armourPerk: function() {
        if (game.time.now > armourTimer) {
            var armourPerkChance = Math.random()*5;
            console.log(armourPerkChance);
            armourImage.animations.play('spin');
            var self = this;
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {   
                if (armourPerkChance<=1.66) {
                    armourMaxHealthUpgrade = Math.round((baseChance + armourPerkChance)/2);
                    console.log(armourMaxHealthUpgrade);
                    if (armourMaxHealthUpgrade>armourMaxHealth) {
                        maxHealth += (armourMaxHealthUpgrade - armourMaxHealth);
                        armourMaxHealth = armourMaxHealthUpgrade;
                        armourImage.animations.stop();
                        armourImage.frame = 0;
                        armourPerkText.text = "Upgrade:";
                        armourPerkText2.text = "Max Health +" + armourMaxHealth;
                    }
                    else {
                        armourPerkText.text = "No upgrade this time";
                        armourImage.animations.stop();
                        armourImage.frame = 0;
                    }
                }
                else if (armourPerkChance>=3.34) {
                    armourManaRegenIntervalUpgrade = Math.round(baseChance + armourPerkChance);
                    if (armourManaRegenIntervalUpgrade>armourManaRegenInterval) {
                        manaRegenHolder -= (armourManaRegenIntervalUpgrade - armourManaRegenInterval)/2;
                        armourManaRegenInterval = armourManaRegenIntervalUpgrade;
                        armourImage.animations.stop();
                        armourImage.frame = 2;
                        armourPerkText.text = "Upgrade:";
                        armourPerkText2.text = "Mana Regeneration +" + armourManaRegenInterval;
                        self.bonusCheck();
                    }
                    else {
                        armourPerkText.text = "No upgrade this time";
                        armourImage.animations.stop();
                        armourImage.frame = 2;
                    }
                }
                else {
                    armourInvulnerableSpacingUpgrade = Math.round(baseChance + armourPerkChance);
                    if (armourInvulnerableSpacingUpgrade>armourInvulnerableSpacing) {
                        invulnerableSpacing += (armourInvulnerableSpacingUpgrade - armourInvulnerableSpacing)/2;
                        armourInvulnerableSpacing = armourInvulnerableSpacingUpgrade;
                        armourImage.animations.stop();
                        armourImage.frame = 4;
                        armourPerkText.text = "Upgrade:"; 
                        armourPerkText2.text = "Invincible Period +" + armourInvulnerableSpacing; 
                    }
                    else {
                        armourPerkText.text = "No upgrade this time";
                        armourImage.animations.stop();
                        armourImage.frame = 4;
                    }
                }
                armourTimer = game.time.now + 1800000;
                if (bootTimer>game.time.now && hatTimer>game.time.now && armourTimer>game.time.now) {
                    armourerTimer = game.time.now + 1800000;
                }
            });
        }
    },
    hatPerk: function() {
        if (game.time.now > hatTimer) {
            var hatPerkChance = Math.random()*5;
            console.log(hatPerkChance);
            hatImage.animations.play('spin');
            var self = this;
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {   
                if (hatPerkChance<=1.66) {
                    hatMaxHealthUpgrade = Math.round((baseChance + hatPerkChance)/2);
                    console.log(hatMaxHealthUpgrade);
                    if (hatMaxHealthUpgrade>hatMaxHealth) {
                        maxHealth += (hatMaxHealthUpgrade - hatMaxHealth);
                        hatMaxHealth = hatMaxHealthUpgrade;
                        hatImage.animations.stop();
                        hatImage.frame = 0;
                        hatPerkText.text = "Upgrade:";
                        hatPerkText2.text = "Max Health +" + hatMaxHealth;
                    }
                    else {
                        hatPerkText.text = "No upgrade this time";
                        hatImage.animations.stop();
                        hatImage.frame = 0;
                    }
                }
                else if (hatPerkChance>=3.34) {
                    hatManaRegenIntervalUpgrade = Math.round(baseChance + hatPerkChance);
                    if (hatManaRegenIntervalUpgrade>hatManaRegenInterval) {
                        manaRegenHolder -= (hatManaRegenIntervalUpgrade - hatManaRegenInterval)/2;
                        hatManaRegenInterval = hatManaRegenIntervalUpgrade;
                        hatImage.animations.stop();
                        hatImage.frame = 2;
                        hatPerkText.text = "Upgrade:";
                        hatPerkText2.text = "Mana Regeneration +" + hatManaRegenInterval;
                        self.bonusCheck();
                    }
                    else {
                        hatPerkText.text = "No upgrade this time";
                        hatImage.animations.stop();
                        hatImage.frame = 2;
                    }
                }
                else {
                    hatMaxManaUpgrade = Math.round(baseChance + hatPerkChance);
                    if (hatMaxManaUpgrade>hatMaxMana) {
                        maxMana += (hatMaxManaUpgrade - hatMaxMana);
                        hatMaxMana = hatMaxManaUpgrade;
                        hatImage.animations.stop();
                        hatImage.frame = 4;
                        hatPerkText.text = "Upgrade:"; 
                        hatPerkText2.text = "Max Mana +" + hatMaxMana; 
                    }
                    else {
                        hatPerkText.text = "No upgrade this time";
                        hatImage.animations.stop();
                        hatImage.frame = 4;
                    }
                }
                hatTimer = game.time.now + 1800000;
                if (bootTimer>game.time.now && hatTimer>game.time.now && armourTimer>game.time.now) {
                    armourerTimer = game.time.now + 1800000;
                }
            });
        }
    },
    bootPerk: function() {
        if (game.time.now > bootTimer) {
            var bootPerkChance = Math.random()*5;
            console.log(bootPerkChance);
            bootImage.animations.play('spin');
            var self = this;
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {   
                if (bootPerkChance<=1.66) {
                    bootRunSpeedUpgrade = Math.round(baseChance + bootPerkChance);
                    console.log(bootRunSpeedUpgrade);
                    if (bootRunSpeedUpgrade>bootRunSpeed) {
                        runSpeed += 0.1*(bootRunSpeedUpgrade - bootRunSpeed);
                        bootRunSpeed = bootRunSpeedUpgrade;
                        bootImage.animations.stop();
                        bootImage.frame = 0;
                        bootPerkText.text = "Upgrade:";
                        bootPerkText2.text = "Run Speed +" + bootRunSpeed;
                    }
                    else {
                        bootPerkText.text = "No upgrade this time";
                        bootImage.animations.stop();
                        bootImage.frame = 0;
                    }
                }
                else if (bootPerkChance>=3.34) {
                    bootManaRegenIntervalUpgrade = Math.round(baseChance + bootPerkChance);
                    if (bootManaRegenIntervalUpgrade>bootManaRegenInterval) {
                        manaRegenHolder -= (bootManaRegenIntervalUpgrade - bootManaRegenInterval)/2;
                        bootManaRegenInterval = bootManaRegenIntervalUpgrade;
                        bootImage.animations.stop();
                        bootImage.frame = 2;
                        bootPerkText.text = "Upgrade:";
                        bootPerkText2.text = "Mana Regeneration +" + bootManaRegenInterval;
                        self.bonusCheck();
                    }
                    else {
                        bootPerkText.text = "No upgrade this time";
                        bootImage.animations.stop();
                        bootImage.frame = 2;
                    }
                }
                else {
                    bootInvulnerableSpacingUpgrade = Math.round(baseChance + bootPerkChance);
                    if (bootInvulnerableSpacingUpgrade>bootInvulnerableSpacing) {
                        invulnerableSpacing += (bootInvulnerableSpacingUpgrade - bootInvulnerableSpacing)/2;
                        bootInvulnerableSpacing = bootInvulnerableSpacingUpgrade;
                        bootImage.animations.stop();
                        bootImage.frame = 4;
                        bootPerkText.text = "Upgrade:"; 
                        bootPerkText2.text = "Invincible Period +" + bootInvulnerableSpacing; 
                    }
                    else {
                        bootPerkText.text = "No upgrade this time";
                        bootImage.animations.stop();
                        bootImage.frame = 4;
                    }
                }
                bootTimer = game.time.now + 1800000;
                if (bootTimer>game.time.now && hatTimer>game.time.now && armourTimer>game.time.now) {
                    armourerTimer = game.time.now + 1800000;
                }
            });
        }
    },
    enchanterImprove: function() {
       if (game.time.now > enchanterTimer && population >= 150) {
         baseChance = Math.round(((popScore*0.25) + (enchanter*0.3) + (enchanterDropReward*0.45))/2);
         console.log("Base Chance: " + baseChance);
         game.add.sprite(100, 250, 'border');
         ringImage = game.add.sprite(108, 258, 'ringAnimation');
         ringImage.frame = 0;
         ringImage.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
         ringPerkButton = game.add.button(30, 330, 'blankButton', this.ringPerk, this);
         ringPerkText = game.add.bitmapText(100, 350, 'font', "Request", 15);
         ringPerkText2 = game.add.bitmapText(65, 370, 'font', "Ring Improvement", 15);
         game.add.sprite(650, 250, 'border');
         amuletImage = game.add.sprite(658, 258, 'amuletAnimation');
         amuletImage.frame = 0;
         amuletImage.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
         amuletPerkButton = game.add.button(580, 330, 'blankButton', this.amuletPerk, this);
         amuletPerkText = game.add.bitmapText(650, 350, 'font', "Request", 15);
         amuletPerkText2 = game.add.bitmapText(615, 370, 'font', "Amulet Improvement", 15);
       }
       else if (population<150) {
           shopMessageBackground.x = 196;
         shopMessageText.text = "     Enchanter Perks unlock at 150 population."; 
       }
       else {
           shopMessageBackground.x = 196;
         shopMessageText.text = "The Enchanter offers upgrades every 30 minutes.";  
       }
    },
    ringPerk: function() {
        if (game.time.now > ringTimer) {
            var ringPerkChance = Math.random()*5;
            console.log(ringPerkChance);
            ringImage.animations.play('spin');
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {   
                if (ringPerkChance<=1.66) {
                    ringShotPowerUpgrade = Math.round(baseChance + ringPerkChance);
                    console.log(ringShotPowerUpgrade);
                    if (ringShotPowerUpgrade>ringShotPower) {
                        shotPower += 0.01*(ringShotPowerUpgrade - ringShotPower);
                        ringShotPower = ringShotPowerUpgrade;
                        ringImage.animations.stop();
                        ringImage.frame = 0;
                        ringPerkText.text = "Upgrade:";
                        ringPerkText2.text = "Ring Power +" + ringShotPower;
                    }
                    else {
                        ringPerkText.text = "No upgrade this time";
                        ringImage.animations.stop();
                        ringImage.frame = 0;
                    }
                }
                else if (ringPerkChance>=3.34) {
                    ringMaxManaUpgrade = Math.round(baseChance + ringPerkChance);
                    if (ringMaxManaUpgrade>ringMaxMana) {
                        maxMana += (ringMaxManaUpgrade - ringMaxMana);
                        ringMaxMana = ringMaxManaUpgrade;
                        ringImage.animations.stop();
                        ringImage.frame = 2;
                        ringPerkText.text = "Upgrade:";
                        ringPerkText2.text = "Max Mana +" + ringMaxMana;
                    }
                    else {
                        ringPerkText.text = "No upgrade this time";
                        ringImage.animations.stop();
                        ringImage.frame = 2;
                    }
                }
                else {
                    ringKnockbackUpgrade = Math.round(baseChance + ringPerkChance);
                    if (ringKnockbackUpgrade>ringKnockback) {
                        knockback += 0.1*(ringKnockbackUpgrade - ringKnockback);
                        ringKnockback = ringKnockbackUpgrade;
                        ringImage.animations.stop();
                        ringImage.frame = 4;
                        ringPerkText.text = "Upgrade:"; 
                        ringPerkText2.text = "Knockback +" + ringKnockback; 
                    }
                    else {
                        ringPerkText.text = "No upgrade this time";
                        ringImage.animations.stop();
                        ringImage.frame = 4;
                    }
                }
                ringTimer = game.time.now + 1800000;
                if (amuletTimer>game.time.now && ringTimer>game.time.now) {
                    enchanterTimer = game.time.now + 1800000;
                }
            });
        }
    },
    amuletPerk: function() {
        if (game.time.now > amuletTimer) {
            var amuletPerkChance = Math.random()*5;
            console.log(amuletPerkChance);
            amuletImage.animations.play('spin');
            var self = this;
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {   
                if (amuletPerkChance<=1.66) {
                    amuletRunSpeedUpgrade = Math.round(baseChance + amuletPerkChance);
                    console.log(amuletRunSpeedUpgrade);
                    if (amuletRunSpeedUpgrade>amuletRunSpeed) {
                        runSpeed += 0.1*(amuletRunSpeedUpgrade - amuletRunSpeed);
                        amuletRunSpeed = amuletRunSpeedUpgrade;
                        amuletImage.animations.stop();
                        amuletImage.frame = 0;
                        amuletPerkText.text = "Upgrade:";
                        amuletPerkText2.text = "Run Speed +" + amuletRunSpeed;
                    }
                    else {
                        amuletPerkText.text = "No upgrade this time";
                        amuletImage.animations.stop();
                        amuletImage.frame = 0;
                    }
                }
                else if (amuletPerkChance>=3.34) {
                    amuletShotSpeedUpgrade = Math.round(baseChance + amuletPerkChance);
                    if (amuletShotSpeedUpgrade>amuletShotSpeed) {
                        shotSpeed += (amuletShotSpeedUpgrade - amuletShotSpeed)/2;
                        amuletShotSpeed = amuletShotSpeedUpgrade;
                        amuletImage.animations.stop();
                        amuletImage.frame = 2;
                        amuletPerkText.text = "Upgrade:";
                        amuletPerkText2.text = "Shot Speed +" + amuletShotSpeed;
                        self.bonusCheck();
                    }
                    else {
                        amuletPerkText.text = "No upgrade this time";
                        amuletImage.animations.stop();
                        amuletImage.frame = 2;
                    }
                }
                else {
                    amuletBulletSpacingUpgrade = Math.round(baseChance + amuletPerkChance);
                    if (amuletBulletSpacingUpgrade>amuletBulletSpacing) {
                        bulletSpacing -= (amuletBulletSpacingUpgrade - amuletBulletSpacing)/2;
                        amuletBulletSpacing = amuletBulletSpacingUpgrade;
                        amuletImage.animations.stop();
                        amuletImage.frame = 4;
                        amuletPerkText.text = "Upgrade:"; 
                        amuletPerkText2.text = "Attack Speed +" + amuletBulletSpacing; 
                    }
                    else {
                        amuletPerkText.text = "No upgrade this time";
                        amuletImage.animations.stop();
                        amuletImage.frame = 4;
                    }
                }
                amuletTimer = game.time.now + 1800000;
                if (amuletTimer>game.time.now && ringTimer>game.time.now) {
                    enchanterTimer = game.time.now + 1800000;
                }
            });
        }
    },
    trainerImprove: function() {
       if (game.time.now > trainerTimer && population >= 200) {
         baseChance = Math.round(((popScore*0.25) + (trainer*0.3) + (trainerDropReward*0.45))/2);
         console.log("Base Chance: " + baseChance);
         game.add.sprite(100, 250, 'border');
         skillImage = game.add.sprite(108, 258, 'skillAnimation');
         skillImage.frame = 0;
         skillImage.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
         skillPerkButton = game.add.button(30, 330, 'blankButton', this.skillPerk, this);
         skillPerkText = game.add.bitmapText(100, 350, 'font', "Request", 15);
         skillPerkText2 = game.add.bitmapText(65, 370, 'font', "Skill Training", 15);
         game.add.sprite(650, 250, 'border');
         enduranceImage = game.add.sprite(658, 258, 'enduranceAnimation');
         enduranceImage.frame = 0;
         enduranceImage.animations.add('spin', [0, 1, 2, 3, 4, 5], 10, true);
         endurancePerkButton = game.add.button(580, 330, 'blankButton', this.endurancePerk, this);
         endurancePerkText = game.add.bitmapText(650, 350, 'font', "Request", 15);
         endurancePerkText2 = game.add.bitmapText(615, 370, 'font', "Stamina Training", 15);
       }
       else if (population<200) {
         shopMessageBackground.x = 196;
         shopMessageText.text = "       Trainer Perks unlock at 200 population."; 
       }
       else {
         shopMessageBackground.x = 196;
         shopMessageText.text = "The Trainer offers upgrades every 30 minutes.";  
       }
    },
    skillPerk: function() {
        if (game.time.now > skillTimer) {
            var skillPerkChance = Math.random()*5;
            console.log(skillPerkChance);
            skillImage.animations.play('spin');
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {   
                if (skillPerkChance<=1.66) {
                    skillShotPowerUpgrade = Math.round(baseChance + skillPerkChance);
                    console.log(skillShotPowerUpgrade);
                    if (skillShotPowerUpgrade>skillShotPower) {
                        shotPower += 0.01*(skillShotPowerUpgrade - skillShotPower);
                        skillShotPower = skillShotPowerUpgrade;
                        skillImage.animations.stop();
                        skillImage.frame = 0;
                        skillPerkText.text = "Upgrade:";
                        skillPerkText2.text = "Skill Power +" + skillShotPower;
                    }
                    else {
                        skillPerkText.text = "No upgrade this time";
                        skillImage.animations.stop();
                        skillImage.frame = 0;
                    }
                }
                else if (skillPerkChance>=3.34) {
                    skillMaxManaUpgrade = Math.round(baseChance + skillPerkChance);
                    if (skillMaxManaUpgrade>skillMaxMana) {
                        maxMana += (skillMaxManaUpgrade - skillMaxMana);
                        skillMaxMana = skillMaxManaUpgrade;
                        skillImage.animations.stop();
                        skillImage.frame = 2;
                        skillPerkText.text = "Upgrade:";
                        skillPerkText2.text = "Max Mana +" + skillMaxMana;
                    }
                    else {
                        skillPerkText.text = "No upgrade this time";
                        skillImage.animations.stop();
                        skillImage.frame = 2;
                    }
                }
                else {
                    skillKnockbackUpgrade = Math.round(baseChance + skillPerkChance);
                    if (skillKnockbackUpgrade>skillKnockback) {
                        knockback += 0.1*(skillKnockbackUpgrade - skillKnockback);
                        skillKnockback = skillKnockbackUpgrade;
                        skillImage.animations.stop();
                        skillImage.frame = 4;
                        skillPerkText.text = "Upgrade:"; 
                        skillPerkText2.text = "Knockback +" + skillKnockback; 
                    }
                    else {
                        skillPerkText.text = "No upgrade this time";
                        skillImage.animations.stop();
                        skillImage.frame = 4;
                    }
                }
                skillTimer = game.time.now + 1800000;
                if (enduranceTimer>game.time.now && skillTimer>game.time.now) {
                    trainerTimer = game.time.now + 1800000;
                }
            });
        }
    },
    endurancePerk: function() {
        if (game.time.now > enduranceTimer) {
            var endurancePerkChance = Math.random()*5;
            console.log(endurancePerkChance);
            enduranceImage.animations.play('spin');
            var self = this;
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {   
                if (endurancePerkChance<=1.66) {
                    enduranceRunSpeedUpgrade = Math.round(baseChance + endurancePerkChance);
                    console.log(enduranceRunSpeedUpgrade);
                    if (enduranceRunSpeedUpgrade>enduranceRunSpeed) {
                        runSpeed += 0.1*(enduranceRunSpeedUpgrade - enduranceRunSpeed);
                        enduranceRunSpeed = enduranceRunSpeedUpgrade;
                        enduranceImage.animations.stop();
                        enduranceImage.frame = 0;
                        endurancePerkText.text = "Upgrade:";
                        endurancePerkText2.text = "Run Speed +" + enduranceRunSpeed;
                    }
                    else {
                        endurancePerkText.text = "No upgrade this time";
                        enduranceImage.animations.stop();
                        enduranceImage.frame = 0;
                    }
                }
                else if (endurancePerkChance>=3.34) {
                    enduranceShotSpeedUpgrade = Math.round(baseChance + endurancePerkChance);
                    if (enduranceShotSpeedUpgrade>enduranceShotSpeed) {
                        shotSpeed += (enduranceShotSpeedUpgrade - enduranceShotSpeed)/2;
                        enduranceShotSpeed = enduranceShotSpeedUpgrade;
                        enduranceImage.animations.stop();
                        enduranceImage.frame = 2;
                        endurancePerkText.text = "Upgrade:";
                        endurancePerkText2.text = "Shot Speed +" + enduranceShotSpeed;
                        self.bonusCheck();
                    }
                    else {
                        endurancePerkText.text = "No upgrade this time";
                        enduranceImage.animations.stop();
                        enduranceImage.frame = 2;
                    }
                }
                else {
                    enduranceBulletSpacingUpgrade = Math.round(baseChance + endurancePerkChance);
                    if (enduranceBulletSpacingUpgrade>enduranceBulletSpacing) {
                        bulletSpacing -= (enduranceBulletSpacingUpgrade - enduranceBulletSpacing)/2;
                        enduranceBulletSpacing = enduranceBulletSpacingUpgrade;
                        enduranceImage.animations.stop();
                        enduranceImage.frame = 4;
                        endurancePerkText.text = "Upgrade:"; 
                        endurancePerkText2.text = "Attack Speed +" + enduranceBulletSpacing; 
                    }
                    else {
                        endurancePerkText.text = "No upgrade this time";
                        enduranceImage.animations.stop();
                        enduranceImage.frame = 4;
                    }
                }
                enduranceTimer = game.time.now + 1800000;
                if (enduranceTimer>game.time.now && skillTimer>game.time.now) {
                    trainerTimer = game.time.now + 1800000;
                }
            });
        }
    },
    collectSFX: function() {
        var itemCollect = game.add.audio('collect');
        itemCollect.play();
    },
    shopLeft: function() {
        switch(shop) {
            case "castle":
                shop = "trainer";
                this.create();
                break;
            case "housing":
                shop = "castle";
                this.create();
                break;
            case "commercial":
                shop = "housing";
                this.create();
                break;
            case "industrial":
                shop = "commercial";
                this.create();
                break;
            case "education":
                shop = "industrial";
                this.create();
                break;
            case "health":
                shop = "education";
                this.create();
                break;
            case "justice":
                shop = "health";
                this.create();
                break; 
            case "defence":
                shop = "justice";
                this.create();
                break; 
            case "utilities":
                shop = "defence";
                this.create();
                break; 
            case "weaponsmith":
                shop = "utilities";
                this.create();
                break; 
            case "armourer":
                shop = "weaponsmith";
                this.create();
                break; 
            case "enchanter":
                shop = "armourer";
                this.create();
                break; 
            case "trainer":
                shop = "enchanter";
                this.create();
                break; 
        }
    },
    shopRight: function() {
        switch(shop) {
            case "castle":
                shop = "housing";
                this.create();
                break;
            case "housing":
                shop = "commercial";
                this.create();
                break;
            case "commercial":
                shop = "industrial";
                this.create();
                break;
            case "industrial":
                shop = "education";
                this.create();
                break;
            case "education":
                shop = "health";
                this.create();
                break;
            case "health":
                shop = "justice";
                this.create();
                break;
            case "justice":
                shop = "defence";
                this.create();
                break; 
            case "defence":
                shop = "utilities";
                this.create();
                break; 
            case "utilities":
                shop = "weaponsmith";
                this.create();
                break; 
            case "weaponsmith":
                shop = "armourer";
                this.create();
                break; 
            case "armourer":
                shop = "enchanter";
                this.create();
                break; 
            case "enchanter":
                shop = "trainer";
                this.create();
                break; 
            case "trainer":
                shop = "castle";
                this.create();
                break; 
        }
    },
    shopTextSelect: function() {
        console.log("Priority Service: " + priorityService);
        if (shop=="castle") {
            
        }
        else if (maxFunding) {
            shopText.text = " Your Majesty!";
            shopText2.text = " Our funding levels";
            shopText3.text = "    are most satisfactory.";
            shopText4.text = "   We will endeavour to ";
            shopText5.text = "   justify your faith" ; 
            shopText6.text = "     in us.";
        }
        else if (priorityService) {
            shopText.text = " Your Majesty!";
            shopText2.text = " We humbly request an";
            shopText3.text = "    increase in funding. To";
            shopText4.text = "provide an adequate service";
            shopText5.text = "     we need a funding"; 
            shopText6.text = "      level of " + happiness + ".";
        }
        else {
            if (happiness<100) {
                var boost = 1;
            }
            else {
                boost = 0;
            }
            shopText.text = " Your Majesty!";
            shopText2.text = " We humbly request an";
            shopText3.text = "    increase in funding. To";
            shopText4.text = "provide an adequate service";
            shopText5.text = "     we need a funding"; 
            shopText6.text = " level of at least " + (averageFunding+(boost)) + ".";
        }
    },
    advertOptions: function() {
        console.log("time" + game.time.now);
        console.log("weaponsmithAdTimer" + weaponsmithAdTimer);
        if (advert==true) {
            shopText.text = " Your Majesty!";
            shopText2.text = " The Merchant Guild ";
            shopText3.text = "    have offered to fund your";
            shopText4.text = shop + " in return for a";
            shopText5.text = "     few minutes of"; 
            shopText6.text = "       your time.";
            switch(shop) {
                case "weaponsmith":
                    console.log(shop);
                    game.add.button(30, 150, 'blankButton', this.weaponsmithAd, this);
                    game.add.bitmapText(60, 175, 'font', 'Yes, watch ad', 16);
                    game.add.button(270, 150, 'blankButton', this.weaponsmithAdNo, this);
                    game.add.bitmapText(300, 175, 'font', 'No, not now', 16);
                    break;
                case "armourer":
                    console.log(shop);
                    var addStartButton = game.add.button(30, 150, 'blankButton', this.armourerAd, this);
                    var addStartText = game.add.bitmapText(60, 175, 'font', 'Yes, watch ad', 16);
                    var addRejectButton = game.add.button(270, 150, 'blankButton', this.armourerAdNo, this);
                    var addRejectText = game.add.bitmapText(300, 175, 'font', 'No, not now', 16);
                    break;
                case "enchanter":
                    console.log(shop);
                    var addStartButton = game.add.button(30, 150, 'blankButton', this.enchanterAd, this);
                    var addStartText = game.add.bitmapText(60, 175, 'font', 'Yes, watch ad', 16);
                    var addRejectButton = game.add.button(270, 150, 'blankButton', this.enchanterAdNo, this);
                    var addRejectText = game.add.bitmapText(300, 175, 'font', 'No, not now', 16);
                    break;
                case "trainer":
                    console.log(shop);
                    var addStartButton = game.add.button(30, 150, 'blankButton', this.trainerAd, this);
                    var addStartText = game.add.bitmapText(60, 175, 'font', 'Yes, watch ad', 16);
                    var addRejectButton = game.add.button(270, 150, 'blankButton', this.trainerAdNo, this);
                    var addRejectText = game.add.bitmapText(300, 175, 'font', 'No, not now', 16);
                    break;
            }
        }
    },
    nextYearEstimate: function() {
      nextHousing = housing + ((housingFunding-housing)/12);
      nextCommercial = commercial + ((commercialFunding-commercial)/12);
      nextIndustrial = industrial + ((industrialFunding-industrial))/12;
      nextEducation = education + ((educationFunding-education)/12);
      nextPopHealth = popHealth + ((healthFunding-popHealth)/12);
      nextJustice = justice + ((justiceFunding-justice)/12);
      nextDefence = defence + ((defenceFunding-defence)/12);
      nextUtilities = utilities + ((utilitiesFunding-utilities)/12);
      nextWeaponsmith = weaponsmith + ((weaponsmithFunding-weaponsmith)/12);
      nextArmourer = armourer + ((armourerFunding-armourer)/12);
      nextEnchanter = enchanter + ((enchanterFunding-enchanter)/12);
      nextTrainer = trainer + ((trainerFunding-trainer)/12);
      nextPopulation = population;
      nextPopulation += population*((nextHousing-33)/4000);
      nextPopulation += population*((nextEducation-33)/9000);
      nextPopulation += population*((nextPopHealth-33)/2000);
      nextPopulation += population*((nextJustice-33)/13000);
      nextPopulation += population*((nextDefence-33)/14000);
      nextPopulation += population*((nextUtilities-33)/9000);
      nextPopulation += population*((nextTrainer-33)/14300);
      nextPopulation -= population*((tax-30)/2000);
      nextYear = year+1;
      if ((year+1)<=30) {
        nextPopulation += 1 + (year+1)/10;
      }
      else {
        nextPopulation += 9 - (year+1)/6;
      }
      if (nextPopulation>5000000) {
         nextCoins += nextPopulation-5000000;
         nextPopulation = 5000000;
      }
      else if (nextPopulation>0) {
        nextPopulation = Math.round(nextPopulation);
      }
      else {
        nextPopulation = 0;
      }
      nextHappiness = Math.round(20 + questHappinessModifier + (4*(nextHousing/15 + nextCommercial/100 + nextIndustrial/100 + nextEducation/100 + nextPopHealth/15 + nextJustice/20 + nextDefence/100 + nextUtilities/80)));
      if (nextHappiness>100) {
          nextHappiness = 100;
      }
      nextEconomyMod = 1;
      nextEconomyMod += ((nextCommercial-34)/950);
      nextEconomyMod += ((nextIndustrial-34)/950);
      nextEconomyMod += ((nextEducation-34)/950);
      nextEconomyMod += ((nextJustice-34)/6000);
      nextEconomyMod += ((nextWeaponsmith-34)/5000);
      nextEconomyMod += ((nextArmourer-34)/5000);
      nextEconomyMod += ((nextEnchanter-34)/5000);
      nextEconomyMod += ((nextTrainer-34)/6000);
      nextEconomyMod += ((nextUtilities-33)/9000);
      nextEconomyMod -= ((tax-30)/3000);
      nextIncome = income;
      nextIncome = (nextPopulation*nextEconomyMod*(1.17*tax))+105;
      nextExpenditure = totalFunding*(5 + (year+1)/32) + (nextPopulation*(totalFunding/20));
      nextNetIncome = netIncome;
      nextNetIncome = nextIncome - nextExpenditure;
      nextCoins = coins;
      nextCoins += Math.round(nextNetIncome);
      nextYearStatText.text = "Year: " + (nextYear);
      nextPopulationStatText.text = "Population: " + nextPopulation;
      nextIncomeStatText.text = "Income: " + Math.round(nextIncome);
      nextExpenditureStatText.text = "Expenditure: " + Math.round(nextExpenditure);
      nextNetIncomeStatText.text = "Net Income: " + Math.round(nextNetIncome);
      nextBalanceStatText.text = "Balance: " + nextCoins;
    },
    dropRewardDiminishingReturns: function() {
        if (weaponsmithDropReward<10) {
            weaponsmithDRBoost = 1;
        }
        else if (weaponsmithDropReward<25) {
            weaponsmithDRBoost = 0.75;
        }
        else if (weaponsmithDropReward<50) {
            weaponsmithDRBoost = 0.5;
        }
        else if (weaponsmithDropReward<100) {
            weaponsmithDRBoost = 0.33;
        }
        else if (weaponsmithDropReward<1000) {
            weaponsmithDRBoost = 0.25;
        }
        else {
            weaponsmithDRBoost = 0.2;
        }
        
        if (armourerDropReward<10) {
            armourerDRBoost = 1;
        }
        else if (armourerDropReward<25) {
            armourerDRBoost = 0.75;
        }
        else if (armourerDropReward<50) {
            armourerDRBoost = 0.5;
        }
        else if (armourerDropReward<100) {
            armourerDRBoost = 0.33;
        }
        else if (armourerDropReward<1000) {
            armourerDRBoost = 0.25;
        }
        else {
            armourerDRBoost = 0.2;
        }
        
        if (enchanterDropReward<10) {
            enchanterDRBoost = 1;
        }
        else if (enchanterDropReward<25) {
            enchanterDRBoost = 0.75;
        }
        else if (enchanterDropReward<50) {
            enchanterDRBoost = 0.5;
        }
        else if (enchanterDropReward<100) {
            enchanterDRBoost = 0.33;
        }
        else if (enchanterDropReward<1000) {
            enchanterDRBoost = 0.25;
        }
        else {
            enchanterDRBoost = 0.2;
        }
        
        if (trainerDropReward<10) {
            trainerDRBoost = 1;
        }
        else if (trainerDropReward<25) {
            trainerDRBoost = 0.75;
        }
        else if (trainerDropReward<50) {
            trainerDRBoost = 0.5;
        }
        else if (trainerDropReward<100) {
            trainerDRBoost = 0.33;
        }
        else if (trainerDropReward<1000) {
            trainerDRBoost = 0.25;
        }
        else {
            trainerDRBoost = 0.2;
        }
    },
    weaponsmithAd: function() {
        weaponsmithDropReward += (5*weaponsmithDRBoost);
        weaponsmithTimer = game.time.now;
        wandTimer = game.time.now;
        shieldTimer = game.time.now;
        weaponsmithAdTimer = game.time.now + 3600000;
        advert = false;
        this.create();
    },
    armourerAd: function() {
        armourerDropReward += (5*armourerDRBoost);
        armourerTimer = game.time.now;
        armourTimer = game.time.now;
        hatTimer = game.time.now;
        bootTimer = game.time.now;
        armourerAdTimer = game.time.now + 3600000;
        advert = false;
        this.create();
    },
    enchanterAd: function() {
        enchanterDropReward += (5*enchanterDRBoost);
        enchanterTimer = game.time.now;
        ringTimer = game.time.now;
        amuletTimer = game.time.now;
        enchanterAdTimer = game.time.now + 3600000;
        advert = false;
        this.create();
    },
    trainerAd: function() {
        trainerDropReward += (5*trainerDRBoost);
        trainerTimer = game.time.now;
        skillTimer = game.time.now;
        enduranceTimer = game.time.now;
        trainerAdTimer = game.time.now + 3600000;
        advert = false;
        this.create();
    },
    weaponsmithAdNo: function() {
        weaponsmithAdTimer = game.time.now + 900000;
        advert = false;
        this.create();
    },
    armourerAdNo: function() {
        armourerAdTimer = game.time.now + 900000;
        advert = false;
        this.create();
    },
    enchanterAdNo: function() {
        enchanterAdTimer = game.time.now + 900000;
        advert = false;
        this.create();
    },
    trainerAdNo: function() {
        trainerAdTimer = game.time.now + 900000;
        advert = false;
        this.create();
    },
    bonusUnlock: function() {
        var bonusUnlockSprite = game.add.button(350, 469, 'assistant',  this.create, this);
        var bonusUnlockSpeechBubble = game.add.button(150, 469, 'speechBubble', this.create, this); 
        switch(bonusType) {
            case "beam":
                var bonusUnlockText = game.add.bitmapText(200, 477, 'font', 'Great news!', 15);
                var bonusUnlockText2 = game.add.bitmapText(170, 494, 'font', '  Your artisans have ', 15);
                var bonusUnlockText3 = game.add.bitmapText(158, 509, 'font', 'worked together to unlock ', 15);
                var bonusUnlockText4 = game.add.bitmapText(158, 524, 'font', 'the power of beam magic. ', 15);
                var bonusUnlockText5 = game.add.bitmapText(170, 539, 'font', 'Press SPACE to use while', 15);
                var bonusUnlockText6 = game.add.bitmapText(190, 554, 'font', '   questing!', 15);
                beamUnlockShown = true;
                beamWeapon = true;
                break;
            case "manaRefill":
                bonusUnlockText = game.add.bitmapText(200, 477, 'font', 'Great news!', 15);
                bonusUnlockText2 = game.add.bitmapText(170, 494, 'font', '  Your artisans have ', 15);
                bonusUnlockText3 = game.add.bitmapText(158, 509, 'font', '  worked together to unlock ', 15);
                bonusUnlockText4 = game.add.bitmapText(158, 524, 'font', 'the power of mana refills. ', 15);
                bonusUnlockText5 = game.add.bitmapText(170, 539, 'font', ' Press Q during a quest ', 15);
                bonusUnlockText6 = game.add.bitmapText(190, 554, 'font', 'to refill your mana.', 15);
                manaRefillUnlockShown = true;
                manaRefillAvailable = true;
                break;
        }
        bonusUnlockText.tint = 000000;
        bonusUnlockText2.tint = 000000;
        bonusUnlockText3.tint = 000000;
        bonusUnlockText4.tint = 000000;
        bonusUnlockText5.tint = 000000;
        bonusUnlockText6.tint = 000000;
    },
    bonusCheck: function() {
        if ((wandShotSpeed+amuletShotSpeed+enduranceShotSpeed)>30 && beamUnlockShown==false) {
            bonusType = "beam";
            this.bonusUnlock();
        }
        if ((armourManaRegenInterval+hatManaRegenInterval+bootManaRegenInterval)>40 && manaRefillUnlockShown==false) {
            bonusType = "manaRefill";
            this.bonusUnlock();
        }
    },
};
