import { assets } from '@/assets/assets'
import { useAppContext } from '@/context/AppContext';
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const PromptBox = ({ setIsLoading, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const { user, chats, setChats, selectedChat, setSelectedChat } = useAppContext();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendPrompt(e);
    }
  }

  const sendPrompt = async (e) => {
    // defensive: some callers might not pass an event
    try {
      e?.preventDefault();

      if (!user) return toast.error('Login to send message');
      if (isLoading) return toast.error('Wait for the previous prompt response');

      setIsLoading(true);
      const promptCopy = prompt;
      setPrompt("");

      const userPrompt = {
        role: "user",
        content: promptCopy,
        timestamp: Date.now(),
      };

      // determine chatId (use existing or create temporary)
      const chatId = selectedChat?._id ?? `temp-${Date.now()}`;

      // Optimistic update to chats array (create chat if missing)
      setChats((prevChats) => {
        const prev = prevChats ?? [];
        if (!selectedChat) {
          // create new temporary chat
          const newChat = {
            _id: chatId,
            messages: [userPrompt],
          };
          return [...prev, newChat];
        }
        return prev.map((chat) =>
          chat._id === selectedChat._id
            ? { ...chat, messages: [...(chat.messages ?? []), userPrompt] }
            : chat
        );
      });

      // Optimistic update to selectedChat (defensive)
      setSelectedChat((prev) => {
        const base = prev ?? { _id: chatId, messages: [] };
        return {
          ...base,
          messages: [...(base.messages ?? []), userPrompt],
        };
      });

      // send to backend (use chatId determined above)
      const { data } = await axios.post('/api/chat/ai', {
        chatId,
        prompt: promptCopy,
      });

      if (data.success) {
        // incoming assistant message payload from server
        const assistantPayload = data.data; // expected shape: { role:'assistant', content: '...', timestamp: ... }

        // Update chats: append assistant full payload
        setChats((prevChats) => (prevChats ?? []).map((chat) =>
          chat._id === chatId
            ? { ...chat, messages: [...(chat.messages ?? []), assistantPayload] }
            : chat
        ));

        const message = assistantPayload.content ?? "";
        const messageTokens = message.split(" ");

        // Insert assistant placeholder in selectedChat (if not already)
        setSelectedChat((prev) => {
          const base = prev ?? { _id: chatId, messages: [] };
          const newAssistantPlaceholder = {
            role: 'assistant',
            content: "",
            timestamp: Date.now(),
          };
          return {
            ...base,
            messages: [...(base.messages ?? []), newAssistantPlaceholder],
          };
        });

        // Stream tokens into the last message, replacing the placeholder each tick.
        for (let i = 0; i < messageTokens.length; i++) {
          ((index) => {
            setTimeout(() => {
              const contentSoFar = messageTokens.slice(0, index + 1).join(" ");
              const newAssistant = {
                role: 'assistant',
                content: contentSoFar,
                timestamp: Date.now(),
              };

              setSelectedChat((prev) => {
                const base = prev ?? { messages: [] };
                const msgs = base.messages ?? [];
                // Replace last message (placeholder) with updated assistant content
                const updatedMessages = msgs.length > 0
                  ? [...msgs.slice(0, -1), newAssistant]
                  : [newAssistant];
                return { ...base, messages: updatedMessages };
              });
            }, index * 100); // keep same timing you used
          })(i);
        }
      } else {
        toast.error(data.message || 'Server returned an error');
        setPrompt(promptCopy);
      }
    } catch (error) {
      toast.error(error?.message ?? 'Unknown error');
      // restore prompt text on error
      setPrompt((p) => p || prompt);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={sendPrompt}
      className={`w-full ${selectedChat?.messages?.length > 0 ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
      <textarea
        onKeyDown={handleKeyDown}
        className='outline-none w-full resize-none overflow-hidden break-words bg-transparent'
        rows={2}
        placeholder='ASK ME!!' required
        onChange={(e) => setPrompt(e.target.value)} value={prompt} />

      <div className='flex items-center justify-between text-sm'>
        <div className='flex items-center gap-2'>
          <p className='flex items-center gap-2 text-xs border border-gray-100/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-100/20 transition'>
            Prefect-10 (V1)
          </p>
          <p className='flex items-center gap-2 text-xs border border-gray-100/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-100/20 transition'>
            <Image className='h-5' src={assets.search_icon} alt='' />
            Search
          </p>
        </div>

        <div className='flex items-center gap-2'>
          <Image className='w-4 cursor-pointer' src={assets.pin_icon} alt='' />
          <button type="submit" className={`${prompt ? "bg-primary" : "bg-[#71717a]"} rounded-full p-2 cursor-pointer`}>
            <Image className='w-3.5 aspect-square' src={prompt ? assets.arrow_icon : assets.arrow_icon_dull} alt='' />
          </button>
        </div>
      </div>
    </form>
  )
}

export default PromptBox
