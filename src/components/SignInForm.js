import {Button, styled, TextField} from "@mui/material";
import React, {useContext, useState} from "react";
import axios from "axios";
import {Auth} from "../context/Auth";

const Form = styled('form')`
  display: flex;
  flex-direction: column;
`
export function SignInForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { token, setToken } = useContext(Auth)

    const validateForm = (e) => {
        e.preventDefault();

        const data = {
            email,
            password,
        }
        sendUserData(data)
    }

    function sendUserData(userData) {
        axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuHsqhY4QZKFs0X487o2bM7ITRnzbYJHU`,
            {
                email: userData.email,
                password: userData.password,
                returnSecureToken: true
            }
        )
            .then((data) => {
                // console.log(data.data.idToken)
                setToken(data.data.idToken)
                localStorage.setItem('idToken', data.data.idToken)
            })
            .catch((error) => {
                console.log({...error})
                alert(`Failed to Authorize. Error message: ${error.response.data.error.message}`)
            })
    }

    return (
        <Form onSubmit={validateForm}>
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small" type="email" label="Email" placeholder="Enter email" required
            />
            <br />
            <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="small" type="password" label="Password" placeholder="Enter password" required />
            <br />
            <Button type="submit" variant="contained">Sign In</Button>
            {token ? 'AUTHORISED' : 'NOT AUTHORISED'}
        </Form>
    )
}
