import React from 'react';

// componentes
import {
    Grid
  } from "@material-ui/core";

import PageTitle from "../../components/PageTitle/PageTitle";
import Tarjeta from './Tarjeta';


// 

// styles
import useStyles from "./styles";

const Asociados = () => {

    const classes = useStyles();

    const asociados = [
        {  
            facebook: "https://facebook.com",
            nombre: "Daniela Verónica Mendieta Flores",
            numero: "0984655965",
            consultorio: "Odontoctik",
            direccion: "Av. 12 de Abril (Sector Coliseo Mayor)",
            imagen: "https://i.pinimg.com/originals/31/be/2c/31be2cb1c0d919f2a3277a71fd149b8b.jpg",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus lobortis ultrices. Praesent velit felis, mattis ut bibendum a, pulvinar nec ligula. Quisque ultrices id enim vitae aliquet. Curabitur ac lacus magna. Mauris ornare et neque dignissim vulputate. Nulla id odio accumsan, dictum metus vel, iaculis lectus. Nam urna lectus, tempus et rhoncus quis, consequat a velit.",
            maps: "https://www.google.com.ec/maps/place/Chinatown/@-2.900816,-79.0016537,16z/data=!4m5!3m4!1s0x91cd19c2800380dd:0xd3c9160d771049f0!8m2!3d-2.8999011!4d-79.0034681"
        },
        {
            facebook: "https://facebook.com",
            nombre: "Sonia Anaís Soto LLoverz",
            numero: "0958913367",
            consultorio: "Dentine",
            direccion: "Av. Guapondelig y Eloy Alfaro",
            imagen: "https://www.odontologos.mx/noticias/noticias/poderdelcolor_interna.jpg",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus lobortis ultrices. Praesent velit felis, mattis ut bibendum a, pulvinar nec ligula. Quisque ultrices id enim vitae aliquet. Curabitur ac lacus magna. Mauris ornare et neque dignissim vulputate. Nulla id odio accumsan, dictum metus vel, iaculis lectus. Nam urna lectus, tempus et rhoncus quis, consequat a velit.",
            maps: "https://www.google.com.ec/maps/place/Chinatown/@-2.900816,-79.0016537,16z/data=!4m5!3m4!1s0x91cd19c2800380dd:0xd3c9160d771049f0!8m2!3d-2.8999011!4d-79.0034681"
        },
        {
            facebook: "https://facebook.com",
            nombre: "Alexandro Ditrolia",
            numero: "0987766096",
            consultorio: "Ortoplus",
            direccion: "Roberto Crespo y Eduardo Arias",
            imagen: "https://i.pinimg.com/originals/31/be/2c/31be2cb1c0d919f2a3277a71fd149b8b.jpg",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus lobortis ultrices. Praesent velit felis, mattis ut bibendum a, pulvinar nec ligula. Quisque ultrices id enim vitae aliquet. Curabitur ac lacus magna. Mauris ornare et neque dignissim vulputate. Nulla id odio accumsan, dictum metus vel, iaculis lectus. Nam urna lectus, tempus et rhoncus quis, consequat a velit.",
            maps: "https://www.google.com.ec/maps/place/Chinatown/@-2.900816,-79.0016537,16z/data=!4m5!3m4!1s0x91cd19c2800380dd:0xd3c9160d771049f0!8m2!3d-2.8999011!4d-79.0034681"
        },
        {
            facebook: "https://facebook.com",
            nombre: "Adriana Ximena Medina Hoyos",
            numero: "0981228689",
            consultorio: "Odontología Integral",
            direccion: "Quinta Chica",
            imagen: "https://www.odontologos.mx/noticias/noticias/poderdelcolor_interna.jpg",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus lobortis ultrices. Praesent velit felis, mattis ut bibendum a, pulvinar nec ligula. Quisque ultrices id enim vitae aliquet. Curabitur ac lacus magna. Mauris ornare et neque dignissim vulputate. Nulla id odio accumsan, dictum metus vel, iaculis lectus. Nam urna lectus, tempus et rhoncus quis, consequat a velit.",
            maps: "https://www.google.com.ec/maps/place/Chinatown/@-2.900816,-79.0016537,16z/data=!4m5!3m4!1s0x91cd19c2800380dd:0xd3c9160d771049f0!8m2!3d-2.8999011!4d-79.0034681"

        },
        {
            facebook: "https://facebook.com",
            nombre: "Adriana Ximena Medina Hoyos",
            numero: "0981228689",
            consultorio: "Odontología Integral",
            direccion: "Quinta Chica",
            imagen: "https://www.odontologos.mx/noticias/noticias/poderdelcolor_interna.jpg",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus lobortis ultrices. Praesent velit felis, mattis ut bibendum a, pulvinar nec ligula. Quisque ultrices id enim vitae aliquet. Curabitur ac lacus magna. Mauris ornare et neque dignissim vulputate. Nulla id odio accumsan, dictum metus vel, iaculis lectus. Nam urna lectus, tempus et rhoncus quis, consequat a velit.",
            maps: "https://www.google.com.ec/maps/place/Chinatown/@-2.900816,-79.0016537,16z/data=!4m5!3m4!1s0x91cd19c2800380dd:0xd3c9160d771049f0!8m2!3d-2.8999011!4d-79.0034681"

        },
        {
            facebook: "https://facebook.com",
            nombre: "Adriana Ximena Medina Hoyos",
            numero: "0981228689",
            consultorio: "Odontología Integral",
            direccion: "Quinta Chica",
            imagen: "https://www.odontologos.mx/noticias/noticias/poderdelcolor_interna.jpg",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus lobortis ultrices. Praesent velit felis, mattis ut bibendum a, pulvinar nec ligula. Quisque ultrices id enim vitae aliquet. Curabitur ac lacus magna. Mauris ornare et neque dignissim vulputate. Nulla id odio accumsan, dictum metus vel, iaculis lectus. Nam urna lectus, tempus et rhoncus quis, consequat a velit.",
            maps: "https://www.google.com.ec/maps/place/Chinatown/@-2.900816,-79.0016537,16z/data=!4m5!3m4!1s0x91cd19c2800380dd:0xd3c9160d771049f0!8m2!3d-2.8999011!4d-79.0034681"

        }
    ]

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <PageTitle 
                title="Asociados" 
            />

            <div className={classes.main}>
                <div>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {asociados.map((asociado, index) => (
                            <Grid item  key={index}>
                                <Tarjeta 
                                    asociado={asociado}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    
                </div>              
                
            </div>
            
        </>
    );
}
 
export default Asociados;