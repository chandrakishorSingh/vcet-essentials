import {LectureModel} from '../../models/lecture.model';

export const timetable: LectureModel[] = [
    // Monday
    {
        subject: 'mini-project',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 314,
        professor: {
            firstName: 'ashish',
            lastName: 'vanmali',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'cloud computing & services',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 417,
        professor: {
            firstName: 'chandan',
            lastName: 'kolvankar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'data mining and business intelligence',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 417,
        professor: {
            firstName: 'anagha',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'digital forensics',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 417,
        professor: {
            firstName: 'bharati',
            lastName: 'gondhalekar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'digital forensics',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 417,
        professor: {
            firstName: 'bharati',
            lastName: 'gondhalekar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 1,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'software engineering with project management',
        startTime: '16:00',
        endTime: '17:00',
        roomNumber: 417,
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
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    // Tuesday
    {
        subject: 'software engineering with project management',
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
        day: 2,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'cloud computing & services',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 416,
        professor: {
            firstName: 'chandan',
            lastName: 'kolvankar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 2,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'cloud service design lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 529,
        professor: {
            firstName: 'chandan',
            lastName: 'kolvankar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 2,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'A'
    },
    {
        subject: 'software design lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 528,
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
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'B'
    },
    {
        subject: 'business intelligence lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 527,
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
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'C'
    },
    {
        subject: 'sensor network lab',
        startTime: '11:15',
        endTime: '13:15',
        roomNumber: 526,
        professor: {
            firstName: 'bharati',
            lastName: 'gondhalekar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 2,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'D'
    },
    {
        subject: 'data mining and business intelligence',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 417,
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
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'data mining and business intelligence',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 417,
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
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    // Wednesday
    {
        subject: 'mini-project',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 529,
        professor: {
            firstName: 'ashish',
            lastName: 'vanmali',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'digital forensics',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 417,
        professor: {
            firstName: 'bharati',
            lastName: 'gondhalekar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'digital forensics',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 417,
        professor: {
            firstName: 'bharati',
            lastName: 'gondhalekar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'data mining and business intelligence',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 417,
        professor: {
            firstName: 'anagha',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 3,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'software engineering with project management',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 417,
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
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    // Thursday
    {
        subject: 'software engineering with project management',
        startTime: '10:00',
        endTime: '11:00',
        roomNumber: 417,
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
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'wireless networks',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 417,
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
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'wireless networks',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 417,
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
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'cloud computing & services',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 417,
        professor: {
            firstName: 'chandan',
            lastName: 'kolvankar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 4,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'sensor network lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 529,
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
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'A'
    },
    {
        subject: 'cloud service design lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 528,
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
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'B'
    },
    {
        subject: 'software design lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 527,
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
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'C'
    },
    {
        subject: 'business intelligence lab',
        startTime: '15:00',
        endTime: '17:00',
        roomNumber: 525,
        professor: {
            firstName: 'anagha',
            lastName: 'patil',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 4,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'D'
    },
    // Friday
    {
        subject: 'business intelligence lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 529,
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
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'A'
    },
    {
        subject: 'sensor network lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 528,
        professor: {
            firstName: 'bharati',
            lastName: 'gondhalekar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'B'
    },
    {
        subject: 'cloud service design lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 527,
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
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'C'
    },
    {
        subject: 'software design lab',
        startTime: '09:00',
        endTime: '11:00',
        roomNumber: 526,
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
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'D'
    },
    {
        subject: 'wireless networks',
        startTime: '11:15',
        endTime: '12:15',
        roomNumber: 417,
        professor: {
            firstName: 'bharati',
            lastName: 'gondhalekar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'wireless networks',
        startTime: '12:15',
        endTime: '13:15',
        roomNumber: 417,
        professor: {
            firstName: 'bharati',
            lastName: 'gondhalekar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'cloud computing & services',
        startTime: '14:00',
        endTime: '15:00',
        roomNumber: 417,
        professor: {
            firstName: 'chandan',
            lastName: 'kolvankar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: false,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        }
    },
    {
        subject: 'software design lab',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 529,
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
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'A'
    },
    {
        subject: 'business intelligence lab',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 528,
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
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'B'
    },
    {
        subject: 'sensor network lab',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 527,
        professor: {
            firstName: 'bharati',
            lastName: 'gondhalekar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'C'
    },
    {
        subject: 'cloud service design lab',
        startTime: '15:00',
        endTime: '16:00',
        roomNumber: 526,
        professor: {
            firstName: 'chandan',
            lastName: 'kolvankar',
            cabinNumber: 100,
            department: {
                name: 'information technology',
                code: 'inft'
            }
        },
        day: 5,
        isPractical: true,
        year: 'TE',
        semester: 6,
        branch: {
            name: 'information technology',
            code: 'inft'
        },
        batch: 'D'
    }
];

