// pseudo code
//  step 1 : identify and mici intent 
// user Intenet: type a number, choose an operator, input anpther , press equal sign,  get a total  
// happy Path: 2+5 = 7  
//  edge cases: 2 + 5 * 7 - 1700 = -1663 Not doing this! 
// 
// 
let prevEntry = 0
let operator = null 
let currentEntry = 0
let result = 0
let operation 

// step 2: Select all element needed on the screen 
  let display = document.querySelector('#display')
  let buttons = document.querySelectorAll('.btn')
  let operators= document.querySelectorAll('.operator')
  updateScreen(result)

//  step 3 create a function that listens to key-presses and lets us know  the type of ket pressed. 

buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        // removeActiveOperator()
        let btnClicked = this.innerText;
        display.value = btnClicked;
        // console.log("you clicked:",btnClicked) checker  

    //     Step 4: Define the functionality for each button and explain how it works 
    if(btnClicked === "AC"){
        currentEntry = 0
        result = 0 
        removeActiveOperator()
    }else if (btnClicked === "+/-"){
        currentEntry *= -1 
        removeActiveOperator() 
    }else if(btnClicked === "."){
        currentEntry += "."
    }else if(btnClicked === "x"){
        btn.classList.add("active")
        prevEntry = currentEntry 
        operation ="*"
        currentEntry = ""
    }else if(btnClicked === "÷"){
        prevEntry = currentEntry
        operation = "/"
        currentEntry = ""
    }else if(isNumber(btnClicked)){
        // if your display is = 0 than if clicked reaplce the zero with the nuber 
        // or
        // if a result is display, reset number 
        if(currentEntry === 0 || currentEntry === result ){
            currentEntry = btnClicked
        //  if numbers are already displayed we want to add to the display area ...display area can only hold 6 digits 
        }else{
            currentEntry += btnClicked
        }
    }else if (isOperator(btnClicked)){
            btn.classList.add("active")
            prevEntry = currentEntry
            operation = btnClicked 
            currentEntry = " "
    }else if(btnClicked === "%"){
            currentEntry /= 100
    }else if(btnClicked === "="){
            result = operate(prevEntry, operation, currentEntry)
            operation = null
            currentEntry = result 
            removeActiveOperator()
    }
         updateScreen(currentEntry)
    })
})

// step 5: Create a function to teach out javasctipt porgram what numbers are 
function isNumber(value){
    return !isNaN(value)
}

//  step six: create a finction to teach out Javascript porgram what operators are 
function isOperator(value){
     return value === "+" || value === "-" || value === "*" || value === "/"
    
}
// step seven: create a function to teach our javacript program how to calculate an equation 
function operate(a, operation, b){
        a = parseFloat(a)
        b = parseFloat(b)
        switch(operation){
            case "+":
                return a+b
            case "-":
                return a-b
            case "*":
                return a*b
            case "/":
                return a/b
                
        }
}
// step 8 create a function to teach our javasctipt porgram how to update the results on the display screen 



 function updateScreen(result){
        
     let displayValue = result.toString()
     display.value = displayValue.substring(0 , 6)
        console.log("works")
 }
 function removeActiveOperator(){
        operators.forEach(operator => {
            operator.classList.remove('active')
        })
 }









 
