import { useForm, ValidationError } from '@formspree/react';

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xnpneavg");
  
  if (state.succeeded) {
    return <p className="success-msg">Thanks for your message! I'll get back to you soon.</p>;
  }
  
  return (
    <section id="contact-me">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required/>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required/>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4} placeholder="Your Message" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        
        <button type="submit" disabled={state.submitting} className="submit-btn">
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}