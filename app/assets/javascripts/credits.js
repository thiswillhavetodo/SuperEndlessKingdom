var creditsTypewriter;
var menuReturnText;
var scroll = false;
var creditsState = {
    create: function() {
        game.add.button(-5, -5, 'blankButton', this.menuReturn, this);
        menuReturnText = game.add.bitmapText(40, 20, 'font', 'Menu', 16);
        
        creditsTypewriter = new Typewriter();
        creditsTypewriter.init(game, {
            x: 275,
            y: 100,
            time: Phaser.Timer.SECOND / 25,
            fontFamily: "font",
            fontSize: 16,
            maxWidth: 400, 
            //sound: reg.track, 
            text: "         Game Design \n \n         Paul McGarry \n \n \n         Programming \n \n         Paul McGarry \n \n \n           Artwork \n \n       opengameart.org \n \n Charles Gabriel (Antifarea) \n Lanea Zimmerman (Sharm) \n Stephen Challener (Redshrike) \n Carl Olsson (Surt) \n Shepardskin (twitter.com/shepardskin) \n Ben (artisticdude) \n Hyptosis (hyptosis.newgrounds.com) \n Tuomo Untinen (Reemax) \n helpcomputer \n Jetrel \n Hippo \n Bart Kelsey (Bart) \n Bertram \n Zachariah Husiar (Zabin) \n Sacio (djodin.com) \n Thane Brimhall (pennomi) \n Michele Bucelli (Buch) \n Cem Kalyoncu (darkgaze.org) \n Joshua Robertson (J-Robot/j-robotson.tumblr.com)\n William.Thompsonj \n StumpyStrust \n bevouliin.com \n Clint Bellanger \n \n Daniel Cook (www.lostgarden.com) \n \n Henrique Lazarini (7Soul1 at Deviant Art) \n \n textcraft.net \n \n Paul McGarry \n \n \n      Music and Sound Effects \n \n     freesound.org \n \n Deathstardude \n LittleRobotSoundFactory (littlerobotsoundfactory.com) \n MusicLegends \n vmgraw \n -sihiL \n chaosportal \n scorpion67890 \n Srehpog \n Scrampunk (scrampunk.com) \n wubitog\n \n \n     opengameart.org \n \n ViRiX (David McKee - soundcloud.com/virix) \n Ben (artisticdude) \n Bart Kelsey (bart) \n \n \n Paul McGarry\n \n \n         Testing \n \n Correen Robinson \n Paul McGarry \n \n \n \n \n \n \n \n    Many Thanks to all involved \nand special thanks to you for playing!",
            endFn: this.scrollStop,
        });
        creditsTypewriter.start();
        game.time.events.add(Phaser.Timer.SECOND * 15, function () { scroll=true; });
    },
    update: function() {
        if (scroll==true) {
            creditsTypewriter.scroll();
            //console.log(creditsTypewriter.y)
        }
    },
    menuReturn: function() {
        game.state.start('menu');
    },
    scrollStop: function() {
        game.time.events.add(Phaser.Timer.SECOND * 10, function () { scroll=false; });
    }
};