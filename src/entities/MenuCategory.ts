import Restaurant from "./Restaurant"

export class MenuCategory {
    ID!: string
    Name: string
    Restaurant: Restaurant
    constructor(name: string, restaurant: Restaurant) {
        this.Name = name
        this.Restaurant = restaurant
    }
}

export default MenuCategory