let car = {
    make: 'BMW',
    model: '320d',
    year: 2019,
    mileage: 4000,
    getMake: function(){
        return this.make;
    },
    getModel: function(){
        return this.model;
    },
    getYear: function(){
        return this.year;
    },
    setMileage: function(){
        this.mileage = newMileage;
    }
}
function printProperties(object) {
    for (let propertyName in object) {
        let property = object[propertyName];
        console.log("name: " + propertyName + "\nvalue:" + property + "\ntype:" + typeof property + "\n");
    }
}

printProperties(car)
