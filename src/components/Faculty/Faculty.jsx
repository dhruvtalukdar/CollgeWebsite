import React from "react";
import SlidingSection from "./SlidingSection";

function Faculty() {
  const facultyData = {
    Guest: [
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
    ],
    Science: [
      {
        name: "Mrs. Dristiraj Das",
        title: "6+ teaching experience",
        EduQua: "Msci Physics",
        Subject: "Physics",
        photo: "src/Pictures/picturesoftheweb/Dristiraj phy.JPG",
      },
      {
        name: "Mr. Dipankar Kayshap",
        title: "7+ teaching experience",
        EduQua: "M.Sc",
        Subject: "Science/Chemistry",
        photo: "src/Pictures/picturesoftheweb/Dipankar kashyap (1).jpg",
      },
      {
        name: "Mrs. Rajashree Chutia",
        title: "6+ teaching experience",
        EduQua: "MCA",
        Subject: "Computer",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Miss.Anamika Borgohain",
        title: "15+ teaching experience",
        EduQua: "M.Sc [Geology], B.Ed",
        Subject: "EVS",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Mr.Bhaskar Gogoi",
        title: "10+ teaching experience",
        EduQua: "M.Sc [Mathametics]",
        Subject: "G.Maths, Adv.Maths",
        photo: "src/Pictures/picturesoftheweb/Bhaskar maths.JPG",
      },
      {
        name: "Mrs.Junmoni Gogoi",
        title: "10+ teaching experience",
        EduQua: "B.Sc, M.Sc [Physics]",
        Subject: "G.Maths, Adv.Maths, Physics",
        photo: "src/Pictures/picturesoftheweb/Junmoni BURAGOHAIN phy.jpg",
      },
      {
        name: "Mrs, Pompy Borah",
        title: "10+ teaching experience",
        EduQua: "B.Sc[Zoology], M.Sc[Zoology], B.Ed ",
        Subject: "Zoology",
        photo: "src/Pictures/picturesoftheweb/Pompy Zoology.JPG",
      },
      {
        name: "Mrs. Minakshi Konwar",
        title: "5+ teaching experience",
        EduQua: "MSCi Biotechnology",
        Subject: "Bontany",
        photo: "src/Pictures/picturesoftheweb/Minakshi Botany.jpg",
      },
    ],
    Arts: [
      {
        name: "Mrs. Labhinaa Chutia",
        title: "6+ teaching experience",
        EduQua: "M.A",
        Subject: "Geography",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Mrs. Binita Borah Mahanata",
        title: "20+ teaching experience",
        EduQua: "M.A [Education]",
        Subject: "Education",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Mr. Debeswar Gogoi",
        title: "12+ teaching experience",
        EduQua: "B.A [History], M.A [History]",
        Subject: "History",
        photo: "src/Pictures/picturesoftheweb/Debeshwar History.JPG",
      },
      {
        name: "Mr. Tapan Kr. Sharma",
        title: "25+ teaching experience",
        EduQua: "B.A [English], M.A [English], B.Ed",
        Subject: "English",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Mr. Lakshyajyoti Mohan",
        title: "1+ teaching experience",
        EduQua: "M.A Assamese, B.Ed",
        Subject: "Assamese",
        photo: "src/Pictures/picturesoftheweb/Lakhsayajyoti Mohan Assamese.jpg",
      },
      {
        name: "Mr. Runa Sharma ",
        title: "16+ teaching experience",
        EduQua: "B.Ed [English], LLB",
        Subject: "English",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Mrs. Sangeeta Chetia",
        title: "15+ teaching experience",
        EduQua: "M.A [Economics], B.Ed",
        Subject: "Economics",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Mrs. Chanchal Sharma",
        title: "10+ teaching experience",
        EduQua: "M.A[Pol.science], M.A[Hindi], M.Phil, B.Ed",
        Subject: "Pol.Science",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Mrs. Jonali Saikia Boruah",
        title: "10+ teaching experience",
        EduQua: "M.A [Assamese]",
        Subject: "Assamese",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Mrs. Sarita Pandey",
        title: "15+  teaching experience",
        EduQua: "M.A [Hindi], B.Ed",
        Subject: "Hindi",
        photo: "https://via.placeholder.com/150",
      },
    ],
  };

  return (
    <div>
      <section>
        <div>
          <SlidingSection />
        </div>
      </section>
      <div className="bg-gray-100 p-6 md:p-32 lg:p-30 h-auto">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
            Meet Our Teachers
          </h1>

          {/* Guest Faculty Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">
              Guest Faculty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyData.Guest.map((faculty, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <img
                    src={faculty.photo}
                    alt={faculty.name}
                    className="w-52 h-42 object-cover mx-auto mb-2"
                  />
                  <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
                  <p className="text-lg mb-2">{faculty.title}</p>
                  <p className="text-lg mb-2">{faculty.Subject}</p>
                  <p className="text-lg mb-2">{faculty.EduQua}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Science Faculty Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">
              Science Faculty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyData.Science.map((faculty, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <img
                    src={faculty.photo}
                    alt={faculty.name}
                    className="w-52 h-42 object-cover mx-auto mb-2"
                  />
                  <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
                  <p className="text-lg mb-2">{faculty.title}</p>
                  <p className="text-lg mb-2">{faculty.Subject}</p>
                  <p className="text-lg mb-2">{faculty.EduQua}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Arts Faculty Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">
              Arts Faculty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyData.Arts.map((faculty, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <img
                    src={faculty.photo}
                    alt={faculty.name}
                    className="w-52 h-42 object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
                  <p className="text-lg mb-2">{faculty.title}</p>
                  <p className="text-lg mb-2">{faculty.Subject}</p>
                  <p className="text-lg mb-2">{faculty.EduQua}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
