function queueUp(){
  document.getElementById("status").innerHTML = "Finding opponents...";
  setTimeout(()=>{document.getElementById("status").innerHTML="Match Found! Simulating..."},1500);
  setTimeout(()=>{document.getElementById("status").innerHTML="You won +$127!"},3500);
}