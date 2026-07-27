// export default function NotFound() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white text-5xl">
//       Custom 404 Page
//     </div>
//   );
// }

"use client"

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full"></div>

      <div className="text-center z-10 max-w-xl">
        
        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mt-4">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition"
          >
            Back Home
          </Link>

          <button
            onClick={() => history.back()}
            className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-blue-500 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}