import { useState, useEffect } from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  const [isOddCycle, setIsOddCycle] = useState(true); // State to toggle between odd and even cycles

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOddCycle((prev) => !prev); // Toggle between odd and even cycles
    }, 2000); // Adjust the interval time as needed

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                (isOddCycle ? i % 2 !== 0 : i % 2 === 0) ? "animate-customPulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

/* Something New For the Animation Pattern */
