class Sorter {
  constructor() {
    this.array = [];// your implementation
    this.comparator;
  }

  add(element) {
    this.array.push(element);// youеr implementation
  }

  at(index) {
    return this.array[index];// your implementation
  }

  get length() {
    return this.array.length;// your implementation
  }

  toArray() {
    return this.array.slice();// your implementation
  }

  sort(indices) {
    let tempArray = [];// your implementation
    indices.sort(( a, b ) =>  a - b);

    for(let i = 0; i < indices.length; i++) {
      tempArray.push(this.array[indices[i]]);
    }

    if(typeof this.comparator == 'undefined') {
      tempArray.sort(( a, b ) =>  a - b);
    } else {
      tempArray.sort(this.comparator);
    }
    
    for(let i = 0; i < tempArray.length; i++) {
      this.array[indices[i]] = tempArray[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;// your implementation
  }
}

module.exports = Sorter;