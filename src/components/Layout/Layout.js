import React from 'react';
import {
    Route,
    Switch,
    //Redirect,
    withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
import Icon from '@mdi/react'

//icons
import {
    mdiFacebook as FacebookIcon,
    mdiTwitter as TwitterIcon,
    mdiGithub as GithubIcon,
} from '@mdi/js'

// styles
import useStyles from "./styles";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// pages
import Dashboard from "../../pages/dashboard/Dashboard";
import Buscador from "../../pages/buscador/Buscador";
import DetalleFicha from '../../pages/detalleFicha/detalleFicha';
import Asociados from '../../pages/asociados/Asociados'

// context
import { useLayoutState } from "../../context/LayoutContext";


const Layout = (props) => {

    const classes = useStyles();

    // global
    var layoutState = useLayoutState();

    return (
        <div className={classes.root}>
            <>
                <Header history={props.history} />
                <Sidebar />
                <div
                    className={classnames(classes.content, {
                    [classes.contentShift]: layoutState.isSidebarOpened,
                    })}
                >
                    <div className={classes.fakeToolbar} />

                    <Switch>
                        <Route path="/app/dashboard" component={Dashboard} />
                        <Route path="/app/typography" component={Buscador} />     
                        <Route path="/app/ficha-medica" component={DetalleFicha} /> 
                        <Route path="/app/asociados" component={Asociados} /> 
                         
                    </Switch>

                    <Box
                        mt={5}
                        width={"100%"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent="space-between"
                        >
                        <div>
                            <Link
                            color={'primary'}
                            href={'https://flatlogic.com/'}
                            target={'_blank'}
                            className={classes.link}
                            >
                            Flatlogic
                            </Link>
                            <Link
                            color={'primary'}
                            href={'https://flatlogic.com/about'}
                            target={'_blank'}
                            className={classes.link}
                            >
                            About Us
                            </Link>
                            <Link
                            color={'primary'}
                            href={'https://flatlogic.com/blog'}
                            target={'_blank'}
                            className={classes.link}
                            >
                            Blog
                            </Link>
                        </div>
                        <div>
                            <Link
                            href={'https://www.facebook.com/flatlogic'}
                            target={'_blank'}
                            >
                            <IconButton aria-label="facebook">
                                <Icon
                                path={FacebookIcon}
                                size={1}
                                color="#6E6E6E99"
                                />
                            </IconButton>
                            </Link>
                            <Link
                            href={'https://twitter.com/flatlogic'}
                            target={'_blank'}
                            >
                            <IconButton aria-label="twitter">
                                <Icon
                                path={TwitterIcon}
                                size={1}
                                color="#6E6E6E99"
                                />
                            </IconButton>
                            </Link>
                            <Link
                            href={'https://github.com/flatlogic'}
                            target={'_blank'}
                            >
                            <IconButton
                                aria-label="github"
                                style={{marginRight: -12}}
                            >
                                <Icon
                                path={GithubIcon}
                                size={1}
                                color="#6E6E6E99"
                                />
                            </IconButton>
                            </Link>
                        </div>
                    </Box>
                </div>
            </>
        </div>
    );
}
 
export default withRouter(Layout);