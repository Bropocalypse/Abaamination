var Play = function(game) {};
Play.prototype =
{
	preload: function() 
	{
	console.log("preloaded");
	},

	create: function ()
	{

	game.physics.startSystem(Phaser.Physics.ARCADE);
	},

	update: function()
	{
	},

};