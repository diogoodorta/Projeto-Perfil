alert("Olá Seja Bem-Vindo")

let p1=prompt("Escreva seu nome");

let p2=prompt("Escreva um poder que você gostaria de ter");

let p3=prompt("Escreva um nome de algum vilão");

let p4=prompt("Ecreva um lugar que gostaria de estar");

let msg=document.getElementById('msg');

msg.innerHTML = `<p> Olá ${p1} o seu poder é a/o ${p2} você vai enfrentar o/a ${p3} no(a)/em ${p4}`