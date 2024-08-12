import React, { useState } from 'react'

function After10th() {
    
        const [selectedCategory, setSelectedCategory] = useState('Science');
        
        const courses = {
          Science: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science'],
          Commerce: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'Informatics Practices'],
          Arts: ['History', 'Geography', 'Political Science', 'Sociology', 'Psychology']
    };
      
  return (
    <div>
       <section className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto p-5 lg:p-10">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-green-900">
            Course Offerings after 10th "Higher Secondary"
          </h1>

          <div className="flex flex-col md:flex-row justify-center mb-8">
            {Object.keys(courses).map((category) => (
              <button
                key={category}
                className={`m-2 px-6 py-3 rounded-full font-semibold text-white transition duration-300 ease-in-out transform ${
                  selectedCategory === category
                    ? "bg-orange-800 hover:bg-orange-900 scale-105"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-center text-green-900">
              Subjects Offered in {selectedCategory} for (11th - 12th)
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              {courses[selectedCategory].map((subject, index) => (
                <li key={index} className="text-green-700 font-medium">
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default After10th
