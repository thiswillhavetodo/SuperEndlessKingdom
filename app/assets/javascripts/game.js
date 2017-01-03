var game = new Phaser.Game(832, 640, Phaser.AUTO, '');

game.state.add('boot', bootState);
game.state.add('preload', preloadState);
game.state.add('menu', menuState);
game.state.add('credits', creditsState);
game.state.add('intro', introState);
game.state.add('play', playState);
game.state.add('city', cityState);
game.state.add('shop', shopState);
game.state.add('defence', defenceState);
game.state.start('boot');