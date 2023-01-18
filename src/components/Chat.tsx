import { Avatar, Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Row } from "react-grid-system";
import { app, auth, db } from "../config/fbConfig";
import {
  addDoc,
  collection,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Chat = () => {
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    query(collection(db, "messages"), orderBy("createdAt"))
  );

  const sendMessage = async () => {
    user &&
      (await addDoc(collection(db, "messages"), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: serverTimestamp(),
      }));
    setValue("");
    console.log(messages);
  };

  return (
    <Container>
      <Row justify={"center"}>
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        >
          {messages &&
            user &&
            messages.map((message) => (
              <div
                style={{
                  margin: "10",
                  border:
                    user.uid === message.uid
                      ? "2px solid green"
                      : "2px dashed red",
                  marginLeft: user.uid === message.uid ? "auto" : "10px",
                  width: "fit-content",
                  // display: "flex",
                  // alignItems: "center",
                  // justifyContent: "space-between",
                }}
              >
                <Grid container>
                  <Avatar src={message.photoURL} />
                  <div>{message.displayName}</div>
                </Grid>
                <div>{message.text}</div>
              </div>
            ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "80%",
          }}
        >
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant={"outlined"}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </Row>
    </Container>
  );
};

export default Chat;
