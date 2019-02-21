
export namespace usersFields {
    export type id = string;
    export type email = string;
    export type family_name = string | null;
    export type given_name = string | null;

}

export interface users {
    id: usersFields.id;
    email: usersFields.email;
    family_name: usersFields.family_name;
    given_name: usersFields.given_name;

}
