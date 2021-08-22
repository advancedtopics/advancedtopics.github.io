fetch("https://api.scratch.mit.edu/studios/30152868/curators")
    .then(response => response.json())
    .then(data => {let i2 = data;
for (let i = 0; i < i2.length; i++) {
    document.getElementById("list").innerHTML += i2[i].username + ", ";
}})

setTimeout(function(){
document.getElementById("list").innerText = document.getElementById("list").innerText.substring(0, document.getElementById("list").innerText.length - 1) + ".";
}, 1000)
