import Restaurant from "./Restaurant"

export class ProductFamily {
    ID!: string
    Name: string
    Description?: string
    Restaurant: Restaurant
    constructor(name: string, restaurant: Restaurant, description?: string) {
        this.Name = name
        this.Restaurant = restaurant
        if(description) this.Description = description
    }
}
export default ProductFamily