var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        
//	game name image	this.game.load.image("gametitle","assets/gametitle.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover.png");
        
        this.game.load.spritesheet('player', 'assets/man4.png', 88.57, 104.75);
        this.game.load.image('background', 'assets/scenario.jpg');
        this.game.load.image('hp', 'assets/hp2.png');
        this.game.load.image('enemy', 'assets/bear2.png');
//        this.game.load.image('wall', 'assets/wall.PNG');
        this.game.load.image('bullet','assets/laser.png');
        this.game.load.image('platform','assets/ground.png');
        this.game.load.spritesheet('bear','assets/bear3trans.png', 83.333, 111);
        this.game.load.spritesheet('missile','assets/missile.png', 350, 160, 8)
        this.game.load.image('bearHp', 'assets/bearHp.png');
        this.game.load.image('swamp','assets/swamp.png');
        this.game.load.image('youwin','assets/youwin.png');
        
        
        //player bullets https://www.spriters-resource.com/custom_edited/mariocustoms/sheet/18057/
    },

  	create: function(){
		this.game.state.start("GameTitle");
	}
}