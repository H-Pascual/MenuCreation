import MenuCategory from "./MenuCategory"
import MenuTemplate from "./MenuTemplate"
import Product from "./Product"

export class Menu {
    ID!: string
    Template!: MenuTemplate
    Products?: Product[]
    Categories?: MenuCategory[]
    CreationDate: string
    ModificationDate: string
    Active: boolean
    ShowPrices: boolean
    ShowDescriptions: boolean
    ShowCategories: boolean
    GroupFamilies: boolean
    ShowIngredients: boolean
    QR?: string

    constructor(template: MenuTemplate, creation: string) {
        this.Template = template
        this.CreationDate = creation
        this.ModificationDate = creation
        this.Active = true
        this.ShowPrices = true
        this.ShowDescriptions = true
        this.ShowCategories = true
        this.GroupFamilies = true
        this.ShowIngredients = true
    }
}
export default Menu