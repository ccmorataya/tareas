function shuffle(min, max)
{
    var numero = Math.floor (Math.random() * (max - min +1) + min);
    return numero;
}

function winner()
{

var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

var opcionMaquina = shuffle(0,4);
var opcionUsuario = parseInt(document.getElementById('player').innerHTML);

alert(typeof(opcionUsuario));
if(opcionUsuario >-1 && opcionUsuario <5)
        {
            alert("Tu tienes " + opciones[opcionUsuario]);
        }
        else
        {
            alert("Elegiste una opción invalida!");
        }

alert ("Sheldon usa " + opciones[opcionMaquina]);

if(opcionUsuario == opcionMaquina)
{
    //alert("Tenemos un empate!");
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
        //alert("Sheldon te ha ganado de nuevo!");
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
        //alert("Le has ganado a Sheldon!");
    }
    else
    {
        //alert("Al parecer no elegiste ninguna opción disponible, que te parece si vuelves a intentarlo\nAtt. Sheldon");
    }
}
