import {ProfessorModel} from './professor.model';
import {BranchModel} from '../auth/models/branch.model';

export type YEAR = 'FE' | 'SE' | 'TE' | 'BE';
export type DAY = 1 | 2 | 3 | 4 | 5;
export type DIVISION = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export class LectureModel {
    constructor(readonly subject: string,
                readonly startTime: string,
                readonly endTime: string,
                readonly roomNumber: number,
                readonly professor: ProfessorModel,
                readonly day: DAY,
                readonly isPractical: boolean,
                readonly year: YEAR,
                readonly branch: BranchModel,
                readonly batch?: string,
                readonly division?: DIVISION
                ) {}
}
