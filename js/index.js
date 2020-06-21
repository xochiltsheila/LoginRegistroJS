const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario= document.getElementById('formLogin');


formulario.addEventListener('submit', login);

function login(e){
    e.preventDefault();

    let usuarioVal = usuario.Value;
    let passwordVal = password.Value;

    if(usuarioVal == '' || passwordVal == ''){
        creaMensaje('verifica tus campos', 'danger');
        return;
    }

    if(localStorage.setItem('usuario')){
        let objeto = JSON.parse(localStorage.setItem('usuario'));

        if( usuarioVal == objeto.user && passwordVal == objeto.pass ){
            creaMensaje('login Correcto', 'sucess');
            localStorage.setItem('sesion', 'activa');
            setTimeout(function(){
                window.open('./inicio.html', '_self')
            },2000);
        } else {
            creaMensaje('usuario Incorrecto', 'danger');
        }
    } else {
        creaMensaje('No hay registros', 'danger');
    }
}