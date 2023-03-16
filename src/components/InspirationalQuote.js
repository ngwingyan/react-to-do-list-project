// import {useState,useEffect } from "react";
import { useEffect } from "react";



function InspirationalQuote() {
    // const [quote, setQuote] = useState(null);

    //react hook
    useEffect(()=> {
        console.log('Todo');
    },[])


  return <div>This is the InspirationalQuote component.</div>;
}

export default InspirationalQuote;

// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };

// axios
