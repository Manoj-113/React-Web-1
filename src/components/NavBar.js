import React from 'react'
import CustomBtn from './CustomBtn'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles';
import logo from '../img/1.png';
import logoMobile from '../img/2.png';

function NavBar() {

    const classes = styles()


    return (
        <Toolbar position = "sticky" color = "rgba(0,0,0,0.87)" className={classes.bar}>
            <img src = {logo} className = {classes.logo}/>
            <img src = {logoMobile} className = {classes.logoMobile}/>
            <Typography variant = "h6" className={classes.menuItem}>
                About
            </Typography>

            <Typography variant = "h6" className={classes.menuItem}>
                Blog
            </Typography>

            <Typography variant = "h6" className={classes.menuItem}>
                Careers
            </Typography>

            <Typography variant = "h6" className={classes.menuItem}>
                Demos
            </Typography>

            <Typography variant = "h6" className={classes.menuItem}>
                Contact Us
            </Typography>

            <CustomBtn txt = "Trial Our Product"/>
        </Toolbar>
    )
}

export default NavBar
