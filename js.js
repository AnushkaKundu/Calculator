$(document).ready(function() {
    var output = $(".output");
    var hasOperator = false;
    var yRootValue = null; // Variable to store the first value for y√x calculation
    var scientificNotation = null; // Variable to store the scientific notation input
    
    $(".button").on("click", function() {
      var content = $(this).find(".content").text();
      var currentOutput = output.text();
    
      if (content === "AC") {
        output.text("");
        hasOperator = false;
        yRootValue = null; // Reset yRootValue when clearing the output
      } else if (content === "=") {
        try {
          if (scientificNotation !== null) {
            var result = evaluateExpression(currentOutput + " * Math.pow(10," + scientificNotation + ")");
            output.text(result);
            scientificNotation = null; // Reset scientificNotation after calculation
          } else if (yRootValue !== null) {
            var result = evaluateExpression("Math.pow(" + currentOutput + ", 1/" + yRootValue + ")");
            output.text(result);
            yRootValue = null; // Reset yRootValue after calculation
          } else {
            var result = evaluateExpression(currentOutput);
            output.text(result);
          }
        } catch (error) {
          output.text("Error");
        }
        hasOperator = false;
        scientificNotation = null; // Reset scientificNotation after calculation
        yRootValue = null; // Reset yRootValue after calculation
      } else if (content === "+/-") {
        if (currentOutput !== "") {
          var firstChar = currentOutput.charAt(0);
          if (firstChar === "-") {
            output.text(currentOutput.substr(1));
          } else {
            output.text("-" + currentOutput);
          }
        }
      } else if (content === "x2") {
        try {
          var result = evaluateExpression(currentOutput + "*" + currentOutput);
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "x3") {
        try {
          var result = evaluateExpression(currentOutput + "*" + currentOutput + "*" + currentOutput);
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "ex") {
        try {
          var result = evaluateExpression("Math.exp(" + currentOutput + ")");
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "10x") {
        try {
          var result = evaluateExpression("Math.pow(10," + currentOutput + ")");
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "1/x") {
        try {
          var result = evaluateExpression("1 / " + currentOutput);
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "2√x") {
        try {
          var result = evaluateExpression("Math.sqrt(" + currentOutput + ")");
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "3√x") {
        try {
          var result = evaluateExpression("Math.cbrt(" + currentOutput + ")");
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "ln") {
        try {
          var result = evaluateExpression("Math.log(" + currentOutput + ")");
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "x!") {
        try {
          var result = calculateFactorial(parseFloat(currentOutput));
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "log10") {
        try {
          var result = calculateLog10(parseFloat(currentOutput));
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "sin") {
        try {
          var result = calculateSin(parseFloat(currentOutput));
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "cos") {
        try {
          var result = calculateCos(parseFloat(currentOutput));
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "tan") {
        try {
          var result = calculateTan(parseFloat(currentOutput));
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "sinh") {
        try {
          var result = calculateSinh(parseFloat(currentOutput));
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "cosh") {
        try {
          var result = calculateCosh(parseFloat(currentOutput));
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "tanh") {
        try {
          var result = calculateTanh(parseFloat(currentOutput));
          output.text(result);
        } catch (error) {
          output.text("Error");
        }
      } else if (content === "Rand") {
        var result = Math.random();
        output.text(result);
      } else if (content === "y√x") {
        if (currentOutput !== "") {
          yRootValue = parseFloat(currentOutput);
          output.text(currentOutput + "√");
        }
      } else if (content === "e") {
        if (currentOutput === "") {
          output.text(Math.E);
        } else if (hasOperator) {
          try {
            var result = evaluateExpression(currentOutput + "*" + Math.E);
            output.text(result);
          } catch (error) {
            output.text("Error");
          }
        } else {
          output.text("Error");
        }
      } else if (content === "π") {
        if (currentOutput === "") {
          output.text(Math.PI);
        } else if (hasOperator) {
          try {
            var result = evaluateExpression(currentOutput + "*" + Math.PI);
            output.text(result);
          } catch (error) {
            output.text("Error");
          }
        } else {
          output.text("Error");
        }
      } else if (content === "EE") {
        if (currentOutput !== "") {
          scientificNotation = parseFloat(currentOutput);
          output.text(currentOutput + "EE");
          hasOperator = false;
        }
      } else {
        output.text(currentOutput + content);
        hasOperator = true;
      }
    });
    function evaluateExpression(expression) {
        expression = expression.replace(/×/g, "*"); // Replace '×' with '*'
        expression = expression.replace(/÷/g, "/"); // Replace '÷' with '/'
        expression = expression.replace(/−/g, "-"); // Replace '−' with '-'
      
        // Check if the expression contains '√'
        if (expression.includes("√")) {
            var parts = expression.split("√");
            var base = parseFloat(parts[1]);
            var root = yRootValue;
            return calculateRoot(base, root);
        } else if (expression.includes("EE")) {
          var parts = expression.split("EE");
          var base = parseFloat(parts[0]);
          var exponent = parseFloat(parts[1]);
          return base * Math.pow(10, exponent);
        } else {
          try {
            var result = eval(expression);
            return result;
          } catch (error) {
            throw error;
          }
        }
      }
    // function evaluateExpression(expression) {
    //     expression = expression.replace(/×/g, "*"); // Replace '×' with '*'
    //     expression = expression.replace(/÷/g, "/"); // Replace '÷' with '/'
    //     expression = expression.replace(/−/g, "-"); // Replace '−' with '-'
    
    //     try {
    //       var result = eval(expression);
    //       return result;
    //     } catch (error) {
    //       throw error;
    //     }
    //   }
      function calculateFactorial(number) {
          if (number < 0) {
              throw "Factorial is not defined for negative numbers.";
          } else if (number === 0) {
              return 1;
          } else {
              var factorial = 1;
              for (var i = 1; i <= number; i++) {
              factorial *= i;
              }
              return factorial;
          }
      }
      function calculateLog10(number) {
          if (number <= 0) {
              throw "Logarithm is not defined for non-positive numbers.";
          } else {
              return Math.log10(number);
          }
      }
      function calculateSin(angle) {
          return Math.sin(angle);
        }
      function calculateCos(angle) {
          return Math.cos(angle);
      }
      function calculateTan(angle) {
          return Math.tan(angle);
      }
      function calculateSinh(value) {
          return Math.sinh(value);
      }
      function calculateCosh(value) {
          return Math.cosh(value);
      }
      function calculateTanh(value) {
          return Math.tanh(value);
      }
      function calculateRoot(base, root) {
        return Math.pow(base, 1 / root);
      }

  });
  