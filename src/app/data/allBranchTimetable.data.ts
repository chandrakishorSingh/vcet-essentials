import {LectureModel} from '../models/lecture.model';

const allBranchTimeTable: LectureModel[] = [
    {
        subject: 'data structures',
        branch: {
            code: 'comp',
            name: 'computer'
        },
        day: 5,
        startTime: '09:00',
        endTime: '10:00',
        isPractical: false,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 212,
            department: {
                code: 'comp',
                name: 'computer'
            }
        },
        roomNumber: 515,
        year: 'SE'
    },
    {
        subject: 'advanced system security and digital forensics',
        branch: {
            code: 'comp',
            name: 'computer'
        },
        day: 1,
        startTime: '10:00',
        endTime: '11:00',
        isPractical: false,
        professor: {
            firstName: 'sangita',
            lastName: 'chaudhary',
            cabinNumber: 213,
            department: {
                code: 'comp',
                name: 'computer'
            }
        },
        roomNumber: 502,
        year: 'BE'
    },
    {
        subject: 'digital signal and image processing',
        branch: {
            code: 'comp',
            name: 'computer'
        },
        day: 1,
        startTime: '11:15',
        endTime: '12:15',
        isPractical: false,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 201,
            department: {
                code: 'comp',
                name: 'computer'
            }
        },
        roomNumber: 510,
        year: 'BE'
    },
    {
        subject: 'artificial intelligence and soft computing',
        branch: {
            code: 'comp',
            name: 'computer'
        },
        day: 1,
        startTime: '12:15',
        endTime: '13:15',
        isPractical: false,
        professor: {
            firstName: 'anil',
            lastName: 'hingmire',
            cabinNumber: 210,
            department: {
                code: 'comp',
                name: 'computer'
            }
        },
        roomNumber: 512,
        year: 'BE'
    },
    {
        subject: 'mobile communication and computing',
        branch: {
            code: 'comp',
            name: 'computer'
        },
        day: 1,
        startTime: '14:00',
        endTime: '15:00',
        isPractical: false,
        professor: {
            firstName: 'vikrant',
            lastName: 'agaskar',
            cabinNumber: 210,
            department: {
                code: 'comp',
                name: 'computer'
            }
        },
        roomNumber: 509,
        year: 'BE'
    },
    {
        subject: 'artificial intelligence and soft computing lab',
        branch: {
            code: 'comp',
            name: 'computer'
        },
        day: 1,
        startTime: '15:00',
        endTime: '17:00',
        isPractical: true,
        professor: {
            firstName: 'anil',
            lastName: 'hingmire',
            cabinNumber: 204,
            department: {
                code: 'comp',
                name: 'computer'
            }
        },
        roomNumber: 312,
        year: 'BE'
    }
];

export default allBranchTimeTable;
