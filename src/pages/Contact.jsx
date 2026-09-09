import { Check, Code2, ChevronRight, Globe2, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import PageIntro from '../components/PageIntro';

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=abdelrahmanbasuonii%40gmail.com';
const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const submitContactForm = async (event) => {
    event.preventDefault();
    setSending(true);
    setError('');
    try {
      if (!web3FormsAccessKey) throw new Error('MISSING_ACCESS_KEY');
      const formData = new FormData(event.currentTarget);
      formData.append('access_key', web3FormsAccessKey);
      formData.append('from_name', 'Portfolio contact form');
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Web3Forms rejected the message');
      setSent(true);
    } catch (submissionError) {
      setError(submissionError.message === 'MISSING_ACCESS_KEY'
        ? 'Add your Web3Forms access key to a .env file, then restart the dev server.'
        : `Message was not sent: ${submissionError.message}`);
    } finally {
      setSending(false);
    }
  };

  return <>
    <PageIntro eyebrow="06 / Contact" title={<>Have a problem worth <em>solving?</em></>}>
      Tell me what is stuck, what is growing, or what should exist next.
    </PageIntro>
    <section className="contact-layout page-section">
      <div className="contact-aside">
        <p className="large-copy">Good work starts with a generous conversation.</p>
        <p>I usually reply within two working days. No pitch deck required.</p>
        <div className="contact-links">
          <a href={gmailComposeUrl} target="_blank" rel="noreferrer"><Mail size={17} /> abdelrahmanbasuonii@gmail.com</a>
          <a href="https://www.linkedin.com/in/abdelrahman-basuonii-16a011267/" target="_blank" rel="noreferrer"><Globe2 size={17} /> LinkedIn</a>
          <a href="https://github.com/AbdelrahmanBasuonii" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
        </div>
      </div>
      {sent ? (
        <div className="success-panel">
          <div className="success-icon"><Check size={24} /></div>
          <h2>Message received.</h2>
          <p>Your message was sent to my Gmail.</p>
          <button className="text-button" onClick={() => setSent(false)}>Send another note <ChevronRight size={17} /></button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={submitContactForm}>
          <input type="hidden" name="_subject" value="New portfolio message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <label>Your name<input required name="name" placeholder="What should I call you?" /></label>
          <label>Email address<input required name="email" type="email" placeholder="you@company.com" /></label>
          <label>What are we making?<textarea required name="message" rows="5" placeholder="A little context goes a long way..." /></label>
          {error && <p className="form-error">{error}</p>}
          <button className="button button-dark" type="submit" disabled={sending}>{sending ? 'Sending...' : <>Send message <Send size={17} /></>}</button>
        </form>
      )}
    </section>
  </>;
}
