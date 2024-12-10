import React from 'react';

const Footer = () => {
    let icon=<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.85 11.532a6.319 6.319 0 0 1 8.937 0L15.255 16l-4.468 4.468a6.319 6.319 0 1 1-8.936-8.936Z" fill="url(#a)"/><path d="M11.532 1.85a6.319 6.319 0 0 0 0 8.937L16 15.255l4.468-4.468a6.319 6.319 0 1 0-8.936-8.936Z" fill="url(#b)"/><path d="M21.213 20.468a6.319 6.319 0 1 0 0-8.936L16.745 16l4.468 4.468Z" fill="url(#c)"/><path d="M20.468 30.15a6.319 6.319 0 0 0 0-8.937L16 16.745l-4.468 4.468a6.319 6.319 0 1 0 8.936 8.936Z" fill="url(#d)"/><defs><linearGradient id="a" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#42AB3B"/><stop offset="1" stop-color="#2C7227"/></linearGradient><linearGradient id="b" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#42AB3B"/><stop offset="1" stop-color="#2C7227"/></linearGradient><linearGradient id="c" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#42AB3B"/><stop offset="1" stop-color="#2C7227"/></linearGradient><linearGradient id="d" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#42AB3B"/><stop offset="1" stop-color="#2C7227"/></linearGradient></defs></svg>;

  return (
    <>
      <div className="flex justify-around items-start py-20">
        <div>
            <span className="mb-10">{icon}</span>
            <ul>
                <li className="w-[190px] mb-3 text-sm text-[#666666] mt-5">42 Market Avenue Westminster London W1B 4DE United Kingdom</li>
                <li className="text-sm text-[#666666] mb-2">email@payble.com</li>
                <li className="text-sm text-[#666666] mb-2">+44 111 333 555</li>
            </ul>
            <div className="flex gap-2">
                <img className=" bg-black   " src="images/SVG21.svg" alt="logo" />
                <img className="bg-black " src="images/SVG22.svg" alt="logo" />
                <img className="bg-black " src="images/SVG23.svg" alt="logo" />
                <img className="bg-black " src="images/SVG24.svg" alt="logo" />

            </div>
        </div>
        <div>
        <h1 className="text-xs font-medium mb-5">MENU</h1>
            <ul>
                <li className="text-sm text-[#666666] mb-3">Home</li>
                <li className="text-sm text-[#666666] mb-3">Features</li>
                <li className="text-sm text-[#666666] mb-3">Pricing</li>
                <li className="text-sm text-[#666666] mb-3">Blog</li>
                <li className="text-sm text-[#666666] mb-3">Contact</li>

            </ul>
        </div>
        <div>
            <h1 className="text-xs font-medium mb-5">USEFUL</h1>
            <ul>
                <li className="text-sm text-[#666666] mb-3">Privacy Policy</li>
                <li className="text-sm text-[#666666] mb-3">Cookie Policy</li>
                <li className="text-sm text-[#666666] mb-3">Terms of Service</li>
                <li className="text-sm text-[#666666] mb-3">Refund Policy</li>
            </ul>
        </div>
        <div>
            <h1 className="text-xs font-medium mb-5 ">DOWNLOAD APP</h1>
            <p className="text-sm text-[#666666] w-[337px] mb-3">Manage your finances with the Payble mobile app. Download it today for easy expense tracking and customized alerts.</p>
            <div className="flex justify-center bg-black py-2 mb-3 rounded-md">
            <img className="bg-black" src="images/SVG25.svg" alt="" />
            <button className="bg-black text-white font-medium ">App Store</button>
            </div>
            <div className="flex justify-center bg-black  py-2 rounded-md">
            <img className="bg-black" src="images/SVG26.svg" alt="" />
            <button className="bg-black text-white font-medium ">Google Play</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
