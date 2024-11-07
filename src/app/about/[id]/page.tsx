import React from "react";

const AboutSub = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <div>AboutSub {id}</div>;
};

export default AboutSub;
