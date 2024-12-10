import React, { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 w-full bg-blue-900 text-white p-6 shadow-lg z-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg font-semibold mb-4">It's your choice</h2>
          <p className="text-sm mb-4">
            We use cookies and similar technologies to improve your experience.
            Some are necessary for the website to function, while others are
            optional but enhance your experience. Learn more in our{" "}
            <a href="#" className="underline text-blue-300">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-blue-300">
              cookie policy
            </a>.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
            <button
              onClick={handleAccept}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
            >
              Yes, I Accept
            </button>
            <button
              onClick={handleReject}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition"
            >
              No, Thank You
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
