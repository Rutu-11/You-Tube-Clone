import axios from "axios";

const request = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params: {
        // key : `${process.env.REACT_APP_YOU_TUBE_API_KEY}`,
        key:"AIzaSyCPrv7hxxP2iePLygda-rGlq331bIcHlg8"
    
    }
    
})

export default request;