import MenuCategory from "./MenuCategory"
import Product from "./Product"
import ProductFamily from "./ProductFamily"
import Restaurant from "./Restaurant"

export class MenuTemplate {
    ID!: string
    Template: string
    Families?: ProductFamily[] 
    Categories?: MenuCategory[]
    Products?: Product[]
    Restaurant!: Restaurant

    constructor(template: string, restaurant: Restaurant){
        this.Template = template
        this.Restaurant = restaurant
    }
}

export default MenuTemplate