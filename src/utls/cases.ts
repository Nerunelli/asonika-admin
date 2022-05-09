const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const convertToCamel = (str: string): string => {
  const splittedKey = str.split('_').filter(Boolean);
  return [splittedKey[0], ...splittedKey.slice(1).map(capitalize)].join('');
};

const isSnakeCase = (str: string): boolean => {
  return str.indexOf('_') !== -1;
};

export const snakeToCamel = <T>(obj: Record<string, unknown>): T => {
  return Object.keys(obj).reduce((acc, cur) => {
    if (isSnakeCase(cur)) {
      return { ...acc, [convertToCamel(cur)]: obj[cur] };
    }
    return { ...acc, [cur]: obj[cur] };
  }, {}) as T;
};

const isCamelCase = (str: string): boolean => {
  return str.toLowerCase() !== str;
};

const convertToSnake = (str: string): string => {
  return str
    .split('')
    .map(letter => (isCamelCase(letter) ? `_${letter.toLowerCase()}` : letter))
    .join('');
};

export const camelToSnake = <T>(obj: Record<string, unknown>): T => {
  return Object.keys(obj).reduce((acc, cur) => {
    if (isCamelCase(cur)) {
      return { ...acc, [convertToSnake(cur)]: obj[cur] };
    }
    return { ...acc, [cur]: obj[cur] };
  }, {}) as T;
};
