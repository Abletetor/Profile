import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ProfileCard = () => {
   return (
      <div className="mx-auto p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 max-w-md">
         <div className="flex gap-4 items-center">
            <img
               src="https://i.pravatar.cc/150?img=12"
               alt="Profile"
               className="w-24 h-24 rounded-full border-4 border-teal-500 shadow-md"
            />
            <div>
               <h2 className="text-xl font-semibold text-gray-800">
                  Etornam Abletor
               </h2>
               <p className="text-sm text-teal-600">HR Manager</p>
               <p className="text-sm text-teal-600">0540884481</p>
            </div>
         </div>

         {/* Bio Section */ }
         <div className="mt-4 text-gray-600 text-sm leading-relaxed">
            Etornam is a dedicated HR professional with a passion for fostering inclusive workplace environments, talent development, and building strong team cultures.
         </div>

         {/* Social Icons */ }
         <div className="mt-6 flex justify-center gap-4 text-white">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="bg-teal-500 p-2 rounded-full hover:bg-teal-700 transition-colors">
               <FaLinkedin size={ 20 } />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="bg-teal-500 p-2 rounded-full hover:bg-teal-700 transition-colors">
               <FaTwitter size={ 20 } />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="bg-teal-500 p-2 rounded-full hover:bg-teal-700 transition-colors">
               <FaInstagram size={ 20 } />
            </a>
            <a href="mailto:example@gmail.com"
               className="bg-teal-500 p-2 rounded-full hover:bg-teal-700 transition-colors">
               <HiOutlineMail size={ 20 } />
            </a>
         </div>
      </div>
   );
};

export default ProfileCard;
