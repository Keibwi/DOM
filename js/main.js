//DATA
let user = [
    [100,	'anna0',	    'white00',	    'Anna Addison',	    '1325 Candy Rd, San Francisco, CA 96123',	'anna.addison@yahoo.com',	3841019535],
    [101,	'carol1',	    'orange01',	    'Carol Campbell',	'1931 Brown St, Gainesville, FL 85321',	    'carol.campbell@aol.com', 	2548952651],
    [102,	'julia2',	    'yellow02',	    'Julia Jones',	    '1622 Seaside St, Seattle, WA 32569',	    'jolie.jones@msn.com',	    3651469235],
    [103,	'irene3',	    'blue03',	    'Irene Everly',	    '1756 East Dr, Houston, TX 28562',	        'irene.everly@gmail.com',	9859423698],
    [104,	'rachel4',	    'red04',	    'Rachel Rose',	    '1465 River Dr, Boston, MA 43625',	        'rachel.rose@hotmail.com',	2945632543],
    [105,	'sophie5',	    'green05',	    'Sophie Sutton',	'1896 West Dr, Portland, OR 65842',	        'sophie.sutton@yahoo.com',	5169525614],
    [106,	'wendy6',	    'purple06',	    'Wendy West',	    '1252 Vine St, Chicago, IL 73215',	        'wendy.west@gmail.com', 	6645936156],
    [106,	'jefuentes',    'gatitos123',   'Jossue Fuentes',   'Colegio Santa Catalina SCL',	            'jefuentes@scl.edu.gt', 	4568443548]
]

//ELEMENTOS DEL DOM
let caja_texto = document.getElementById("caja_texto");
let caja_usuario = document.getElementById("root");

//BOTONES
let boton_siguiente = document.getElementById("bt_siguiente"); 
let boton_anterior = document.getElementById("bt_anterior");
let bt_user = document.getElementById("bt_user");

//USUARIO ACTUALO
let nameUser = 0;
caja_texto.innerHTML = user[nameUser][1]

//FUNCIONES
function siguiente(){
    if(nameUser <=6){
        nameUser++;
        caja_texto.innerHTML = user[nameUser][1];
    }
}
function anterior(){
    if(nameUser >=1){
        nameUser--;
        caja_texto.innerHTML = user[nameUser][1];
    }
}
//EVENTOS
boton_siguiente.addEventListener('click', siguiente);
boton_anterior.addEventListener('click', anterior);

//INERT HTML ROOT
import {user_ob} from './user.js'
function ver(){
    caja_usuario.innerHTML = '<h1>' + user_ob[nameUser].id + '</h1>'+
    '<h1>' + user_ob[nameUser].nikname + '</h1>'+
    '<h1>' + user_ob[nameUser].adress + '</h1>'+
    '<h1>' + user_ob[nameUser].name + '</h1>'+
    '<h1>' + user_ob[nameUser].email + '</h1>'+
    '<h1>' + user_ob[nameUser].phone + '</h1>';
}
bt_user.addEventListener('click', ver);
