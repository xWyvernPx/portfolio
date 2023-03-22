// type ReactiveFn<T extends> = (state: T) => [get: () => T, set: (value: T) => void];
export const reactive = function <T extends Object>(
  callback: () => void,
  state: T
) {
  return new Proxy<T>(state, {
    get: (...args) => {
      return Reflect.get(...args); //
    },
    set(...args) {
      callback();
      console.log("Value changed");
      return Reflect.set(...args); //
    },
  });
};
// Object.defineProperty();
