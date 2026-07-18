import React from "react";

function ProfileCard() {
  return (
    <>
      <div className="w-84 p-8 bg-white rounded-4xl flex flex-col items-center gap-2 shadow-2xl hover:-translate-y-2 hover:shadow-3xl transition-all duration-300">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-QvuWgbpkZCGX9jNbT80LK0qRdP5XLg1eLyONdZj-vIriujqXvMHbHQ&s=10"
          alt="Profile Image"
          className="w-38 rounded-full my-4"
        />
        <h2 className="text-3xl font-bold font-sans">Arjun Telange</h2>
        <h3 className="text-xl font-semibold font-sans text-gray-600 mb-6">
          Full Stack Developer
        </h3>
        <div className="flex gap-5">
          <button className="bg-pink-700 text-white font-bold rounded-2xl  px-3 py-2 hover:bg-pink-800 hover:scale-105 transition-all duration-200 ease-in cursor-pointer">
            Follow
          </button>
          <button className="bg-blue-600 text-white font-bold rounded-2xl  px-3 py-2 hover:bg-blue-700 hover:scale-105 transition-all duration-200 ease-in cursor-pointer">
            Message
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
