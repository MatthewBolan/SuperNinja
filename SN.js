class Ninja {

    constructor (name, health){

        this.speed = 3;

        this.strength = 3;

        this.wisdom = 0;

        this.name = name;

        this.health = health;

    }


    sayName() {

        this.name;

        console.log(`Name: ${this.name}`)

    }


    showStats() {

    this.speed;

    this.strength;

    this.health;

    this.wisdom;

    console.log(`- STATS - Speed: ${this.speed} Strength: ${this.strength} (Sake Health Bonus (10) Included) Health: ${this.health} Wisdom: ${this.wisdom}`)

    }


    drinkSake() {

        this.health += 10;

    }


}



const ninja1 = new Ninja("Hyabusa", 100);

ninja1.sayName();

ninja1.drinkSake();

ninja1.showStats();













class Sensei extends Ninja {

    constructor (name){

        super (name, 200);

        this.speed = 10;

        this.strength = 10;

        this.wisdom = 10;

    }


    speakWisdom() {

        console.log("What one programmer can do in one month, two programmers can do in two months.")

        this.drinkSake();

    }


}







const superSensei = new Sensei("Master Splinter", 200);

superSensei.sayName();

superSensei.speakWisdom();

superSensei.showStats();

