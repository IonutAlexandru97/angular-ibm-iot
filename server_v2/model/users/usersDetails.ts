export class usersDetail {
    id: string
    name: string
    username: string
    email: string
    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.email = data.username;
    }
}