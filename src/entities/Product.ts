import Ingredient from "./Ingredient"
import ProductCategory from "./ProductCategory"
import ProductFamily from "./ProductFamily"
import Restaurant from "./Restaurant"

export class Product {
    ID!: string
    Name!: string
    Active!: boolean
    Price!: number
    PreparingTime!: number
    Restaurant!: Restaurant
    Families?: ProductFamily[]
    Categories?: ProductCategory[]
    Ingredients?: Ingredient[]
    Images?: string[]
    Description?: string

    constructor(name: string, price: number, preparingtime: number, restaurant: Restaurant) {
        this.Name = name
        this.Price = price
        this.Active = true
        this.PreparingTime = preparingtime
        this.Restaurant = restaurant
    }
}

export default Product