import React from "react";

export default function Footer() {
  return (
    <footer className=" border border-t-[#33353F] border-b-0 border-x-transparent text-white z-10">
      <div className="container py-5 flex justify-between">
        <span>
          <img src="images/logo.png" className="h-14" />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
}
