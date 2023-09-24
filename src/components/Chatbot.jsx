import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [typingContent, setTypingContent] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const [isBotTyping, setIsBotTyping] = useState(false);
    const greetingMessage = 'Hello! I am Aime, your virtual assistant! I can inspire you to write blog posts or brainstorm! Ask me anything.';

    useEffect(() => {
        if (messages.length === 0 && typingIndex < greetingMessage.length) {
            const timer = setTimeout(() => {
                setTypingIndex(prevIndex => prevIndex + 1);
            }, 25);
            return () => clearTimeout(timer);
        }
        if (isBotTyping && typingIndex < typingContent.length) {
            const timer = setTimeout(() => {
                setTypingIndex(prevIndex => prevIndex + 1);
            }, 50);
            return () => clearTimeout(timer);
        } else if (isBotTyping && typingIndex === typingContent.length) {
            setMessages(prevMessages => [...prevMessages, { text: typingContent, type: 'bot' }]);
            setIsBotTyping(false);
            setTypingContent('');
        }
    }, [typingIndex, isBotTyping]);

    const handleSend = async () => {
        try {
            const currentMessages = [...messages, { text: userInput, type: 'user' }];
            setMessages(currentMessages);
            setUserInput('');
    
            const response = await axios.post('http://localhost:5000/ask', {
                messages: currentMessages.map(msg => ({ role: msg.type, content: msg.text }))
            });
    
            const assistantMessage = response.data.choices[0].message.content;
            
            setTypingContent(assistantMessage);
            setIsBotTyping(true);
            setTypingIndex(0);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="chatbox p-3 bg-light rounded">
                {messages.length === 0 && (
                    <div className="my-2 text-primary">
                        {greetingMessage.substring(0, typingIndex)}
                        <span className="typing-cursor"></span>
                    </div>
                )}

                {messages.map((msg, idx) => (
                    <div key={idx} className={`my-2 ${msg.type === 'bot' ? 'text-primary' : 'text-success'}`}>
                        {msg.text}
                    </div>
                ))}

                {isBotTyping && (
                    <div className="my-2 text-primary">
                        {typingContent.substring(0, typingIndex)}
                        <span className="typing-cursor"></span>
                    </div>
                )}

                <div className="mt-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ask Aime something..."
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
