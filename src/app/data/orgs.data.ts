import {OrgModel} from '../models/org.model';
import {ORG_CODE, ORG_NAME} from '../types/types';
import {OrgsMappingModel} from '../models/orgsMapping.model';

export const orgsMapping: OrgsMappingModel = {
    orgs: [
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
    ],
    getOrgByCode: (code: ORG_CODE): OrgModel => {
        return orgsMapping.orgs.find(org => org.code === code);
    },
    getOrgByName: (name: ORG_NAME): OrgModel => {
        return orgsMapping.orgs.find(org => org.name === name);
    },
    getOrgs: (): OrgModel[] => {
        return [...orgsMapping.orgs];
    }
};
