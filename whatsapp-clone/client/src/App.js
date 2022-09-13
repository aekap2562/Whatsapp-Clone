import {React, useState} from "react";
import './App.css';
import styled from "styled-components"; 
import ContactListComponent from './components/ContactListComponent';
import ConversationComponent from './components/ConversationComponent';

const Container = styled.div`
  display: flex; 
  flex-direction: row; 
  height: 100vh;
  width: 100%; 
  background: #f8f9fb;
`; 

const Placeholder = styled.div`
  flex: 2;
  display: flex; 
  justify-content: center; 
  flex-direction: column;
  align-items: center; 
  font-size: 14px; 
  color: rgba(0,0,0,0.45);
  gap: 10px;
`;

const ChatPlaceholder = styled.img`
  width: 240px; 
  height: 240px; 
  border-radius: 50%; 
  object-fit: contain; 
`;

function App() {
  const [selectedChat, setSelectedChat] = useState(); 
  return (
  <Container>
    <ContactListComponent setSelectedChat={setSelectedChat}/>
    {selectedChat ? (
      <ConversationComponent selectedChat={selectedChat}/>
    ) : ( 
      <Placeholder>
        <ChatPlaceholder src="/welcome-picture.jpeg" />
        <span style={{fontSize: 32, color: "#525252"}}>Keep your phone connected</span>
        WhatsApp connects to your phone to sync messages. 
      </Placeholder>
    )}
  </Container>
  );
}

export default App;
