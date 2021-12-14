import axios from "axios";

export function fetchVerticalChartData() {
    return new Promise<{ data: any }>((resolve, reject) => {
        try {
            const res = axios.get('http://10.111.13.50:4554/api/KKM');
            resolve(res)
        } catch(err: any) {
            reject(err.message ? err.message : err);
        }
    });
  }
  