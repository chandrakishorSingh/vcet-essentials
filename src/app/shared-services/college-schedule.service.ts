import { Injectable } from '@angular/core';
import {LectureModel, YEAR} from '../models/lecture.model';

import allBranchTimeTable from '../data/allBranchTimetable.data';
import {ProfessorModel} from '../models/professor.model';
import {BranchCode} from '../auth/models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class CollegeScheduleService {

  private collegeSchedule: LectureModel[] = [...allBranchTimeTable];
  private dummyLecture: LectureModel = {
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
    year: 'BE'
  };
  private dummyProfessor: ProfessorModel = {
    firstName: 'sweety',
    lastName: 'rupani',
    cabinNumber: 212,
    department: {
      code: 'comp',
      name: 'computer'
    }
  };

  constructor() { }

  /**
   * returns the lectures that are currently going in a particular room.
   * it will be a single lecture most of the time. but could be 2 or more lecture in case of practical labs.
   * a single practical lab can have more than one practical session at the same time.
   */
  public getClassInfoByRoomNo(roomNumber: number): LectureModel[] {
    // dummy response for testing
    return [this.dummyLecture];

    return this.collegeSchedule.filter((lecture) => {
      return (lecture.roomNumber === roomNumber) && this.isBetween(lecture);
    });
  }

  // returns the lecture in which the professor is currently teaching. if professor is free at the moment then it returns undefined.
  public getProfessorLocationByName(firstName: string, lastName: string): LectureModel {
    // dummy response for testing
    return Math.random() > 0.5 ? {...this.dummyLecture} : undefined;

    return this.collegeSchedule.find(lecture => {
      return (lecture.professor.firstName === firstName) && (lecture.professor.lastName === lastName) && (this.isBetween(lecture));
    });
  }

  // returns the professor info by his name.
  public getProfessorByName(firstName: string, lastName: string): ProfessorModel {
    return this.collegeSchedule
        .find(item => item.professor.firstName === firstName && item.professor.lastName === lastName)
        .professor;
  }

  getTimetable(year: YEAR, branch: BranchCode): LectureModel[] {
    return this.collegeSchedule
        .filter(lecture => lecture.year === year && lecture.branch.code === branch)
        .sort((lec1, lec2) => {
          const start1 = parseInt(lec1.startTime.split(':')[0], 10);
          const start2 = parseInt(lec2.startTime.split(':')[0], 10);
          if (start1 > start2) {
            return 1;
          } else if(start1 < start2) {
            return -1;
          }
          return 0;
        });
  }

  // finds whether the gievn lecture is currently running or not.
  private isBetween(lecture: LectureModel): boolean {
    const currentHours: string = new Date().toString().split(' ')[4].split(':')[0];
    const currentMinutes: string = new Date().toString().split(' ')[4].split(':')[1];
    const currentDay: number = new Date().getDay();

    const isBetween: boolean =
        (parseInt([currentHours, currentMinutes].join(''), 10) >= parseInt(lecture.startTime.replace(':', ''), 10)) &&
        (parseInt([currentHours, currentMinutes].join(''), 10) <= parseInt(lecture.endTime.replace(':', ''), 10));

    return (isBetween) && (lecture.day === currentDay);
  }
}

