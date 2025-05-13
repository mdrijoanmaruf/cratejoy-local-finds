
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Title component for dynamic page title
const Title = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return null;
};

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Title title="About Us - BoxWave" />
      
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-6">About BoxWave</h1>
            <p className="text-lg text-gray-600 mb-8">
              We're on a mission to bring joy and discovery to your doorstep through thoughtfully curated subscription boxes.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://i.postimg.cc/tgFXwScD/about-team.jpg" 
                alt="Our Team" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                BoxWave started with a simple idea: bring the excitement of discovery back into people's lives. 
                In a world of predictable shopping experiences, we wanted to create moments of surprise and delight.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, our team of passionate curators works tirelessly to source unique, high-quality products 
                that align with our subscribers' interests and values. We believe that the anticipation of receiving a 
                carefully curated box and the joy of discovering what's inside is an experience worth sharing.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to offer a diverse range of subscription boxes that cater to various passions and lifestyles, 
                delivering happiness to doorsteps across the country.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at BoxWave.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Quality First</h3>
              <p className="text-gray-600 text-center">
                We only include products we love and would use ourselves. Every item is tested and evaluated for quality, utility, and joy factor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Personalization</h3>
              <p className="text-gray-600 text-center">
                We believe that one size doesn't fit all. Our curation process takes your preferences and feedback into account to deliver a tailored experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We're committed to reducing our environmental footprint through eco-friendly packaging and partnering with brands that share our values.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">Our Curation Process</h2>
              <ol className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Product Discovery</h3>
                    <p className="text-gray-600">
                      Our team of curators is constantly searching for unique, high-quality products from around the world, 
                      focusing on small businesses, artisans, and innovative brands.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Quality Testing</h3>
                    <p className="text-gray-600">
                      Every product undergoes rigorous testing to ensure it meets our standards for quality, 
                      functionality, and overall value.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Theme Development</h3>
                    <p className="text-gray-600">
                      We design each box around a cohesive theme, ensuring that all products complement each other 
                      and create a meaningful experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Personalization</h3>
                    <p className="text-gray-600">
                      Using customer preferences and feedback, we tailor each box to ensure you receive items 
                      you'll truly love and use.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src="https://i.postimg.cc/J02ZCWLt/curation-process.jpg" 
                alt="Curation Process" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6 text-white">Join the BoxWave Family</h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to experience the joy of curated surprises delivered to your door? 
              Explore our subscription boxes and find the perfect match for your interests.
            </p>
            <a 
              href="/#subscriptions" 
              className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Explore Our Boxes
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
