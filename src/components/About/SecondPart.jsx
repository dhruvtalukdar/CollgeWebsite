import React from "react";

function SecondPart() {
  const schoolPhotos = [
    {
      src: "https://via.placeholder.com/600x400?text=School+Photo+1",
      alt: "School Photo 1",
      description: "Photo 1 description about the history of the school.",
    },
    {
      src: "https://via.placeholder.com/600x400?text=School+Photo+2",
      alt: "School Photo 2",
      description: "Photo 2 description about the history of the school.",
    },
    {
      src: "https://via.placeholder.com/600x400?text=School+Photo+3",
      alt: "School Photo 3",
      description: "Photo 3 description about the history of the school.",
    },
  ];

  const headMistress = {
    src: "https://via.placeholder.com/600x400?text=Head+Mistress+Photo",
    alt: "Head Mistress Photo",
    message:
      "A warm message from the Head Mistress about the school’s values and vision.",
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8 lg:p-12">
        <h1 className="text-4xl font-bold underline mb-12 text-center">
          
        </h1>

        <div className="flex flex-col space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">SCHOOL</h2>
            <p className="text-gray-700 mb-4">
              Below are 1-3 photos with short descriptions about the history of
              the school.
            </p>
            {schoolPhotos.map((photo, index) => (
              <div key={index} className="mb-6">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-half rounded-lg mb-2 hover:scale-105 transition-transform duration-300"
                />
                <p className="text-gray-700">{photo.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">Head mistress</h2>
            <p className="text-gray-700 mb-4">One photo with message</p>
            <div className="mb-6">
              <img
                src={headMistress.src}
                alt={headMistress.alt}
                className="w-half rounded-lg mb-2 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-gray-700">{headMistress.message}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">Our objectives</h2>
            <p className="text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              quis distinctio eaque eligendi incidunt optio, eveniet illo sint
              nesciunt, velit nobis veritatis voluptatum corporis obcaecati
              tempora amet iure vitae ad?
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">
               <span className="">Vision statement</span>
            </h2>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              eveniet rerum a ea aliquid beatae aperiam minus? At magni
              veritatis repellendus molestiae praesentium ducimus, sint earum
              esse? Obcaecati molestiae accusamus voluptate exercitationem!
              Aliquid, consectetur? Itaque, praesentium!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">Rules & regulations</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li className="mb-2">Rule 1: .....................</li>
              <li className="mb-2">Rule 2: ............................</li>
              <li className="mb-2">Rule 3: ..........................</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">School map</h2>
            <img
              src="https://via.placeholder.com/600x400?text=School+Map"
              alt="School Map"
              className="w-half rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPart;
