import { Button } from "@mui/material";
import React from "react";
import axios from "axios";

export default function ButtonSendQuery() {

    const handleClick = async () => {
        axios("http://localhost:3001/server/index.php", {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }).then(response => {
            console.log(response.data);
          })
    }

    return (
        <>
            <Button
            onClick={handleClick}
            variant="outlined"
            >
                Send Query
            </Button>
        </>
    )
}