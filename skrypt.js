function licz(){
    var a = document.getElementById("1").value;
    var b = document.getElementById("2").value;
    var wynik = document.getElementById("wynik");
   
  if(a ==""|| b == ""){
      wynik.innerHTML="Prosze podać obydwie liczby";   
  }else{
  a =parseInt(a);
   b =parseInt(b);
    
     // wynik.innerHTML="Potrzebujesz:"+" "+b/a +" "+"litrów palia";
      wynik.innerHTML="Potrzebujesz:"+" "+Math.round(b*a/100)+" "+"litrów palia";
  }
    
}