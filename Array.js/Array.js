class Array {
  array;
  length;

  constructor(...data) {
    this.length = data.length;
    this.array = data;
  }

  push(number) {
    return [...this.array, number];
  }

  map(functionName) {
    for (let number = 0; number < this.array.length; number++) {
      return functionName(this.array[number]);
    }
  }

  filter(functionName) {
    for (let number = 0; number < this.array.length; number++) {
      if (functionName(this.array[number])) {
        console.log(this.array[number]);
      }
    }
  }
}

export default Array;
