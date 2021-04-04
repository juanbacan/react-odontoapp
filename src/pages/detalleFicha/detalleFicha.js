import React, {useState, useContext, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import classnames from 'classnames';
import {
    Grid,
    Box,
    Paper,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
  } from "@material-ui/core";
  import {
     Delete as DeleteIcon,
     Send as SendIcon,
     Warning as WarningIcon
  } from "@material-ui/icons";
// context
import { FirebaseContext } from '../../firebase';

// styles
import useStyles from "./styles";

// componentes
import PageTitle from "../../components/PageTitle/PageTitle";

const DetalleFicha = (props) => {

    // estilos
    const classes = useStyles();

    // locales
    const [ consultarDB, guardarCosultarDB ] = useState(true);
    const [ ficha, guardarFicha ] = useState({
        antecedentes: "",
        cedula: "",
        celular: "",
        edad: "",
        direccion: "",
        email: "",
        motivo: "",
        nombre: "",
        sintomas: ""
    });
    const [ actualizar, setActualizar ] = useState(false);

    const [modalActualizar, setModalActualizar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);

    const [ salir, setSalir ] = useState(false);
    
    const handleClose = () => {
        setModalActualizar(false);
        setModalEliminar(false);
    };

    // Extraer de Usuario
    const{ antecedentes, cedula, celular, edad, direccion, email, motivo, nombre, sintomas } = ficha;

    // parámetros de la URL
    const id = useLocation().search.slice(7);

    // Context de firebase
    const { firebase } = useContext(FirebaseContext); 

    useEffect(() => {
        if(id && consultarDB) {
            console.log(id);      
            const obtenerFicha = async () => {
                const fichaQuery = await firebase.db.collection('citas').doc(id);
                const ficha = await fichaQuery.get();

                if(ficha.exists) {
                    
                    guardarFicha( ficha.data() );
                    guardarCosultarDB(false);            
                    
                } else {
                    //guardarError(true);
                    guardarCosultarDB(false);
                }
            };
            obtenerFicha();
        }
    }, [id]);

    const handleCheck = (event) => {
        setActualizar(event.target.checked);
    }

    const onChange = (e) => {
        if(!actualizar) return;
        guardarFicha({
            ...ficha,
            [e.target.name] : e.target.value
        }); 
    }

    const actualizarFicha = async() => {
        handleClose();  
        try {
            await firebase.db.collection("citas").doc(id).update({
                antecedentes,
                cedula,
                celular,
                edad,
                direccion,
                email,
                motivo,
                nombre,
                sintomas
            })
            console.log(props.history);
            setSalir(true);

        } catch (error) {
            console.log(error);
        }
    }

    const eliminarFicha = async () => {  
        handleClose();   
        try {
            await firebase.db.collection("citas").doc(id).delete();
            setSalir(true);
        } catch (error) {
            console.log(error);
        } 
    }

    useEffect(() => {
        if (salir) {
            props.history.replace("/");
        }
        //handleClose();
        /*return () => {
            cleanup
        }*/
    }, [salir])

    const ModalEventos = ({modal, titulo, mensaje, boton, prueba}) => {
        return (
            <Dialog
                open={modal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className={classes.containerWarning}>
                    <div>
                        <WarningIcon className={classes.iconoWarning} color="secondary"  fontSize="large"/>
                        <DialogTitle id="alert-dialog-title">{titulo}</DialogTitle>
                        <p></p>
                    </div>
                </div>            
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                        {mensaje}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={() => {prueba()}} color="primary" autoFocus>
                        {boton}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    return (
        <>
            <PageTitle 
                title="Ficha Médica" 
            />

            <FormControlLabel
                control={
                <Checkbox
                    checked={actualizar}
                    onChange={handleCheck}
                    name="editar"
                    color="secondary"
                />
                }
                label="Editar Ficha Médica"
            />
            
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <TextField
                            className={classes.campos}
                            autoFocus
                            margin="dense"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={onChange}
                            label="Nombre Completo"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="cedula"
                            name="cedula"
                            value={cedula}
                            onChange={onChange}
                            label="Cédula de Identidad"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="edad"
                            name="edad"
                            value={edad}
                            onChange={onChange}
                            label="Edad"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            className={classes.campos}
                            margin="dense"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            label="Correo Electrónico"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            className={classes.campos}
                            margin="dense"
                            id="celular"
                            name="celular"
                            value={celular}
                            onChange={onChange}
                            label="Celular"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            className={classes.campos}
                            margin="dense"
                            id="direccion"
                            name="direccion"
                            value={direccion}
                            onChange={onChange}
                            label="Dirección"
                            type="text"
                            fullWidth
                        />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <TextField
                            className={classes.campos}
                            id="motivo"
                            name="motivo"
                            value={motivo}
                            onChange={onChange}
                            label="Motivo"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            className={classes.campos}
                            id="antecedentes"
                            name="antecedentes"
                            value={antecedentes}
                            onChange={onChange}
                            label="Antecedentes"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            className={classes.campos}
                            id="sintomas"
                            name="sintomas"
                            value={sintomas}
                            onChange={onChange}
                            label="Síntomas"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                        />
                        </Paper>
                    </Grid>
                </Grid>
            </div> 

            <div className={classes.containerBtn}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => {setModalEliminar(true)}}
                >
                    Delete
                </Button>
                    
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    disabled={!actualizar}
                    onClick={() => {setModalActualizar(true)}}
                >
                    Actualizar
                </Button>
            </div>

            <ModalEventos 
                modal={modalEliminar}
                titulo="Esta a punto de eliminar esta ficha médica"
                mensaje="Una vez eliminada la ficha médica no se podrá recuperar ninguna información del paciente, ¿Esta seguro de eliminar esta ficha médica?"
                boton="Eliminar"
                prueba= {eliminarFicha}
            />
            <ModalEventos 
                modal={modalActualizar}
                titulo="Actualización de ficha médica"
                mensaje="¿Está seguro de que desea actualzar la ficha médica de este paciente?"
                boton="Actualizar"
                prueba= {actualizarFicha}
            />
        </>
    );
}
 
export default DetalleFicha;