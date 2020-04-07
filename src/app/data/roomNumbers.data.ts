import {allBranchTimeTable} from './allBranchTimetable.data';

export const roomNumbers: number[] = Array.from(new Set(
    allBranchTimeTable.map(lecture => lecture.roomNumber)
        .sort((a, b) => a > b ? 1 : -1)
));
