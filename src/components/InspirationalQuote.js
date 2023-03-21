import React, {useState, useEffect} from "react";
import axios from 'axios';

const InspirationalQuote = () => {
    const [quote, setQuote] = useState({text: '', author: ''});

    useEffect(()=> {
        fetchQuote();
    }, []);

      const fetchQuote = async () => {
        try {
          const corsProxy = "https://api.allorigins.win/raw?url=";
          const apiURL = "https://zenquotes.io/api/random";
          const response = await axios.get(corsProxy + apiURL);
          const quoteData = response.data[0];
          setQuote({ text: quoteData.q, author: quoteData.a });
        } catch (error) {
          console.error("Error fetching quote:", error);
        }
      };

    return (
      <div className="inspirational-quote">
        <blockquote>
          &ldquo;{quote.text}&rdquo; &mdash; <footer>{quote.author}</footer>
        </blockquote>
      </div>
    );
}

// function InspirationalQuote () {
//     return (
//         <div className="test">TEST</div>
//     );
// }

export default InspirationalQuote;