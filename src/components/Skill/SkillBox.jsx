import React from "react";

const SkillBox = React.memo(({ title, info }) => {
  return (
    <div className="border border-solid border-gray max-w-[180px]">
      <h2 className="p-2 font-semibold text-base text-white border-b border-gray">
        {title}
      </h2>
      <p className="p-2 font-normal text-gray text-base">{info}</p>
    </div>
  );
});

export default SkillBox;
