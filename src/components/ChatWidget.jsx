import { Bot, MessageCircle, Send, X } from 'lucide-react';
import { useState } from 'react';

const initialMessage = {
  role: 'assistant',
  content: 'أهلًا بك. أنا المساعد الذكي لبروفايل عبدالرحمن. اسألني عن المشاريع أو المهارات أو طريقة التواصل معه.',
};

// Provides a compact visitor chat widget connected to the portfolio backend.
export default function ChatWidget({ language = 'en' }) {
  const isArabic = language === 'ar';
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);

  const sendMessage = async (event) => {
    event.preventDefault();
    const content = input.trim();
    if (!content || sending) return;
    const nextMessages = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setInput('');
    setSending(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Chat unavailable');
      setMessages((current) => [...current, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((current) => [...current, { role: 'assistant', content: isArabic ? 'حصلت مشكلة مؤقتة. تواصل مع عبدالرحمن عبر البريد: abdelrahmanbasuonii@gmail.com' : 'Something went wrong. Please email abdelrahmanbasuonii@gmail.com.' }]);
    } finally {
      setSending(false);
    }
  };

  return <div className="chat-widget">
    {open && <section className="chat-panel" aria-label={isArabic ? 'محادثة مع المساعد' : 'Chat with assistant'}>
      <header className="chat-header"><div><span className="chat-avatar"><Bot size={17} /></span><div><strong>{isArabic ? 'مساعد عبدالرحمن' : 'Abdelrahman assistant'}</strong><small><i /> {isArabic ? 'متاح الآن' : 'Online now'}</small></div></div><button onClick={() => setOpen(false)} aria-label="Close chat"><X size={17} /></button></header>
      <div className="chat-messages">{messages.map((message, index) => <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>{message.content}</div>)}{sending && <div className="chat-message assistant typing">...</div>}</div>
      <form className="chat-form" onSubmit={sendMessage}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder={isArabic ? 'اكتب رسالتك...' : 'Ask about the portfolio...'} aria-label={isArabic ? 'رسالتك' : 'Your message'} /><button type="submit" disabled={sending || !input.trim()} aria-label={isArabic ? 'إرسال' : 'Send'}><Send size={16} /></button></form>
    </section>}
    <button className="chat-launcher" onClick={() => setOpen(!open)} aria-label={isArabic ? 'فتح المحادثة' : 'Open chat'}>{open ? <X size={21} /> : <MessageCircle size={21} />}<span>{isArabic ? 'اسألني' : 'Ask me'}</span></button>
  </div>;
}
