import React from 'react'
import agents from "../assets/images/discussion.jpg";
import Anshu from "../assets/images/01.jpg";
import Mayank from "../assets/images/02.jpg";
import Yash from "../assets/images/03.jpg";

function AboutPage() {

  const members = [
    {
        name: "Anshu",
        position: "Backend Developer",
        Details: "Passionate about building robust, scalable backend systems with clean architecture and efficient logic.",
        image: Anshu,
    },
    {
        name: "Mayank Hirekhan",
        position: "Frontend Developer",
        Details: "Loves creating sleek, user-friendly UI/UX with an artistic twist.",
        image: Mayank,
    },
    {
        name: "Yash Virulkar",
        position: "Full Stack Developer",
        Details: "Enjoys crafting secure and high-performance server-side applications with a focus on clean code and data integrity",
        image: Yash,
    }
  ] 
  return (
    <>
       <div className='bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 px-8'>
        <div className='container mx-auto py-7'>
            <h1 className='text-4xl text-white font-semibold '>About us</h1>
        </div>
      </div>
       <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                
                {/* Left Image */}
                <div className="flex justify-center">
                <img
                    src={agents}
                    alt="People discussing"
                    className="w-full max-w-md rounded shadow-md"
                />
                </div>

                {/* Right Content */}
                <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                    We are brand builders – experts in big<br />
                    thinking, creative ideas and fresh<br />
                    technology solutions.
                </h2>
                <p className="text-gray-700 mb-4">
                   We are a leading software development company dedicated to delivering innovative, high-performance digital solutions. Our team of experts specializes in cutting-edge technologies, ensuring businesses get scalable, secure, and efficient software. 
                </p>
                <p className="text-gray-700 mb-4">
                   From custom web and mobile applications to AI-driven solutions and enterprise software, we provide industry-leading development services that drive success. Our hands-on approach ensures real-world applicability, helping businesses stay ahead in the competitive tech landscape.
                </p>
                <a href="/contact" className="bg-gray-900 text-white font-semibold py-2 px-6 mt-4 rounded">
                    GET STARTED NOW
                </a>
                </div>

            </div>
        </section>

        <section className="bg-gray-50 py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Creative Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                 A passionate team of designers, developers, and strategists crafting powerful digital experiences and branding identities.
                </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {
                members.map((member, index) => (
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-b-4" key={index}>
                        <img
                        src={member.image}
                        alt="Team Member"
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-400 my-2">{member.position}</p>
                        <p className="text-gray-600 text-sm">{member.Details}</p>
                    </div>
                ))
            }
        </div>
    </div>
    </section>
    

    </>
  )
}

export default AboutPage