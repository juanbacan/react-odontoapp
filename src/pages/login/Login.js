import React, { useState } from "react";
import {
    Grid,
    CircularProgress,
    Typography,
    Button,
    Tabs,
    Tab,
    TextField,
    Fade,
  } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

import firebase from '../../firebase';

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";
import google from "../../images/google.svg";

const Login = (props) => {

    const classes = useStyles();

    // global
    //var userDispatch = useUserDispatch();

    // local
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeTabId, setActiveTabId] = useState(0);
    const [nameValue, setNameValue] = useState("");
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handleLogin = async () => {
        setIsLoading(true);
        console.log('Ingresando');
        try {
            const usuario = await firebase.login(loginValue, passwordValue);
            console.log(usuario);
            setError(null);
            //Router.push('/');
            console.log('Ingresando');
            props.history.push('/app/dashboard');
        } catch (error) {
            console.error('Hubo un error al autenticar el usuario', error.message);
            setError(error.message);
        }
        setIsLoading(false);
    }

    const handleNewUser = async () => {
        setIsLoading(true);
        console.log('Creando Cuenta')
        try {
            await firebase.registrar(nameValue, loginValue, passwordValue);
            props.history.push('/app/dashboard');
            //Router.push('/');
        } catch (error) {
            console.error('Hubo un error al crear el usuario', error.message);
            setError(error.message);
        }
        setIsLoading(false);
    }

    return (
        <Grid container className={classes.container}>
            <div className={classes.logotypeContainer}>
                <img src={logo} alt="logo" className={classes.logotypeImage} />
                <Typography className={classes.logotypeText}>OdontoSuda</Typography>
            </div>
            <div className={classes.formContainer}>
                <div className={classes.form}>
                <Tabs
                    value={activeTabId}
                    onChange={(e, id) => setActiveTabId(id)}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Login" classes={{ root: classes.tab }} />
                    <Tab label="Nuevo Usuario" classes={{ root: classes.tab }} />
                </Tabs>
                {activeTabId === 0 && (
                    <React.Fragment>
                    <Typography variant="h1" className={classes.greeting}>
                        Buenos días, Usuario
                    </Typography>
      
                    <div className={classes.formDividerContainer}>
                        <div className={classes.formDivider} />
            
                        <div className={classes.formDivider} />
                    </div>

                    <Fade in={error}>
                        <Typography color="secondary" className={classes.errorMessage}>
                            Tu contraseña o password son incorrectas :(
                        </Typography>
                    </Fade>

                    <TextField
                        id="email"
                        InputProps={{
                        classes: {
                            underline: classes.textFieldUnderline,
                            input: classes.textField,
                        },
                        }}
                        value={loginValue}
                        onChange={e => setLoginValue(e.target.value)}
                        margin="normal"
                        placeholder="Email Adress"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        id="password"
                        InputProps={{
                        classes: {
                            underline: classes.textFieldUnderline,
                            input: classes.textField,
                        },
                        }}
                        value={passwordValue}
                        onChange={e => setPasswordValue(e.target.value)}
                        margin="normal"
                        placeholder="Password"
                        type="password"
                        fullWidth
                    />
                    <div className={classes.formButtons}>
                        {isLoading ? (
                        <CircularProgress size={26} className={classes.loginLoader} />
                        ) : (
                        <Button
                            disabled={
                            loginValue.length === 0 || passwordValue.length === 0
                            }
                            onClick={handleLogin}                            
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Login
                        </Button>
                        )}
                        <Button
                        color="primary"
                        size="large"
                        className={classes.forgetButton}
                        >
                        Olvidé mi contraseña
                        </Button>
                    </div>
                    </React.Fragment>
                )}
                {activeTabId === 1 && (
                    <React.Fragment>
                    <Typography variant="h1" className={classes.greeting}>
                        Bienvenido!
                    </Typography>
                    <Typography variant="h2" className={classes.subGreeting}>
                        Crea tu Cuenta
                    </Typography>
                    <Fade in={error}>
                        <Typography color="secondary" className={classes.errorMessage}>
                        Tu contraseña o usuario son incorrectos :(
                        </Typography>
                    </Fade>
                    <TextField
                        id="name"
                        InputProps={{
                        classes: {
                            underline: classes.textFieldUnderline,
                            input: classes.textField,
                        },
                        }}
                        value={nameValue}
                        onChange={e => setNameValue(e.target.value)}
                        margin="normal"
                        placeholder="Nombre Completo"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        id="email"
                        InputProps={{
                        classes: {
                            underline: classes.textFieldUnderline,
                            input: classes.textField,
                        },
                        }}
                        value={loginValue}
                        onChange={e => setLoginValue(e.target.value)}
                        margin="normal"
                        placeholder="Correo Electrónico"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        id="password"
                        InputProps={{
                        classes: {
                            underline: classes.textFieldUnderline,
                            input: classes.textField,
                        },
                        }}
                        value={passwordValue}
                        onChange={e => setPasswordValue(e.target.value)}
                        margin="normal"
                        placeholder="Contraseña"
                        type="password"
                        fullWidth
                    />
                    <div className={classes.creatingButtonContainer}>
                        {isLoading ? (
                        <CircularProgress size={26} />
                        ) : (
                        <Button
                            onClick={handleNewUser}
                            disabled={
                            loginValue.length === 0 ||
                            passwordValue.length === 0 ||
                            nameValue.length === 0
                            }
                            size="large"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.createAccountButton}
                        >
                            Crea tu cuenta
                        </Button>
                        )}
                    </div>
                    <div className={classes.formDividerContainer}>
                        <div className={classes.formDivider} />
   
                        <div className={classes.formDivider} />
                    </div>
                   
                    </React.Fragment>
                )}
                </div>
                <Typography color="primary" className={classes.copyright}>
                © 2021-{new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="http://sudamericano.edu.ec" rel="noopener noreferrer" target="_blank">OdontoSuda</a>, LLC. Todos los derechos reservados.
                </Typography>
            </div>
        </Grid>
    );
}
 
export default withRouter(Login);