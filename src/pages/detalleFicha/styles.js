import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  rootdiv: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  campos: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  grow: {
    flexGrow: 1,
  },

  containerBtn: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(5),
  },

  boton1: {
    marginTop: theme.spacing(10),
  },

  boton2: {
    marginLeft: theme.spacing(5)
  },
  
  containerWarning:{
    textAlign: "center",
  },
  iconoWarning: {
    marginTop: theme.spacing(2),
    width: "60px",
    height: "60px"
  }

}));
