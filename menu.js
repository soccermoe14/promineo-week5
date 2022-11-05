/* •	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
•	Your menu should have the options to create, view, and delete elements.
*/

class Food {
    constructor (food, macronutrient) {
        this.food = food;
        this.macronutrient = macronutrient
    }
//creates a class that contains food types and macronutrient for that food type
    describe() {
        return `${this.food} is a ${this.macronutrient}.`;
        }
//returns a string (ex: bread is a carbohydrate)
}

class Menu {
//creating a menu that will allow user to create grocery list, add foods, delete foods, add macronutrient of food type, and view grocery list
    constructor () {
        this.food = [];
        this.macronutrient = [];
        this.selectedFood = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addFood();//allows user to add food
                    break;
                case '2':
                    this.viewFood();//allows user to view grocery list
                    break;
                case '3':
                    this.deleteFood();//allows user to delete grocery list
                    break;
                default: selection = 0;
                }
            selection = this.showMainMenuOptions;
            }
            alert ("Sorry, no food for you!");//this runs if user selects 0 (wonder if I could have just made this a default statement???)
        }
        showMainMenuOptions() {
            return prompt (`
            0) Exit
            1) Add Food
            2) View Food
            3) Delete Food
         `)
        }
        
        addFood(food) {
        if (food instanceof Food) {
            this.food.push(food);
        } else {
            throw new error (`Can't do that!`);
        }

        viewFood() {
           let index = prompt("Enter # of you food you want to view");
            if (index > -1 && index < this.foods.length) {
                this.selectedFood = this.foods[index];
                let description = `Food Name: ${this.selectedFood.name} is a ${this.selectedMacronutrient.name}`;
                                      
                }
            }
        deleteFood() {
            let index = prompt("Enter numnber of food to delete.");
            if (index > -1 && index < this.foods.length) {
            this.food.splice(index, 1);
        }
        
    }
}
let menu = new Menu();
menu.start();
