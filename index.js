var mainState = {
    preload: function() {
        this.game.load.spritesheet('player', 'assets/man.gif', 35, 42);
        this.game.load.image('background', 'assets/scenario.jpg');
        this.game.load.image('hp', 'assets/hearts.png');
        this.game.load.image('enemy', 'assets/bear2.png');
        this.game.load.image('wall', 'assets/wall.PNG');
    },
    
    create: function() {
//        this.game.load.image = 'assets/scenario.jpg';
        this.background = this.game.add.tileSprite(0,0,850,470,'background');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
        this.player = this.game.add.sprite(50, 380, 'player');
        
        this.walls = this.game.add.group();
        
        var level = [
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'x                                         x',
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        ];
        
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                if (level[i][j] == 'x') {
                    var wall = game.add.sprite(20*j, 17.5*i, 'wall');
                    this.walls.add(wall);
                    wall.body.immovable = true; 
                }
            }
        }
        
//        this.player.body.gravity.y = 600;
    
    },
    
    update: function() {
        this.game.physics.arcade.collide(this.player, this.walls);

//        this.game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);
//
//        this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
        
        if(this.cursor.left.isDown)
            this.player.body.velocity.x = -200;
        else if (this.cursor.right.isDown)
            this.player.body.velocity.x = 200;
        else
            this.player.body.velocity.x = 0;
        
        if(this.cursor.up.isDown && this.player.body.touching.down)
            this.player.body.velocity.y = -250;
    },
    
//    takeCoin: function(player, coin){
//        coin.kill();
//    },

//    restart: function() {
//        game.state.start('main');
//    },
}