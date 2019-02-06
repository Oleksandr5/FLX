function isInteger(value) {
  return (value ^ 0) === value;
}
isInteger(10);