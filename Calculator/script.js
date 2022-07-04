const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

class Calculator{
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }

    //All clear
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    //Deletes one number
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    //Adds a number when number buttons are clicked
    appendNumber(number){

        //Avoids putting multiple decimal points
        if(number === '.' && this.currentOperand.includes('.')) return

        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    //Choosing operation
    chooseOperation(operation){

        //Makes sure that the previous operand doesn't disappear after clicking an operation
        if(this.currentOperand === '') return

        //For computing multiple numbers
        if(this.currentOperand !== ''){
            this.compute()
        }

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    //Math
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const cur = parseFloat(this.currentOperand)

        if(isNaN(prev) || isNaN(cur)) return

        switch(this.operation){
            case '+':
                computation = prev + cur
                break
            case '-':
                computation = prev - cur
                break
            case '*': 
                computation = prev + cur
                break
            case '÷':
                computation = prev / cur
                break
            default:
                return
        }

        this.currentOperand = computation
        this.previousOperand = ''
        this.operation = undefined
    }

    //Add comma for thousands (design only)
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay

        if(isNaN(integerDigits)){
            integerDisplay = ''
        }
        else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }

        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }
        else{
            return integerDisplay
        }
        
    }
    //Update the display
    update(){
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand)

        if(this.operation != null){
            this.previousOperandText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }
        else{
            this.previousOperandText.innerText = ''
        }
    }
}

const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.update()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.update()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.update()
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.update()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.update()
})