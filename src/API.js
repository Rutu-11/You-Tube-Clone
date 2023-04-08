import axios from "axios";
// console.log(process.env)
const request = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params: {
        // key : `${process.env.REACT_APP_YOU_TUBE_API_KEY}`,
        key:" AIzaSyCPrv7hxxP2iePLygda-rGlq331bIcHlg8"
        // key:"AIzaSyDxwaaLMbi7I98CBFRU08glUMJJmtOsXwg"
    }
    
})

export default request;