// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// describe("arrayMultiplier", () => {
//     it("returns an array with all the numbers multipled by 3", () => {
//       expect(arrayMultiplier(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//     })
//   })

// describe("arrayMultiplier", () => {
//     it("returns an array with all the numbers multipled by 3", () => {
//       expect(arrayMultiplier(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//     })
//   })


// b) Create the function that makes the test pass.

// Create a function that takes in an array
const arrayMultiplier = (array) => {
// Create an empty array to store the new data in
    let newArr = []
// Create a loop taking in all numbers from the array
    for (let i = 0; i < array.length; i++) {
// Push each number from the array multiplied by 3 in the new array
        newArr.push(array[i] * 3)
  }
// Return the new array
  return newArr
}
// Run the function
// console.log(arrayMultiplier(numbersArray2));





// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

// describe("divByThree", () => {
//     it("decides if the number is evenly divisble by three or not", () => {
//     expect(divByThree(num1)).toEqual("15 is divisible by three")
// })
// })

// describe("divByThree", () => {
//     it("decides if the number is evenly divisble by three or not", () => {
//     expect(divByThree(num2)).toEqual("0 is divisible by three")
// })
// })

// describe("divByThree", () => {
//     it("decides if the number is evenly divisble by three or not", () => {
//     expect(divByThree(num3)).toEqual("-7 is not divisible by three")
// })
// })


// b) Create the function that makes the test pass.

// Create a function that takes in the number
const divByThree = (num) => {
// Create an if statement that checks if the number is evenly divisble by three or not and return the sentence
    if (num % 3 == 0) return `${num} is divisible by three`;
// Create an else statement for numbers that are not evenly divisble by 3 and return sentence
    else return `${num} is not divisble by three`;
}
// Run the function 
// console.log(divByThree(num3));





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// describe("allCaps", () => {
//          it("returns an array with all the words capitalized", () => {
//          expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//      })
//      })

// describe("allCaps", () => {
//          it("returns an array with all the words capitalized", () => {
//          expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//      })
//      })


// b) Create the function that makes the test pass.

// Create a function that takes in one array
const allCaps = (array) => {
// Create a new, empty array for the output
    let newNouns = []
// Create a loop to render the array through each word
    for (let i = 0; i < array.length; i++) {
// Cut of the first letter, capitalize it, and add the remaining characters
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
// Push the capitalized words in the new, empty array
        newNouns.push(array[i])
    }
// Return the new array
    return newNouns
  }
// Run the function
// console.log(allCaps(randomNouns2));

// Create an empty array for the output
// Create a loop to render the array through each word
// Return each value capitalized
// Run the function





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

//  describe("firstVowel", () => {
//      it("logs the index of the first vowel", () => {
//      expect(firstVowel(vowelTester1)).toEqual([1])
//  })
//  })

//  describe("firstVowel", () => {
//      it("logs the index of the first vowel", () => {
//      expect(firstVowel(vowelTester2)).toEqual([0])
//  })
//  })

   describe("firstVowel", () => {
       it("logs the index of the first vowel", () => {
       expect(firstVowel(vowelTester3)).toEqual([2])
   })
   })


// b) Create the function that makes the test pass.

// Create a function that takes in a string
const firstVowel = (vowelTester) => {
// Split the string into an array
    const array = vowelTester.split("");
// Create a loop to render the array through
    for(let i = 0; i < array.length; i++){
// Create an if statement that is checking if any of the array's values are equal to a,e,i,o,u and return the index of the first vowel
      if(array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u') return [i];
      }
  }
// Run the function 
// console.log(firstVowel(vowelTester3));