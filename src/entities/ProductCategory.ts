import Restaurant from "./Restaurant"

export class ProductCategory {
    ID!: string 
    Name: string
    IconUrl?: string
    Restaurant: Restaurant
    constructor(name: string, restaurant: Restaurant, iconurl?: string) {
        this.Name = name
        this.Restaurant = restaurant
        if(iconurl) this.IconUrl = iconurl
    }
}

export default ProductCategory