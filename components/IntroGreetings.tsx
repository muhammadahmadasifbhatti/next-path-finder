import React from "react";

const IntroGreetings = ({
  first,
  middle,
  last,
}: {
  first: string;
  middle: string;
  last: string;
}) => {
  return (
    <div className="flex space-x-2 h-max items-end">
      <div>{first}</div>
      <h1>{middle}</h1>
      <div>{last}</div>
    </div>
  );
};

export default IntroGreetings;
