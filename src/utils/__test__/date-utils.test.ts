import { formatShortDate, getDayOptions, getMonthOptions, getYearOptions } from '../date-utils';

describe('getDayOptions', () => {
  it('returns correct days for January (31 days)', () => {
    const result = getDayOptions(0, 2024);

    expect(result).toHaveLength(31);
    expect(result[0]).toEqual({ value: 1, label: '1' });
    expect(result[30]).toEqual({ value: 31, label: '31' });
  });

  it('returns correct days for April (30 days)', () => {
    const result = getDayOptions(3, 2024);

    expect(result).toHaveLength(30);
    expect(result[0]).toEqual({ value: 1, label: '1' });
    expect(result[29]).toEqual({ value: 30, label: '30' });
  });

  it('returns 28 days for February in a common year', () => {
    const result = getDayOptions(1, 2023);
    expect(result).toHaveLength(28);
    expect(result[0]).toEqual({ value: 1, label: '1' });
    expect(result[27]).toEqual({ value: 28, label: '28' });
  });

  it('returns 29 days for February in a leap year', () => {
    const result = getDayOptions(1, 2024);
    expect(result).toHaveLength(29);
    expect(result[0]).toEqual({ value: 1, label: '1' });
    expect(result[28]).toEqual({ value: 29, label: '29' });
  });
});

describe('formatShortDate', () => {
  it('formats date correctly for 1st January', () => {
    const timestamp = new Date('2024-01-01').getTime();
    expect(formatShortDate(timestamp)).toBe('1 Jan');
  });

  it('formats date correctly for 15th July', () => {
    const timestamp = new Date('2024-07-15').getTime();
    expect(formatShortDate(timestamp)).toBe('15 Jul');
  });

  it('formats date correctly for a leap year date in February', () => {
    const timestamp = new Date('2024-02-29').getTime();
    expect(formatShortDate(timestamp)).toBe('29 Feb');
  });
});

describe('getMonthOptions', () => {
  it('returns an array of 12 months', () => {
    const months = getMonthOptions();
    expect(months).toHaveLength(12);
  });

  it('returns correct month labels and values', () => {
    const months = getMonthOptions();
    expect(months[0]).toEqual({ value: 0, label: 'January' });
    expect(months[1]).toEqual({ value: 1, label: 'February' });
    expect(months[11]).toEqual({ value: 11, label: 'December' });
  });
});

describe('getYearOptions', () => {
  it('returns an array of years within the specified range', () => {
    const startYear = 2020;
    const endYear = 2023;
    const years = getYearOptions(startYear, endYear);
    expect(years).toHaveLength(4);
    expect(years).toEqual([
      { value: 2020, label: '2020' },
      { value: 2021, label: '2021' },
      { value: 2022, label: '2022' },
      { value: 2023, label: '2023' },
    ]);
  });

  it('returns an empty array if startYear is greater than endYear', () => {
    const years = getYearOptions(2023, 2020);
    expect(years).toHaveLength(0);
  });

  it('returns a single year if startYear equals endYear', () => {
    const years = getYearOptions(2021, 2021);
    expect(years).toEqual([{ value: 2021, label: '2021' }]);
  });
});
