import React from 'react'
import Testimonial from './testimonial';
import { motion } from 'framer-motion';

function Testimonials() {

    const testimonials = [
        {
            text: "Their fintech solutions helped us streamline our transactions with high-level security and efficiency. They are a fantastic team to work with!",
            author: "Amit Verma",
            designation: "" 
        },
        {
            text: "From UI/UX design to full-scale app development, PR Tech exceeded our expectations. The team's attention to detail is remarkable!",
            author: "Sonia Kapoor",
            designation: "EduLearn Pvt. Ltd.",
        },
        {
            text: "We needed a secure and scalable patient management system, and PR Tech delivered exactly what we envisioned. Highly professional and reliable!",
            author: "Dr. Ananya Sharma",
            designation: "Healthcare Solutions",
        },
        {
            text: "PR Tech transformed our online store with a fast, seamless, and user-friendly e-commerce platform. Their expertise in web development is outstanding!",
            author: "Rahul Mehta",
            designation: "CEO of TrendyShop",
        }
    ];

  return (
    <section>
        <div className='container mx-auto my-10'>
          <h2 className='text-3xl font-semibold text-center mb-4'>Testimonials</h2>
          <p className='text-center mb-10'>
            We have worked with the renowned names. We worked with clients from all backgrounds.
          </p>

          {/* Fix: overflow-hidden and w-full */}
          <div className="flex overflow-hidden w-full">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0 content-center mb-8 gap-10"
            >
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  comment={testimonial.text}
                  author={testimonial.author}
                  designation={testimonial.designation}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0 content-center mb-8 gap-10 ml-10"
            >
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  comment={testimonial.text}
                  author={testimonial.author}
                  designation={testimonial.designation}
                />
              ))}
            </motion.div>
          </div>
        </div>
  </section>

  )
}

export default Testimonials