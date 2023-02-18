export const checkLength = (
  value: string | number,
  min: number,
  max: number
) => {
  return (
    String(value).trim().length >= min && String(value).trim().length <= max
  );
};

export const allFalse = (obj: any) => {
  return Object.values(obj).every((value: any) => value === false);
};
