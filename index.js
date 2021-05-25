let idade = 18;
const humano = true;
const mês = "janeiro";

if(idade >=18 ){
    console.log("Utilize com sabedoria")
}else{
    console.log("Você não pode desfrutar desses conhecimentos")
};

if(idade >=18 && humano){
    console.log("Hari póti")
}else{
    console.log("Harry potter")
};

if(mês === "janeiro" || mês === "dezembro"){
    console.log('Você fica mais velho hoje porque faz aniversario em',mês)
}else{
    console.log('Você não fica mais velho hoje porque faz aniversario em', mês)
}

const nome= "Ian"

if(nome.charAt(0) === "R"){
    console.log('Oi seu nome começa com r pois seu nome é', nome)
}else{
    console.log('Oi seu nome não começa com r pois seu nome é',nome)
}

const sobrenome= "Andrade"

if(sobrenome.length >= 6 || nome.charAt(0) === "E"){
    console.log('Seu sobrenome tem mais de 6 letras pois seu sobrenome é', sobrenome, 'ou seu nome começa com E pois seu nome é', nome)
}else{
    console.log('Seu sobrenome não tem mais de 6 letras pois seu sobrenome é', sobrenome, 'ou seu nome não começa com E pois seu nome é', nome)
}