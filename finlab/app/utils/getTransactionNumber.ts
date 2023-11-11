function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getTransactionNumber(): string {
  const rand = getRandomInt(3000000, 3999999);
  return `FL-${rand}`;
}
