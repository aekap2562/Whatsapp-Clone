import React, {useState} from "react";
import styled from 'styled-components';
import Picker from "emoji-picker-react";
import { SearchContainer, SearchInput } from './ContactListComponent';
import { messagesList } from '../mockData';

//TODO: turn these const variables into regular JSX and make classes/ids in a seperate css file
const Container = styled.div`
display: flex; 
flex-direction: column; 
height: 100%;
flex: 3;
background: #f6f7f8;
`;

const ProfileHeader = styled.div`
    display: flex; 
    flex-direction: row; 
    background: #ededed;
    padding: 10px;
    align-items: center;
    gap: 10px;
`; 

const ProfileImage = styled.img`
    width: 32px;
    height: 32px; 
    border-radius: 50%;
`;

const ChatBox = styled.div`
    display: flex; 
    flex-direction: row; 
    background: #f0f0f0; 
    padding: 10px; 
    align-items: center; 
    bottom: 0;
`;

const EmojiImage = styled.img`
    width: 28px; 
    height: 28px;
    opacity: 0.3;
    cursor: pointer;
`;

const MessageContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    height: 100%; 
    background: #e5ddd6;
    overflow-y: auto;
`;

const MessageDiv = styled.div`
    display: flex; 
    margin: 5px 15px; 
    justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
`; 

const Message = styled.div`
    background-color: ${(props) => (props.isYours ? "#daf8cb" : "#FFFFFF")};
    max-width: 50%; 
    color: #303030; 
    padding: 8px 10px; 
    fontsize: 14px; 
    border-radius: 4px;
`; 

const ConversationComponent = (props) => {
    const { selectedChat } = props;
    const [text, setText] = useState("");
    const [pickerIsVisible, setPickerIsVisible] = useState(false);
    const [messageList, setMessageList] = useState(messagesList);

    const onEmojiClick = (event, emojiObject) => {
        setText(text + emojiObject.emoji);
        setPickerIsVisible(false);
    };

    const onEnter = (event) => {
        if (event.key === "Enter"){
            const messages = [...messageList]
            messages.push({
                id: 0,
                messageType: "TEXT", 
                text,
                senderID: 0, 
                addedOn: "12:00 PM",
            }); 
            setMessageList(messages);
            setText("");
        }
    };

    return <Container>
        <ProfileHeader>
            <ProfileImage src={selectedChat.profilePic}></ProfileImage>
            {selectedChat.name}
        </ProfileHeader>
        <MessageContainer>
            {messageList.map((messageData) =>
                <MessageDiv isYours={messageData.senderID === 0}>
                    <Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
                </MessageDiv>
            )}
        </MessageContainer>
        <ChatBox>
            <SearchContainer>
                {pickerIsVisible && (<Picker 
                    pickerStyle={{ position: "absolute", bottom: "60px" }}
                    onEmojiClick={onEmojiClick} 
                />)}
                <EmojiImage src="/smileyFace.svg" onClick={()=> setPickerIsVisible(!pickerIsVisible)}/>
                <SearchInput 
                    placeholder="type message" 
                    onKeyDown={onEnter}
                    value={text} 
                    onChange={(e) => setText(e.target.value)}></SearchInput>
            </SearchContainer>
        </ChatBox>
    </Container>

}

export default ConversationComponent;