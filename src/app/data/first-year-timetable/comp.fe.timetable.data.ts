import {LectureModel} from '../../models/lecture.model';

export const timetable: LectureModel[] = [
    // Monday
    {
        subject: 'engineering mathematics-ii',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 514,
        professor: {
            firstName: 'pranali',
            lastName: 'sapre',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 1,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'c programming',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 519,
        professor: {
            firstName: 'swapnil',
            lastName: 'mane',
            cabinNumber: 100,
            department: {
                name: 'mechanical',
                code: 'mech'
            }
        },
        day: 1,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'engineering mathematics-ii',
        startTime: '11:15',
        endTime: '12:15',
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
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'professional communication and ethics- i',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 519,
        professor: {
            firstName: 'kamini',
            lastName: 'more',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 1,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'professional communication and ethics- i',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 214,
        professor: {
            firstName: 'kamini',
            lastName: 'more',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 1,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'engineering graphics',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 213,
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
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'engineering chemistry-ii',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 212,
        professor: {
            firstName: 'chandrakishori',
            lastName: 'sonarkar',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 1,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'engineering physics-ii',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 211,
        professor: {
            firstName: 'kanchan',
            lastName: 'sarmalkar',
            cabinNumber: 100,
            department: {
                name: 'instrumentation',
                code: 'inst'
            }
        },
        day: 1,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },
    // Tuesday
    {
        subject: 'engineering mathematics-ii',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 514,
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
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'professional communication and ethics- i',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 519,
        professor: {
            firstName: 'kamini',
            lastName: 'more',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 2,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'engineering chemistry-ii',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 214,
        professor: {
            firstName: 'chandrakishori',
            lastName: 'sonarkar',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 2,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'engineering physics-ii',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 213,
        professor: {
            firstName: 'kanchan',
            lastName: 'sarmalkar',
            cabinNumber: 100,
            department: {
                name: 'instrumentation',
                code: 'inst'
            }
        },
        day: 2,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'professional communication and ethics- i',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 212,
        professor: {
            firstName: 'kamini',
            lastName: 'more',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 2,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'engineering graphics',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 211,
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
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },
    {
        subject: 'engineering physics-ii',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 519,
        professor: {
            firstName: 'kanchan',
            lastName: 'sarmalkar',
            cabinNumber: 100,
            department: {
                name: 'instrumentation',
                code: 'inst'
            }
        },
        day: 2,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'c programming',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 424,
        professor: {
            firstName: 'sneha',
            lastName: 'mhatre',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 2,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    // Wednesday
    {
        subject: 'engineering mathematics-ii',
        startTime: '09:00',
        endTime: '10:00',
        roomNumber: 514,
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
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'engineering chemistry-ii',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 519,
        professor: {
            firstName: 'chandrakishori',
            lastName: 'sonarkar',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 3,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'engineering graphics',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 519,
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
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'engineering mathematics-ii',
        startTime: '12:15',
        endTime: '13:15',
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
        day: 3,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'basic workshop practice-ii',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 106,
        professor: {
            firstName: 'mugdha',
            lastName: 'salvi',
            cabinNumber: 100,
            department: {
                name: 'instrumentation',
                code: 'inst'
            }
        },
        day: 3,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'engineering graphics',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 104,
        professor: {
            firstName: 'vidya',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'instrumentation',
                code: 'inst'
            }
        },
        day: 3,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'c programming',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 212,
        professor: {
            firstName: 'sneha',
            lastName: 'mhatre',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 3,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    // Thursday
    {
        subject: 'engineering graphics',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 214,
        professor: {
            firstName: 'mugdha',
            lastName: 'salvi',
            cabinNumber: 100,
            department: {
                name: 'instrumentation',
                code: 'inst'
            }
        },
        day: 4,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'engineering chemistry-ii',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 213,
        professor: {
            firstName: 'chandrakishori',
            lastName: 'sonarkar',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 4,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'engineering physics-ii',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 212,
        professor: {
            firstName: 'kanchan',
            lastName: 'sarmalkar',
            cabinNumber: 100,
            department: {
                name: 'instrumentation',
                code: 'inst'
            }
        },
        day: 4,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'basic workshop practice-ii',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 211,
        professor: {
            firstName: 'pawar',
            lastName: 'sandeep',
            cabinNumber: 100,
            department: {
                name: 'instrumentation',
                code: 'inst'
            }
        },
        day: 4,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'D'
    },
    {
        subject: 'engineering graphics',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 519,
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
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'engineering mathematics-ii',
        startTime: '12:15',
        endTime: '13:15',
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
        day: 4,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'c programming',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 214,
        professor: {
            firstName: 'sneha',
            lastName: 'mhatre',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 4,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'basic workshop practice-ii',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 212,
        professor: {
            firstName: 'trupti',
            lastName: 'furia',
            cabinNumber: 100,
            department: {
                name: 'instrumentation',
                code: 'inst'
            }
        },
        day: 4,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'engineering graphics',
        startTime: '14:00',
        endTime: '16:00',
        roomNumber: 211,
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
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    // Friday
    {
        subject: 'engineering graphics',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 214,
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
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'A'
    },
    {
        subject: 'c programming',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 213,
        professor: {
            firstName: 'sneha',
            lastName: 'mhatre',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'B'
    },
    {
        subject: 'professional communication and ethics- i',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 212,
        professor: {
            firstName: 'kamini',
            lastName: 'more',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 5,
        isPractical: true,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        },
        batch: 'C'
    },
    {
        subject: 'engineering physics-ii',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 519,
        professor: {
            firstName: 'kanchan',
            lastName: 'sarmalkar',
            cabinNumber: 100,
            department: {
                name: 'instrumentation',
                code: 'inst'
            }
        },
        day: 5,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'c programming',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 519,
        professor: {
            firstName: 'sneha',
            lastName: 'mhatre',
            cabinNumber: 100,
            department: {
                name: 'computer',
                code: 'comp'
            }
        },
        day: 5,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'engineering chemistry-ii',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 519,
        professor: {
            firstName: 'chandrakishori',
            lastName: 'sonarkar',
            cabinNumber: 100,
            department: {
                name: 'applied science & humanities',
                code: 'ash'
            }
        },
        day: 5,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    },
    {
        subject: 'engineering mathematics-ii',
        startTime: '15:00',
        endTime: '16:00',
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
        day: 5,
        isPractical: false,
        year: 'FE',
        semester: 2,
        branch: {
            name: 'computer',
            code: 'comp'
        }
    }
];
