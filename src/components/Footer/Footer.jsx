import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white p-6 md:p-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div>
          <h5 className="font-bold mb-2">Curriculum</h5>
          <p>SEBA & ASHEC</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Board</h5>
          <p>Missionary education board</p>
          <p>With address details</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">School Address</h5>
          <p>Office Timing</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Quick Links</h5>
          {/* Add links here */}
        </div>
        <div>
          <h5 className="font-bold mb-2">Developed by Lencho Solutions</h5>
          <p>Copyright, and web link of Lencho Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
