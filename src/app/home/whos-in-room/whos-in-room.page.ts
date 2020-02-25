import { Component, OnInit } from '@angular/core';

import roomNumbers from '../../data/roomNumbers.data';
import {CollegeScheduleService} from '../../shared-services/college-schedule.service';
import {LectureModel} from '../../models/lecture.model';

@Component({
  selector: 'app-whos-in-room',
  templateUrl: './whos-in-room.page.html',
  styleUrls: ['./whos-in-room.page.scss'],
})
export class WhosInRoomPage implements OnInit {

  rooms: number[] = roomNumbers;
  lectures: LectureModel[] = [];
  isLectureFound = false;
  isSearchbarFocus = false;
  currentRoomNumber = '';

  constructor(private scheduleService: CollegeScheduleService) {
    console.log('whoisroom module started');
  }

  ngOnInit() {}

  onIonSearchbarBlur(): void {
    setTimeout(() => this.isSearchbarFocus = false, 100);
  }

  onIonSearchbarFocus(): void {
    this.isSearchbarFocus = true;
    this.isLectureFound = false;
  }

  onIonSearchbarInput(event: any): void {
    const partialRoomNumber: string = event.target.value;
    this.rooms = roomNumbers.filter((item) => item.toString().startsWith(partialRoomNumber.toString()));

    // console.log(event.target.value);
    // console.log(typeof event);
  }

  // fired when user selects a valid room no. from the drop down list.
  // then it shows the card containing info on class at that room and at that particular time.
  onRoomNumberSelect(roomNumber: number): void {
    this.currentRoomNumber = roomNumber.toString();
    this.isLectureFound = true;
    this.lectures = this.scheduleService.getClassInfoByRoomNo(roomNumber);

    console.log(`current class in ${roomNumber}`, this.scheduleService.getClassInfoByRoomNo(roomNumber));
    // console.log(roomNumber);
    // console.log(this.scheduleService.getProfessorByName('sweety', 'rupani'));
  }

}
