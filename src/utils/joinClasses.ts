export const joinClasses = (...classes: string[]) => {
  return classes.filter((cls) => !!cls).join(" ");
};
