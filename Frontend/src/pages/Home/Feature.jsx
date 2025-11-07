import { useState } from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium max-w-5xl text-center md:leading-[70px]">
          Improve Your Portfolio with ML Stock Price Prediction
        </h1>

        <p className="text-white max-w-md text-center text-base my-7">
          Your market edge starts here. Live data. Smart insights. Instant action.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        <img
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="Feature visual"
        />

        <div
          className="flex flex-col items-center md:items-start gap-6 mt-8 md:mt-0"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Card 1 */}
          <div className="w-full max-w-md group cursor-pointer">
            <div
              className={`p-6 border border-transparent rounded-xl flex gap-4 transition-colors ${
                isHover ? "group-hover:bg-violet-100 group-hover:border-violet-300" : "bg-violet-100 border-violet-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-violet-600"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>
              <Link to="dashboard">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-700">Real-Time Analytics</h3>
                  <p className="text-sm text-slate-600 max-w-xs">
                    Get instant insights into your finances with live dashboards.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-md group cursor-pointer">
            <div className="p-6 border border-transparent rounded-xl flex gap-4 transition-colors group-hover:bg-green-100 group-hover:border-green-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-green-600"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>
              <Link to="predict">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-700">Trained Model Predictions</h3>
                  <p className="text-sm text-slate-600 max-w-xs">
                    End-to-end encryption, 2FA, compliance with GDPR standards.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-md group cursor-pointer">
            <div className="p-6 border border-transparent rounded-xl flex gap-4 transition-colors group-hover:bg-orange-100 group-hover:border-orange-300">
              <svg
                className="size-6 stroke-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              <Link to="news">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-700">Customizable News</h3>
                  <p className="text-sm text-slate-600 max-w-xs">
                    Export professional, audit-ready financial reports/news for internal review.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;