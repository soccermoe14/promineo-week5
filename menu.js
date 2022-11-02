/* •	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
•	Your menu should have the options to create, view, and delete elements.
*/

class Groceries {
    constructor (food, macronutrient) {
        this.food = food;
        this.macronutrient = macronutrient;
    }
    describe() {
        return `${this.food} is a ${this.macronutrient}.`;
        }
}
class PersonalDiet {
    constructor (name) {
        this.name = name;
        this.food = []
    } 
    addFood(food) {
        if (food instanceof Food) {
            this.foods.push(food);
        }
    }
    describe() {
        return `${this.name}'s has ${this.foods.length} items.`;
    }
}

class Menu {
    constructor () {
        this.foods = [];
        this.groceryList = null;
    }
}