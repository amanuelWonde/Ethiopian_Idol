import React from "react";

function HomepageSectionTitle({ title }) {
  return (
    <div className=" py-10">
      <h1 className=" text-center pb-5 text-3xl font-bold text-slate-600">
        {title}
      </h1>
      <hr className=" mx-10 " />
    </div>
  );
}

export default HomepageSectionTitle;
