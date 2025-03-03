"use client";

import React from "react";
import { PairColumnBlock, TestimonialCard } from "@/app/_components";
import { VideoTestimonialOne, VideoTestimonialTwo } from "@/app/_assets";
import { motion } from "framer-motion";
import "./TestimonialSection.scss";

const testimonialDataset = [
  {
    name: "Tomisin Olaofe",
    role: "Future Services Lead, Jaguar Land Rover",
    quote:
      "Our team was amazed by the agility and work ethic of the agency. Their intelligence and dedication were impressive but it was the ability to deeply understand our users, and provide excellent user interfaces that made them stand out. Their willingness to work across multiple stakeholders to clarify key issues and explain things in very easy-to-understand terms made them a great team player",
    avatar:
      "https://res.cloudinary.com/richy-jones/image/upload/v1703514594/tomisin.jpg",
    isVideo: false,
  },
  {
    name: "Femi Ibiwoye",
    role: "Chief Technical Officer, Gradely",
    quote:
      "Their expertise in building a secure, scalable SaaS application stood out from day one. Every architecture decision reflected modern best practices, and their collaborative approach made the entire process seamless. They didn’t just deliver; they became a trusted partner, that I would recommend to anyone.",
    avatar:
      "https://res.cloudinary.com/richy-jones/image/upload/v1736262811/Femi.jpg",
    isVideo: false,
  },
  // {
  //   name: "Smith Johnson",
  //   role: "Product Manager, InnovateX",
  //   quote:
  //     "I can’t recommend this enough. It’s the best investment I’ve made in my professional career. The hands-on approach and real-world applications make this course stand out.",
  //   avatar:
  //     "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
  //   videoThumbnail: VideoTestimonialOne,
  //   isVideo: false,
  // },
  {
    name: "Imole Oluyemi",
    role: "Product Lead, Class54 / Techhaven Africa",
    quote:
      "They're an exceptional engineering agency known for on-time delivery and top-notch quality. They excel at communication and understanding both the technical and business implications of a project. Their passion for user-centered interfaces makes them an ideal collaborator. The team played a crucial role in enhancing our product touchpoints. They consistently deliver high-quality software on time and I cannot recommend them enough, they always exceed expectations.",
    avatar:
      "https://res.cloudinary.com/richy-jones/image/upload/v1703514594/imole.jpg",
    isVideo: false,
  },
  {
    name: "Gerrald Peters",
    role: "Senior Technical Lead, Trac",
    quote:
      "Choosing the right SaaS tech stack can be overwhelming due to too many options available. Deskangle's consultation was a game-changer. They listened, helped us decide on the right strategy, and now we're making more revenue. Book a consultation with them!",
    avatar:
      "https://res.cloudinary.com/richy-jones/image/upload/v1739919381/gerrald_bdl7cb.jpg",
    isVideo: false,
  },
  {
    name: "Oluwaseyi Adelaju",
    role: "Growth Product Manager, SEAMFIX",
    quote:
      "They were exceptionally dedicated to our project. What we valued most was their eye for detail, team collaboration, and objectivity in every task. They are indeed a valuable asset to any SaaS company and provide the perfect strategic partnership.",
    avatar:
      "https://res.cloudinary.com/richy-jones/image/upload/v1703514595/oluwaseyi.jpg",
    isVideo: false,
  },
  // {
  //   name: "Andre Coleman",
  //   role: "Creative director, LogoVerily",
  //   quote:
  //     "From a memorable logo to a relatable brand story, Deskangle's branding experience captured our vision perfectly and helped increase brand recognition by 40%. Would be so proud to recommend.",
  //   avatar:
  //     "https://res.cloudinary.com/richy-jones/image/upload/v1736269719/andre-coleman_1.png",
  //   videoThumbnail: VideoTestimonialTwo,
  //   isVideo: false,
  // },
  {
    name: "Marvelous Enofe",
    role: "Founder, MarvCollections",
    quote:
      "We were struggling to get our website to rank in search results. Deskangle came in and optimized our copy for SEO, using strategic keywords and clear, concise language. As a result, our website traffic has skyrocketed, and we're now reaching a much wider audience. If you're looking to boost your online visibility, they are the partner you need.",
    avatar:
      "https://res.cloudinary.com/richy-jones/image/upload/v1740012291/marvy_aglttc.png",
    isVideo: false,
  },
  // {
  //   name: "William Davis",
  //   role: "Founder, SmartTech Solutions",
  //   quote:
  //     "This course is a must for anyone looking to succeed in today’s competitive market. The focus on technology integration and innovation is particularly relevant for entrepreneurs in the digital space.",
  //   avatar:
  //     "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
  //   isVideo: false,
  // },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <PairColumnBlock title="CLIENT SUCCESS">
        <motion.div
          className="testimonial-title-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <span className="text-white/45">Success in Every Story:</span> From
          concept to creation, we turn visions into impactful realities, driven
          by innovation.
        </motion.div>
      </PairColumnBlock>

      <div className="app-container">
        <div className="testimonial-grid-area">
          {testimonialDataset.map((testimonial: any, index: number) => (
            <div key={index} className="testimonial-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  quote={testimonial.quote}
                  avatar={testimonial.avatar}
                  isVideo={testimonial.isVideo}
                  videoThumbnail={testimonial.videoThumbnail}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
