import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";

import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import EmptyState from "@/app/components/EmptyState";
import { Metadata } from "next";
import { title } from "process";
 
//export async function generateMetada({params}:{params:IParams}){
  //const conversation = await getConversationById(params.conversationId);
  //if(!conversation)return {
   // title:"not found",
  // describtion:"failed to load the page or the page doesnot exist!"
 // }


  //return{
    //title:conversation.name,
   // describtion:"a coversation between two users"
  //}
//}

const ChatId = async ({ params }:{params:{conversationId:string}}) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    )
  }

  return ( 
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
}

export default ChatId;