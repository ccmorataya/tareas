function shuffle(min, max)
{
    var numero = Math.floor (Math.random() * (max - min +1) + min);
    return numero;
}

function winner()
{

var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

var opcionMaquina = shuffle(0,4);
var opcionUsuario = document.getElementById('player').value;

if(opcionUsuario >=0 && opcionUsuario <5)
        {
            alert("Tu tienes " + opciones[opcionUsuario]);
            alert ("Sheldon usa " + opciones[opcionMaquina]);
        }
        else
        {
            alert("Oops! :O parece que elegiste una opción invalida\nVuelve a intentarlo");
            document.getElementById('player').focus();
        }


if(opcionUsuario == opcionMaquina)
{
    document.getElementById('ganador').innerHTML="Tenemos un empate!";
}
else if(opciones[opcionUsuario] == 'piedra' && opciones[opcionMaquina] == 'spock' ||
                opciones[opcionUsuario] == 'piedra' && opciones[opcionMaquina] == 'papel' ||
                opciones[opcionUsuario] == 'papel' &&  opciones[opcionMaquina] == 'lagarto' ||
                opciones[opcionUsuario] == 'papel' &&  opciones[opcionMaquina] == 'tijera' ||
                opciones[opcionUsuario] == 'tijera' && opciones[opcionMaquina] == 'piedra' ||
                opciones[opcionUsuario] == 'tijera' && opciones[opcionMaquina] == 'spock' ||
                opciones[opcionUsuario] == 'lagarto' && opciones[opcionMaquina] == 'tijera' ||
                opciones[opcionUsuario] == 'lagarto' && opciones[opcionMaquina] == 'piedra' ||
                opciones[opcionUsuario] == 'spock' &&  opciones[opcionMaquina] == 'lagarto' ||
                opciones[opcionUsuario] == 'spock' &&  opciones[opcionMaquina] == 'papel')
    {
    document.getElementById('ganador').innerHTML=":(   Sheldon te ha ganado de nuevo!";
    }
    else if (opciones[opcionUsuario] == 'piedra' && opciones[opcionMaquina] == 'lagarto' ||
            opciones[opcionUsuario] == 'piedra' && opciones[opcionMaquina] == 'tijera' ||
            opciones[opcionUsuario] == 'papel' &&  opciones[opcionMaquina] == 'piedra' ||
            opciones[opcionUsuario] == 'papel' &&  opciones[opcionMaquina] == 'spock' ||
            opciones[opcionUsuario] == 'tijera' && opciones[opcionMaquina] == 'papel' ||
            opciones[opcionUsuario] == 'tijera' && opciones[opcionMaquina] == 'lagarto' ||
            opciones[opcionUsuario] == 'lagarto' && opciones[opcionMaquina] == 'papel' ||
            opciones[opcionUsuario] == 'lagarto' && opciones[opcionMaquina] == 'spock' ||
            opciones[opcionUsuario] == 'spock' &&  opciones[opcionMaquina] == 'tijera' ||
            opciones[opcionUsuario] == 'spock' &&  opciones[opcionMaquina] == 'piedra')
    {
    document.getElementById('ganador').innerHTML="Genial! le has ganado a Sheldon!";
    }
}
