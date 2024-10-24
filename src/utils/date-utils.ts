export const getMonthOptions = () => {
  return [
    { value: 0, label: 'January' },
    { value: 1, label: 'February' },
    { value: 2, label: 'March' },
    { value: 3, label: 'April' },
    { value: 4, label: 'May' },
    { value: 5, label: 'June' },
    { value: 6, label: 'July' },
    { value: 7, label: 'August' },
    { value: 8, label: 'September' },
    { value: 9, label: 'October' },
    { value: 10, label: 'November' },
    { value: 11, label: 'December' },
  ];
};

export const getDayOptions = (month: number, year: number) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => ({
    value: i + 1,
    label: (i + 1).toString(),
  }));
};

export const getYearOptions = (startYear: number, endYear: number) => {
  return Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    return { value: year, label: year.toString() };
  });
};
