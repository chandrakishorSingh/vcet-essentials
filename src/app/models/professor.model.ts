import {BranchModel} from '../auth/models/branch.model';

export class ProfessorModel {
    constructor(readonly firstName: string,
                readonly lastName: string,
                readonly cabinNumber: number,
                readonly department: BranchModel) {}
}
