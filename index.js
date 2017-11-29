var mainState = {
    preload: function() {
        this.game.load.spritesheet('player', 'assets/man4.png', 88.57, 104.75);
        this.game.load.image('background', 'assets/scenario.jpg');
        this.game.load.image('hp', 'assets/hearts.png');
        this.game.load.image('enemy', 'assets/bear2.png');
        this.game.load.image('wall', 'assets/wall.PNG');
        this.game.load.image('bullet','assets/bullet.png');
    },
    resetLaser: function (laser) {
	      // Destroy the laser
	      laser.kill();
   
    },
    create: function() {
        this.lasers = this.game.add.group();
        this.lasers.createMultiple(100, 'bullet');
        this.lasers.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.resetLaser);
        this.lasers.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
        this.lasers.setAll('checkWorldBounds', true);
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
//        this.bullets.setAll('outOfBoundSkill', true);
//        this.bullets.setAll('checkWorldBounds', true);
//        
//        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBARD);
        
//        this.player.animations.play("left")
        
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
        
        this.player.body.gravity.y = 600;
    
    },
    
    update: function() {
        this.game.physics.arcade.collide(this.player, this.walls);

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
            this.player.body.velocity.y = -250;
        }
        
        
     if(fireButton.isDown){
          fireBullet();
     }
    },
     fireLaser:function () {
        // Get the first laser that's inactive, by passing 'false' as a parameter
        var laser = this.lasers.getFirstExists(false);
        console.log(laser)
        if (laser) {
            // If we have a laser, set it to the starting position
            laser.reset(this.player.body.x, this.player.body.y - 20);
            // Give it a velocity of -500 so it starts shooting
            laser.body.velocity.y = -500;

        }
     }
//    takeCoin: function(player, coin){
//        coin.kill();
//    },

//    restart: function() {
//        game.state.start('main');
//    },
}

console.log('hi')