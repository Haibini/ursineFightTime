//var bullets;
//var bulletTime = 0;
//var fireButton;

var mainState = {
    preload: function() {
        this.game.load.spritesheet('player', 'assets/man4.png', 88.57, 104.75);
        this.game.load.image('background', 'assets/scenario.jpg');
        this.game.load.image('hp', 'assets/hearts.png');
        this.game.load.image('enemy', 'assets/bear2.png');
//        this.game.load.image('wall', 'assets/wall.PNG');
        this.game.load.image('bullet','assets/bullet.png');
        this.game.load.image('platform','assets/ground.png');
    },
    
    create: function() {
//        this.game.load.image = 'assets/scenario.jpg';
        this.background = this.game.add.tileSprite(0,0,850,470,'background');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
        this.player = this.game.add.sprite(100, 100, 'player');
        this.player.animations.add('right', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], 20, true);
        this.player.animations.add('left', [26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0], 20, true);
        
//        this.game.add.group();
//        this.bullets.enableBody:true;
//        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
//        this.bullets.createMultiple(30,'bullet');
//        this.bullets.setAll('anchor.x', 0.5);
//        this.bullets.setAll('anchor.y', 1);
//        this.bullets.setAll('outOfBoundsKill', true);
//        this.bullets.setAll('checkWorldBounds', true);
//        
//        this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
//        this.player.animations.play("left")
        
      
        this.platforms = this.game.add.group();
        this.walls = this.game.add.group();
//        
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
                    var wall = game.add.sprite(20.5*j, 18.3*i);
                    this.walls.add(wall);
                    wall.body.immovable = true; 
                }
            }
        }
        var platform = game.add.sprite(500,410, 'platform');
//        this.platform.enableBody = true;
//        this.platform.create(400,410, 'platform');
        this.platforms.add(platform);
        platform.body.immovable = true;
        
//        var platform = game.add.sprite(300,410, 'platform');
////        this.platform.enableBody = true;
////        this.platform.create(400,410, 'platform');
//        this.platforms.add(platform);
//        platform.body.immovable = true;
//        
//        var platform = game.add.sprite(400,410, 'platform');
////        this.platform.enableBody = true;
////        this.platform.create(400,410, 'platform');
//        this.platforms.add(platform);
//        platform.body.immovable = true;
//        
//        var platform = game.add.sprite(400,410, 'platform');
////        this.platform.enableBody = true;
////        this.platform.create(400,410, 'platform');
//        this.platforms.add(platform);
//        platform.body.immovable = true;
        
        this.player.body.gravity.y = 600;
    
    },
    
    update: function() {
        this.game.physics.arcade.collide(this.player, this.walls);
        this.game.physics.arcade.collide(this.player, this.platforms);
        

//        this.game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);
//
//        this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
        
        if(this.cursor.left.isDown){
            this.player.body.velocity.x = -200;
            this.player.animations.play('left');
        }
        else if (this.cursor.right.isDown){
            this.player.body.velocity.x = 200;
            this.player.animations.play('right');
        }
        else{
            this.player.body.velocity.x = 0;
            this.player.animations.stop();

            this.player.frame = 4;
        }
        
        
        if(this.cursor.up.isDown && this.player.body.touching.down)
            {
            this.player.body.velocity.y = -300;
        }
        
        
//        if(this.fireButton.isDown){
//            this.fireBullet();
//        }
        
        
        
        
        
        
    },
    
//    this.fireBullet: function(){
//    
//        if(this.game.time.now > bulletTime){
//    
//            bullet = this.bullets.getFirstExists(false); 
//    
//            if(this.bullet){
//    this.bullet.reset(player.x,player.y);
//    this.bullet.body.velocity.y = -400;
//    this.bulletTime = game.time.now + 200;
//}
//}
//    
//}

    
//    takeCoin: function(player, coin){
//        coin.kill();
//    },

//    restart: function() {
//        game.state.start('main');
//    },
}