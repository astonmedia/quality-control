"use client";
import Button from "./Button";

const Sidenav = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 justify-around mx-6 my-auto h-screen">
        <Button href="shift" title="Shift" />
        <Button href="machine" title="Machine" />
        <Button href="job" title="Job" />
        <Button href="test" title="Test" />
        <Button href="results" title="Results" />
      </div>
    </div>
  );
};

export default Sidenav;
