import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <SignIn />
    </div>
  );
};

export default Page;
