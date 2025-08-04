import { FaCode, FaPaintBrush, FaMobileAlt, FaServer, FaLock, FaRocket } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from "react-helmet";

function ServicesPage() {
  return (
    <>
       <Helmet>
          <title>Services - PR Tech</title>
        </Helmet>
        <main className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg sm:text-xl opacity-90">
            We offer end-to-end digital solutions tailored to your business needs. Explore what we do best!
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            <ServiceCard
              icon={<FaCode className="text-4xl text-blue-600" />}
              title="Web Development"
              description="Responsive, secure, and fast websites built using modern frameworks like React, Next.js, and Node.js."
              features={["Frontend & Backend", "SEO Optimization", "CMS Integration", "API Development"]}
            />
            
            <ServiceCard
              icon={<FaPaintBrush className="text-4xl text-pink-500" />}
              title="UI/UX Design"
              description="Pixel-perfect user interfaces and seamless experiences tailored for your audience."
              features={["Wireframes & Prototypes", "Design Systems", "Branding & Identity", "Mobile-first Approach"]}
            />

            <ServiceCard
              icon={<FaMobileAlt className="text-4xl text-green-500" />}
              title="Mobile App Development"
              description="Robust Android & iOS apps using React Native, Flutter, or native tech stacks."
              features={["Cross-platform Apps", "API Integration", "App Store Deployment", "Push Notifications"]}
            />

            <ServiceCard
              icon={<FaServer className="text-4xl text-purple-500" />}
              title="Backend & Database"
              description="Secure and scalable server-side solutions using Node.js, Express, and MongoDB."
              features={["Database Design", "Authentication", "Cloud Integration", "Microservices Architecture"]}
            />

            <ServiceCard
              icon={<FaLock className="text-4xl text-red-600" />}
              title="Security & Compliance"
              description="Protect your business with best practices for data security, encryption, and compliance."
              features={["SSL Setup", "Role-based Access", "OAuth Integration", "GDPR Compliance"]}
            />

            <ServiceCard
              icon={<FaRocket className="text-4xl text-yellow-500" />}
              title="Digital Marketing"
              description="Boost your online presence through SEO, social media, and paid marketing strategies."
              features={["Google Ads", "Social Campaigns", "Content Marketing", "Email Marketing"]}
            />

          </div>
        </div>
      </section>

      {/* Optional Benefits / CTA Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Why Choose Us?</h3>
          <p className="text-gray-700 text-lg mb-8">
            Our team blends creativity with code, strategy with scalability, and vision with execution. 
            We don't just deliver projects, we deliver outcomes.
          </p>
          <a href="/contact" className="inline-block bg-gray-950 text-white py-3 px-6 rounded-full text-lg transition">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
    </>
    
  );
}

export default ServicesPage;



