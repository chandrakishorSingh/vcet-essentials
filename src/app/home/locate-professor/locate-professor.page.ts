import { Component, OnInit } from '@angular/core';

import {ProfessorModel} from '../../models/professor.model';
import {LectureModel} from '../../models/lecture.model';

import professors from '../../data/professors.data';
import {CollegeScheduleService} from '../../shared-services/college-schedule.service';

@Component({
  selector: 'app-locate-professor',
  templateUrl: './locate-professor.page.html',
  styleUrls: ['./locate-professor.page.scss'],
})
export class LocateProfessorPage implements OnInit {

  professors: ProfessorModel[] = professors;
  currentLecture: LectureModel;
  selectedProfessor: ProfessorModel;
  isSearchbarFocus = false;
  currentProfessorName = '';

  constructor(private scheduleService: CollegeScheduleService) {
    console.log('locate professor module started');
  }

  ngOnInit() {
  }

  // 500ms gives enough time to select professor from list before the list disappears.
  onIonSearchbarBlur(): void {
    setTimeout(() => this.isSearchbarFocus = false, 100);
  }

  onIonSearchbarFocus(): void {
    this.isSearchbarFocus = true;
    this.currentLecture = null;
    this.selectedProfessor = null;
  }

  onIonSearchbarInput(event: any): void {
    const professorName = event.target.value.toLowerCase();
    this.professors = professors.filter(professor => (professor.firstName + professor.lastName).startsWith(professorName));
  }

  // display selected professor name in search bar.
  // find the current lecture of prof. and display it. if prof. is free then display his cabin no.
  onProfessorSelect(professor: ProfessorModel): void {
    this.currentProfessorName = this.toTitleCase('Prof. ' + professor.firstName + ' ' + professor.lastName);
    this.currentLecture = this.scheduleService.getProfessorLocationByName(professor.firstName, professor.lastName);
    if (!this.currentLecture) {
      this.selectedProfessor = this.scheduleService.getProfessorByName(professor.firstName, professor.lastName);
    }
  }

  toTitleCase(str: string): string {
    return str.split(/\s+/).reduce((a, b) => a + b[0].toUpperCase() + b.slice(1) + ' ', '');
  }

}
