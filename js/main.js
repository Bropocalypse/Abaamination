//,.-'`*`'-..,Abaamination 
//globals
//did this actually change in the other branch?
//
var game = new Phaser.Game(1280, 720, Phaser.AUTO, "");

//states
game.state.add('Boot', Boot);
game.state.add('MainMenu', MainMenu);
game.state.add('Play', Play);
game.state.start('Boot');
