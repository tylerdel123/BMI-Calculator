//find paragraph in html
const para = document.querySelector('p');

function calculate() {
    //Get values for feet, inches, and pounds
    var feet = document.getElementById("feet").value;
    var inches = document.getElementById("inches").value;
    var pounds = document.getElementById("pounds").value;

    //Calculate feet & inches into total inches
    var feetSum = 12 * feet;
    var feet2inchesSum = (+feetSum) + (+inches);
    
    //Calculate square of feet to inches sum
    var squared = Math.pow(feet2inchesSum,2);

    //Calculate BMI while rounding
    const BMI = (pounds/squared) * 703;
    const BMIrounded = Math.round(BMI * 100)/100;

    //Category of BMI
    if (BMIrounded < 16.0){
        para.textContent = 'Your BMI is ' +BMIrounded+ ', and you are Severly Underweight.';
    }
    else if (BMIrounded > 16.0 && BMIrounded < 18.4) {
        para.textContent = 'Your BMI is ' +BMIrounded+ ', and you are Underweight.';
    }
    else if (BMIrounded > 18.5 && BMIrounded < 24.9) {
        para.textContent = 'Your BMI is ' +BMIrounded+ ', and you are Normal.';
    }
    else if (BMIrounded > 25.0 && BMIrounded < 29.9) {
        para.textContent = 'Your BMI is ' +BMIrounded+ ', and you are Overweight.';
    }
    else if (BMIrounded > 30.0 && BMIrounded < 34.9) {
        para.textContent = 'Your BMI is ' +BMIrounded+ ', and you are Moderately Obese.';
    }
    else if (BMIrounded > 35.0 && BMIrounded < 39.9) {
        para.textContent = 'Your BMI is ' +BMIrounded+ ', and you are Severly Obese.';
    }
    else if (BMIrounded > 40.0) {
        para.textContent = 'Your BMI is ' +BMIrounded+ ', and you are Morbidly Obese.';
    }
    else if (feet && pounds == 0) {
        para.textContent = 'You need to insert realistic measurements.';

        //Below code is a test
        //document.getElementById("demo").innerHTML = "You need to insert realistic measurements.";
    }
    

    //Hide input and buttons
    

  

}