
function Calculate(){
    event.preventDefault();
    var n1 = document.getElementById('money').value;
    var n2 = document.getElementById('rate').value;
    var n3 = document.getElementById('years').value;


    // Maturity Calculation
    var mroi = n2/100;
    var fmroi = mroi/12;
    var ffmroi = 1+fmroi;

    var payments = n3*12;
    var fpayments = payments;
    
    var midcal = Math.pow(ffmroi,fpayments);
    var fmidcal = midcal-1;
    var ffmidcal = fmidcal/fmroi;


    // Final Answers
    var ans1 = n1*n3*12;
    var ans2 = n1*ffmidcal*ffmroi;
    var ans3 = ans2 - ans1;

    var fans1 = document.getElementById('totalinvestment');
    var fans2 = document.getElementById('maturity');
    var fans3 = document.getElementById('maxprofit');

    fans1.value = ans1;
    fans2.value = ans2 ;
    fans3.value = ans3;
}

function Resetall(){
    var fans1 = document.getElementById('totalinvestment');
    var fans2 = document.getElementById('maturity');
    var fans3 = document.getElementById('maxprofit');
    fans1.value = "";
    fans2.value ="";
    fans3.value ="";
}

 