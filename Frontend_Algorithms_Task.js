/*Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.*/
function convertFahrToCelsius(FahrNum) {
    var containsNumber = /\d+/.test(FahrNum);
    
    if (typeof FahrNum === "number") {
      celsius = (FahrNum - 32) * 5 / 9;
      celsius = celsius.toFixed(4);
      return celsius;
    }
    else if (typeof FahrNum === "string" && containsNumber) {
      FahrNum = parseFloat(FahrNum);
      celsius = (FahrNum - 32) * 5 / 9;
      celsius = celsius.toFixed(4);
      return celsius;
    }
    else {
      JsonNum = JSON.stringify(FahrNum);
      type = Object.prototype.toString.call(FahrNum).slice(8, -1);
      return `${JsonNum} is not a valid number but a/an ${type}.`;
    }
  }
  
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));



/*Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.*/
function checkYuGiOh(n) {
    var n;
    var containsNumber = /\d+/.test(n);
    var type = Object.prototype.toString.call(n).slice(8, -1);
    if (type === 'number' || containsNumber) {
      n = parseInt(n);
      var initialArray = [...Array(n).keys()].map(i => i + 1);
      var resultingArray = initialArray.map(num => {
        switch (true) {
          case num%2==0 && num%3==0 && num%5==0:
            return (num = "yu-gi-oh");
          
          case num%2==0 && num%3==0:
            return (num = "yu-gi");
            
          case num%2==0 && num%5==0:
            return (num = "yu-oh");
          
          case num%3==0 && num%5==0:
            return (num = "gi-oh");
            
          case num%5==0:
            return (num = "oh");
            
          case num%3==0:
            return (num = "gi");
            
          case num%2==0:
            return (num = "yu");
          
          default:
            return num;
        }
      });
      return resultingArray;
    }
    else {
      var JsonNum = JSON.stringify(n);
      return `invalid parameter:${JsonNum}`;
    }
  }
  
  console.log(checkYuGiOh(10));
  console.log(checkYuGiOh("5"));
  console.log(checkYuGiOh("fizzbuzz is meh"));

