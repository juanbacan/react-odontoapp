import React from 'react';
import citasContext from './citasContext';
import citasReducer from './citasReducer';
import { useReducer } from 'react';

import { 
    BUSQUEDA_CITAS
} from '../../types';

const ProyectoState = props => {

    const initialState = {
        busquedaCitas : [],

    }


    return (
        <proyectoContext.Provider
            value={{
                busquedaCitas: state.busquedaCitas,
                
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;