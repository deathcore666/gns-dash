// import axios from 'axios';

export function fetchBarCharData() {
  //todo create interfaces for api responses, replace <any> nahui
  return new Promise<{ data: any }>(async (resolve, reject) => {
        try {
          // const response = await axios({
          //   method: 'GET',
          //   url: 'http://10.111.13.50:4554/api/Edeclaration',
          //   headers: {
          //     'Access-Control-Allow-Origin': '*',
          //     'Content-Type': 'text/json',
          //     'Access-Control-Allow-Methods':'*',
          //   }
          // });
          // const response = await axios.get('https://httpbin.org/get', {
          //   headers: {
          //     'Access-Control-Allow-Origin': '*',
          //     'Content-Type': 'text/json',
          //     'Access-Control-Allow-Methods':'*',
          //   }
          // });
          setTimeout(() => resolve({
            data: [
              {
                'name': 'Справки о налоговой регистрации для открытия счета в банке',
                'count': '10088'
              },
              {
                'name': 'Справки о налоговой регистрации для целей импорта товаров из государств-членов ЕАЭС',
                'count': '7307'
              },
              {
                'name': 'Справки о налоговой регистрации для перерегистрации в органах юстиции',
                'count': '73'
              }
            ]
          }), 500)
        } catch (err: any) {
          debugger
          reject(err.message ? err.message : err);
        }
      }
  );
}
