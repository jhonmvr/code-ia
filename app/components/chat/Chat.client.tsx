import { Menu } from '../sidebar/Menu';
import { cssTransition } from 'react-toastify';
import { createScopedLogger, renderLogger } from '~/utils/logger';
import React, { useEffect, useRef, useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}
const toastAnimation = cssTransition({
  enter: 'animated fadeInRight',
  exit: 'animated fadeOutRight',
});

const logger = createScopedLogger('Chat');
export const Chat = () => {
const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const assistantMessage: Message = {
      role: 'assistant',
      content: `Echo: ${input.trim()}`,
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput('');
    textareaRef.current?.focus();
  };

  useEffect(() => {
    textareaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <Menu />        
      <h1>Bienvenido a Code IA (Versión Web)</h1>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: 8,
          padding: 16,
          minHeight: 200,
          marginBottom: 16,
          background: '#f9f9f9',
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: 8 }}>
            <strong>{msg.role === 'user' ? 'Tú' : 'Asistente'}:</strong>{' '}
            <span>{msg.content}</span>
          </div>
        ))}
        <div ref={textareaRef} />
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={3}
        style={{ width: '100%', padding: 8, resize: 'none' }}
        placeholder="Escribe tu mensaje..."
      />

      <button
        onClick={sendMessage}
        style={{
          marginTop: 8,
          padding: '0.5rem 1rem',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
        }}
      >
        Enviar
      </button>
    </div>
  );
}