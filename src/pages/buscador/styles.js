import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    maindiv: {
        flexGrow: 1,
        padding: theme.spacing(2),
        
    },
    tarjeta: {
        '&:hover': {
            cursor: 'pointer',
        },
    }

}));