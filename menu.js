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
        this.groceryLists = [];//list of the grocery list names that exist
        this.selectedGroceryList = null;
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
                    this.displayGroceryLists();//displays entire grocery list
                    break;
                case '5':
                    selection = 0;
                }
            alert ("Sorry, no food for you!");//this runs if user selects 0 (wonder if I could have just made this a default statement???)
        }
        showMainMenuOptions(); {//creating the list of prompts that will be displayed on console
            return prompt (`
            0) Exit
            1) Create New Grocery List
            2) View Grocery List
            3) Delete Grocery List
            4) Display Grocery Lists
            `)
        }
    }
        

        displayGroceryLists() { 
                let groceryListString = ' ';
                for (let i = 0; i , this.groceryList.length; i++) {
                    groceryListString += i + ') ' + this.groceryLists[i].food + '\n';
                }//for loop that will iterate through the grocery lists and number them (double check that I am stating this correctly)
                alert(groceryListString);
            }
            createGroceryList() {//creates different grocery lists
                let name = prompt ('Enter name for this grocery list:');
                this.groceryLists.push(new GroceryList(name));//pass in name from prompt into the new grocery list. That name will be pushed to grocery lists array.
            }
            viewGroceryList() {//creates ability to view grocery lists
                let index = prompt ('Enter the index of the grocery list you wish to view:');
                if (index > -1 && index < this.groceryLists.length) {//validates user input so we don't get an error if input is < 0 or > grocery list array
                    this.selectedGroceryList = this.groceryLists[index];
                    let description = 'This is' + this.selectedGroceryList + '\n';

                    for (let i = 0; i < this.selectedGroceryList.foods.length; i++) {
                        description += i + ') ' + this.selectedGroceryList.foods[i].name + ' - ' 
                            + this,this.selectedGroceryList.foods[i],position + '\n';//this will build the list of foods on the grocery list
                    }
                let selection = this.showGroceryMenuOptions(description);//this still need to be built. Will pass in description of 
                //grocery list to show grocery menu options and implement showGroceryMenu OPtions to diplay the groceries
                        switch (selection) {
                            case '1':
                                this.createFood();
                                break;
                            case '2':
                                this.deleteFood(); 
                        }

                }
            }
}
let menu = new Menu();
menu.start();

//NEED TO GO BACK ANS ADD MY SHOW GROCERY MENU OPTIONS WHERE I CAN ADD FOOD ITEMS