import {BRANCH_CODE, SEMESTER_CODE} from '../types/types';

export class UserModel {
    constructor(public firstName: string,
                public lastName: string,
                public branch: BRANCH_CODE,
                public semester: SEMESTER_CODE,
                public email: string,
                public photoURL: string,
                public displayName: string,
                public uid: string) {}
}
