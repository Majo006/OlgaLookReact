import axios from "axios";

const USUARIO_BASE_REST_API_URL = "http://localhost:8083/api/usuario";
const LOGIN_ENDPOINT = "/login";

class UsuarioService {
    getAllUsuario() {
        return axios.get(USUARIO_BASE_REST_API_URL);
    }
    login(correo, contraseña) {
        return axios.post(USUARIO_BASE_REST_API_URL + LOGIN_ENDPOINT, {
            correo: correo,
            contraseña: contraseña
        });
    }
    createUsuario(usuario){
        return axios.post(USUARIO_BASE_REST_API_URL, usuario);
    }
}

const usuarioService = new UsuarioService();
export default usuarioService;
