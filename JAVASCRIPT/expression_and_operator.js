
      //Assignment Operater ------------------------
      //augmented assignment operators = used to replace a statement where an operator takes a variable as one of its arguments and then assigns the result back to the same variable x = x+1; =>x+=1

      //Comparison operator ---------------------
      //   = assignment operator
      //  == comparison operator (computer if values are equal)
      // === strict equality operator (compare if values & datatype are equal)
      //  != inequality operator
      // !== strict ineqality operator

      const PI = 3.14;

      if (PI !== 3.14) {
        console.log("THAT IS PI");
      } else {
        console.log("THAT IS NOT PI");
      }
      // Arthmetic operators ------------------------

      // Arthmetic operators = operands (values, variables,etc.)
      //                       operators (+ - * / % **)
      //                       ex. 11 = x + 5;

      // Logical operators -------------------------

      // logical operators = used to combine or manipulate boolean value (true or false)

      //                     AND = &&
      //                     OR  = ||
      //                     NOT = !

      const temp = 30;

      if (temp > 0 && temp <= 30) {
        console.log("the weather is good");
      } else {
        console.log("the weather is bad");
      }

      // Conditional operators (ternary operators)--------------
      // ternary operator = a shortcut if{} and else{} statementsKT
      // help to assign a variable based on a condition
      // condition ? codeIfTrue : codeIfFalse;

      let age = 21;
      let message = age >= 18 ? "you're an adult" : "you're a minor";
      console.log(message);

      //

      let time = 16;
      let greeting = time < 12 ? "Good morning" : "Good afternoon";
      console.log(greeting);

      // Unary operator-------------------
      let a = 4;
      console.log(typeof a);
      ///
      let e = "helo";
      console.log(typeof e);
      console.log(typeof +-e);

      //
      let text = "hello";
      console.log(!text);
      console.log("hehhehehehehe");
    