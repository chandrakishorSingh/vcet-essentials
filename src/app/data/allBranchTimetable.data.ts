import {LectureModel} from '../models/lecture.model';

// first year timetable imports
import { timetable as t1 } from './first-year-timetable/civil.fe.timetable.data';
import { timetable as t2 } from './first-year-timetable/comp.fe.timetable.data';
import { timetable as t3 } from './first-year-timetable/extc.fe.timetable.data';
import { timetable as t4 } from './first-year-timetable/inft.fe.timetable.data';
import { timetable as t5 } from './first-year-timetable/inst.fe.timetable.data';
import { timetable as t6 } from './first-year-timetable/mech.fe.timetable.data';
// second year timetable imports
import { timetable as t7 } from './second-year-timetable/civil.se.timetable.data';
import { timetable as t8 } from './second-year-timetable/comp.se.timetable.data';
import { timetable as t9 } from './second-year-timetable/extc.se.timetable.data';
import { timetable as t10 } from './second-year-timetable/inft.se.timetable.data';
import { timetable as t11 } from './second-year-timetable/inst.se.timetable.data';
import { timetable as t12 } from './second-year-timetable/mech.se.timetable.data';
// third year timetable imports
import { timetable as t13 } from './third-year-timetable/civil.te.timetable.data';
import { timetable as t14 } from './third-year-timetable/comp.te.timetable.data';
import { timetable as t15 } from './third-year-timetable/extc.te.timetable.data';
import { timetable as t16 } from './third-year-timetable/inft.te.timetable.data';
import { timetable as t17 } from './third-year-timetable/inst.te.timetable.data';
import { timetable as t18 } from './third-year-timetable/mech.te.timetable.data';
// fourth year timetable imports
import { timetable as t19 } from './fourth-year-timetable/mech.be.timetable.data';
import { timetable as t20 } from './fourth-year-timetable/civil.be.timetable.data';
import { timetable as t21 } from './fourth-year-timetable/comp.be.timetable.data';
import { timetable as t22 } from './fourth-year-timetable/extc.be.timetable.data';
import { timetable as t23 } from './fourth-year-timetable/inft.be.timetable.data';
import { timetable as t24 } from './fourth-year-timetable/inst.be.timetable.data';

export const allBranchTimeTable: LectureModel[] = [
    ...t1,
    ...t2,
    ...t3,
    ...t4,
    ...t5,
    ...t6,
    ...t7,
    ...t8,
    ...t9,
    ...t10,
    ...t11,
    ...t12,
    ...t13,
    ...t14,
    ...t15,
    ...t16,
    ...t17,
    ...t18,
    ...t19,
    ...t20,
    ...t21,
    ...t22,
    ...t23,
    ...t24,
];
