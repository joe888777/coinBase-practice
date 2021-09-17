export const timeTrans = (timestamp) => {
  const date = new Date(parseInt(timestamp) * 1000);
  const year = date.getFullYear();
  const getCurrentMonth = () => {
    const themonth = date.getMonth() + 1;
    return themonth < 10 ? `0${themonth}` : themonth;
  };
  const getCurrentDay = () => {
    const theday = date.getDate();
    return theday < 10 ? `0${theday}` : theday;
  };
  const month = getCurrentMonth();
  const day = getCurrentDay();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const Minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const res = `${year}-${month}-${day} ${hour}:${Minute}`;
  return `${year}-${month}-${day} ${hour}:${Minute}`;
};
