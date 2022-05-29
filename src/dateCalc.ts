export function formDateCalc() {
  const date: Date = new Date();
  const minDate: string = new Date().toLocaleDateString().replace(/^(\d+).(\d+).(\d+)$/, '$3-$2-$1');
  
  const currentDay: number = date.getDate();
  const currentMonth: number = date.getMonth();

  const nextDay: number = currentDay + 1;
  const nextMonth: number = currentMonth + 2;

  const minDateIn: string = new Date(date.getFullYear(), date.getMonth(), nextDay).toLocaleDateString().replace(/^(\d+).(\d+).(\d+)$/, '$3-$2-$1');
  const minDateOut: string = new Date(date.getFullYear(), date.getMonth(), nextDay + 2).toLocaleDateString().replace(/^(\d+).(\d+).(\d+)$/, '$3-$2-$1');
  const lastDay: string = new Date(date.getFullYear(), nextMonth, 0).toLocaleDateString().replace(/^(\d+).(\d+).(\d+)$/, '$3-$2-$1');

  return [{minDate, minDateOut, minDateIn, lastDay}]
}