//Problem 3 - Armstrong Number
//An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
//For example :
//9 is an armstrong number, because 9 = 9^1 = 9
//10 is not an armstrong number, because 10!=1^2 + 0^2 = 1
//153 is an armstrong number, because 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//154 is not an armstrong number, because 154 !=1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
//Write some code to determine whether a number is an Armstrong number.

function isArmStrongNumber(num: number) {
  const input: number[] = num.toString().split("").map(Number);
  //   console.log(input)
  const pangkat: number = input.length;
  //   console.log(newInput);
  const sum: number = input.reduce(
    (acc, val) => acc + Math.pow(val, pangkat),
    0
  );
  return sum === num;
}
console.log(isArmStrongNumber(153));
console.log(isArmStrongNumber(10));
console.log(isArmStrongNumber(154));
