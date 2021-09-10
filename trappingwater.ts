function TrappingWater(arr) {
    var first = Math.max(...arr);
    var firstindex = arr.indexOf(first);
  
    var second;
    var secondindex;
  
    var c;
    c = count(arr, first);
  
    var width = 1;
    var waterTrapped;
  
    if (c < 2) {
      let firstnumber = Number.MIN_SAFE_INTEGER;
      second = firstnumber;
      for (var temp of arr) {
        if (temp > firstnumber) {
          second = firstnumber
          firstnumber = temp
        }
        else if (temp > second) {
          second = temp
        }
      }
  
      secondindex = arr.indexOf(second);
  
      let smallest = Math.min(first, second)
      let smallestIndex = arr.indexOf(smallest)
  
      let largest = Math.max(first, second)
      let largestIndex = arr.indexOf(largest)
  
      let temparray;
      if (smallestIndex < largestIndex) {
        temparray = arr.slice(smallestIndex + 1, largestIndex);
      }
      else {
        temparray = arr.slice(largestIndex + 1, smallestIndex);
      }
  
      var b = 0;
      for (let element of temparray) {
        let a;
        a = (smallest - element)  * width;
        b = b + a
      }
  
      waterTrapped = b;
    }
    else {
      second = first;
      var indices = arr.map((x, y) => x === first ? y : '').filter(String);
      secondindex = indices[1];
      console.log(first);
      console.log(firstindex)
      console.log(second);
      console.log(secondindex);
  
      let temparray;
      if (firstindex < secondindex) {
        temparray = arr.slice(firstindex + 1, secondindex);
      }
      else {
        temparray = arr.slice(secondindex + 1, firstindex);
      }
  
      var b = 0;
      for (let element of temparray) {
        let a;
        a = (first - element) * width;
        b = b + a;
      }
  
      waterTrapped = b;
    }
  
    return waterTrapped;
  
  }
  
  function count(array, item) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === item) {
        count++
      }
    }
    return count;
  }
  
  function findIndex(val) {
    var match;
    return match = Math.max(...val);
  }
  
  // keep this function call here 
  // @ts-ignore
  console.log(TrappingWater(readline()));