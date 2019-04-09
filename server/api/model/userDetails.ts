import * as model from '../model/users';

export class UserDetails {
    username : string
    first_name : string 
    last_name: string
    email : string
    constructor(data: model.users){
        this.username = data.username;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.email = data.email;
    }
}