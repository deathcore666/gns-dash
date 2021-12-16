export function fetchLineChartData() {
  return new Promise<{ data: any }>((resolve) =>
      setTimeout(() => resolve(
          { data: {
            P: [ {date: 1990, value: 2} , {date: 1992, value: 1}, {date: 1994, value: 4}, {date: 1996, value: 5}],
            L: [ {date: 1994, value: 4} , {date: 1993, value: 2}, {date: 1991, value: 7}, {date: 1997, value: 5}]
          } }
      ), 500)
  );
}
