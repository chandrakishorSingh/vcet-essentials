import {ProfessorModel} from '../models/professor.model';

const professors: ProfessorModel[] = [
    {
        firstName: 'sangita',
        lastName: 'chaudhary',
        cabinNumber: 212,
        department: {
            code: 'comp',
            name: 'computer'
        }
    },
    {
        firstName: 'sweety',
        lastName: 'rupani',
        cabinNumber: 203,
        department: {
            code: 'comp',
            name: 'computer'
        }
    },
    {
        firstName: 'swapna',
        lastName: 'borde',
        cabinNumber: 210,
        department: {
            code: 'comp',
            name: 'computer'
        }
    },
    {
        firstName: 'anil',
        lastName: 'hingmire',
        cabinNumber: 205,
        department: {
            code: 'comp',
            name: 'computer'
        }
    },
    {
        firstName: 'vikrant',
        lastName: 'agaskar',
        cabinNumber: 202,
        department: {
            code: 'comp',
            name: 'computer'
        }
    }
];

export default professors;
