export class usersDetail {
    id: string
    name: string
    username: string
    email: string
    img: string[]
    constructor(data: any, userImage: string[]) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.email = data.username;
        this.img = userImage;
    }
}