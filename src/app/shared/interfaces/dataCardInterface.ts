export interface DataCardInterface {
  budgetType: string;
  factVal: number;
  forecastVal: number;
  fulfillmentPercentage: number;
}

export interface GetInvoiceCountWithSumEsf {
  count: number;
  sum: number;
} 

export interface GetESFRegistrationByMonth {
  count: number;
  date: Date;
} 

export interface RegistrationByMonth {
  dataAll?: GetESFRegistrationByMonth
} 

export interface GetESFRegistrationByMonthFace extends Array<GetESFRegistrationByMonth>{}

export interface TopTenForLastMonthEsf {
 
  invoiceNum: number;
  totalAmount: number;
  invoiceDate: Date;
}

export interface TopTenInfo {
  data?: TopTenForLastMonthEsf
} 

export interface TopTenForLastMonthEsfInterface extends Array<TopTenForLastMonthEsf>{}