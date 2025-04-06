// Enhanced WhatsApp Chat Mockup Component with Animation
// This can be added to your index.js file or created as a separate component

import React, { useState, useEffect } from "react";

const AnimatedWhatsAppMockup = ({ translations }) => {
  const t = translations || {};
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "lex",
      text: t.hero?.chatExample1 || "Hello! How are you doing today?",
      delivered: true,
    },
  ]);

  const [typing, setTyping] = useState(false);

  // Animation sequence
  useEffect(() => {
    // User reply after 1 second
    const timer1 = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: 2,
          sender: "user",
          text:
            t.hero?.chatExample2 ||
            "I'm good, thanks! I'm trying to improve my language skills.",
          delivered: true,
        },
      ]);
    }, 1000);

    // Lex typing indicator after 2 seconds
    const timer2 = setTimeout(() => {
      setTyping(true);
    }, 2000);

    // Lex reply after 3.5 seconds
    const timer3 = setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: 3,
          sender: "lex",
          text:
            t.hero?.chatExample3 ||
            "That's great! Let's practice together. I noticed you used \"I'm\" correctly. Well done!",
          delivered: true,
        },
      ]);
    }, 3500);

    // Lex typing again after 5 seconds
    const timer4 = setTimeout(() => {
      setTyping(true);
    }, 5000);

    // Lex sending article after 7 seconds
    const timer5 = setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: 4,
          sender: "lex",
          text:
            t.hero?.chatExampleArticle ||
            "Hey! I think you might find this article interesting. It's about sustainable travel in South America.",
          delivered: true,
          hasArticle: true,
          articleTitle:
            t.hero?.articleTitle || "Sustainable Travel in South America",
          articleSource: "BBC Travel",
        },
      ]);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [t]);

  return (
    <div className="bg-white shadow-xl rounded-2xl w-80 border border-gray-200 overflow-hidden">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] text-white p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center overflow-hidden">
            <span className="text-2xl font-bold text-[#075E54]">L</span>
          </div>
          <div>
            <h3 className="font-medium">Lex</h3>
            <p className="text-xs opacity-75">
              {typing ? "typing..." : t.hero?.online || "Online"}
            </p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-4 h-96 bg-[#E5DDD5] overflow-y-auto flex flex-col space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.sender === "lex"
                ? "self-start bg-white"
                : "self-end bg-[#DCF8C6]"
            } p-3 rounded-lg max-w-[80%] shadow-sm animate-fadeIn`}
          >
            {message.hasArticle && (
              <div className="border-l-4 border-[#075E54] p-2 mb-2 bg-gray-50 rounded">
                <div className="text-xs text-gray-500">
                  {message.articleSource}
                </div>
                <div className="font-medium">{message.articleTitle}</div>
              </div>
            )}
            <p>{message.text}</p>
            <div className="text-right text-xs text-gray-500 mt-1">
              {message.delivered && (
                <span className="inline-block">
                  {message.sender === "user" && (
                    <svg
                      className="h-3 w-3 inline-block"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  )}
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              )}
            </div>
          </div>
        ))}

        {typing && (
          <div className="self-start bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style={{ animationDelay: "600ms" }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedWhatsAppMockup;
