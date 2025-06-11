import React, { useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  content: string;
  image: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/image2.jpg",
    content:
      "Elizabeth Ross truly understands my investment objectives and has consistently offered insightful financial advice. Her professionalism has had a remarkable effect on my portfolio's growth.",
    name: "Ashley R",
    rating: 5,
  },
  {
    id: 2,
    image: "/images/image3.jpg",
    content:
      "Elizabeth Ross's depth of knowledge in wealth management is unmatched. Her guidance has been pivotal in helping me grow and safeguard my investments.",
    name: "Amanda B",
    rating: 4,
  },
  {
    id: 3,
    image: "/images/image4.jpg",
    content:
      "I can't recommend Elizabeth Ross enough for business planning. Her strategic approach helped me optimize my finances, leading to increased profits and business growth.",
    name: "Loreta A",
    rating: 5,
  },
  {
    id: 4,
    image: "/images/image5.jpg",
    content:
      "Elizabeth Ross's advice has given me complete confidence in my financial future. She helped me create a diversified portfolio and provided smart tax-saving strategies.",
    name: "Sara M",
    rating: 4,
  },
  {
    id: 5,
    image: "/images/image6.jpg",
    content:
      "Elizabeth Ross’s expert advice has been instrumental in expanding my wealth. Her recommendations are always on point, and I’ve seen consistent financial growth under her guidance.",
    name: "James B",
    rating: 5,
  },
  {
    id: 6,
    image: "/images/image7.jpg",
    content:
      "Elizabeth Ross’s portfolio management skills are exceptional. Her insights have helped me make informed decisions, and I trust her completely with my financial strategy.",
    name: "Peter D",
    rating: 4,
  },
  {
    id: 7,
    image: "/images/image8.jpg",
    content:
      "Elizabeth Ross has been a trusted advisor, guiding me through complex financial decisions with clarity. Her support has been key in achieving my financial milestones.",
    name: "Sophia L",
    rating: 5,
  },
  {
    id: 8,
    image: "/images/image9.jpg",
    content:
      "Elizabeth Ross took the time to understand my unique financial needs and crafted a personalized wealth management plan that perfectly aligns with my long-term goals.",
    name: "Daniel K",
    rating: 4,
  },
  {
    id: 9,
    image: "/images/image10.jpg",
    content:
      "Thanks to Elizabeth Ross's financial wellness program, I’ve eliminated my debt and gained better control over my finances. Her advice has transformed my financial outlook.",
    name: "Caroline M",
    rating: 5,
  },
];


