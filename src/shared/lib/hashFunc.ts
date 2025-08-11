export const getHash = (str: string) => {
  const prime = 31n;
  const seed = Math.floor(Math.random() * 1000);
  let hash = BigInt(seed);
  for (let i = 0; i < str.length; i++) {
    const charCode = BigInt(str.charCodeAt(i));
    hash = hash * prime + charCode;
  }
  return hash.toString();
};
