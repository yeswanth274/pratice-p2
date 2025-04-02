import React from "react";

const TeamMemberCard = (props) => (
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 p-5 rounded-xl shadow-md text-center my-3">
      <img src={props.image} alt={props.name} className="rounded-full w-20 h-20 object-cover border bg-white mb-3" />
      <h2 className="text-lg font-bold">{props.name}</h2>
      <h4 className="text-gray-600 text-sm">{props.title}</h4>
      <p className="text-gray-700 text-xs">Experience: {props.experience}</p>
    </div>
  </div>
);

export default TeamMemberCard;