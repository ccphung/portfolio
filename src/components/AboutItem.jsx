import React from 'react';

import { BiBookAlt, BiBookBookmark } from 'react-icons/bi';
import { RiReactjsLine } from 'react-icons/ri';

const cardData = [
  {
    title: 'Diplômes',
    icon: <BiBookBookmark className="text-5xl" />,
    content: [
      'Titre Professionnel Développeur Web & Web Mobile',
      'Master 2 - Finance',
    ],
  },
  {
    title: 'Certification Udemy',
    icon: <RiReactjsLine className="text-5xl" />,
    content: [
      'The Ultimate React Course 2025: React, Next.js, Redux & More - Jonas Schmedtmann',
    ],
  },
  {
    title: 'En cours',
    icon: <BiBookAlt className="text-5xl" />,
    content: [
      'Certification Udemy : Master Node JS & Deno.js - Maximilian Schwarzmüller',
    ],
  },
];

function AboutItem() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-1">
      <div className="flex w-full flex-col justify-start gap-6 md:flex-row md:justify-center">
        {cardData.map((card, index) => (
          <div key={card.title} className="flex items-start md:w-1/3">
            {index > 0 && (
              <div className="mx-4 hidden h-24 border-l-2 border-gray-300 md:block"></div>
            )}
            <div className="flex flex-col text-left">
              <div>{card.icon}</div>
              <p className="text-xl">{card.title}</p>
              <div className="text-gray-500">
                {card.content.map((c) => (
                  <p key={c}>{c}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutItem;
