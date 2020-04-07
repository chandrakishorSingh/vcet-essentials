import {LectureModel} from '../../models/lecture.model';

export const timetable: LectureModel[] = [
    // Monday
    {
        subject: 'applied mathematics-iv',
        startTime: '08:00',
        endTime: '09:00',
        roomNumber: 516,
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
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'computer graphics',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 516,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'computer organization and architecture',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 516,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'analysis of algorithms',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 516,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'operating system',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 516,
        professor: {
            firstName: 'smita',
            lastName: 'jawale',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '14:00',
        endTime: '14:00',
        roomNumber: 519,
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
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'computer graphics lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 114,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'operating system lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 113,
        professor: {
            firstName: 'smita',
            lastName: 'jawale',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'processor architecture lab',
        startTime: '15:00',
        endTime: '17:00',
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
        day: 1,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'analysis of algorithms lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 111,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 1,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },

    // Tuesday
    {
        subject: 'operating system',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 516,
        professor: {
            firstName: 'smita',
            lastName: 'jawale',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'analysis of algorithms',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 516,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'operating system lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 114,
        professor: {
            firstName: 'smita',
            lastName: 'jawale',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'processor architecture lab',
        startTime: '11:15',
        endTime: '13:15',
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
        day: 2,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'analysis of algorithms lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 112,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'open source tech lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 111,
        professor: {
            firstName: 'vikrant',
            lastName: 'agaskar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 517,
        professor: {
            firstName: 'dorill',
            lastName: 'carvalho',
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
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'computer organization and architecture',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 517,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    // Wednesday
    {
        subject: 'applied mathematics-iv',
        startTime: '08:00',
        endTime: '09:00',
        roomNumber: 514,
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
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'open source tech lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 114,
        professor: {
            firstName: 'vikrant',
            lastName: 'agaskar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'analysis of algorithms lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 113,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'computer graphics lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 112,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'processor architecture lab',
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
        day: 3,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },
    {
        subject: 'computer graphics',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 516,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'open source tech lab',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 516,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'operating system',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 516,
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
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 516,
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
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'computer organization and architecture',
        startTime: '16:00',
        endTime: '17:00',
        roomNumber: 516,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    // Thursday
    {
        subject: 'analysis of algorithms lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 114,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'open source tech lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 113,
        professor: {
            firstName: 'vikrant',
            lastName: 'agaskar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'operating system lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 112,
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
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'computer graphics lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 111,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },
    {
        subject: 'open source tech lab',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 516,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'computer organization and architecture',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 516,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'computer graphics',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 516,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'analysis of algorithms',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 516,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '16:00',
        endTime: '17:00',
        roomNumber: 514,
        professor: {
            firstName: 'dorill',
            lastName: 'carvalho',
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
            name: 'computer',
            code: 'comp'
        }
    },
    // Friday
    {
        subject: 'analysis of algorithms',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 516,
        professor: {
            firstName: 'sweety',
            lastName: 'rupani',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 516,
        professor: {
            firstName: 'dorill',
            lastName: 'carvalho',
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
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'processor architecture lab',
        startTime: '11:15',
        endTime: '13:15',
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
        day: 5,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'computer graphics lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 113,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'open source tech lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 112,
        professor: {
            firstName: 'vikrant',
            lastName: 'agaskar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'operating system lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 111,
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
        isPractical: true,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },
    {
        subject: 'operating system',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 516,
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
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'computer graphics',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 516,
        professor: {
            firstName: 'sunil',
            lastName: 'katkar',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: false,
        year: 'SE',
        semester: 4,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'applied mathematics-iv',
        startTime: '16:00',
        endTime: '17:00',
        roomNumber: 514,
        professor: {
            firstName: 'dorill',
            lastName: 'carvalho',
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
            name: 'computer',
            code: 'comp'
        }
    }
];
