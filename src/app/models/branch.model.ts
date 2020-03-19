import {BRANCH_CODE, BRANCH_NAME} from '../types/types';

export class BranchModel {
    constructor(public name: BRANCH_NAME,
                public code: BRANCH_CODE) {}
}
