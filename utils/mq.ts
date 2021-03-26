import { theme } from "./theme";

const { breakpoints: bp } = theme

type breakpointTypes = keyof typeof bp

export const mq = (n: breakpointTypes) => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
