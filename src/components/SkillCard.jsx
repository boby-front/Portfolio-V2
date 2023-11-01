import React from "react";
import { useSelector } from "react-redux";

const SkillCard = ({ skillTitle }) => {
  const { mode } = useSelector((state) => state.sunMode);
  return (
    <div className="checked-container">
      <p className={!mode ? "sun-theme-text" : ""}>
        <span>🔸</span> {skillTitle}
      </p>
    </div>
  );
};

export default SkillCard;
