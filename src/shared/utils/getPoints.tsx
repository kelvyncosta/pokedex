export const getPoints = (seconds: number): number => {
  if (seconds <= 3) {
    return 20;
  }

  if (seconds <= 5) {
    return 15;
  }

  if (seconds <= 10) {
    return 10;
  }

  if (seconds <= 15) {
    return 5;
  }

  if (seconds <= 20) {
    return 3;
  }

  if (seconds <= 30) {
    return 2;
  }

  return 1;
};
