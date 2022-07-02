clickText()  {
  document.getElementById("btn").innerHTML = "how are you?";
}

let d = new Date();
document.body.innerHTML = "<h1>Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()</h1>"