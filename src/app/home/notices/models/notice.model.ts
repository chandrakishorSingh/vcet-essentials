import {OrgModel} from '../../shared-models/org.model';

export class NoticeModel {
    constructor(public title: string,
                public startDate: string,
                public endDate: string,
                public org: OrgModel,
                public pdfURL: string) {}
}
