import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = async () => {
    // Add user message to messages
    setMessages([...messages, { text: userInput, type: 'user' }]);
    setUserInput('');

    // Here, make an API call to get the response from your chatbot
    // For the sake of this demo, I'll mock a response.
    const botResponse = "Hello! I'm a bot response."; // Replace with API call response
    setMessages([...messages, { text: userInput, type: 'user' }, { text: botResponse, type: 'bot' }]);
  };

  return (
    <div className="container mt-5">
      <div className="chatbox p-3 bg-light rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={`my-2 ${msg.type === 'bot' ? 'text-primary' : 'text-success'}`}>
            {msg.text}
          </div>
        ))}

        <div className="mt-4">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Ask something..." 
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
