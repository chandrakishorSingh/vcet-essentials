import {OrgModel} from './org.model';

export class EventModel {
    constructor(public description: string,
                public startDate: string,
                public endDate: string,
                public startTime: string,
                public endTime: string,
                public imgURL: string,
                public pdfURL: string,
                public org: OrgModel,
                public title: string,
                public venue: string,
                public socialMedia?: { url: string, platform: string }[]) {}
}