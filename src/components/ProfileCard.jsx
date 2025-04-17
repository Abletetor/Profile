import React from 'react';

const ProfileCard = () => {
   return (
      <div className="mx-auto p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
         <div className="flex gap-2 items-center">
            <img
               src="https://i.pravatar.cc/150?img=12"
               alt="Profile"
               className="w-24 h-24 rounded-full border-4 border-teal-500 shadow-md"
            />
            <div>
               <h2 className="mt-4 text-xl font-semibold text-gray-800">
                  Etornam Abletor
               </h2>
               <p className="text-sm text-teal-600">HR Manager</p>
               <p className='text-sm text-teal-600'>0540884481</p>
            </div>
         </div>
      </div>
   );
};

export default ProfileCard;
