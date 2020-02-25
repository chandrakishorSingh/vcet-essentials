export type BranchCode = 'comp' | 'civil' | 'extc' | 'mech' | 'inst' | 'inft';

export class BranchModel {
    constructor(public name: string,
                public code: BranchCode) {}
}
