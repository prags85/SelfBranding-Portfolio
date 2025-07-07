import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold">MPSTME, NMIMS University</h3>
          <p className="text-md">2022 - 2026</p>
          <p>B.Tech in Computer Science | CGPA: 9.50 / 10</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold">Shree Mahesh Public Sr. Sec. School</h3>
          <p className="text-md">2020 - 2022</p>
          <p>CBSE | 76.00%</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold">A’s Steward Morris Sr. Sec. School</h3>
          <p className="text-md">2020</p>
          <p>CBSE | 89.00%</p>
        </div>
      </div>
    </section>
  );
}
