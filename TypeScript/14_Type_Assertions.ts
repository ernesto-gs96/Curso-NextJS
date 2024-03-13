class User {
    name : string;
}

class Admin {
    permissions : number;
}

let user : User & Admin = {
    name: '',
    permissions: 0
};

user.name='Ernesto'
user.permissions=5;

// Assertions
user = new User() as User&Admin;