import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GoogleLogin } from 'react-google-login';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #0a0e11;
  height: 100vh;
  color: white;
`;

const Header = styled.div`
    color: white; 
    width: 100%; 
    font-weight: bold; 
    background-color: #56bca6; 
    padding: 50px 50px 140px; 
    font-size: 14px;
`;

const CardView = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -80px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 40px;
  flex-wrap: wrap;
`;

const Instructions = styled.div`
  padding: 20px;
  font-size: 16px;
  ol {
    margin: 40px 0;
    color: #525252;
  }
  li {
    margin: 15px 0;
    color: #525252;
  }
`;

const Heading = styled.span`
  font-size: 24px; 
  color: #525252;
`;

const QRCode = styled.img`
  width: 264px;
  height: 264px;
  background-color: white;
`;

const LoginComponent = () => {

    const responseGoogle = (responseData) => {
        console.log(responseData);
    }

    return  <Container>
        <Header>WhatsApp Clone</Header>
        <CardView>
            <Instructions>
                <Heading>
                    To use WhatsApp Clone application: 
                </Heading>
                <ol>
                    <li>You need to sign-in using your Google Account.</li>
                    <li>You can logout anytime.</li>
                    <li>
                        Click on sign-in button to use this WhatsApp Clone.
                    </li>
              </ol>
              <GoogleLogin
                clientId="778759445610-i36bcig41bam0gj782fsqrm5bc4hocmr.apps.googleusercontent.com"
                buttonText="Sign In with Google"
                cookiePolicy={"single_host_origin"}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </Instructions>
            <QRCode src='./qr-placeholder-picture.png'/>
        </CardView>
    </Container>;
};

export default LoginComponent;