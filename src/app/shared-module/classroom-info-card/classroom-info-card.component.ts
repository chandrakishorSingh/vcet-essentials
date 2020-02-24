import {Component, Input, OnInit} from '@angular/core';
import {LectureModel} from '../../../models/lecture.model';
import {WeekDay} from '@angular/common';

@Component({
  selector: 'app-classroom-info-card',
  templateUrl: './classroom-info-card.component.html',
  styleUrls: ['./classroom-info-card.component.scss'],
})
export class ClassroomInfoCardComponent implements OnInit {

  day: string;

  @Input() lecture: LectureModel;

  constructor() { }

  ngOnInit() {
    this.day = WeekDay[this.lecture.day];
  }

}
