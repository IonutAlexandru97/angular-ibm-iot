import * as model from "./users";

export class UserSummary {
    first_name: string
    last_name: string
    email: string
    constructor(data: model.users){
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.email = data.email;
    }
}
