const h1 =document.querySelector('h1');
const form=document.querySelector('#form')
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
btn= document.querySelector('#btnCalcular');

const pResult=document.querySelector('#result');

btn.addEventListener('submit',sumarInputValues)

function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText= "Resultado: " + sumaInputs;
}


