var nota1, nota2, nota3, nota4, media;
nota1 = parseFloat(prompt("Informe sua nota do primeiro bimestre"));
nota2 = parseFloat(prompt("Informe sua nota do segundo bimestre"));
nota3 = parseFloat(prompt("Informe sua nota do terceiro bimestre"));
nota4 = parseFloat(prompt("Informe sua nota do quarto bimestre"));

media = (nota1 + nota2 + nota3 + nota3) / 4;

//se a nota for maior ou igual a 7, aluno aprovado
if (media >= 7) {

    alert(`Sua nota final é ${media}! Parabéns você passou!`);

}

//se a nota estiver entre 5 e 7, aluno reprovado
else if (media >= 5 || media < 7) {

    alert(`Sua nota final é ${media}! Você ficou de recuperação!`);

}

//se for menor que 5, aluno reprovado
else if (media < 5) {

    alert(`Sua nota final é ${media}! Você reprovou!`);

}

//teste para contribuir  by-thiie
