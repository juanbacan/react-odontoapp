import { 
    BUSQUEDA_CITAS
} from '../../types';

export default (state, action) => {

    switch(action.type){
        case BUSQUEDA_CITAS: 
            return{
                ...state,
                formulario: true
            }
        

        default: 
            return state;
        
    }
}