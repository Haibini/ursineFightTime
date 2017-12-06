var gameOver = function(game){}

gameOver.prototype = {
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(420,180,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(420,280,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}