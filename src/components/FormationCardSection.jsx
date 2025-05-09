import React from 'react';
import { BiCertification, BiBookBookmark, BiBookAlt } from 'react-icons/bi';

const cardData = [
  {
    title: 'Diplômes',
    icon: <BiBookBookmark className="text-5xl" />,
    content: 'Titre Professionnel Développeur Web',
  },
  {
    title: 'Certifications',
    icon: <BiCertification className="text-5xl" />,
    content: 'Udemy',
  },
  {
    title: 'En cours',
    icon: <BiBookAlt className="text-5xl" />,
    content: 'Ce que tu apprends actuellement…',
  },
];

const FormationCardSection = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center rounded-3xl border bg-gray-800 p-6 shadow-lg">
        <div className="flex flex-col gap-6">
          <div className="flex w-full items-center justify-between border-b border-gray-300 p-4">
            {/* Icône à gauche */}
            <div className="flex w-1/6 items-center justify-center text-[#2990c4]">
              {cardData[0].icon}
            </div>

            {/* Titre et contenu à droite */}
            <div className="flex w-5/6 flex-col items-start pl-4">
              <h3 className="text-xl font-semibold text-[#2990c4]">
                {cardData[0].title}
              </h3>
              <p className="text-gray-400">{cardData[0].content}</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-between border-b border-gray-300 p-4">
            {/* Icône à gauche */}
            <div className="flex w-1/6 items-center justify-center text-[#2990c4]">
              {cardData[1].icon}
            </div>

            {/* Titre et contenu à droite */}
            <div className="flex w-5/6 flex-col items-start pl-4">
              <h3 className="text-xl font-semibold text-[#2990c4]">
                {cardData[1].title}
              </h3>
              <p className="text-gray-400">{cardData[1].content}</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-between p-4">
            {/* Icône à gauche */}
            <div className="flex w-1/6 items-center justify-center text-[#2990c4]">
              {cardData[2].icon}
            </div>

            {/* Titre et contenu à droite */}
            <div className="flex w-5/6 flex-col items-start pl-4">
              <h3 className="text-xl font-semibold text-[#2990c4]">
                {cardData[2].title}
              </h3>
              <p className="text-gray-400">{cardData[2].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationCardSection;
