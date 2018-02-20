export const times = (x) => (fn) => {
  if (x > 0) {
    fn();
    times(x - 1) (fn);
  }
}
