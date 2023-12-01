import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout";

export default function Welcome({level}) {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      
      <div className="chat-header">
        <Logout />
      </div>
      <img src={Robot} alt="" />
      
      <h1>
        Welcome, <span>{userName}!</span>
        <h6>
        <span>There are chats for {level} level.</span>
        </h6>
      </h1>
      <h4>Please select a chat to start messaging.</h4>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 65% 10%;
  gap: 0.1rem;
  overflow: hidden;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 0 0rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 10% 65% 10%;
  }
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
  .chat-header {
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 0 0rem;
    }
  }
  
`;
