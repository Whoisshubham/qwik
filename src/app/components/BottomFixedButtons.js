import React from "react";

export default function BottomFixedButtons() {
  const phoneNumber = "+971 527211839";
  const whatsapp = "+971585045900";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Form the WhatsApp API link
  const whatsappLink = `https://wa.me/${whatsapp}`;

  // Open the WhatsApp link in a new tab or window
  const handleWhatsappClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <div
        className="flex justify-end  container mx-auto absolute px-8 lg:px-16 z-30 cursor-pointer"
        onClick={handleCallClick}
      >
        <span className="flex  h-12 w-12 fixed bottom-32 xl:right-32">
          <span className="  absolute inline-flex h-full w-full rounded-full bg-white "></span>

          <svg
            className="relative inline-flex rounded-full w-24 h-24 -mt-6"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 32 32"
          >
            <g id="Layer_3" data-name="Layer 3">
              <path d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Zm.643,9.214a5.149,5.149,0,0,1,5.143,5.143H20.5A3.861,3.861,0,0,0,16.643,11.5ZM20.808,25c-.039,0-3.9-.066-8.865-4.943C7.066,15.094,7,11.231,7,11.192,7,10.711,10,7,10.663,7c.23,0,.409.156.605.39.472.562,2.559,3.856,2.463,4.405-.046.258-.265.454-.893.981a7.416,7.416,0,0,0-.866.8,6.906,6.906,0,0,0,.566,1.526A9.435,9.435,0,0,0,16.9,19.462a6.906,6.906,0,0,0,1.526.566,7.416,7.416,0,0,0,.8-.866c.527-.628.723-.847.981-.893.549-.1,3.843,1.991,4.405,2.463.234.2.39.375.39.605C25,22,21.289,25,20.808,25Zm2.906-9.643a7.079,7.079,0,0,0-7.071-7.071V7A8.367,8.367,0,0,1,25,15.357Z" />
            </g>
          </svg>
        </span>
      </div>
      <div className="flex justify-end container mx-auto px-8 absolute lg:px-16 z-20 ">
        <span className="flex  h-12 w-12 fixed bottom-16 xl:right-32">
          <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500/50 opacity-75"></span>
          <svg
            className="relative inline-flex rounded-full w-24 h-24 -mt-6 z-50 cursor-pointer"
            height="512"
            viewBox="0 0 176 176"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleWhatsappClick}
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="_09.whatsapp" data-name="09.whatsapp">
                <circle id="background" cx="88" cy="88" fill="#29a71a" r="88" />
                <g id="icon" fill="#fff">
                  <path d="m126.8 49.2a54.57 54.57 0 0 0 -87.42 63.13l-5.79 28.11a2.08 2.08 0 0 0 .33 1.63 2.11 2.11 0 0 0 2.24.87l27.55-6.53a54.56 54.56 0 0 0 63.09-87.21zm-8.59 68.56a42.74 42.74 0 0 1 -49.22 8l-3.84-1.9-16.89 4 .05-.21 3.5-17-1.88-3.71a42.72 42.72 0 0 1 7.86-49.59 42.73 42.73 0 0 1 60.42 0 2.28 2.28 0 0 0 .22.22 42.72 42.72 0 0 1 -.22 60.19z" />
                  <path d="m116.71 105.29c-2.07 3.26-5.34 7.25-9.45 8.24-7.2 1.74-18.25.06-32-12.76l-.17-.15c-12.09-11.21-15.23-20.54-14.47-27.94.42-4.2 3.92-8 6.87-10.48a3.93 3.93 0 0 1 6.15 1.41l4.45 10a3.91 3.91 0 0 1 -.49 4l-2.25 2.92a3.87 3.87 0 0 0 -.35 4.32c1.26 2.21 4.28 5.46 7.63 8.47 3.76 3.4 7.93 6.51 10.57 7.57a3.82 3.82 0 0 0 4.19-.88l2.61-2.63a4 4 0 0 1 3.9-1l10.57 3a4 4 0 0 1 2.24 5.91z" />
                </g>
              </g>
            </g>
          </svg>
        </span>
      </div>
    </>
  );
}
