import React from "react";
import './Header.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {useAuth} from "../../hooks/use-auth";

const Header = () => {

    const {isAuth, email} = useAuth()

    return (
        <div className='header'>
            <span className='contacts'>
                    <Button variant="contained" disabled={isAuth ? false : true} color="success" component={Link}  to='/contacts'>
                        Contacts
                    </Button>
            </span>
            <div className='auth'><Button variant="contained" component={Link} to='/login'>Авторизация</Button></div>
        </div>
    )
}

export default Header