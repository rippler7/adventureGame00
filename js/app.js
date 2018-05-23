var config = {
	type:Phaser.AUTO,
	width:800,
	height:600,
	scene:{
		preload: preload,
		create: create,
		update: update
	},
	physics:{
		default:'arcade',
		arcade:{
			setBounds:true
		}
	},
	parent:"container",
	title:"Wizard's Quest"
};

function preload(){
	
}

function create(){
	
}

function update(time,delta){
	
}

function runGame(){
	console.log("run game!");
	game = new Phaser.Game(config);
}

document.addEventListener('DOMContentLoaded',function(){
	runGame();
});