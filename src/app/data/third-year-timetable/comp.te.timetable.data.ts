import {LectureModel} from '../../models/lecture.model';

export const timetable: LectureModel[] = [
    // Monday
    {
        subject: 'system software lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 114,
        professor: {
            firstName: 'anil',
            lastName: 'hingmire',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'data warehousing & mining lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 113,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'system security lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 112,
        professor: {
            firstName: 'sangita',
            lastName: 'chaudhari',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'software engineering lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 111,
        professor: {
            firstName: 'priya',
            lastName: 'save',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },
    {
        subject: 'data warehousing & mining',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 517,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'system programming & complier construction',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 517,
        professor: {
            firstName: 'anil',
            lastName: 'hingmire',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'cryptography & system security',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 517,
        professor: {
            firstName: 'sangita',
            lastName: 'chaudhari',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'software engineering',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 517,
        professor: {
            firstName: 'priya',
            lastName: 'save',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'mini-project',
        startTime: '16:00',
        endTime: '17:00',
        roomNumber: 111,
        professor: {
            firstName: 'megha',
            lastName: 'trivedi',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },

    // Tuesday
    {
        subject: 'software engineering lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 114,
        professor: {
            firstName: 'priya',
            lastName: 'save',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'system software lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 113,
        professor: {
            firstName: 'anil',
            lastName: 'hingmire',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'data warehousing & mining lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 112,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'system security lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 111,
        professor: {
            firstName: 'sangita',
            lastName: 'chaudhari',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },
    {
        subject: 'data warehousing & mining',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 516,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'cryptography & system security',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 516,
        professor: {
            firstName: 'sangita',
            lastName: 'chaudhari',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'system programming & complier construction',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 516,
        professor: {
            firstName: 'anil',
            lastName: 'hingmire',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'machine learning',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 516,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'advanced database management system',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 515,
        professor: {
            firstName: 'megha',
            lastName: 'trivedi',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    // Wednesday
    {
        subject: 'machine learning',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 516,
        professor: {
            firstName: 'megha',
            lastName: 'trivedi',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'advanced database management system',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 515,
        professor: {
            firstName: 'smita',
            lastName: 'jawale',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'data warehousing & mining',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 516,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'software engineering',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 517,
        professor: {
            firstName: 'priya',
            lastName: 'save',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'system security lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 114,
        professor: {
            firstName: 'sangita',
            lastName: 'chaudhari',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'software engineering lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 113,
        professor: {
            firstName: 'priya',
            lastName: 'save',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'system security lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 112,
        professor: {
            firstName: 'anil',
            lastName: 'hingmire',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'data warehousing & mining lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 111,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },

    // Thursday
    {
        subject: 'software engineering',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 517,
        professor: {
            firstName: 'priya',
            lastName: 'save',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'data warehousing & mining',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 517,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'cryptography & system security',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 517,
        professor: {
            firstName: 'sangita',
            lastName: 'chaudhari',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'system programming & complier construction',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 517,
        professor: {
            firstName: 'anil',
            lastName: 'hingmire',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'machine learning',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 517,
        professor: {
            firstName: 'megha',
            lastName: 'trivedi',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'advanced database management system',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 515,
        professor: {
            firstName: 'smita',
            lastName: 'jawale',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'mini-project',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 111,
        professor: {
            firstName: 'megha',
            lastName: 'trivedi',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'mini-project',
        startTime: '16:00',
        endTime: '17:00',
        roomNumber: 111,
        professor: {
            firstName: 'megha',
            lastName: 'trivedi',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },

    // Friday
    {
        subject: 'system programming & complier construction',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 517,
        professor: {
            firstName: 'anil',
            lastName: 'hingmire',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'machine learning',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 517,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'advanced database management system',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 515,
        professor: {
            firstName: 'smita',
            lastName: 'jawale',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'software engineering',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 517,
        professor: {
            firstName: 'priya',
            lastName: 'save',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'cryptography & system security',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 517,
        professor: {
            firstName: 'sangita',
            lastName: 'chaudhari',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'data warehousing & mining lab',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 114,
        professor: {
            firstName: 'swapna',
            lastName: 'borde',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'system security lab',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 113,
        professor: {
            firstName: 'sangita',
            lastName: 'chaudhari',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'software engineering lab',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 112,
        professor: {
            firstName: 'priya',
            lastName: 'save',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'system programming & complier construction',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 111,
        professor: {
            firstName: 'anil',
            lastName: 'hingmire',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    }
];
