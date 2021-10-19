import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import "./styles.css";
import { encodeMoorse, decodeMoorse } from "../translator/encodeDecode"

export default function Translator() {
  const [english, setEnglish] = React.useState("hello");
  const [encodedMoorse, setEncodedMoorse] = React.useState();
  const [moorse, setMoorse] = React.useState("moo moo moo moo ♥ moo ♥ moo mooo moo moo ♥ moo mooo moo moo ♥ mooo mooo mooo ♥");
  const [encodedEnglish, setEncodedEnglish] = React.useState();

  const toMoorse = (e) => {
    console.log(english);
    console.log(encodeMoorse(english.split("")));
    setEncodedMoorse(encodeMoorse(english.split("")));
  };

  const toEnglish = (e) => {
    console.log(moorse.split(/(\s{2})/, 100))
   setEncodedEnglish(decodeMoorse(moorse.split(/(\s{2})/, 100)))
  };


  return (
    <>
      <div className="container">
        <Typography variant="h6" align="center" color="text.primary" paragraph>
          English to Moorse
        </Typography>
        <div className="englishToMoorse">
          <div className="englishInput">
            <TextField
              id="outlined-multiline-static"
              label="English"
              multiline
              rows={5}
              defaultValue="hello"
              onChange={e => setEnglish(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            className="toMoorse"
            onClick={(e) => {
              toMoorse(e);
            }}
          >
            🐮➡️
          </Button>
          <div className="moorseOutput">
            <TextField
              id="outlined-multiline-static"
              label="Moorse Code"
              multiline
              rows={5}
              value={encodedMoorse}
              defaultValue="Translation"
            />
          </div>
        </div>
        <br/>
        <Divider variant="middle" className="divider"/>
        <br/>
        <Typography variant="h6" align="center" color="text.primary" paragraph>
          Moorse to English
        </Typography>
        <div className="moorseToEnglish">
          <div className="moorseInput">
            <TextField
              id="outlined-multiline-static"
              label="Moorse Code"
              multiline
              rows={5}
              defaultValue="moo moo moo moo ♥ moo ♥ moo mooo moo moo ♥ moo mooo moo moo ♥ mooo mooo mooo ♥"
              onChange={e => setMoorse(e.target.value)}
            />
          </div>
          <Button variant="contained" className="toEnglish" onClick={(e) => {toEnglish(e)}}>
            ➡️🐮
          </Button>
          <div className="englishOutput">
            <TextField
              id="outlined-multiline-static"
              label="English"
              multiline
              rows={5}
              defaultValue="Translation"
              value={encodedEnglish}
            />
          </div>
        </div>
      </div>
    </>
  );
}
