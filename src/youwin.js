var youWin = function(game){}

youWin.prototype = {
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(420,200,"youwin");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(420,270,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}