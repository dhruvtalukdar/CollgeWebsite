import SecondPart from "./SecondPart";

const About = () => {
  return (
    <div>
      <div className="p-10 text-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">About Us</h2>

        <div className="space-y-8 text-black">
          <div className="flex flex-col md:flex-row items-start md:space-x-6">
            <p className="flex-grow mb-4">
              It all begins with a small step. The Diocese of Dibrugarh had been on the hunt out for a plot of land from the year 1983 to establish a center of ours at Sivasagar. By the end of 1984, Rev. Fr. Alex Kapiarumala was entrusted with this task. Fr. Alex, aptly called the ‘Pioneer Palter’, visited various people and places in search of a suitable land in and around Sivasagar. Finally, Lt. Adv Mr. Anil Dutta directed Fr. Alex to Mr. Hemo Gogoi of Cherekapar, who, after a lot of negotiation, decided to part with a portion of his land. This plot is situated by the B.G. Road, some 3kms from Sivasagar Town.
            </p>
            <img
              src="src/Pictures/about/Fr alex.jpg"
              alt="Fr Alex"
              className="w-44 h-40 rounded-lg"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:space-x-6">
            <img
              src="src/Pictures/about/sch building foundation.png"
              alt="School Building Foundation"
              className="w-72 h-44 rounded-lg mx-auto my-auto"
            />
            <p className="flex-grow mt-4 md:mt-0">
              Most Rev. Thomas Menaparampil SDB, DD, the then Bishop of the Diocese of Dibrugarh, consented to go ahead with the purchase of the land in the name of the Catholic Church for the purpose of establishing an English Medium School and for other Church functions. The formal opening of the center was done in a public function held at the site on 19.01.1986, attended by a number of local dignitaries. The foundation stone of the permanent structure of the School was laid by most Rev. Thomas Menaparampil SDB, DD in October 1987, and the construction work of the ground floor was completed in March 1989.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:space-x-6">
            <p className="flex-grow mb-4">
              In July 1988, the sisters of the Holy Cross of Chavanod joined the school staff, with Sr. Ragasblvi Michael in 1988 and Sr. Carmeline (Superior) joining the Holy Name family, giving great impetus to the overall functioning of the school. The Holy Cross sisters started with a very humble setup, using a portion of the temporary school shed as their convent. Sr. Selvy and Sr. Elsy were the first batch of sisters to move into the newly built Convent building. The new permanent accommodation for sisters was completed and blessed by most Rev. Thomas Menaparampil SDB, DD, and inaugurated by Lt. Mr. Parag Chaliha, a prominent local citizen and Ex-MP from Sivasagar on 26.12.1990.
            </p>
            <img
              src="src/Pictures/about/convent starting.png"
              alt="Convent Starting"
              className="w-72 h-44 rounded-lg mx-auto my-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:space-x-6">
            <img
              src="src/Pictures/about/IMG_20240731_002831.jpg"
              alt="School Building"
              className="w-72 h-44 rounded-lg mx-auto my-auto"
            />
            <p className="flex-grow mt-4 md:mt-0">
              Fr. Joseph (Joy) Pallikunnel (1992-1999) took up the infrastructure work of the School at a marathon pace. By 1995, the School was blessed with all the necessary facilities, such as a library, a medium-sized playground, staff rooms, separate toilets for boys and girls, and a school boarding. The school organized a study tour for the students to the South for the first time in 1997 under the guidance of Fr. Joy and Mr. Dilip Kr. Das.
            </p>
          </div>

          {/* Additional sections follow the same pattern */}

          <div className="flex flex-col md:flex-row items-start md:space-x-6">
            <p className="flex-grow mb-4">
              To inculcate in the students a spirit of teamwork and cooperation, the students were divided into four houses. The School conducts sports week and various co-curricular activities such as solo and group dance, singing competitions, recitations, extempore speech, debates, science exhibitions, and Parents' Day.
            </p>
            <img
              src="https://via.placeholder.com/150"
              alt="Demo"
              className="w-44 h-40 rounded-lg"
            />
          </div>

          <div className="text-center mt-10">
            <p className="italic">
              “We are confident that with all the necessary facilities placed at the disposal of the students, they will be enabled in the all-round development of Mind, Body, and Spirit. Where there is a will, there is a Way. We exhort the students to develop the will to learn and grow using all the facilities provided to them. ‘Education has limits but learning not!’, be a good learner lifelong.”
            </p>
            <p className="mt-10">
              <b>Written By: Mrs. Runa Sharma, (English Faculty B.Ed, LLB)</b>
            </p>
            <p className="mt-1">
              <b>Edited by: Rev Fr Jose Varghese</b>
            </p>
          </div>
        </div>
      </div>

      <section className="p-1 ml-3 mr-3 bg-gray-100 text-lg w-full">
        <SecondPart />
      </section>
    </div>
  );
};

export default About;
