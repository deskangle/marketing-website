import React from "react";
import { PairColumnBlock, TestimonialCard } from "@/app/_components";
import { VideoTestimonialOne, VideoTestimonialTwo } from "@/app/_assets";
import "./TestimonialSection.scss";

const testimonialDataset = [
  {
    name: "Liam Stevens",
    role: "CEO & Founder, Stevens Tech",
    quote:
      "This is what I wish I had when launching my very first business. Matt has been building communities and businesses at scale for years. I can't imagine a better course, or a better teacher to help entrepreneurs build their brand, community and business.",
    avatar:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    isVideo: false,
  },
  {
    name: "Emily Clark",
    role: "Marketing Specialist, Clark Media",
    quote:
      "The insights I gained here are invaluable. I was able to grow my audience significantly in just a few weeks. The tips on social media strategy alone have revolutionized how I approach campaigns.",
    avatar:
      "https://images.unsplash.com/photo-1706885093496-64e6ff14155e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    isVideo: false,
  },
  {
    name: "Smith Johnson",
    role: "Product Manager, InnovateX",
    quote:
      "I can’t recommend this enough. It’s the best investment I’ve made in my professional career. The hands-on approach and real-world applications make this course stand out.",
    avatar:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    videoThumbnail: VideoTestimonialOne,
    isVideo: true,
  },
  {
    name: "Sophia Williams",
    role: "Creative Director, Artify",
    quote:
      "Taking Matt's class changed my life for the better. Within one week of finishing the program, I signed three new clients with many more interested in working together. This is all thanks to implementing the strategy, tips, and niche focusing taught in Founder OS. Matt sets you up with systems to be not only a better entrepreneur but a better human too. For anyone looking to learn how to improve their online presence, build a business, or find inspiration for content, Matt's course is worth the investment.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    isVideo: false,
  },
  {
    name: "James Brown",
    role: "CTO, TechNova",
    quote:
      "This course provides actionable steps to take your business to the next level. Highly recommended for anyone looking to make a real impact in the tech industry.",
    avatar:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    isVideo: false,
  },
  {
    name: "Olivia Martinez",
    role: "Founder, WellnessWave",
    quote:
      "I’ve taken many courses, but this one stands out for its depth and practical advice. The module on client acquisition alone has helped me expand my client base by 30% in just two months.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    isVideo: false,
  },
  {
    name: "Victoria Carter",
    role: "Growth Hacker, ScaleUp",
    quote:
      "A fantastic program that helped me streamline my processes and achieve more in less time. The techniques for scaling a business were exactly what I needed to hear.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    videoThumbnail: VideoTestimonialTwo,
    isVideo: true,
  },
  {
    name: "Ava Rodriguez",
    role: "Entrepreneur, Ava's Boutique",
    quote:
      "The strategies shared here are a game changer. My business has never been more profitable. The customer engagement strategies alone have increased my repeat customers by 50%.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    isVideo: false,
  },
  {
    name: "William Davis",
    role: "Founder, SmartTech Solutions",
    quote:
      "This course is a must for anyone looking to succeed in today’s competitive market. The focus on technology integration and innovation is particularly relevant for entrepreneurs in the digital space.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
    isVideo: false,
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <PairColumnBlock title="CLIENT SUCCESS">
        <div className="testimonial-title-text">
          <span className="text-white/45">Success in Every Story:</span> From
          concept to creation, we turn visions into impactful realities, driven
          by innovation.
        </div>
      </PairColumnBlock>

      <div className="app-container">
        <div className="testimonial-grid-area">
          {testimonialDataset.map((testimonial: any, index: number) => (
            <div key={index} className="testimonial-col">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                avatar={testimonial.avatar}
                isVideo={testimonial.isVideo}
                videoThumbnail={testimonial.videoThumbnail}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
