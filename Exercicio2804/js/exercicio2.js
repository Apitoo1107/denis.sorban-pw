var media = parseInt(prompt("Digite sua nota: " ));
var nome = prompt("Digite seu nome: ")

console.log(typeof media)
console.log(typeof nome)

if(media > 7)
    {
    console.log(nome, "você foi ", "Aprovado!!")
}
else if (media > 5 && media <= 7){
    console.log(nome,"você foi ", "Recuperação!")
}
else if(isNaN(media)){
    console.log(nome,"você foi ", "Digite um número para nota! Não uma letra.")
}
else{
    console.log(nome, "você foi ", "Reprovado!")
}