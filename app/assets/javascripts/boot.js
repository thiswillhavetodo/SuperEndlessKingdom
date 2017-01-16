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