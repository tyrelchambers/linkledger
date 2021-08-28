import React from "react";

const Wrapper = (props) => {
  return (
    <section className="w-full max-w-screen-lg ml-auto mr-auto mb-10 mt-10">
      {props.children}
    </section>
  );
};

export default Wrapper;
