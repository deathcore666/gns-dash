export interface DataCardInterface {
  budgetType: string;
  factVal: number;
  forecastVal: number;
  fulfillmentPercentage: number;
}


export interface GetTotalCheckSumKKM {
  count: number;
  sum: number;
} 

export interface GetRegisterKKM {
  count: number;
} 

export interface LastChecksInfo {
  checkNumber: string;
  dateCreated: Date;
  totalSum: number;
  kkmName: string;
  kkmSerialNumber: string;
  salesPointFactAddress: string;
  salesPointName: string;
}

export interface CheckInfo {
  data?: LastChecksInfo
} 

export interface LastChecksInfoFace extends Array<LastChecksInfo>{}
