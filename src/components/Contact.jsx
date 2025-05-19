import emailjs from '@emailjs/browser';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const form = useRef();
  const [flipped, setFlipped] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ohua74e', 'template_xctv50s', form.current, {
        publicKey: 'QZOlCSPn_d5Uj81Rb',
      })
      .then(() => {
        toast.success('Merci pour votre message !');
        form.current.reset();
      })
      .catch(() => toast.error('Oops ! Une erreur est survenue.'));
  };

  return (
    <div className="relative flex items-center justify-center" id="contact">
      <div className="relative h-[430px] w-[320px] [perspective:1000px]">
        {/* Toggle Switch */}
        <div className="absolute -top-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-6">
          <span
            className={`text-sm font-bold ${!flipped ? 'text-[#323232] underline' : 'text-gray-400'}`}
          >
            Me contacter
          </span>
          <label className="relative inline-block h-7 w-16 cursor-pointer">
            <input
              type="checkbox"
              className="peer hidden"
              checked={flipped}
              onChange={() => setFlipped(!flipped)}
            />
            <span className="absolute inset-0 rounded-full bg-gray-400 shadow-[2px_2px_0_#323232] transition peer-checked:bg-[#323232]" />
            <span className="absolute left-[2px] top-[2px] h-6 w-6 rounded-md border-2 border-[#323232] bg-white shadow-[2px_2px_0_#323232] transition-all peer-checked:translate-x-7" />
          </label>
          <span
            className={`text-sm font-bold ${flipped ? 'text-[#323232] underline' : 'text-gray-400'}`}
          >
            Mes coordonées
          </span>
        </div>

        {/* Flip Card */}
        <div
          className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
        >
          {/* FRONT - Contact Form */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-[#323232] bg-white p-6 shadow-[4px_4px_0_#323232] [backface-visibility:hidden]">
            <h2 className="text-xl font-bold text-[#323232]">Me contacter</h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex w-full flex-col gap-3"
            >
              <div className="flex gap-2">
                <input
                  name="prenom"
                  placeholder="Prénom"
                  required
                  className="w-1/2 rounded-md border-2 border-[#323232] p-2 text-sm shadow-[3px_3px_0_#323232] outline-none"
                />
                <input
                  name="nom"
                  placeholder="Nom"
                  required
                  className="w-1/2 rounded-md border-2 border-[#323232] p-2 text-sm shadow-[3px_3px_0_#323232] outline-none"
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-md border-2 border-[#323232] p-2 text-sm shadow-[3px_3px_0_#323232] outline-none"
              />
              <textarea
                name="message"
                rows="3"
                placeholder="Message"
                required
                className="w-full rounded-md border-2 border-[#323232] p-2 text-sm shadow-[3px_3px_0_#323232] outline-none"
              />
              <button
                type="submit"
                className="mx-auto mt-2 rounded-md border-2 border-[#323232] bg-white px-6 py-2 font-bold text-[#323232] shadow-[3px_3px_0_#323232] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/*Contact Info */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-[#323232] bg-gray-200 p-6 text-center text-[#323232] shadow-[4px_4px_0_#323232] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h2 className="text-xl font-bold">Mes coordonnées</h2>
            <div className="flex flex-col items-start gap-2 text-sm">
              <div className="flex">
                <PhoneIcon className="mr-3 h-6 w-6" /> +33 6 29 36 05 91
              </div>
              <div className="mt-4 flex">
                <EnvelopeIcon className="mr-3 h-6 w-6" /> cedric3011@outlook.fr
              </div>
            </div>
            <div className="flex text-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
