import { useSocketContext } from "@/context/socketContext"
import { useMessagesStore } from "@/store/useMessages";
import { MessageType } from "@/types";
import { useEffect } from "react";

export const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages,setMessages} = useMessagesStore();

    useEffect(() => {
        socket.on("newMessage",(newMessage:MessageType) => {
            setMessages([...messages,newMessage]);
        });
        return () => socket.off("newMessage")
    },[socket,messages,setMessages])
}