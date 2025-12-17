import React, { useEffect, useState, useRef } from 'react';
import { DEMO_MESSAGES } from '../constants';
import { ChatMessage } from '../types';

export const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const startDemo = () => {
      setMessages([]);
      DEMO_MESSAGES.forEach((msg) => {
        const timeout = setTimeout(() => {
          setMessages((prev) => [...prev, msg as ChatMessage]);
        }, msg.delay);
        timeouts.push(timeout);
      });
    };

    startDemo();
    // Loop the demo every 12 seconds
    const interval = setInterval(startDemo, 12000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      {/* Phone Notch */}
      <div className="h-[32px] w-full bg-gray-800 absolute top-0 left-0 z-20 flex justify-center rounded-t-[2rem]">
        <div className="h-[18px] w-[100px] bg-black rounded-b-xl"></div>
      </div>

      {/* Screen Header */}
      <div className="bg-kyber-dark pt-12 pb-4 px-4 border-b border-gray-800 flex items-center gap-3 z-10">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">
          K
        </div>
        <div>
          <p className="text-sm font-bold text-white">Kyber Agent</p>
          <p className="text-[10px] text-gray-400">RCS • Business</p>
        </div>
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black scrollbar-hide">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-800 text-gray-200 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area (Static) */}
      <div className="h-16 bg-gray-900 border-t border-gray-800 flex items-center px-4 gap-2">
        <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
          <span className="text-gray-600 text-lg leading-none">+</span>
        </div>
        <div className="flex-1 h-8 bg-black rounded-full border border-gray-700 px-3 flex items-center text-gray-500 text-xs">
          Text message...
        </div>
      </div>
    </div>
  );
};