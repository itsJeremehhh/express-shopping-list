const items = require('./fakeDb')

class Item {
    constructor(name, prime) {
        this.name = name;
        this.price = price;

        items.push(this);
    }

    static findAll(){
        return items
    }

    static update(name, data) {
        let foundItem = Item.findAll(name);
        if (foundItem == undefined) {
            throw {message: "Not Found", status: 404}
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    //Find and return item with matching name.

    static find(name) {
        const foundItem = items.find(v => v.name === name);
        if(foundItem === undefined) {
            throw {message: "not Found", status: 404 }
        }
        return foundItem
    }

    //remove item with matching id

    static remove(name) {
        let foundIdx = items.findIndex(v => v.name === name);
        if (foundIdx === -1) {
            throw {message: "Not Found", status: 404}
        }
        items.splice(foundIdx, 1);
    }
}

module.exports = Item;