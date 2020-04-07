import {ProfessorModel} from '../models/professor.model';
import {allBranchTimeTable} from './allBranchTimetable.data';
import {BranchModel} from '../models/branch.model';
import {BRANCH_CODE, BRANCH_NAME, ORG_CODE, ORG_NAME} from '../types/types';

export const professors: ProfessorModel[] = Array.from(new Set(
    allBranchTimeTable.map(lecture => {
        return [
            lecture.professor.firstName,
            lecture.professor.lastName,
            lecture.professor.cabinNumber,
            lecture.professor.department.name,
            lecture.professor.department.code
        ].join(':');
    })
)).map(professorDataString => {
    const professorData: string[] = professorDataString.split(':');
    const [firstName, lastName] = professorData;
    const cabinNumber: number = parseInt(professorData[2], 10);
    const name: BRANCH_NAME = professorData[3] as BRANCH_NAME;
    const code: BRANCH_CODE = professorData[4] as BRANCH_CODE;
    return new ProfessorModel(firstName, lastName, cabinNumber, new BranchModel(name, code));
});
