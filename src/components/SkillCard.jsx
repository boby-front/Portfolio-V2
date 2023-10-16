import React from "react";

const SkillCard = ({ skillTitle }) => {
  return (
    <div className="checked-container">
      <p>
        <span>🔸</span> {skillTitle}
      </p>
    </div>
  );
};

export default SkillCard;
