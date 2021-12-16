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
          resolve(formatData(result.data));
        } catch (err: any) {
          reject(err.message ? err.message : err);
        }
      }
  );
}

const formatData = (data: eDeclarationResponseDataInterface): BarChartDataInterface => {
  const result = data.map((item) =>  {
    const data: [number] = [Number(item.count)]
    return {
      label: item.name,
      data: data,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)'
  }});
  return {
    labels: ['Количество выданных справок в разрезе типов справок'],
    datasets: result
  };
}


