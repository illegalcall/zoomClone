import React,{useEffect,useState} from 'react'
import {io} from "socket.io-client"
import {useParams} from 'react-router-dom'
import Video from './Video'
import Peer from 'peerjs';

const Videobox = () => {
    
    const [socket, setSocket] = useState()
    const {id:videoId} = useParams();
    useEffect(()=> {
        const s=io("http://localhost:3001");
        setSocket(s);
        return () => {
          s.disconnect();
        }
      },[])
      useEffect(() => {
        //const peer = new Peer(); 
        if(socket== null)
            return;
        socket.emit('join-room',videoId,10);
        socket.on('user-connected',userId =>{
            console.log("user connercted",userId);
        })
      }, [socket,videoId,peer])
    
    return (
        <div>
            <Video/>
        </div>
    )
}

export default Videobox
