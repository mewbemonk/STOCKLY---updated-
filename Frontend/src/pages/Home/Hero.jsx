import { useState } from "react";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];

  return (
    <>
      <div className="min-h-screen pb-20">
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        ></div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-indigo-300 blur-[100px] opacity-30"></div>

          {/* Avatars + Stars */}
          <div className="flex items-center mt-24">
            <div className="flex -space-x-3 pr-3">
              {[
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
                "https://randomuser.me/api/portraits/men/75.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`user${i}`}
                  className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]"
                />
              ))}
            </div>

            <div>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star text-transparent fill-indigo-600"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-gray-700">Used by many users</p>
            </div>
          </div>

          {/* Headline + CTA */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px] text-white">
            <span className="bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent text-nowrap">
              Machine Learning{" "}
            </span>
            Meets{" "}
            <span className="bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent text-nowrap">
              Market Intelligence{" "}
            </span>
            . Built for traders, analysts, and forward thinkers.
          </h1>

          <p className="max-w-md text-center text-base my-7 text-white">
            Stock Insights Engineered With MERN & ML. Scalable architecture. Smarter predictions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
            <a
              href="dashboard"
              className="bg-green-600 hover:bg-indigo-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-indigo-400 flex items-center justify-center transition-colors"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-1 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <p className="py-6 text-slate-600 mt-14 text-center px-4">
            Trusted by leading brands, including
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-full w-full px-4 py-6" id="logo-container">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="logo" className="h-6 w-auto max-w-xs" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;