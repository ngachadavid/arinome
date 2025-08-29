// "use client";
// import React from "react";

// export default function AboutQuote() {
//   return (
//     <div className="w-full bg-[#448AFF] py-6 rounded-t-4xl">
//       <div className="flex items-start space-x-6 p-20 max-w-[1280px] px-4 2xl:px-0 mx-auto">
//         {/* Left Image */}
//         <div className="flex-shrink-0">
//           <img
//             src="/homepage/hero.webp"
//             alt="Person"
//             className="w-20 h-20 rounded-full object-cover"
//           />
//         </div>

//         {/* Quote Content */}
//         <div>
//           <p className="text-lg md:text-2xl text-white w-full md:w-[70%]">
//             “Arinome delivered exceptional solutions by enhancing our online store system and providing high-quality printed materials. We continue to work with them, as they remain a reliable partner.”
//           </p>
//           <div className="mt-4">
//             <h4 className="font-extrabold text-base md:text-lg text-white">Isaac Okoth</h4>
//             <p className="text-sm md:text-base text-white/60">Founder, Creative Agency Inc.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";

export default function AboutQuote() {
  return (
    <div className="w-full bg-[#448AFF] py-6 rounded-t-4xl">
      <div className="flex flex-col md:flex-row items-start space-x-6 p-10 md:p-20 max-w-[1280px] px-4 2xl:px-0 mx-auto">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src="/homepage/hero.webp"
            alt="Person"
            className="w-24 md:w-20 h-24 md:h-20 rounded-full object-cover"
          />
        </div>

        {/* Quote Content */}
        <div>
          <p className="mt-6 md:mt-0 text-lg md:text-2xl text-white w-full md:w-[70%]">
            “Arinome delivered exceptional solutions by enhancing our online store system and providing high-quality printed materials. We continue to work with them, as they remain a reliable partner.”
          </p>
          <div className="mt-4">
            <h4 className="font-extrabold text-base md:text-lg text-white">Isaac Okoth</h4>
            <p className="text-sm md:text-base text-white/60">Founder, Creative Agency Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
