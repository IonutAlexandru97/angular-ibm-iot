export namespace usersFiels {
    export type id = string;
    export type username = string;
    export type first_name = string 
    export type last_name = string
    export type email = string;
    export type password = string;

}

export interface users {
    id: usersFiels.id;
    username: usersFiels.username;
    first_name: usersFiels.first_name;
    last_name: usersFiels.last_name;
    email: usersFiels.email;
    password: usersFiels.password;
}