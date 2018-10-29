const healer = new monster(400, 2500, 3500, "healer");
const wizard = new monster(1100, 3500, 4500, "wizard");
const tank =  new monster(700, 1500, 8000, "tank");
const rogue = new monster(1200, 2000, 4000, "rogue")
const raidBoss = new monster(1000, 10000, 50000, "Paris");
const partyheal =
 "Healer heals the party:" + "|Healer  HP:" + healer.heal(healer) + " " + "|Tank hp:" + healer.heal(tank) + " " + "|Wizard  hp:" + healer.heal(wizard);

function monster(atk, mana, hp, name) {
	this.atk = atk;
	this.mana = mana;
	this.hp = hp;
	this.name = name;
	this.heal = function(e) {
		if(e == undefined) {
			return "Healer heals themself" + " " + (hp  + 500) + "hp";
	} 	
		else if(name != "healer") {
			return "Sorry only the healer can buff health!";
		}
		else {
			return "healer heals" + " " + e.name +  " " + (e.hp + 500)+ "hp";
		}
	}
	this.attack = function(e){
		if(e == undefined) {
			return name + " " +"attacks... it missed";
		}
		if(atk < 1) {
			return  "Your hero has no attack points no damage done";
		}
			for(i = e.hp; i > 0; i-= atk){
				 console.log(name + " " + "attacks|" + e.name +":" + i +"hp");
			}

		if(i <= 0 ) {
			return  e.name + " " + "is defeated";
		}
	}
	this.atkUp = function(e) {
		var newAttackBuff = e.atk + 500;
		if(this.name != "healer") {
			return "Sorry only the healer can buff attack!";
		}

		return "healer buffs" + " " + e.name + "|" + newAttackBuff + " " +"atk";

		}
	}	
 console.log(rogue.attack(raidBoss));