import Price from "./Price"

export class Restaurant {
    ID!: string
    Name: string
    PricingType: Price
    Address: string
    Location: string
    RestaurantType: string //Hacer un enum

    constructor(name: string, pricing: Price, address: string, location: string, restaurantType: string) {
        this.Name = name
        this.PricingType = pricing
        this.Address = address
        this.Location = location
        this.RestaurantType = restaurantType
    }

}

export default Restaurant