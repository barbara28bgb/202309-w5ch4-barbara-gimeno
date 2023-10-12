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
    let mappedArray = [];
    for (let number = 0; number < this.array.length; number++) {
      mappedArray = [...mappedArray, functionName(this.array[number])];
    }

    return mappedArray;
  }

  filter(functionName) {
    let filteredArray = [];

    for (let number = 0; number < this.array.length; number++) {
      if (functionName(this.array[number])) {
        filteredArray = [...filteredArray, this.array[number]];
      }
    }

    return filteredArray;
  }

  find(functionName) {
    for (let number = 0; number < this.array.length; number++) {
      if (functionName(this.array[number])) {
        return this.array[number];
      }
    }

    return undefined;
  }

  some(functionName) {
    for (let number = 0; number < this.array.length; number++) {
      if (functionName(this.array[number])) {
        return true;
      }
    }

    return false;
  }
}

export default Array;
