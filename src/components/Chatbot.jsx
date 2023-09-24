import React, { useState, useEffect } from 'react';
import '../App.css';
import OpenAIApi from 'openai';

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
            }, 50);
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
        setMessages(prevMessages => [...prevMessages, { text: userInput, type: 'user' }]);
        setUserInput('');

        // You should replace this mock response with an actual API call to OpenAI.
        const botResponse = "Hello! I'm a bot response.";
        setTypingContent(botResponse);
        setIsBotTyping(true);
        setTypingIndex(0);
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
