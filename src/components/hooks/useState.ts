const useState = (initialValue) => {
  let value = initialValue;
  const subscribers = new Set<Function>();

  const setState = (newValue) => {
    value = newValue;
    subscribers.forEach((callback) => callback());
  };

  const subscribe = (callback) => {
    subscribers.add(callback);
    return () => {
      subscribers.delete(callback);
    };
  };

  return [value, setState, subscribe];
};
export default useState;
