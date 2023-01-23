function calculateTip(event) {
   event.preventDefault();
   var bill = document.getElementById('bill').value;
   var servicequality = document.getElementById('servicequality').value;
   var numofpeople = document.getElementById('people').value;

   if(bill == '' | servicequality == 0){
   alert('Por Favor, Preencha os valores')
   return;
   }

   if(numofpeople == '' | numofpeople <= 1 ) {
    numofpeople = 1;
    document.getElementById('each').style.display = "none"
   } else {
    document.getElementById('each').style.display = "block"
   }

   var total = ( bill * servicequality) / numofpeople;
   total = total.toFixed(2);
   document.getElementById('tip').innerHTML = total;
   document.getElementById('TotalTip').style.display="block";
}

document.getElementById('TotalTip').style.display="none";
document.getElementById('each').style.display="none";

document.getElementById('tipsform').addEventListener('submit', calculateTip);
