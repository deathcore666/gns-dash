export interface BarChartDataInterface {
  labels: string[];
  datasets: BarChartDataDataSetInterface[];

}

export interface BarChartDataDataSetInterface {
  label: string;
  data: [number];
  borderColor: string;
  backgroundColor: string;
}

export interface eDeclarationResponseDataUnit {
  name: string;
  count: string
}
export interface eDeclarationResponseDataInterface extends Array<eDeclarationResponseDataUnit>{}
