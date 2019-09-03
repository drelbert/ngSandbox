export class StateService {
  // stateLicData is an array and thus a reference type.
  stateLicData =
  [
    {
     stateAgency : 'Alabama',
     newApplications: 12,
     approved : 17,
     denied : 0,
     withdrawn : 1,
     revoked : 1,
     surrendered : 17,
     termianted : 0
    },
    {
     stateAgency: 'California DRE',
     newApplications: 212,
     approved : 150,
     denied : 1,
     withdrawn : 34,
     revoked : 0,
     surrendered : 0,
     termianted : 44
    },
    {
     stateAgency : 'Colorado',
     newApplications: 55,
     approved : 53,
     denied : 0,
     withdrawn : 2,
     revoked : 0,
     surrendered : 8,
     termianted : 0
    },
    {
     stateAgency : 'Florida',
     newApplications: 142,
     approved : 136,
     denied : 2,
     withdrawn : 20,
     revoked : 0,
     surrendered : 30,
     termianted : 1
    },
    {
     stateAgency : 'Nevada',
     newApplications: 34,
     approved : 32,
     denied : 0,
     withdrawn : 15,
     revoked : 0,
     surrendered : 10,
     termianted : 0
    }

  ];
  // Adding insert state method.
  addStateLicData(
    stateAgency: string,
    newApplications: number,
    approved: number,
    denied: number,
    withdrawn: number,
    revoked: number,
    surrendered: number,
    termianted: number
  ) {
    this.stateLicData.push({stateAgency, newApplications, approved, denied, withdrawn, revoked, surrendered, termianted});
  }
}
