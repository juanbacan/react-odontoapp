import { makeStyles } from "@material-ui/styles";
import { red } from '@material-ui/core/colors';
import { CenterFocusStrong } from "@material-ui/icons";

export default makeStyles(theme => ({
    root: {
        maxWidth: 350,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
      main: {

      }
}));