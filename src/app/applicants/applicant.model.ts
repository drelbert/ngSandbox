export class Applicant {
  public name: string;
  public uniqueId: string;
  public income: string;
  public assets: string;
  public accounts: string;

  constructor(name: string, uniqueId: string, income: string, assets: string, accounts: string) {
    this.name = name;
    this.uniqueId = uniqueId;
    this.income = income;
    this.assets = assets;
    this.accounts = accounts;
  }
}
