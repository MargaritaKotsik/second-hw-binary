'use strict';
class Fighter {
constructor(name, power, health) { 
  this.name = name;
  this.power = power;
  this.health = health;
 }
 getHealth(){
   return this.health;
 }
 setHealth(healh){
   this.health=healh;
 }
 setDamage(damage) {
   this.health-=damage;
   console.log(`health:,${this.health}`);
 }
 hit(enemy, point) { 
   let damage = point*this.power;
   enemy.setDamage(damage)
 }
}
class ImprovedFighter extends Fighter{
  doubleHit(enemy, point){
   super.hit(enemy, point * 2);
}
}
let fighter = new Fighter('second',100,10);

let improvedFighter = new ImprovedFighter('second',10,100);
function fight(fighter1, fighter2, ...point) {
for (let i=0; i <= point.length; i++) {
console.log(i)
fighter1.hit(fighter2, i);
console.log(i)
fighter2.doubleHit(fighter1, i);
if (fighter1.health == 0) {
console.log(`god damn, ${fighter2.name} kicked your ass`);
break;
}
else if (fighter2.health == 0) {
console.log(`god damn, ${fighter1.name} kicked your ass`);
break;
}
}
};
fight(fighter, improvedFighter, 12, 22, 23);