import React from 'react'
import {styled} from "@mui/material";
import {SignUpForm} from "../components/SignUpForm";
import {SignInForm} from "../components/SignInForm";

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
`

export function SignInPage() {

    return (
        <>
            <Wrapper>
                <SignInForm />
                <div style={{ width: '20px'}} />
                <SignUpForm />
            </Wrapper>
        </>
    )
}
