const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get _appetizers() {
        if (Array.isArray(menu._courses.appetizers)) {
            return this._courses.appetizers
        }
    },
    set _appetizers(appetizerIn) {
        this._courses.appetizers.push(appetizerIn)
    },
    get _mains() {
        if (Array.isArray(menu._courses.mains)) {
            return this._courses.mains
        } else {
            return 'The course is not an array'
        }
    },
    set _mains(mainIn) {
        this._courses.mains.push(mainIn)
    },
    get _desserts() {
        if (Array.isArray(menu._courses.desserts)) {
            return this._courses.desserts
        } else {
            return 'The course is not an array'
        }
    },
    set _desserts(dessertIn) {
        this._courses.desserts.push(dessertIn)
    },
    get courses() {
        return {
            appetizers: this._appetizers,
            mains: this._mains,
            desserts: this._desserts,

        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };

        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');

        return ` Your meal consists of our following selections: 
       Appetizer: ${appetizer.name} \$${appetizer.price}
       Main: ${main.name} \$${main.price}
       Dessert: ${dessert.name} \$${dessert.price}
       Your total is: \$${appetizer.price + main.price + dessert.price} `
    }
}

menu.addDishToCourse('appetizers', 'mozerella sticks', 6.00)
menu.addDishToCourse('appetizers', 'chicken nuggets', 8.00)
menu.addDishToCourse('appetizers', 'buffalo wings', 12.00)
menu.addDishToCourse('mains', 'spaghetti and meatballs', 16.00)
menu.addDishToCourse('mains', 'seafood platter', 28.00)
menu.addDishToCourse('mains', 'steak and potatoes', 22.00)
menu.addDishToCourse('desserts', 'cheesecake', 14.00)
menu.addDishToCourse('desserts', 'sundae', 8.00)
menu.addDishToCourse('desserts', 'rootbeer float', 10.00)
console.log(menu.courses)

const meal = menu.generateRandomMeal();
console.log(meal)