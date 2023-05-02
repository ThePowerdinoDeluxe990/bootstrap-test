
let resultado
let result = document.getElementById("result")

let suma = document.getElementById("suma")
let resta= document.getElementById("resta")
let mult= document.getElementById("mult")
let divi= document.getElementById("div")

suma.onclick=function(){
    
    let num1 = document.getElementById("input1").value
    let num2 = document.getElementById("input2").value

    let num1n = parseFloat(num1)
    let num2n = parseFloat(num2)

    resultado=num1n+num2n
    result.textContent=`El resultado es: ${resultado}`
    
}

resta.onclick=function(){
    
    let num1 = document.getElementById("input1").value
    let num2 = document.getElementById("input2").value

    let num1n = parseFloat(num1)
    let num2n = parseFloat(num2)

    resultado=num1n-num2n
    result.textContent=`El resultado es: ${resultado}`
    
}
mult.onclick=function(){
    
    let num1 = document.getElementById("input1").value
    let num2 = document.getElementById("input2").value

    let num1n = parseFloat(num1)
    let num2n = parseFloat(num2)

    resultado=num1n*num2n
    result.textContent=`El resultado es: ${resultado}`
    
}

divi.onclick=function(){
    
    let num1 = document.getElementById("input1").value
    let num2 = document.getElementById("input2").value

    let num1n = parseFloat(num1)
    let num2n = parseFloat(num2)

    resultado=num1n/num2n
    result.textContent=`El resultado es: ${resultado}`
    
}