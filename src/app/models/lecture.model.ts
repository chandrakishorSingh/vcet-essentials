import {ProfessorModel} from './professor.model';
import {BranchModel} from './branch.model';
import {BATCH_CODE, DAY, SEMESTER_CODE, YEAR} from '../types/types';

export class LectureModel {
    constructor(readonly subject: string,
                readonly startTime: string,
                readonly endTime: string,
                readonly roomNumber: number,
                readonly professor: ProfessorModel,
                readonly day: DAY,
                readonly isPractical: boolean,
                readonly year: YEAR,
                readonly semester: SEMESTER_CODE,
                readonly branch: BranchModel,
                readonly batch?: BATCH_CODE
                ) {}
}
