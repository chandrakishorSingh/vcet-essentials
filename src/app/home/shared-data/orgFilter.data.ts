import {OrgFilterModel} from '../events/models/orgFilter.model';
import orgs from '../../data/orgs.data';

const orgFilter: OrgFilterModel[] = [
    { text: 'Dept. of ' + orgs.extc.name + ' Engg.', value: orgs.extc.code },
    { text: 'Dept. of ' + orgs.mech.name + ' Engg.', value: orgs.mech.code },
    { text: 'Dept. of ' + orgs.comp.name + ' Engg.', value: orgs.comp.code },
    { text: 'Dept. of ' + orgs.inft.name + ' Engg.', value: orgs.inft.code },
    { text: 'Dept. of ' + orgs.inst.name + ' Engg.', value: orgs.inst.code },
    { text: 'Dept. of ' + orgs.civil.name + ' Engg.', value: orgs.civil.code },

    { text: orgs.council.name + ' Committee', value: orgs.council.code},
    { text: orgs.csi.name + ' Committee', value: orgs.csi.code },
    { text: orgs.ecell.name + ' Committee', value: orgs.ecell.code },
    { text: orgs.magazine.name + ' Committee', value: orgs.magazine.code },
    { text: orgs.sports.name + ' Committee', value: orgs.sports.code },
    { text: orgs.udaan.name + ' Committee', value: orgs.udaan.code }
];

export default orgFilter;
