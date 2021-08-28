import React from "react";

const Section = (props) => {
  return (
    <section className="flex flex-col mt-32 max-w-md ml-auto mr-auto">
      {props.children}
    </section>
  );
};

export default Section;
