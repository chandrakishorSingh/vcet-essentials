import {LectureModel} from '../../models/lecture.model';

export const timetable: LectureModel[] = [
    // Monday
    {
        subject: 'python lab',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 416,
        professor: {
            firstName: 'mariyam',
            lastName: 'jawadwala',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'operating systems',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 416,
        professor: {
            firstName: 'sainath',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'microprocessor programming lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 314,
        professor: {
            firstName: 'madhavi',
            lastName: 'waghmare',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'A'
    },
    {
        subject: 'automata theory',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 414,
        professor: {
            firstName: 'vaishali',
            lastName: 'shirsath',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'B'
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 414,
        professor: {
            firstName: 'dorill',
            lastName: 'carvalho',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 1,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'B'
    },
    {
        subject: 'python lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 313,
        professor: {
            firstName: 'mariyam',
            lastName: 'jawadwala',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'C'
    },
    {
        subject: 'unix lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 312,
        professor: {
            firstName: 'sainath',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'D'
    },
    {
        subject: 'computer organization and architecture',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 416,
        professor: {
            firstName: 'madhavi',
            lastName: 'waghmare',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'computer networks',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 416,
        professor: {
            firstName: 'archana',
            lastName: 'ekbote',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'automata theory',
        startTime: '16:00',
        endTime: '17:00',
        roomNumber: 416,
        professor: {
            firstName: 'vaishali',
            lastName: 'shirsath',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    // Tuesday
    {
        subject: 'automata theory',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 414,
        professor: {
            firstName: 'vaishali',
            lastName: 'shirsath',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 2,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'A'
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 414,
        professor: {
            firstName: 'pranali',
            lastName: 'sapre',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 2,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'A'
    },
    {
        subject: 'unix lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 314,
        professor: {
            firstName: 'anagha',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 2,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'B'
    },
    {
        subject: 'networking lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 312,
        professor: {
            firstName: 'archana',
            lastName: 'ekbote',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 2,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'C'
    },
    {
        subject: 'python lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 311,
        professor: {
            firstName: 'mariyam',
            lastName: 'jawadwala',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 2,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'D'
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 416,
        professor: {
            firstName: 'pranali',
            lastName: 'sapre',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 2,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'computer networks',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 416,
        professor: {
            firstName: 'archana',
            lastName: 'ekbote',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 2,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'python lab',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 416,
        professor: {
            firstName: 'mariyam',
            lastName: 'jawadwala',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 2,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'computer organization and architecture',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 416,
        professor: {
            firstName: 'madhavi',
            lastName: 'waghmare',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 2,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    // Wednesday
    {
        subject: 'networking lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 314,
        professor: {
            firstName: 'archana',
            lastName: 'ekbote',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'A'
    },
    {
        subject: 'python lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 313,
        professor: {
            firstName: 'mariyam',
            lastName: 'jawadwala',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'B'
    },
    {
        subject: 'microprocessor programming lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 312,
        professor: {
            firstName: 'madhavi',
            lastName: 'waghmare',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'C'
    },
    {
        subject: 'automata theory',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 414,
        professor: {
            firstName: 'vaishali',
            lastName: 'shirsath',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'D'
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 414,
        professor: {
            firstName: 'dorill',
            lastName: 'carvalho',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 3,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'D'
    },
    {
        subject: 'computer organization and architecture',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 416,
        professor: {
            firstName: 'madhavi',
            lastName: 'waghmare',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'python lab',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 416,
        professor: {
            firstName: 'mariyam',
            lastName: 'jawadwala',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 416,
        professor: {
            firstName: 'pranali',
            lastName: 'sapre',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 3,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'operating systems',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 416,
        professor: {
            firstName: 'sainath',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'computer networks',
        startTime: '16:00',
        endTime: '17:00',
        roomNumber: 416,
        professor: {
            firstName: 'archana',
            lastName: 'ekbote',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    // Thursday
    {
        subject: 'python lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 314,
        professor: {
            firstName: 'mariyam',
            lastName: 'jawadwala',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 4,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'A'
    },
    {
        subject: 'microprocessor programming lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 313,
        professor: {
            firstName: 'madhavi',
            lastName: 'waghmare',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 4,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'B'
    },
    {
        subject: 'unix lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 312,
        professor: {
            firstName: 'sainath',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 4,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'C'
    },
    {
        subject: 'networking lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 311,
        professor: {
            firstName: 'bharati',
            lastName: 'gondhalekar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 4,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'D'
    },
    {
        subject: 'computer networks',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 416,
        professor: {
            firstName: 'archana',
            lastName: 'ekbote',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 4,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'python lab',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 416,
        professor: {
            firstName: 'mariyam',
            lastName: 'jawadwala',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 4,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 416,
        professor: {
            firstName: 'pranali',
            lastName: 'sapre',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 4,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'operating systems',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 416,
        professor: {
            firstName: 'sainath',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 4,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'automata theory',
        startTime: '16:00',
        endTime: '17:00',
        roomNumber: 416,
        professor: {
            firstName: 'vaishali',
            lastName: 'shirsath',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 4,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    // Friday
    {
        subject: 'automata theory',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 416,
        professor: {
            firstName: 'vaishali',
            lastName: 'shirsath',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'computer organization and architecture',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 416,
        professor: {
            firstName: 'madhavi',
            lastName: 'waghmare',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'unix lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 314,
        professor: {
            firstName: 'anagha',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'A'
    },
    {
        subject: 'networking lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 313,
        professor: {
            firstName: 'archana',
            lastName: 'ekbote',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'B'
    },
    {
        subject: 'automata theory',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 311,
        professor: {
            firstName: 'vaishali',
            lastName: 'shirsath',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'C'
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 312,
        professor: {
            firstName: 'pranali',
            lastName: 'sapre',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 5,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'C'
    },
    {
        subject: 'microprocessor programming lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 311,
        professor: {
            firstName: 'madhavi',
            lastName: 'waghmare',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'D'
    },
    {
        subject: 'automata theory',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 416,
        professor: {
            firstName: 'vaishali',
            lastName: 'shirsath',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'operating systems',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 416,
        professor: {
            firstName: 'sainath',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '16:00',
        endTime: '17:00',
        roomNumber: 416,
        professor: {
            firstName: 'pranali',
            lastName: 'sapre',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 5,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    }
];
