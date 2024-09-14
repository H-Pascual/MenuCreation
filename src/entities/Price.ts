import Promotion from "./Promotion"

export class Price {
    ID!: string
    Name!: string
    Price!: number
    DaysDuration!: number
    Description!: string
    Promotions?: Promotion[]
}

export default Price