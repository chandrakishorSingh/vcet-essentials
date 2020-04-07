import { Component, OnInit } from '@angular/core';

import { BranchModel } from '../../models/branch.model';
import branches from '../../data/branch.data';
import { LectureModel } from '../../models/lecture.model';
import { FormControl, NgForm } from '@angular/forms';
import { CollegeScheduleService } from '../../shared-services/college-schedule.service';
import {BRANCH_CODE, YEAR} from '../../types/types';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss']
})
export class TimetablePage implements OnInit {
  branches: BranchModel[] = branches;
  years: YEAR[] = ['FE', 'SE', 'TE', 'BE'];
  lectures: LectureModel[] = [];
  isUserSelecting = false;

  ngOnInit() {}

  constructor(private scheduleService: CollegeScheduleService) {
    console.log('timetable module started');
  }

  onSubmit(form: NgForm): void {
    const year: YEAR = form.controls.yearControl.value;
    const branch: BRANCH_CODE = form.controls.branchControl.value;
    this.isUserSelecting = false;
    this.lectures = this.scheduleService.getTimetable(year, branch);
    console.log(this.lectures);
  }

  onInputFocus(): void {
    this.isUserSelecting = true;
  }
}
