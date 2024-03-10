
import { useState } from 'react';
import './ChatBot.scss';
import { IconMessage, IconX } from "@tabler/icons-react"
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-toggle button" onClick={toggleChatBot}>
        {isOpen ? <IconX fill='white' color='white'/> :  <IconMessage fill='white'/>}
      </button>
      {isOpen && (
        <iframe
          title="ChatBot"
          src='https://webchat.botframework.com/embed/vocero-bot/gemini?b=vocero-bot&s=SZN6n2fROfs.tEAptuWELkaXa4BlkLJ2Dt_LIkpb-pEQE4eyJf2NfNo&username=You'
          style={{ minWidth: '400px', width: '100%', minHeight: '500px' }}
        ></iframe>
      )}
    </div>
  );
};

export default ChatBot;
