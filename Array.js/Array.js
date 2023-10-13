class CodersArray {
  array;
  length;

  constructor(...data) {
    this.length = data.length;
    this.array = data;
  }

  push(number) {
    this.array[this.array.length] = number;
    this.length = this.array.length;

    return this.length;
  }

  map(functionName) {
    const mappedArray = new CodersArray();

    for (let position = 0; position < this.array.length; position++) {
      const modifiedNumber = functionName(this.array[position]);

      mappedArray.push(modifiedNumber);
    }

    return mappedArray.array;
  }

  filter(functionName) {
    const filteredArray = new CodersArray();

    for (let number = 0; number < this.array.length; number++) {
      if (functionName(this.array[number])) {
        filteredArray.push(this.array[number]);
      }
    }

    return filteredArray.array;
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

export default CodersArray;
