import { useState, useRef, useEffect } from 'react';

type Message = {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
};

const fakeResponses = [
    "I'm an AI assistant here to help you. What can I do for you today?",
    "That's an interesting question. Let me think about that...",
    "Based on my knowledge, I'd suggest considering a few options.",
    "I don't have a definitive answer for that, but I can point you to some resources.",
    'Could you clarify your question? I want to make sure I understand correctly.',
    "Here's what I found on that topic...",
    'That depends on several factors. Let me break it down for you.',
    "I'm sorry, I can't answer that question directly, but I can help with related topics.",
    "Great question! Here's what you need to know...",
    "I've analyzed your request and here's my response...",
];

export default function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial greeting
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: '1',
                    content:
                        "Hello! I'm your AI assistant. How can I help you today?",
                    role: 'assistant',
                    timestamp: new Date(),
                },
            ]);
        }
    }, [messages.length]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputValue,
            role: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        // Simulate AI response after a delay
        setTimeout(
            () => {
                const randomResponse =
                    fakeResponses[
                        Math.floor(Math.random() * fakeResponses.length)
                    ];
                const aiMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    content: randomResponse,
                    role: 'assistant',
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, aiMessage]);
                setIsLoading(false);
            },
            1000 + Math.random() * 2000
        ); // Random delay between 1-3 seconds
    };

    return (
        <div className="flex flex-col h-screen max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gray-800 text-white p-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
                    </svg>
                </div>
                <h1 className="font-semibold">AI Assistant</h1>
            </div>

            {/* Messages container */}
            <div className="flex-1 p-4 overflow-y-auto h-full">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
                                message.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none'
                                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                            }`}
                        >
                            <div className="text-sm">{message.content}</div>
                            <div className="text-xs mt-1 opacity-70 text-right">
                                {message.timestamp.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-gray-200 text-gray-800 rounded-lg rounded-bl-none px-4 py-2 max-w-xs md:max-w-md">
                            <div className="flex space-x-2">
                                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                                <div
                                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                                    style={{ animationDelay: '0.2s' }}
                                ></div>
                                <div
                                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                                    style={{ animationDelay: '0.4s' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <form
                onSubmit={handleSubmit}
                className="p-4 border-t border-gray-200 bg-white"
            >
                <div className="flex">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                        disabled={isLoading || !inputValue.trim()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                    AI assistant may produce inaccurate information about
                    people, places, or facts.
                </p>
            </form>
        </div>
    );
}
