import serviceApi from "./servicio";
import axios from "axios";

const iniciarSesion = function (usuario,contrasena) {
    sessionStorage.setItem('user',usuario)
    axios({
        url: 'http://localhost:3001/login',
        method: 'post',
        data: {
            query: `mutation{
                 login(usuarioInput:{usuario:"${usuario}",contrasena:"${contrasena}"})
                 }`
        }
    })
        .then(res => {
            switch (res.data.data.login) {
                case 'Usuario no encontrado':
                    alert('Usuario no registrado')
                    break;
                case 'contraseña no válida':
                    alert('contraseña no válida')
                    break;
                default:
                    sessionStorage.setItem('token',res.data.data.login)

            }

        })
        .catch(err => {
            console.log(err.message);
        });
}
const registrar = function (usuario,contrasena) {
    axios({
        url: 'http://localhost:3001/login',
        method: 'post',
        data: {
            query: `mutation{
                    singUp(usuarioInput:{usuario:"${usuario}",contrasena:"${contrasena}"})
                    }`
        }
    })
        .then(res => {
            switch (res.data.data.singUp) {
                case 'Usuario ya registrado':
                    alert('Usuario ya registrado')
                    break;
                default:
                    console.log(JSON.parse(res.data.data.singUp))
                    alert('El usuario quedo registrado')
            }

        })
        .catch(err => {
            console.log(err.message);
        });
}
export {iniciarSesion,registrar};
