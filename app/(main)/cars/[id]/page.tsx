import React from "react";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main>
      <span>{id}</span>
    </main>
  );
};

export default Page;
