export class UserModel {
    constructor(public firstName: string,
                public lastName: string,
                public branch: string,
                public semester: string,
                public email: string,
                public photoURL: string,
                public displayName: string,
                public uid: string) {}
}
