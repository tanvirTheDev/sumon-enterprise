export default function StatsSection() {
  return (
    <div className="h-[300px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center mb-10">
      {/* grid - 1 */}
      <div className="bg-[#1E3A8A] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">2016</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Established</p>
      </div>
      {/* grid - 2 */}
      <div className="bg-[#1E40AF] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">14</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Team Members</p>
      </div>
      {/* grid - 3 */}
      <div className="bg-[#1E429F] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">30+</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Projects Completed</p>
      </div>
      {/* grid - 4 */}
      <div className="bg-[#1C3D84] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">7+</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Years of Service</p>
      </div>
    </div>
  );
}
