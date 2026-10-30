import React from 'react';

const ContactSection = () => {
  const contacts = [
    {
      name: "Email",
      value: "harshitsharma1147@gmail.com",
      link: "mailto:harshitsharma1147@gmail.com",
      color: "text-red-500",
      bg: "bg-red-50",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      value: "ZenoZeus",
      link: "https://github.com/ZenoZeus",
      color: "text-gray-900",
      bg: "bg-gray-100",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      value: "Harshit Sharma",
      link: "https://www.linkedin.com/in/harshit-sharma-a1515a275/", // Replace with your actual handle
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    }
  ];

  return (
    <div className='bg-black'>
      <section className=" py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-500 sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-green-600">
            I'm currently looking for new opportunities in Kanpur or Remote.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Animated Background Blob */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-[3] ${contact.bg}`}></div>

              <div className={`p-4 rounded-xl mb-4 transition-colors duration-300 ${contact.bg} ${contact.color}`}>
                {contact.icon}
              </div>

              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">
                {contact.name}
              </h3>
              
              <span className="text-gray-900 font-bold text-center break-all text-sm sm:text-base px-2">
                {contact.value}
              </span>

              {/* "Visit" Arrow indicator */}
              <div className="mt-4 flex items-center text-xs font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                OPEN LINK
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Status */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-full border border-green-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-800">Open for new projects</span>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactSection;