import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { listarReducer } from "../reducers/listarReducer";
import { categoriaReducer } from "../reducers/categoriasReducer";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { listarPersonalidadReducer } from "../reducers/listarPersonalidadReducer";
import { listarVocacionalReducer } from "../reducers/listarVocacionalReducer";
import { resultListarPersonalidadReducer } from "../reducers/resultListarPersonalidadReducer";
import { resulListarVocacionalReducer } from "../reducers/resultListarVocacionalReducer";
import { resultListarInteligenciaReducer } from "../reducers/resultListarInteligenciaReducer";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  listar: listarReducer,
  listarPersonalidad: listarPersonalidadReducer,
  listarVocacional: listarVocacionalReducer,
  categoria:categoriaReducer,
  listarResultadosPers:resultListarPersonalidadReducer,
  listarResultadosVoca: resulListarVocacionalReducer,
  listarResultadosInt: resultListarInteligenciaReducer
});

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    );

    export default store