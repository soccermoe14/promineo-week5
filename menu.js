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
//creates a class that contains food types and macronutrient for that food type
    describe() {
        return `${this.food} is a ${this.macronutrient}.`;
        }
//returns a string (ex: bread is a carbohydrate)
}


class PersonalList {
    constructor (name, food) {
        this.name = name;
        this.foods = [];
    }
//creates a class with names so we can have grocery lists for different people
    addFood(food) {
        if (food instanceof Foods) {
            this.groceryList.push(Foods);
        } else {
            throw new Error("Nope, can't do that!");
        }
//adds a new food type to our list
    }
    describe() {
        return `${this.name}'s grocery list has ${this.groceryList.length} items.`;
    }
//returns a string (ex: Marin's grocery list has 10 items)
}

class Menu {
//creating a menu that will allow user to create grocery list, add foods, delete foods, add macronutrient of food type, and view grocery list
    constructor () {
        this.foods = [];
        this.macronutrients = [];
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
                case '4':
                    this.displayFoods();//displays entire grocery list
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
            1) Create New Food
            2) View Food
            3) Delete Food
            4) Display Foods
         `)
        }
        
        showGroceryMenuOptions(foodInfo) {
            return prompt (`
            0) Back
            1) Add Grocery List
            2) Delete Grocery List
            -------------------------------
            ${foodInfo}
            `)
        }

        displayFoods() {
            let foodString = " ";
            for (let i = 0; i < this.foods.length; i++) {
                foodString += i + " " + ") " + this.foods[i].name + "\n";
            }
            alert(foodString);
        }
        addFood() {
            let food = prompt("Add food type.");
            let macronutrient = prompt("Add macronutrient type.");
            this.foods.push(new Foods(name, macronutrient));
        }

        viewFood() {
            let index = prompt("Enter number to view food.");
            if (index > -1 && index < this.foods.length) {
                this.selectedFood = this.foods[index];
                let description = `Food Name: ${this.selectedFood.name} is a ${this.selectedMacronutrient.name}`;
                let selection = this.showGroceryMenuOptions
                (description);
                switch (selection) {
                    case '1':
                        this.addGroceryList();
                        break:
                    case '2':
                        this.removeGroceryList();
                        
                }
            }
        }

        deleteFood() {
            let index = prompt("Enter numnber of food to delet.");
            if (index > -1 && index < this.foods.length) {
                this.foods.splice(index, 1);
            }
        }

        addGroceryList() {
            let name = prompt("Enter name of grocery list.");
            this.selectedFood.groceryList.push(new GroceryList(name));
        }

        removeGroceryList() {
            let index = prompt("Enter number of grocery list to remove.");
            if (index > -1 && < globalThis.selectedFood.groceryLists.length) {
                this.selectedFood.groceryLists.splice(index, 1);
            }
        }
    }

    let menu = new Menu();
    menu.start();