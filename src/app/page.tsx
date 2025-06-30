import myImage from '../../public/myImage.jpeg'
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen md:h-screen flex items-center justify-center px-4 py-8 md:py-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-6 md:mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">

            <Image src={myImage} className=" rounded-full" height={400} width={400} alt="Tanvir Ahmed Emon" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-4">
            Tanvir Ahmed Emon
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 md:mb-6">MERN Stack Developer</p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
            Passionate full-stack developer specializing in MongoDB, Express.js, React.js, and Node.js. I create modern,
            scalable web applications with clean code and exceptional user experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto text-center mb-6 md:mb-0">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3 md:p-4 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-blue-400">3+</h3>
              <p className="text-sm md:text-base text-gray-300">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3 md:p-4 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-green-400">50+</h3>
              <p className="text-sm md:text-base text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3 md:p-4 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-purple-400">100%</h3>
              <p className="text-sm md:text-base text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
          <button

            className=" bg-gray-900 hover:bg-gray-950 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base cursor-pointer"
          >
            View My Work
          </button>
          <button
            className="border-gray-600 text-gray-300 bg-[#ffffff3a] hover:bg-[#ffffff4f] px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
