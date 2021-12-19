import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';


import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import Quote from "../component/quote";
import "../quote.css";

const QuotePage = () => {
    
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const [quotesList, setQuotesList] = useState([]);
  

  useEffect(() => {
    renderQuotes();
  }, []);
  const renderQuotes = () => {
    axios
      .get(`/id:/get`)
      .then((res) => {
        setQuotesList(res.data);
        console.log("setQuoteList");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };

  const submitNewQuote = () => {
    console.log(author, quote);
    axios
      .post(`/id:/post`, {
        quote: quote,
        author: author,
      })
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
      

  };

  return (
    <>
      <div className="page">
        <Box
        id="form"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: "flex",
          alignContent: "column",
          justifyContent: "center",
          alignItems: "center",
          
        }}
        noValidate
        autoComplete="off"
        >
          
          <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Quote</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            className="quote"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Quote"
            defaultValue= 
            name="quote" 
            type="text"
            onChange={(event) => {
              setQuote(event.target.value);
              }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Author</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            className="author"
            name="author"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Author"
            onChange={(event) => {
              setAuthor(event.target.value);
              }}
          />
        </FormControl>
        <button
              name="button"
              type="submit"
              onClick={(e) => submitNewQuote(e)}
            >
              Submit
            </button>
        </Box>
        
        
      </div>
    </>
  );
};

export default QuotePage;
