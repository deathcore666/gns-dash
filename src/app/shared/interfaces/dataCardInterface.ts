export interface DataCardInterface {
  budgetType: string;
  factVal: number;
  forecastVal: number;
  fulfillmentPercentage: number;
}


export interface EdeclarationDto {
  name: string;
  count: string;
}


export interface GetDeclarationTinCount {

  sumTinCount: number,
  receiveYear: number,
  codeDeclarationStatusID: number,
  declStatusText: string
}

export interface GetDeclarationInfo {
  data?: GetDeclarationTinCount
} 

export interface GetDeclarationTinCountInterface extends Array<GetDeclarationTinCount>{}