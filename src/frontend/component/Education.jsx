import React from 'react';

const Education = () => {
  const education = [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "UIET Kanpur (Kanpur University)",
      date: "2022 - 2026",
      result: "8.9 CGPA",
      description: "Focused on Full-Stack Development, AI Engineering, and Cloud Architecture.",
      color: "bg-blue-500",
    },
    {
      title: "Intermediate",
      institution: "St. Joseph Convent School",
      date: "2021 - 2022",
      result: "89%",
      description: "Specialized in PCM (Physics, Chemistry, Maths) with a focus on core logic.",
      color: "bg-purple-500",
    }
  ];

  return (
    <div className='p-32 bg-black'>
        <div className="max-w-[100vw] mx-auto p-8 font-sans bg-black">
      <h2 className="text-6xl font-bold text-white mb-12 text-center">Educational Journey</h2>
      
      <div className="relative border-l-4 border-gray-200 ml-3 md:ml-6">
        {education.map((item, index) => (
          <div key={index} className="mb-12 ml-8 group">
            {/* The Dot/Marker */}
            <div className={`absolute w-5 h-5 ${item.color} rounded-full -left-[12px] ring-4 ring-white group-hover:scale-125 transition-transform duration-200 shadow-sm`}></div>
            
            {/* Date Tag */}
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-white uppercase bg-gray-800 rounded-full">
              {item.date}
            </span>

            {/* Content Card */}
            <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <span className="text-lg font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                  {item.result}
                </span>
              </div>
              
              <h4 className="text-md font-medium text-gray-600 mb-3 italic">
                {item.institution}
              </h4>
              
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Education;