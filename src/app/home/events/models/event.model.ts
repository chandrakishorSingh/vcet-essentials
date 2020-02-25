import {OrgModel} from '../../shared-models/org.model';

export class EventModel {
    constructor(public description: string,
                public startDate: string,
                public endDate: string,
                public startTime: string,
                public endTime: string,
                public posterURL: string,
                public org: OrgModel,
                public title: string,
                public venue: string,
                public createdAt: string,
                public refPath: string,
                public socialMedia?: { url: string, platform: string }[],
                public pdfURL?: string) {}
}