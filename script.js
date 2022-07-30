const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operator]")
const equalsButton = document.querySelectorAll("[data-equals]")
const deleterButton = document.querySelectorAll("[data-delete]")
const allClearButton = document.querySelectorAll("[data-all-clear-button]")
const previousOperand = document.querySelectorAll("[data-previous-operand]")
const currentOperandTextElement = document.querySelectorAll("[data-current-operand]");

class Calculador {
  constructor( previousOperandtextElement, currentOperandTextElement) { 
      this.previousOperandtextElement = previousOperandtextElement;
      this.currentOperandtextElement = previousOperandtextElement;
    }
    
    clear(){
      this.currentOperand ="";
      this.previousOperand ="";
      this.operation = undefined;
    }

    updateDisplay(){
      this.previousOperandtextElement = this.previousOperand;
      this.currentOperandtextElement = this.currentOperand;
    }   
}

const calculador = new Calculador( previousOperandtextElement,
currentOperandTextElement
);

allClearButton.addEvenListener("click", () => {
  calculator.clear();
  calculador.updateDisplay();  

});


