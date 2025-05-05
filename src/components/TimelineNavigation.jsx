import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { ArrowsPointingInIcon } from '@heroicons/react/16/solid';

const TimelineNavigation = ({ timeline, activeIndex, onSelect }) => {
  return (
    <div className="mb-10 hidden gap-6 overflow-x-auto px-4 md:flex md:py-2">
      {timeline.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`flex flex-col items-center whitespace-nowrap transition-colors ${
            activeIndex === index ? 'font-bold text-[#1a5d7e]' : 'text-gray-400'
          }`}
        >
          <div className="relative flex items-center justify-center text-sm">
            <div className="ml-5">
              <span className="flex justify-center">{item.year}</span>
              <span className="">{item.title}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default TimelineNavigation;
