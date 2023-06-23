/*
                                      1. PassworM Validator
Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console
*/

const passwordValidator = (password) => {
    const Mypassword = "Sourabh@777";
    let check = Mypassword.match(password);
  
    if (check) {
      console.log("Congratulation ,Password Matched");
    } else {
      console.log("Sorry , Password not matched");
    }
  };
  // Test Cases =>
  passwordValidator("Sourabh@777"); // Password Matched
  passwordValidator("sourabh@777"); // Sorry , Password not matched
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
                                     CALCULATOR
  Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
  to perform the operation on the two numbers
  
  The calculator function should"
   1. Take in two numbers, num1 and num2, and a string representing a mathematical operator, operatorP
   2. Use a switch statement to determine which operation to perform #ased on the value of the operatorP
   3. If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
  operation and store the result in a variable called result
  4.  If the operator is not one of the valid operators, log "Invalid operator" to the console
  */
  
  const calculator = (num_1, num_2, key) => {
    switch (key) {
      // Addition
      case "+":
        console.log(
          `The Sum of ${num_1} and ${num_2} is equal to `,
          num_1 + num_2
        );
        break;
      // Substraction
      case "-":
        console.log(
          `The Substraction of ${num_1} and ${num_2} is equal to `,
          num_1 - num_2
        );
        break;
      // Multiplication
      case "*":
        console.log(
          `The Multiplication of ${num_1} and ${num_2} is equal to `,
          num_1 * num_2
        );
        break;
      // divide
      case "/":
        console.log(
          `The divide of ${num_1} and ${num_2} is equal to `,
          num_1 / num_2
        );
        break;
      // remainder
      case "%":
        console.log(
          `The Remainder of ${num_1} and ${num_2} is equal to `,
          num_1 % num_2
        );
        break;
  
      default:
        console.log("Invalid Operator");
        break;
    }
  };
  
  // Test Cases :
  calculator(5, 9, "+"); // The Sum of 5 and 9 is equal to  14
  calculator(15, 12, "-"); //The Substraction of 15 and 12 is equal to  3
  calculator(12, 12, "*"); // The Multiplication of 12 and 12 is equal to  144
  calculator(200, 25, "/"); // The divide of 200 and 25 is equal to  8
  calculator(45, 9, "%"); // The Remainder of 45 and 9 is equal to  0
  calculator(78, 12, "%"); // The Remainder of 78 and 12 is equal to  6
  calculator(45, 45, "@"); // Invalid Operator
  calculator(); // Invalid Operator
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
                                      3. Color Mixer               
  Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
  determine the resulting color when the two colors are mixed. The program should print the resulting color
  based on the following criteria"
  1 If color1 is "red" and color2 is "blue" or vice versa, print "purple"
  2 If color1 is "red" and color2 is "yellow" or vice versa, print "orange"
  3 If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"
  4 If any other combination of colors is input, the program should print "Invalid color combination"
  
  */
  
  const colorMixer = (color1, color2) => {
    switch (true) {
      case color1 === "red" && color2 === "blue":
        console.log("purple");
        break;
      case color1 === "red" && color2 === "yellow":
        console.log("orange");
        break;
      case color1 === "blue" && color2 === "yellow":
        console.log("green");
        break;
      default:
        console.log("invalid color");
    }
  };
  //Test Cases
  colorMixer("red", "blue"); // purple
  colorMixer("red", "yellow"); // orange
  colorMixer("blue", "yellow"); // green
  colorMixer("green", "blue"); //invalid color
  
  /*
                                  4. Highest Marks
  A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
  the marks of all five students in an array called "marks". Write a program that iterates through the array and
  finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
  teacher using the console. Make sure you use the ternary operator to find the student with the highest marks
  */
  
  const marks = [85, 92, 78, 95, 88];
  let highestMarks = 0;
  
  for (let i = 0; i < marks.length; i++) {
    highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
  }
  
  console.log("Highest marks: " + highestMarks);
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
  5. Capitalize
  You are building a form where users can enter their names. You want to make sure that the first letter of the
  name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
  string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
  returns the modified string. Otherwise, it returns the original string without any changes
  */
  
  function capitalizeFirstName(name) {
    const firstLetter = name[0];
    let capitalizedFirstLetter = firstLetter;
  
    if (firstLetter === firstLetter.toLowerCase()) {
      capitalizedFirstLetter = firstLetter.toUpperCase();
    }
  
    const modified = capitalizedFirstLetter + name.slice(1);
    console.log(modified);
  }
  
  // Test Cases:
  capitalizeFirstName("sourabh"); // Sourabh
  capitalizeFirstName("i_love_you_babu😂😂😂😂"); // I_love_you_babu😂😂😂
  capitalizeFirstName("mera_naam_chun_chun_chuu"); //Mera_naam_chun_chun_chuu
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  /*
                           6. Vowel Counter
  We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
  through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
  counted
  */
  function countVowels(name) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
  
    for (let i = 0; i < name.length; i++) {
      const char = name[i].toLowerCase();
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
    return vowelCount;
  }
  
  // Test Cases :
  
  console.log(countVowels("sourabh")); //3
  console.log(countVowels("aeiou")); // 5
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
  In an online shopping application, customers can add multiple items to their cart. However, sometimes
  customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
  duplicate items not only make it difficult for the customer to track the items they want to purchase but also
  affect the accuracy of the purchase order.
  To solve this problem, the application needs to remove duplicatd items from the customer's cart. The program
  should take the customer's cart with duplicates as input, and return a new cart without duplicates.
  Write a program to Rsolve thd problem of duplicate items in the cart by removing duplicates.
  */
  function removeDuplicates(cart) {
    const uniqueItems = [];
    for (let i = 0; i < cart.length; i++) {
      if (!uniqueItems.includes(cart[i])) {
        uniqueItems.push(cart[i]);
      }
    }
    return uniqueItems;
  }
  
  // Example usage
  const customerCart = ["item1", "item2", "item3", "item1", "item4", "item2"];
  const updatedCart = removeDuplicates(customerCart);
  console.log(updatedCart);
  
  //output =>  [ 'item1', 'item2', 'item3', 'item4' ]
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
               8. InverteW right-angleW triangle pattern with asterisks
  Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asterisks
  with i rows.
  */
  
  function printInvertedTriangle(i) {
    for (let row = i; row > 0; row--) {
      console.log("*".repeat(row));
    }
  }
  
  // Example usage
  printInvertedTriangle(6);
  
  /* output
  
  ******
  *****
  ****
  ***
  **
  *
  
  */
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
  9. Check for divisibility.
  Write a program that takes an array of numbers and prints all the numbers that and divisible by 3, but not by 2.
  Use a for loop and continue statment.
  */
  
  function printNumbers(array) {
    for (let i = 0; i < array.length; i++) {
      const num = array[i];
      if (num % 3 === 0 && num % 2 !== 0) {
        console.log(num);
      }
    }
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printNumbers(numbers);
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  /*
  10. Correct a bug
  You are working on an e-commercd website where customers can add items to their cart. The cart stores the
  quantity of each item that the customer wants to purchase in an array of numbers. However, the website is
  currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to
  half. As a result, you ned to write a JavaScript function that can double thd quantity of each item in the cart
  array to correct the bug.
  */
  
  function doubleItemQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }
  
  // Example usage
  const cart = [1, 2, 3, 4, 5];
  const correctedCart = doubleItemQuantities(cart);
  console.log(correctedCart);
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
                   11. Unit converter
  A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying
  it on its website. Thdy want a function that can convert Celsius to Fahrenheit accurately and efficiently. The
  function should take input in Celsius and return output in Fahrenheit. This function will help the weather station
  to provide temperature readings that are easily understandable to a wider audience.
  */
  
  const CelsiusToFahrenheit = (celsius) => {
    let Fahrenheit = (celsius * 9) / 5 + 32;
    return Fahrenheit;
  };
  
  let temperature = 32;
  let result = CelsiusToFahrenheit;
  console.log(
    `${temperature} degree Celsius In Fahrenheit is :`,
    result(temperature),
    `F`
  );
  
  //Output =>
  //32 degree Celsius In Fahrenheit is : 89.6 F
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
  12. Calculate rental cost
  A car rental company needs to calculate the cost of a rental based on thd number of days rented and the type
  of car. They require a function that takes in the number of days rented and car type and returns the rental cost.
  The total cost would be the rental cost multiplied by the number of days rented.
  Thd rental costs are
   Economy = Rs. 4000 /- per day
   Midsize = Rs. 10,000 /- per day
   Luxury = Rs. 20,000 /- per day.
  */
  
  function rentalCostForEConomy(days) {
    let Economy = days * 4000;
    return Economy;
  }
  
  function rentalMidsize(days) {
    let Midsize = 10000 * days;
    return Midsize;
  }
  
  function rentalLuxary(days) {
    let Luxury = 20000 * days;
    return Luxury;
  }
  
  // for economy class :
  let days = 1;
  console.log(
    `Your Rental cost in Economy Class for ${days} days is  : `,
    rentalCostForEConomy(days),
    "Rupees"
  );
  // for Midsize class :
  let days_1 = 2;
  console.log(
    `Your Rental cost in Midsize Class for  ${days_1} days is  : `,
    rentalMidsize(days),
    "Rupees"
  );
  // for luxury class :
  let days_2 = 3;
  console.log(
    `Your Rental cost in Luxury Class for ${days_2} days is  : `,
    rentalLuxary(days),
    "Rupees"
  );
  
  //Test cases :
  /*
  Your Rental cost in Economy Class for 1 days is  :  4000 Rupees
  Your Rental cost in Midsize Class for  2 days is  :  10000 Rupees
  Your Rental cost in Luxury Class for 3 days is  :  20000 Rupees
  */
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
  13. Bill splitter
  A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
  people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
  it and returns an object that contains the total bill and the bill to be paid by each person in the group.
  */
  
  function calculateBill(costPerDish, numPeople) {
    const totalBill = costPerDish.reduce((sum, cost) => sum + cost, 0);
    const billPerPerson = totalBill / numPeople;
  
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson,
    };
  }
  
  const costPerDish = [20, 15, 12, 33]; // Cost of each dish
  const numPeople = 4; // Number of people sharing the dishes
  
  const splitBill = calculateBill(costPerDish, numPeople);
  console.log(splitBill);
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
  14. Calculate the final order price
  A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
  objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
  the unit price and quantity of each item.
  */
  
  const calculateTotalCost = (cart) => {
    const totalCost = carts.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0
    );
    return totalCost;
  };
  
  const carts = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
    { unitPrice: 8, quantity: 3 },
  ];
  
  const totalCost = calculateTotalCost(carts);
  console.log(totalCost);
  
  //output : 64
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
  15. Calculate the percentage of the discount
  A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
  show customers how much they can save. Given the original price and the discounted price of a product,
  implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
  This function could be useful for the store's marketing team to create promotions and offers that attract
  customers.
  */
  
  const calculatePercentDiscount = (realMrp, dicountMrp) => {
    let difference = realMrp - dicountMrp;
  
    const profitPercent = (difference * 100) / realMrp; //discount percent
  
    return Math.round(profitPercent);
  };
  //Enter Your Marked Price
  const realMrp = 45;
  // Enter Your cost price
  const dicountMrp = 35;
  
  console.log(calculatePercentDiscount(realMrp, dicountMrp), `% Total Discount`);
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
  16. Generate a random number
  Create a JavaScript program that generates a random number between 1 and 100 when the program starts.
  Use a self-invoking arrow function to generate the random number. This program can be used as a component
  in various games or applications that require a random number generator.
  */
  
  /*
  setInterval(() => {
    const randum = Math.random();
    const realover = Math.round(randum*15+7) ;
    console.log('Random Number are : ',realover);
  }, 1000);
  */
  
  /*
  Output  :
  Random Number are :  9
  Random Number are :  19
  Random Number are :  8
  Random Number are :  21
  Random Number are :  11
  Random Number are :  15
  Random Number are :  19
  Random Number are :  16
  Random Number are :  21
  Random Number are :  9
  Random Number are :  9
  .
  .
  .
  */
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  /*
  17. Build a banking application
  A banking application needs to manage customer accounts and transactions. The user detail is stored in an
  object with a keys name and balance. Write functions using object methods to update a customer's account
  balance based on a deposit or withdrawal.
  */
  
  class Customer {
    constructor(name, balance = 0) {
      this.name = name;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(
          `Deposit of ${amount} successful. New balance: ${this.balance}`
        );
      } else {
        console.log("Invalid deposit amount. Please enter a positive value.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (this.balance >= amount) {
          this.balance -= amount;
          console.log(
            `Withdrawal of ${amount} successful. New balance: ${this.balance}`
          );
        } else {
          console.log("Insufficient funds. Withdrawal canceled.");
        }
      } else {
        console.log("Invalid withdrawal amount. Please enter a positive value.");
      }
    }
  }
  
  // Usage example
  const customer1 = new Customer("John Doe", 1000);
  customer1.deposit(500); // Deposit of 500 successful. New balance: 1500
  customer1.withdraw(200); // Withdrawal of 200 successful. New balance: 1300
  customer1.withdraw(2000); // Insufficient funds. Withdrawal canceled.
  customer1.deposit(-100); // Invalid deposit amount. Please enter a positive value.
  customer1.withdraw(-200); // Invalid withdrawal amount. Please enter a positive value.
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  
  /*
                            18. Change Text on Button click.
  Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning
  platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The button must
  toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click.
  */
  
  // all files are in the form of projects which I have created a separated filesn... this
  // files contains only programmetic solutions  
  
  