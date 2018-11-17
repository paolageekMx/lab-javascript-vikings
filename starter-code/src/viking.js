
function Soldier(healthArg, strength) {
  
  this.attack = function () {
    return strength;
  }

  this.receiveDamage = function (damage) {
    this.health -=  damage;
    if (this.health > 0) {
      return this.name + " has received DAMAGE points of damage";
    } else {
      this.name + " has died in act of combat"
    }
  }
 
}

// Viking
function Viking(name, health, strength) {
 Soldier.call(this, attack);
  return strength;
  
this.receiveDamage= function (damage) {
this.health -= damage;
if (this.health > 0) {
  return this.name + " has received DAMAGE points of damage";
} else {
  this.name + " has died in act of combat"
}
}
this.battleCry = function () {
return ("Odin Owns You All")
}
}

// Saxon
function Saxon() {}

// War
function War() {}
