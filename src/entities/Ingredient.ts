import Restaurant from "./Restaurant"

export class Ingredient {
    ID!: string
    Name: string
    Restaurant: Restaurant
    constructor(name: string, restaurant: Restaurant) {
        this.Name = name
        this.Restaurant = restaurant
    }
}

export default Ingredient