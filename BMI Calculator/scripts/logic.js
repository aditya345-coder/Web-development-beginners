window.addEventListener('load', bindEvents);
function bindEvents(){
    document.querySelector('#compute').addEventListener('click', takeInput);
    document.querySelector('#weight').addEventListener('input', updateWeight)
}

function takeInput(){
    const age = parseInt(document.querySelector('#age').value);
    const gender = getGender();
    console.log('Age is ',age,' Gender is ', gender)
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    console.log('weight is ',weight);
    console.log('height is ',height);
    computeBMI(weight, height);
}

function updateWeight(){
    const slider = this;
    document.querySelector('#weight-output').innerHTML = slider.value; 
}

function getGender(){
    const radio = document.querySelectorAll('input[name="gender"]');
    if (radio[0].checked){
        return radio[0].value;
    }
    else if (radio[1].checked){
        return radio[1].value;
    }
    else{
        return null;
    }
}

function computeBMI(weight, height){
    const heightInMeter = height/100;
    const bmi = weight/ (heightInMeter*heightInMeter);
    const divResult = document.querySelector('#result');
    divResult.innerHTML='';
    const h4 = document.createElement('h4');
    h4.innerHTML = 'Your BMI is '+bmi.toFixed(0);
    divResult.appendChild(h4);
}