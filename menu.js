/* •	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
•	Your menu should have the options to create, view, and delete elements.
*/

class Groceries {
    constructor (food, macronutrient) {
        this.food = food;
        this.macronutrient = macronutrient;
    }//creates a class that contains food types and macronutrient for that food type
    describe() {
        return `${this.food} is a ${this.macronutrient}.`;
        }//returns string (ex: bread is a carbohydrate)
}
class PersonalDiet {
    constructor (name) {
        this.name = name;
        this.food = []
    }//creates a class with names so we can have grocery lists for different people
    addFood(food) {
        if (food instanceof Food) {
            this.foods.push(food);
        }//adds a new food type to our list
    }
    describe() {
        return `${this.name}'s grocery list has ${this.foods.length} items.`;
    }//returns a string (ex: Marin's grocery list has 10)
}

class Menu {
//creating a menu that will allow user to create grocery list, add items, delete items, and view grocery list
    constructor () {
        this.foods = [];
        this.groceryList = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {//if user does not enter selection of 0, then runs the following statements (not sure if I am describing this correctly)
            switch (selection) {
                case '1':
                    this.createGroceryList();//allows user to create a grocery list
                    break;
                case '2':
                    this.viewGroceryList();//allows user to view grocery list
                    break;
                case '3':
                    this.deleteGroceryList();//allows user to delete grocery list
                    break;
                case '4':
                    this.displayGroceryList();//displays entire grocery list
                    break;
                case '5':
                    selection = 0;
            }
            alert ("Sorry, no food for you!");//this runs if user selects 0 (wonder if I could have just made this a default statement???)
        }
    }
}