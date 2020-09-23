let name = prompt ("Qual é o seu nome?");
    if (name !== null) {
        alert ("Bem-vindo "+ name +" !");}

    function game (){    
            let q0 = confirm("Você quer mesmo jogar?")
            if(q0 == true) {
            let q1 = prompt ("Qual é a primeira letra do alfabeto? 1)A 2)B 3)C");
                if (q1 === "1") {
                document.querySelector("#q1r").innerHTML = "Questão 1 - Alternativa 1"
                } else {
                document.querySelector("#q1w").innerHTML = "Sua resposta "+ q1 +" - Questão 1 - Alternativa 1"
                }

            let q2 = prompt ("Quantos dias tem um ano? 1)356 2)365 3)366");
                if (q2 === "2") {
                document.querySelector("#q2r").innerHTML = "Questão 2 - Alternativa 2"
                } else {
                document.querySelector("#q2w").innerHTML = "Sua resposta "+ q2 +" - Questão 2 - Alternativa 2"
                }

            let q3 = prompt ("Que dia é o solstício de inverno no hemisfério norte? 1)21/06 2)21/09 3)21/12");
                if (q3 === "3") {
                document.querySelector("#q3r").innerHTML = "Questão 3 - Alternativa 3"
                } else {
                document.querySelector("#q3w").innerHTML = "Sua resposta "+ q3 +" - Questão 3 - Alternativa 3"}
            } 
        }
game ();