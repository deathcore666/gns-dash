import axios, {AxiosResponse} from 'axios';

import {
  BarChartDataInterface,
  eDeclarationResponseDataInterface
} from "../shared/interfaces/barChartDataInterface";

//api/Edeclaration
export function fetchEDeclarationData(): Promise<BarChartDataInterface> {
  //todo create interfaces for api responses, replace <any> nahui
  return new Promise<BarChartDataInterface>(async (resolve, reject) => {
        try {
          const result: AxiosResponse<eDeclarationResponseDataInterface> = await axios.get('http://10.111.13.50:4554/api/Edeclaration')
          debugger
          resolve(formatData(result.data));
        } catch (err: any) {
          debugger
          reject(err.message ? err.message : err);
        }
      }
  );
}

const formatData = (data: eDeclarationResponseDataInterface): BarChartDataInterface => {
  const result = data.map((obj) => {

  });
  return {
    labels: ['N/A'],
    datasets: [{
      label: 'labe',
      data: [1],
      borderColor: 'rgb(1,2,3)c',
      backgroundColor: 'rgb(1,2,3)'
    }]
  };
  // return result;
}
