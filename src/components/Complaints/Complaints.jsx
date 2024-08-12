import React, { useState } from 'react';
import axios from 'axios';

function Complaints() {
  const [guardianComplaint, setGuardianComplaint] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [parentOf, setParentOf] = useState('');
  const [guardianEmail, setGuardianEmail] = useState('');

  // const [studentComplaint, setStudentComplaint] = useState('');
  // const [studentName, setStudentName] = useState('');
  // const [studentClass, setStudentClass] = useState('');
  // const [studentSection, setStudentSection] = useState('');
  // const [studentRollNo, setStudentRollNo] = useState('');
  // const [studentEmail, setStudentEmail] = useState('');

  const handleGuardianSubmit = async (e) => {
    e.preventDefault();

    const guardianData = {
      name: guardianName,
      parentOf,
      email: guardianEmail,
      complaint: guardianComplaint,
    };

    try {
      await axios.post('', guardianData);  // yeha pe api dalo (Enter API)
      alert('Guardian complaint submitted successfully');
      setGuardianName('');
      setParentOf('');
      setGuardianEmail('');
      setGuardianComplaint('');
    } catch (error) {
      console.error('Error submitting guardian complaint:', error);
      alert('Failed to submit guardian complaint');
    }
  };

  // const handleStudentSubmit = async (e) => {
  //   e.preventDefault();

  //   const studentData = {
  //     name: studentName,
  //     class: studentClass,
  //     section: studentSection,
  //     rollNo: studentRollNo,
  //     email: studentEmail,
  //     complaint: studentComplaint,
  //   };

  //   try {
  //     await axios.post('', studentData); // Enter API (yeha pe api dalo)
  //     alert('Student complaint submitted successfully');
  //     setStudentName('');
  //     setStudentClass('');
  //     setStudentSection('');
  //     setStudentRollNo('');
  //     setStudentEmail('');
  //     setStudentComplaint('');
  //   } catch (error) {
  //     console.error('Error submitting student complaint:', error);
  //     alert('Failed to submit student complaint');
  //   }
  // };

  return (
    <div>
      <section className="bg-gray-200 text-gray-800 p-10">
        <div className="container mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-center mb-10">Suggestions</h2>

          <div className="  md:grid-cols-2 gap-10 justify-center">
            {/* Guardian Complaint Box */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Guardians' Suggestions Box</h3>
              <form onSubmit={handleGuardianSubmit} className="space-y-4">
                <textarea
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  rows="11"
                  placeholder="Enter your complaint/suggestion here..."
                  value={guardianComplaint}
                  onChange={(e) => setGuardianComplaint(e.target.value)}
                ></textarea>
                <input
                  type="text"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  value={guardianName}
                  onChange={(e) => setGuardianName(e.target.value)}
                />
                <input
                  type="text"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Parent of"
                  value={parentOf}
                  onChange={(e) => setParentOf(e.target.value)}
                />
                <input
                  type="email"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email (optional)"
                  value={guardianEmail}
                  onChange={(e) => setGuardianEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Student Complaint Box */}
            {/* <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Students' Complaint Box</h3>
              <form onSubmit={handleStudentSubmit} className="space-y-4">
                <textarea
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Enter your complaint/suggestion here..."
                  value={studentComplaint}
                  onChange={(e) => setStudentComplaint(e.target.value)}
                ></textarea>
                <input
                  type="text"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Student Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
                <input
                  type="text"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Class"
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                />
                <input
                  type="text"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Section"
                  value={studentSection}
                  onChange={(e) => setStudentSection(e.target.value)}
                />
                <input
                  type="text"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Roll No"
                  value={studentRollNo}
                  onChange={(e) => setStudentRollNo(e.target.value)}
                />
                <input
                  type="email"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email (optional)"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Complaints;
