import {OrgModel} from '../models/org.model';

const orgs: OrgModel[] = [
    { name: 'civil', code: 'civil', type: 'department' },
    { name: 'electronics & telecommunications', code: 'extc', type: 'department' },
    { name: 'mechanical', code: 'mech', type: 'department' },
    { name: 'computer', code: 'comp', type: 'department' },
    { name: 'information technology', code: 'inft', type: 'department' },
    { name: 'instrumentation', code: 'inst', type: 'department' },
    { name: 'applied science & humanities', code: 'ash', type: 'department' },
    { name: 'exam section', code: 'exam', type: 'department' },
    { name: 'office', code: 'office', type: 'department' },

    { name: 'udaan', code: 'udaan', type: 'committee' },
    { name: 'student council', code: 'council', type: 'committee' },
    { name: 'magazine', code: 'magazine', type: 'committee' },
    { name: 'computer society of india', code: 'csi', type: 'committee' },
    { name: 'e cell', code: 'ecell', type: 'committee' },
    { name: 'sports', code: 'sports', type: 'committee' }
];

export default orgs;
