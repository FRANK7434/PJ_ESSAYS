 
import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaDiscord, FaClipboard, FaCheck, FaCommentAlt } from 'react-icons/fa';

const ContactUs = () => {
  // State to track if text has been copied
  const [copied, setCopied] = useState(false);
  const [copyId,setCopyId]=useState()

  // Function to copy text to clipboard and reset the icon state
  const copyToClipboard = (text,id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setCopyId(id)
      setTimeout(() => setCopied(false), 2000); // Reset the icon back after 2 seconds
    });
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
          Get in Touch
        </h2>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Phone Contact */}
          <div className="flex flex-col items-center">
            <a
              href="tel:+12068653471" 
              className="text-3xl text-gray-700 hover:text-green-500 transition"
              aria-label="Call us"
            >
              <FaPhone />
            </a>
            <p className="mt-2 text-gray-600">Call Us</p>
            <div className="flex items-center space-x-2">
              <a
                href="tel:+12068653471" 
                className="text-gray-700 hover:text-green-500 transition"
              >
                +1(206)865-3471
              </a>
              <button
                onClick={() => copyToClipboard('+19099097204',"dial")} 
                className="text-gray-700 hover:text-green-500"
                aria-label="Copy phone number"
              >
                {(copied && copyId==="dial") ? <FaCheck /> : <FaClipboard />}
              </button>
            </div>
          </div>

          {/* SMS Section */}
          <div className="flex flex-col items-center">
            <a
              href={`sms:+12068653471?body=${encodeURIComponent("Hello there, I need help with my assignment")}`} 
              className="text-3xl text-gray-700 hover:text-green-500 transition"
              aria-label="Chat with us on WhatsApp"
            >
              <FaCommentAlt />
            </a>
            <p className="mt-2 text-gray-600">Text Message</p>
            <div className="flex items-center space-x-2">
              <a
                href={`sms:+12068653471?body=${encodeURIComponent("Hello there, I need help with my assignment")}`} 
                className="text-gray-700 hover:text-green-500 transition"
              >
                +1 (206) 865-3471
              </a>
              <button
                onClick={() => copyToClipboard('+1 (206) 865-3471',"text")} 
                className="text-gray-700 hover:text-green-500"
                aria-label="Copy WhatsApp number"
              >
                {(copied && copyId==="text")? <FaCheck /> : <FaClipboard />}
              </button>
            </div>
          </div>
          {/* WhatsApp Contact */}
          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/+12068653471" 
              className="text-3xl text-gray-700 hover:text-green-500 transition"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <p className="mt-2 text-gray-600">WhatsApp</p>
            <div className="flex items-center space-x-2">
              <a
                href="https://wa.me/+12068653471" 
                className="text-gray-700 hover:text-green-500 transition"
              >
                +1 (206) 865-3471
              </a>
              <button
                onClick={() => copyToClipboard('+12068653471',"whatsapp")} 
                className="text-gray-700 hover:text-green-500"
                aria-label="Copy WhatsApp number"
              >
                {(copied && copyId==="whatsapp")? <FaCheck /> : <FaClipboard />}
              </button>
            </div>
          </div>

          {/* Email Contact */}
          <div className="flex flex-col items-center">
            <a
              href="mailto:Pjay21864@gmail.com" 
              className="text-3xl text-gray-700 hover:text-blue-500 transition"
              aria-label="Send us an email"
            >
              <FaEnvelope />
            </a>
            <p className="mt-2 text-gray-600">Email Us</p>
            <div className="flex items-center space-x-2">
              <a
                href="mailto:Pjay21864@gmail.com" 
                className="text-gray-700 hover:text-blue-500 transition"
              >
                Pjay21864@gmail.com
              </a>
              <button
                onClick={() => copyToClipboard('Pjay21864@gmail.com',"email")} 
                className="text-gray-700 hover:text-blue-500"
                aria-label="Copy email address"
              >
                {(copied && copyId==="email") ? <FaCheck /> : <FaClipboard />}
              </button>
            </div>
          </div>

          {/* Discord Contact */}
          <div className="flex flex-col items-center">
            <a
              href="https://discord.gg/yMVerSGf" 
              className="text-3xl text-gray-700 hover:text-blue-500 transition"
              aria-label="Join us on Discord"
            >
              <FaDiscord />
            </a>
            <p className="mt-2 text-gray-600">Discord</p>
            <div className="flex items-center space-x-2">
              <a
                href="https://discord.gg/yMVerSGf" 
                className="text-gray-700 hover:text-blue-500 transition"
              >
                Join our Discord
              </a>
              <button
                onClick={() => copyToClipboard('https://discord.gg/yMVerSGf',"discord")} 
                className="text-gray-700 hover:text-blue-500"
                aria-label="Copy Discord link"
              >
                {(copied && copyId==="discord") ? <FaCheck /> : <FaClipboard />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;