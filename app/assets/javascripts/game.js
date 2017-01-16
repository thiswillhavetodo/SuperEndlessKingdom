/*global Phaser*/
var game = new Phaser.Game(832, 640, Phaser.AUTO, '');

game.state.add('boot', bootState);
game.state.add('preload', preloadState);
game.state.add('menu', menuState);
game.state.add('credits', creditsState);
game.state.add('intro', introState);
game.state.add('play', playState);
game.state.add('city', cityState);
game.state.add('shop', shopState);
game.state.add('tutorial', tutorialState);
game.state.add('defence', defenceState);
game.state.add('reset', resetState);
game.state.start('boot');

/*global game*/
var bootState = {
    preload: function() {
        //game.load.image('star', 'assets/star.png');
        game.load.image('preloadBar', '/assets/preloadBar.png');
    },
    create: function() {
        game.state.start('preload');
    }
};