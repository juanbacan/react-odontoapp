import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography, 
    Avatar
  } from "@material-ui/core";

// Fechas
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

// componentes
import PageTitle from "../../components/PageTitle/PageTitle";

// styles
import useStyles from "./styles";
// useEffect
import useCitas from "../../hooks/useCitas";

// context
import { FirebaseContext } from '../../firebase';


const Buscador = (props) => {
    const classes = useStyles();

    const location = useLocation();
    // Context con las operaciones CRUD de firebase
    const { usuario } = useContext(FirebaseContext);
    // Obtenemos todos los productos
    const { citas } = useCitas('creado');
    // Citas del usuario
    const [ citasUser, setCitasUser ] = useState([]);

    // UseEffect
    useEffect(() => {
        if(citas.length <= 0) return;
        const citasUsuario = [];
        citas.map(cita => {
        if(cita.creador.id === usuario.uid){
            citasUsuario.push(cita);
        }
        });
        const busqueda = location.search.slice(10);
        const busquedaFinal = busqueda.toLocaleLowerCase();
        const filtro = citasUsuario.filter(cita => {
            return(
                cita.cedula.toLocaleLowerCase().includes(busquedaFinal)
            );
        });
        setCitasUser(filtro);
        // eslint-disable-next-line
    }, [location, citas]);

    const detallarFicha = (id) => {
        console.log(id);
        props.history.push(
        {
            pathname: '/app/ficha-medica',
            search: `?ficha=${id}`,
        });
    }

    return (
        <>
            <PageTitle 
                title="Búsqueda de Fichas" 
            />

            <div className={classes.root}>
                                
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {citasUser.map(cita => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={cita.id}>
                            <Card
                                className={classes.tarjeta}
                                onClick={() => {detallarFicha(cita.id)}}
                            >
                                <CardHeader
                                    title={cita.nombre}
                                    subheader={`Creado hace : ${formatDistanceToNow(new Date(cita.creado), {locale: es})}`}
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            {cita.nombre.slice(0,1)}
                                        </Avatar>
                                    }
                                />    
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {cita.cedula}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}
 
export default Buscador;