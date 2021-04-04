import React from 'react';

// components
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Room';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// styles
import useStyles from "./styles";

const Tarjeta = ({asociado}) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {asociado.nombre.slice(0,1)}
                </Avatar>
                }
                title={asociado.consultorio}
                subheader={asociado.nombre}
            />
            <CardMedia
                className={classes.media}
                image={asociado.imagen}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="h1">
                    {`Celular: ${asociado.numero}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h1">
                    {`Dirección: ${asociado.direccion}`}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" href={asociado.facebook} target="_blank">
                <FavoriteIcon />
                </IconButton>

                <IconButton aria-label="share" href={asociado.maps} target="_blank">
                    <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: classes.expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>
                    {asociado.info}
                </Typography>
                
                
                </CardContent>
            </Collapse>
        </Card>
        
    );
}
 
export default Tarjeta;