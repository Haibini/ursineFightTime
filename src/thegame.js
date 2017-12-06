var theGame = function(game){}


var player;
var bullets;

var cursors;
var fireButton;
var fireButtonUp;

var bulletTime = 0;
var bullet;

var fire;

var bulletx = 6;
var bullety = 12;
var bulletvelx = 600;
var bulletvely = 0;

var enemyBullet;
var livingBear = [];
var firingTimer = 0;

var missileTime = 0;
var missile;
var missilex = 6;
var missiley = 12;
var missilevel = 600; 

var lives; 
var bearLives;

var bear;
var tween;

theGame.prototype = {
 
    create: function() {
        
        this.game.world.setBounds(0, 0, 825, 450);
       

//        this.game.load.image = 'assets/scenario.jpg';
        bear = this.game.add.sprite(400, 0, 'bear', 0);
       
       
       this.game.time.events.loop(2500, function() {  

            tween = this.game.add.tween(bear).to( {x: this.game.world.randomX, y: this.game.world.randomY}, 1500, Phaser.Easing.Quadratic.InOut, true);

            //  There is a 2.5 second delay at the start, then it calls this function
            tween.onStart.add(this.onStart, this);

            //  This tween will repeat 10 times, calling this function every time it loops
            tween.onRepeat.add(this.onLoop, this);

            //  When it completes it will call this function
            tween.onComplete.add(this.onComplete, this);
       }, this)
       
       
       //add in for player also 
       //display on the screen somewhere
       //in the hitBear() function 
       console.log(bear)
//       console.log("bear health " + bear.maxHealth);
       

        background = this.game.add.tileSprite(0,0,850,470,'background');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.enableBody = true;
        
        cursor = 
        this.game.input.keyboard.createCursorKeys();
        
        player = this.game.add.sprite(100, 100, 'player');
        player.animations.add('right', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], 20, true);
        player.animations.add('left', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], 20, true);
        player.body.setSize(70, 80, 0, 13);
        player.scale.setTo(0.5, 0.5);
        player.anchor.x = 0.5;
        player.anchor.y = 0.5;
        
        player.health = player.maxHealth = 3;
       
        bear = this.game.add.sprite(780, 100, 'bear');
        bear.animations.add('fly');
        bear.animations.play('fly', 4, true);
        bear.scale.setTo(0.8, 0.8);
        bear.anchor.x = 0.5;
        bear.anchor.y = 0.5;
        bear.scale.x = -1;
        bear.enableBody = true;
        bear.physicsBodyType = Phaser.Physics.ARCADE;
       
        bear.health = bear.maxHealth = 10;
       
        swamp = this.game.add.sprite(0, 430, 'swamp');
       
        enemyBullets = this.game.add.group();
        enemyBullets.enableBody = true;
        enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets.createMultiple(30, 'missile', false);
        enemyBullets.setAll('outOfBoundsKill', true);
        enemyBullets.setAll('checkWorldBounds', true);
        cursors = this.game.input.keyboard.createCursorKeys(); 
        missilButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);   


        bullets = this.game.add.physicsGroup();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(32, 'bullet', false);
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);   
        cursors = this.game.input.keyboard.createCursorKeys();
        fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);    
        fireButtonUp = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);   
    
        platforms = this.game.add.physicsGroup();

        platforms = this.game.add.group();
        walls = this.game.add.group();
        player.body.collideWorldBounds = true;
        
       platforms = this.game.add.physicsGroup();

        var platform = this.game.add.sprite('platform');
        platform.enableBody = true;
        platforms.create(700,350, 'platform');
        platforms.create(180,270, 'platform');
        platforms.create(35,350, 'platform');
        platforms.create(355,350, 'platform');
        platforms.create(530,270, 'platform');
        platforms.create(355,190, 'platform');
        platforms.create(700,190, 'platform');
        platforms.create(35,190, 'platform');
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
      //Player lives 
        lives = this.game.add.group();
        this.game.add.text(this.game.world.width - 800, 10, 'Lives : ', { font: '20px Arial'});
            
        stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
        stateText.anchor.setTo(0.5, 0.5);
        stateText.visible = false;
     
        
       for (var i = 0; i < 3; i++) 
    {
        var hp = lives.create(this.game.world.width - 710, 25, 'hp');
        hp.scale.setTo(0.1, 0.1);
        hp.anchor.setTo(0.5, 0.5);
//        hp.angle = 90;
        hp.alpha = 0.4;
//        player.anchor.x = 0.5;
//        player.anchor.y = 0.5;
//       
    }
       //Bear lives
        bearLives = this.game.add.group();
        this.game.add.text(this.game.world.width - 430, 10, 'Enemy : ', { font: '20px Arial'});
            
        stateText = this.game.add.text(this.game.world.centerX,this.game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
        stateText.anchor.setTo(0.5, 0.5);
        stateText.visible = false;
     
        
       for (var i = 0; i < 10; i++) {
        var bearHp = bearLives.create(this.game.world.width - 330 + (35 * i), 25, 'bearHp');
        bearHp.scale.setTo(0.1, 0.1);
        bearHp.anchor.setTo(0.5, 0.5);

        
        }
    },
    
    update: function() {
        this.game.physics.arcade.collide(player, platforms);
        

//        this.game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);
//
//        this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
        
        if(cursor.left.isDown){
            player.body.velocity.x = -200;
            player.scale.x = -0.5;
            player.animations.play('left');
            bulletx = -25;
            bullety = 12;
            bulletvelx = -600;
            bulletvely = 0;
        }
        else if (cursor.right.isDown){
            player.body.velocity.x = 200;
            player.scale.x = 0.5;
            player.animations.play('right');
            bulletx = 6;
            bullety = 12;
            bulletvelx = 600;
            bulletvely = 0;
        }
        else{
            player.body.velocity.x = 0;
            player.animations.stop();

            player.frame = 4;
        }
        
        
        if(cursor.up.isDown && (player.body.onFloor() || player.body.touching.down))
            {
            player.body.velocity.y = -330;
         
        }
        
       
        
        if(fireButton.isDown){
            this.fireBullet();
        } 
       else if(fireButtonUp.isDown) {
            bulletx = -2;
            bullety = 20;
            bulletvelx = 0;
            bulletvely = -600;
            this.fireBullet();
        }
        
//        if(missilButton.isDown){
//            fireMissil();
//        }
//        
        
//               console.log("bear health " + bear.health);

        this.game.physics.arcade.overlap(bear, bullets, this.hitBear, null, this);
        this.game.physics.arcade.overlap(player, bear, this.enemyHitsPlayer, null, this);
        this.game.physics.arcade.overlap(player, swamp, this.playerFellSwamp, null, this);

        
    },

    fireBullet: function() {

        if (this.game.time.time > bulletTime)
    {
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(player.x + bulletx, player.y - bullety);
            bullet.anchor.x = 0.5;
            bullet.anchor.y = 0.5;
            bullet.angle = 90;
            bullet.body.velocity.x = bulletvelx;
            bullet.body.velocity.y = bulletvely;
            
            bulletTime = this.game.time.time + 100;

        }
    }
         var fire = bullet.animations.add('fire');
            bullet.scale.setTo(0.5, 0.5);
            bullet.animations.play('fire', 10, false);

    },

    hitBear: function(bear, bullet) {
        bullet.kill();
    
        bearHp = bearLives.getFirstAlive();

        if (bearHp)
        {
            bearHp.kill();
        }
        //take bear health down by 1 
        bear.damage(1);
//        console.log("bear health " + bear.maxHealth);
         if(!bear.alive){
             this.game.state.start("YouWin");
         }
        
    },

    enemyHitsPlayer: function (player, bear) {
  
        player.damage(1);

          playerHp = lives.getFirstAlive();

        if (playerHp)
        {
            playerHp.kill();
        }
//        console.log("player health " + player.maxHealth);
        this.game.state.start("GameOver");

    },

    playerFellSwamp: function(player, swamp){
        
        player.kill();
        
         playerHp = lives.getFirstAlive();
        
        if (playerHp)
        {
            playerHp.kill();
        }
//        console.log("player health " + player.maxHealth);
        this.game.state.start("GameOver");
    
    },


    onStart: function() {
        //	Turn off the delay, so it loops seamlessly from here on
        tween.delay(1000);
    },

    onLoop: function() {
        if (bear.frame === 5){
            bear.frame = 0;
        }
        else{
            bear.frame++;
        }
    },

    onComplete: function() {
        tween = this.game.add.tween(bear).to( { x: 750 - bear.width }, 0, Phaser.Easing.Exponential.Out, true);
    }
}
