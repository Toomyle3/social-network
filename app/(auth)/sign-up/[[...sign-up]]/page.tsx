import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <SignUp />
    </div>
  );
};

export default page;
