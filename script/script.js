function rutina(){
    let diaSemana = prompt("Que dia es hoy?");

    switch(diaSemana){
        case "lunes":
            alert("Los lunes te toca pecho papá");
            break;
        case "martes":
            alert("Los martes salis a correr pibe");
            break;
        case "miercoles":
            alert("Los miercoles haces spinnig");
            break;
        case "jueves":
            alert("Los jueves te toca boxeo");
            break;
        case "viernes":
            alert("Los viernes haces biceps");
            break;
        case "sabado":
            alert("Los sabados haces danza en un complejo bailable (guiño guiño)");
            break;
        case "domingo":
            alert("Los domingos salis a caminar");
            break;
        default:
            alert("Tal vez escribiste mal el día, proba de nuevo.");
    }
}

function bucle(){
    for(i=20;i<=70;i++){
        document.write("El numero es: "+i+"<br>");
    }
}

function buclePer(){
    var num=prompt("Ingrese la cantidad de veces que se va a repetir el bucle: ");

    for(i=1;i<=num;i++){
        alert("Hola Mundo Nro: "+i);
    }
}