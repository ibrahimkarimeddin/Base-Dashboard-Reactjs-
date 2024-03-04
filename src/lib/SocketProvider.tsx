
import { Socket, io } from 'socket.io-client';
import { TOKEN_KEY_SOCKET } from '../config/AppKey';


export const BASE_URL_SOCKET  = 'http://192.168.1.14:8001/';
var socket :Socket | null  =  null ;


function InitSocket(){

    

    if (!socket){
         socket =  io(BASE_URL_SOCKET , {
            transports:['websocket'],
            autoConnect:true,
            query:{
                token:localStorage.getItem(TOKEN_KEY_SOCKET),
               
            }
         });
    }
}

export const disconnectSocket = ()=>{
    
    socket?.disconnect();
    socket = null;
}
export const getScoket = ()=>{

    InitSocket();
    return socket;
}


