import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";

export default function Error() {
    var classes = useStyles();

    console.log('Hola');
  
    return (
      <Grid container className={classes.container}>
        <div className={classes.logotype}>
          <img className={classes.logotypeIcon} src={logo} alt="logo" />
          <Typography variant="h3" color="primary" className={classes.logotypeText}>
            Suda Admin
          </Typography>
        </div>
        <Paper classes={{ root: classes.paperRoot }}>
          <Typography
            variant="h1"
            color="primary"
            className={classnames(classes.textRow, classes.errorCode)}
          >
            404
          </Typography>
          <Typography variant="h5" color="primary" className={classes.textRow}>
            Oops. Parece que esta página no existe
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            className={classnames(classes.textRow, classes.safetyText)}
          >
            Tranquilo, nosotros te llevamos a las estrellas
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            size="large"
            className={classes.backButton}
          >
            Ir a las Estrellas
          </Button>
        </Paper>
      </Grid>
    );
  }
  