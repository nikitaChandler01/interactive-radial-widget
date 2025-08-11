export const getHash = (str: string) => {
  const prime = 31n;
  let hash = BigInt(0);
  for (let i = 0; i < str.length; i++) {
    const charCode = BigInt(str.charCodeAt(i));
    hash = hash * prime + charCode;
  }
  return hash.toString();
};
