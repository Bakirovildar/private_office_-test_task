import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {setUser} from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './Auth.css'
import {Button, TextField} from "@mui/material";

const Authorization = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const dispatch = useDispatch();
    const {push} = useNavigate();

    const handleLogin = (e, email, password) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/contacts');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <div>
            <h2>Authorization</h2>
            <form action="" className='form'>
                <TextField
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{margin: '30px'}}
                    required
                    id="outlined-required"
                    label="email"
                    type='email'
                />
                <br/>
                <TextField
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    style={{marginBottom: '20px'}}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <br/>
                <Button
                    onClick={(e) => handleLogin(e,email, pass)}
                    className='button'
                    variant="contained"
                    href="#contained-buttons"
                >
                    Войти
                </Button>
            </form>
        </div>
    )
}

export default Authorization