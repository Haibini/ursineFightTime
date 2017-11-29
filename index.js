<<<<<<< HEAD
var game = new Phaser.Game(850, 470, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

var player;
var bullets;

var cursors;
var fireButton;

var bulletTime = 0;
var bullet;

var fire;

var bulletx = 6;
var bullety = 12;
var bulletvel = 600;

var enemyBullet;
var livingBear = [];
var firingTimer = 0;

var missileTime = 0;
var missile;
var missilex = 6;
var missiley = 12;
var missilevel = 600; 

var bear;

   function preload() {
        game.load.spritesheet('player', 'assets/man4.png', 88.57, 104.75);
        game.load.image('background', 'assets/scenario.jpg');
        game.load.image('hp', 'assets/hearts.png');
        game.load.image('enemy', 'assets/bear2.png');
//        this.game.load.image('wall', 'assets/wall.PNG');
        game.load.image('bullet','assets/laser.png');
        game.load.image('platform','assets/ground.png');
        game.load.spritesheet('bear','assets/bear3trans.png', 83.333, 111);
        game.load.spritesheet('missile','assets/missile.png', 350, 160, 8)
    }
    
   function create() {
=======
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
>>>>>>> jason
//        this.game.load.image = 'assets/scenario.jpg';
        background = game.add.tileSprite(0,0,850,470,'background');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;
        
        cursor = 
        game.input.keyboard.createCursorKeys();
        
        player = game.add.sprite(100, 100, 'player');
        player.animations.add('right', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], 20, true);
        player.animations.add('left', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], 20, true);
        player.body.setSize(70, 80, 0, 13);
        player.scale.setTo(0.5, 0.5);
        player.anchor.x = 0.5;
        player.anchor.y = 0.5;
       
        bear = game.add.sprite(780, 100, 'bear');
        bear.animations.add('fly');
        bear.animations.play('fly', 4, true);
        bear.scale.setTo(0.8, 0.8);
        bear.anchor.x = 0.5;
        bear.anchor.y = 0.5;
        bear.scale.x = -1;
        bear.enableBody = true;
        bear.physicsBodyType = Phaser.Physics.ARCADE;
       
        enemyBullets = game.add.group();
        enemyBullets.enableBody = true;
        enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets.createMultiple(30, 'missile', false);
        enemyBullets.setAll('outOfBoundsKill', true);
        enemyBullets.setAll('checkWorldBounds', true);
        cursors = game.input.keyboard.createCursorKeys(); 
        missilButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);   


        bullets = game.add.physicsGroup();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(32, 'bullet', false);
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);    
        cursors = game.input.keyboard.createCursorKeys();
        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);    
    
        platforms = game.add.physicsGroup();

        platforms = game.add.group();
        walls = game.add.group();
        player.body.collideWorldBounds = true;

////        
//        var level = [
//            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'x                                         x',
//            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
//        ];
//        
//        for (var i = 0; i < level.length; i++) {
//            for (var j = 0; j < level[i].length; j++) {
//
//                if (level[i][j] == 'x') {
//                    var wall = game.add.sprite(20.5*j, 18.3*i);
//                    walls.add(wall);
//                    wall.body.immovable = true; 
//                }
//            }
//        }
               platforms = game.add.physicsGroup();

        var platform = game.add.sprite('platform');
        platform.enableBody = true;
        platforms.create(530,410, 'platform');
        platforms.create(180,410, 'platform');
        platforms.create(35,350, 'platform');
        platforms.create(355,350, 'platform');
        platforms.create(698,350, 'platform');
        platforms.add(platform);
        platform.body.immovable = true;
       
        platforms.setAll('body.immovable', true);

        
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
        
        player.body.gravity.y = 600;
            


    
    }
    
   function update() {
        game.physics.arcade.collide(player, platforms);
        

//        this.game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);
//
//        this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
        
        if(cursor.left.isDown){
            player.body.velocity.x = -200;
            player.scale.x = -0.5;
            player.animations.play('left');
            bulletx = -25;
            bullety = 12;
            bulletvel = -600;
        }
        else if (cursor.right.isDown){
            player.body.velocity.x = 200;
            player.scale.x = 0.5;
            player.animations.play('right');
            bulletx = 6;
            bullety = 12;
            bulletvel = 600;
        }
        else{
            player.body.velocity.x = 0;
            player.animations.stop();

            player.frame = 4;
        }
        
        
        if(cursor.up.isDown && (player.body.onFloor() || player.body.touching.down))
            {
            player.body.velocity.y = -300;
        }
        
        
<<<<<<< HEAD
        if(fireButton.isDown){
            fireBullet();
        }
        
//        if(missilButton.isDown){
//            fireMissil();
//        }
//        
        
        
            game.physics.arcade.overlap(bear, bullets, collisionHandler, null, this);
        game.physics.arcade.overlap(missile, player, enemyHitsPlayer, null, this);
        
        
    }
    
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

    
=======
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
>>>>>>> jason
//    takeCoin: function(player, coin){
//        coin.kill();
//    },

//    restart: function() {
//        game.state.start('main');
//    },
<<<<<<< HEAD
    function render () {
//        game.debug.body(player);
//       




}
//    function enemyFires () {
//
//    //  Grab the first bullet we can from the pool
//    missile = enemyBullets.getFirstExists(false);
//
//    livingBear.length=0;
//
//   bear.forEachAlive(function(bear){
//
//        // put every living enemy in an array
//        livingBear.push(bear);
//    });
//
//
//    if (missile && livingBear.length > 0)
//    {
//        
//        var random=game.rnd.integerInRange(0,livingBear.length-1);
//
//        // randomly select one of them
//        var shooter=livingBear[random];
//        // And fire the bullet from this enemy
//        missile.reset(shooter.body.x, shooter.body.y);
//
//        game.physics.arcade.moveToObject(missile,player,120);
//        firingTimer = game.time.now + 2000;
//    }  
//    }


    function fireBullet() {

    if (game.time.time > bulletTime)
    {
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(player.x + bulletx, player.y - bullety);
            bullet.anchor.x = 0.5;
            bullet.anchor.y = 0.5;
            bullet.angle = 90;
            bullet.body.velocity.x = bulletvel;
            bulletTime = game.time.time + 100;

        }
    }
         var fire = bullet.animations.add('fire');
            bullet.scale.setTo(0.5, 0.5);

            bullet.animations.play('fire', 10, false);
}

//      function fireMissil() {
//
//    if (game.time.time > missileTime)
//    {
//        missile = enemyBullets.getFirstExists(false);
//
//        if (missile)
//        {
//            missile.reset(bear.x + missilex, bear.y - missiley);
//            missile.anchor.x = 0.5;
//            missile.anchor.y = 0.5;
//            missile.angle = 90;
//            missile.body.velocity.x = bulletvel;
//            bulletTime = game.time.time + 100;
//
//        }
//    }
//         var fire = bullet.animations.add('fire');
//            bullet.scale.setTo(0.5, 0.5);
//
//            bullet.animations.play('fire', 10, false);
//}

function collisionHandler (bear, bullet) {
    
    bullet.kill();
}

function enemyHitsPlayer (player,bullet) {
}
=======
}

console.log('hi')
>>>>>>> jason
