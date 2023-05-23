alert("Bienvenido a TiendaTuya");

function ingresoCuenta()
{
let usuario = prompt('Ingrese su nombre de usuario');
let password = prompt('Ingrese su contraseña');

    if((usuario == "Ivan") && (password == "1234"))
    {
        alert( "Usuario correcto, Bienvenido Ivan a TiendaTuya!");
    }else{
            alert("Usuario o Contraseña incorrecta.");
            for(i = 2; i<4;i++){
            let usuario = prompt('Ingrese su nombre de usuario ('+ i +'° intento):');
            let password = prompt('Ingrese la contraseña ('+ i +'° intento):');
                if((usuario == "Ivan") && (password == "1234")){
                    alert( "Usuario Correcto. Bienvenido a TiendaTuya Ivan !");
                }else{
                    alert ('Usuario o Contraseña incorrectos.');
                    break;
              }
            }
    }
}

let total= parseFloat (0);
function sumarTotal(precio)
{
    total = total + precio;
}

function compra()
{
    let compras = prompt("¿Desea sumar productos al carrito?\n Presione 'Si' o 'No'")
    while(compras.toLowerCase() == "si"){   
            let articulo = prompt("¿Qué desea comprar? Tipear números:\n 1. Pantufla Dama \n 2. Pantufla Caballero \n 3. Pantufla Niño \n 4. Zapatillas")
            switch(articulo){
                case "1":
                    alert("Agregaste al carrito Pantufla Dama. El precio es de $4.000");
                    sumarTotal(4000);
                break;
                case "2":
                    alert("Agregaste al carrito Pantufla Caballero. El precio es de $4.000");
                    sumarTotal(4000);
                break;
                case "3":
                    alert("Agregaste al carrito Pantufla Niño. El precio es de $3.500");
                    sumarTotal(3500);
                break;
                case "4":
                    alert("Agregaste al carrito Zapatillas. El precio es de $12.000");
                    sumarTotal(12000);
                break;
                default:
                    alert ("Producto invalido, seleccione otro articulo.");
                break; 
            }  
            compras = prompt("¿Desea comprar otro articulo?")
        }   alert("El precio total de su compra es de $ " + total);
}

ingresoCuenta();
compra();