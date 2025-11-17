let nombre = [1,2,3,4,5,6,7,8,9,10];
for (let i = 1; i<=10;i++) {
  console.log(i);
}
alert(nombre)
let somme = 0;
let i = 1;
while ( i<= 100) {
  somme += i;
  i++;
}
console.log("la somme des entiers de 1 à 100 est :" + somme);
alert(somme)

let secret = Math.floor(Math.random()*100) + 1;

let deviner;
do { 
  deviner = prompt("Deviner un nombre secret (entre 1 et 100):");
  if (deviner< secret) {
    alert("plus petit");
  } else if (deviner > secret) {
  alert("Plus grand");
  }else{
    alert("vous avez deviné le nombre");
  }
} while (deviner==  secret);

let N= prompt("combien de termes de Fibonacci à afficher?:");
let a= 0, b= 1;
let resultat="Les"+nombre+"premiers termes de la séquences de Fibonacci sont/n";
for (let i= 0; i<N; i++) {
  console.log(a)
  suivant=a+b;
  a=b;
  b=suivant;
}
alert(resultat);