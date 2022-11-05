/* •	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
•	Your menu should have the options to create, view, and delete elements.
*/

class Foods {
    constructor (food, macronutrient) {
        this.food = food;
        this.macronutrient = macronutrient;
    }
    decribe() {
        return `${this.food} is a ${this.macronutrient}`;
    }
}

class GroceryLists {
    constructor (name) {
        this.name = name;
        this.foods = [];
    }
    addFood(food) {
        if (food instanceof Foods) {
            this.foodList.push(Foods);
        }
    }
    describe() {
        return `${this.name}'s grocery list has ${this.foods.length} items.`
    }
}

class Menu {
    constructor () {
        this.foods = [];
        this.foods.macronutrient = [];
        this.selectedFood = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.addFood();
                    break;
                case "2":
                    this.viewFood();
                    break;
                case "3":
                    this.deleteFood();
                    break;
                case "4":
                    this.displayFoods();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert ("No food for you!");
    }
    showMainMenuOptions() {
        return prompt (`
        0) Exit
        1) Add Food
        2) View Food
        3) Delete Food
        4) Displacy All Foods
        `);
    }
    showGroceryListMenuOptions(food) {
        return prompt (`
        0) Back
        1) Add Grocery List
        2) Remove Grocery List
        
        `);
    }
    displayFoods() {
        let foodString = " ";
        for (let i = 0; i < this.foods.length; i++) {
            foodString += i + ") " + this.foods[i].food + "\n";
        }
        alert(foodString);
    }
    addFood() {
        let food = prompt ("Add food");
        let macronutrient = prompt ("Add macronutrient");
        this.foods.push(new Foods(food, macronutrient));
    }
    viewFood() {
        let index = prompt("Enter index number of food");
        if (index > -1 && index < this.foods.length) {
            this.selectedFood = this.foods[index];
            let description = `${this.selectedFood}`;
            let selection = this.showGroceryListMenuOptions(description);
            switch (selection) {
                case "1":
                    this.addGroceryList();
                    break;
                case "2":
                    this.deleteGroceryList();
            }
        }
    }
    deleteFood() {
        let index = prompt ("Enter index of food to delete");
        if (index > -1 && index < this.foods.length) {
            this.foods.splice(index, 1);
        }
    }
    addGroceryList() {
        let name = prompt("Name of grocery list");
        this.selectedFood.groceryList.push(new GroceryLists(name));
    }
    deleteGroceryList() {
        let index = prompt ("Enter index of grocery list to remove");
        if (index > -1 && index < this.selectedFood.GroceryLists.length) {
            this.selectedFood.GroceryLists.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
