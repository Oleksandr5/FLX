function isInteger(value) {
  return (value ^ 0) === value;
}
isInteger(10);
isInteger(10.5);