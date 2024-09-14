import Restaurant from "./Restaurant"

export class User {
    ID!: string
    Avatar!: string
    Name!: string
    Email!: string
    Username!: string
    Surname!: string
    Role!: string //enum ROLE_USER ROLE_ADMIN ROLE_OWNER ROLE_GUEST
    Restaurant?: Restaurant

    constructor(name: string, email: string, username: string, surname: string, restaurant?: Restaurant) {
        this.Name = name
        this.Avatar = 'default.png'
        this.Email = email
        this.Username = username
        this.Surname = surname
        this.Role = "ROLE_USER"
        if(this.Restaurant) this.Restaurant = restaurant
    }
}

export default User