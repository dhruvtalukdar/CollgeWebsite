import React from 'react'

function Contact() {
  return (
    <div>
      <div className="h-auto p-4 bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600">
            ABC College<br />
            123 College St.<br />
            City, State, ZIP
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Number</h3>
          <p className="text-gray-600">847878XXXX</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Hours</h3>
          <p className="text-gray-600">
            Monday - Friday: 0:00 AM - 0:00 PM<br />
            Saturday: 0:00 AM - 0:00 PM<br />
            Sunday: Closed
          </p>
        </div>

        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Email Us
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
