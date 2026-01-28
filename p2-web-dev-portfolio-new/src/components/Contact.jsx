import { useState } from 'react';
import { sendEmail } from '../config/emailjs.js';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white mb-12 text-center relative inline-block mx-auto" style={{fontFamily: 'Poppins'}}>Get In Touch
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-linear-to-r from-transparent via-amber-400 to-transparent" style={{width: '120%'}}></div>
        </h2>

        {success && (
          <div className="mb-6 p-4 bg-green-900/30 text-green-400 rounded-lg border border-green-700">
            Message sent successfully! ✓
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-200 rounded-lg focus:outline-none focus:border-gray-500 transition placeholder-gray-500"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-200 rounded-lg focus:outline-none focus:border-gray-500 transition placeholder-gray-500"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-gray-200 rounded-lg focus:outline-none focus:border-gray-500 transition resize-none placeholder-gray-500"
              placeholder="Your message..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Email Link */}
        <div className="mt-8 text-center">
          <a 
            href="mailto:russellferrero00@gmail.com" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition duration-300 cursor-pointer"
          >
            <HiOutlineMail size={20} />
            <span>russellferrero00@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;