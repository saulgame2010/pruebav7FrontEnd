import { createStore } from "vuex";
import { auth } from "./auth.module";
import jsonDocument from './jsonDocument'

const store = createStore({
    modules: {
        auth,
        jsonDocument
    },
});

export default store;