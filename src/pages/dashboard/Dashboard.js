import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";

import { ToastContainer, toast } from "react-toastify";


// styles
import useStyles from "./styles";
import "react-toastify/dist/ReactToastify.css";

// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import Table from "./components/Table/Table";

// useEffect
import useCitas from "../../hooks/useCitas";

// context
import { FirebaseContext } from '../../firebase';


export default function Dashboard(props) {
  const classes = useStyles();

  // Context con las operaciones CRUD de firebase
  const { usuario, firebase } = useContext(FirebaseContext);
  
  // Obtenemos todos los productos
  const { citas } = useCitas('creado');

  // Citas del usuario
  const [ citasUser, setCitasUser ] = useState([]);

  // locales
  const [crearFicha, setCrearFicha] = useState(false);

  const [ficha, setFicha] = useState({
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

  // Extraer de Usuario
  const{ antecedentes, cedula, celular, edad, direccion, email, motivo, nombre, sintomas } = ficha;

  // Funciones del Modal
  const handleClickOpen = () => {
    setCrearFicha(true);
  };

  const handleClose = () => {
    setCrearFicha(false);
  };

  // UseEffect
  useEffect(() => {
    if(citas.length <= 0) return;
    //console.log(citas);
    const citasUsuario = [];
    /*citas.map(cita => {
      if(cita.creador.id === usuario.uid){
        citasUsuario.push(cita);
      }
    });*/
    //citasUsuario = citas;
    setCitasUser(citas);
    // eslint-disable-next-line
  }, [citas]);

  // Funciones Formulario
  const onChange = (e) => {
    setFicha({
        ...ficha,
        [e.target.name] : e.target.value
    })
  }

  const crearNuevaCita = () => {
    
    // Validar que no haya campos vacios
    if (antecedentes.trim() === '' || 
        cedula.trim() === '' || 
        celular.trim() === '' || 
        edad.trim() === '' ||
        direccion.trim() === '' ||
        email.trim() === '' ||
        motivo.trim() === '' ||
        nombre.trim() === '' ||
        sintomas.trim() === ''
      ){
      //mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return; 
    }

    // Crear el objeto de nuevo producto
    const fichaMedica = {
      nombre,
      email,
      cedula,
      celular,
      edad,
      direccion,
      antecedentes,
      sintomas,
      motivo,
      creado: Date.now(),
      creador: {
      id: usuario.uid,
      nombre: usuario.displayName,
      },
    }

    try {
      // Insertar en la Base de Datos
      firebase.db.collection('citas').add(fichaMedica);
      handleClose();
      toast.success('Ficha creada con éxito!', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
      
    } catch (error) {
      console.error('Hubo un error al crear la cita', error.message);
      handleClose();
      toast.warn("Error al crear la ficha, inténtelo más tarde", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
      //guardarError(error.message);
    }

  }


  return (
    <>
      <PageTitle 
        title="Dashboard" 
        button={<Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={handleClickOpen}
          >
            Agregar Ficha
          </Button>
        }
      />

      <Grid container spacing={4}>       
        <Grid item xs={12}>
          <Widget
            title="Ficha Médica"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            {citasUser.length > 0 ? 
              (
                <Table data={citasUser} />
              ): null}
          </Widget>
        </Grid>
      </Grid>

      <Dialog open={crearFicha} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="md" fullWidth>
        <DialogTitle id="form-dialog-title">Crear una Nueva Ficha</DialogTitle>
        <DialogContent>
          <DialogContentText>
            LLene toda la información del paciente. Todos los campos son obligatorios.
          </DialogContentText>

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
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={crearNuevaCita} color="primary">
            Crear
          </Button>
        </DialogActions>
      </Dialog>

      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}


