import {OrgModel} from './org.model';
import {ORG_CODE, ORG_NAME} from '../types/types';

export interface OrgsMappingModel {
    orgs: OrgModel[];
    getOrgByCode(code: ORG_CODE): OrgModel;
    getOrgByName(name: ORG_NAME): OrgModel;
    getOrgs(): OrgModel[];
}
