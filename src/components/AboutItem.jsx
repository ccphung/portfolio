import React from 'react';
import { BiBookAlt, BiBookBookmark } from 'react-icons/bi';
import { RiReactjsLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

function AboutItem() {
  const { t } = useTranslation('common');

  const cardData = [
    {
      title: t('about.cards.diplomas.title'),
      icon: <BiBookBookmark className="text-5xl" />,
      content: t('about.cards.diplomas.content', { returnObjects: true }),
    },
    {
      title: t('about.cards.certifications.title'),
      icon: <RiReactjsLine className="text-5xl" />,
      content: t('about.cards.certifications.content', { returnObjects: true }),
    },
    {
      title: t('about.cards.inProgress.title'),
      icon: <BiBookAlt className="text-5xl" />,
      content: t('about.cards.inProgress.content', { returnObjects: true }),
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-1">
      <div className="flex w-full flex-col justify-start gap-6 md:flex-row md:justify-center">
        {cardData.map((card, index) => (
          <div key={card.title} className="flex items-start md:w-1/3">
            {index > 0 && (
              <div className="mx-4 hidden h-40 border-l-2 border-gray-300 md:block"></div>
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
