export class credentialModel {
    username: string;
    password: string;
}

// export class AuthorizeModel {
//     displayName: string;
//     email: string;
//     firstName: string;
//     lastName: string;
//     username: string;
//     password: string;
//     profileImageURL: string;
//     gender: string;
//     phone: string;
//     birthday: string;
//     roles: Array<string>;
// }

export class AuthorizeModel {
    _id: string;
    displayName: string;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    profileImageURL: string;
    phone: string;
    loginExpires: string;
    loginToken: string;
    rolse: Array<string>;
}