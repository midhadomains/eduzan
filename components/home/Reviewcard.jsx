// "use client";

// import Image from 'next/image';
// import { useEffect, useRef } from 'react';

// let isYouTubeAPIReady = false;
// let apiReadyCallbacks = [];

// function loadYouTubeAPI() {
//   if (!isYouTubeAPIReady) {
//     const tag = document.createElement('script');
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     window.onYouTubeIframeAPIReady = () => {
//       isYouTubeAPIReady = true;
//       apiReadyCallbacks.forEach(callback => callback());
//       apiReadyCallbacks = [];
//     };
//   }
// }

// function onYouTubeAPIReady(callback) {
//   if (isYouTubeAPIReady) {
//     callback();
//   } else {
//     apiReadyCallbacks.push(callback);
//   }
// }

// export default function Reviewcard({ data }) {
//   const playerRef = useRef(null);

//   useEffect(() => {
//     loadYouTubeAPI();

//     const createPlayer = () => {
//       if (playerRef.current) {
//         new YT.Player(playerRef.current, {
//           height: '100%',
//           width: '100%',
//           videoId: data.videoId,
//         });
//       }
//     };

//     onYouTubeAPIReady(createPlayer);

//     return () => {
//       if (playerRef.current && playerRef.current.destroy) {
//         playerRef.current.destroy();
//       }
//     };
//   }, [data.videoId]);

//   if (!data || !data.videoId) {
//     return <div>Error: videoId is undefined</div>;
//   }

//   return (
//     <div className="w-[310px] md:w-[350px]  mx-auto select-none">
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           paddingBottom: "56.25%", // 16:9 aspect ratio
//           overflow: "hidden",
//           borderRadius: "10px",
//         }}
//       >
//         <div ref={playerRef} id={`player-${data.videoId}`} style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//         }}></div>
//       </div>
//       <div className=' flex justify-between py-4'>
//         <div className='my-auto py-2'>
//           <h2 className="text-xl lg:text-2xl font-semibold my-auto tracking-wide">{data.titles}</h2>
//           <div className='flex justify-between w-[150px] mt-3 mb-[35px]'>
//             <Image src='/star-icon.svg' width={20} height={20} alt='img' />
//             <Image src='/star-icon.svg' width={20} height={20} alt='img' />
//             <Image src='/star-icon.svg' width={20} height={20} alt='img' />
//             <Image src='/star-icon.svg' width={20} height={20} alt='img' />
//             <Image src='/star-icon.svg' width={20} height={20} alt='img' />
//           </div>
//         </div>
//         <div className="border rounded-full w-[80px] h-[80px] bg-cover m shadow-xl" style={{ backgroundImage: `url(${data.images})` }}></div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

let isYouTubeAPIReady = false;
let apiReadyCallbacks = [];

function loadYouTubeAPI() {
  if (!isYouTubeAPIReady) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      isYouTubeAPIReady = true;
      apiReadyCallbacks.forEach(callback => callback());
      apiReadyCallbacks = [];
    };
  }
}

function onYouTubeAPIReady(callback) {
  if (isYouTubeAPIReady) {
    callback();
  } else {
    apiReadyCallbacks.push(callback);
  }
}

export default function Reviewcard({ data }) {
  const playerRef = useRef(null);

  useEffect(() => {
    loadYouTubeAPI();

    const createPlayer = () => {
      if (playerRef.current) {
        new YT.Player(playerRef.current, {
          height: '100%',
          width: '100%',
          videoId: data.videoId,
        });
      }
    };

    onYouTubeAPIReady(createPlayer);

    return () => {
      const playerElement = playerRef.current;
      if (playerElement && playerElement.destroy) {
        playerElement.destroy();
      }
    };
  }, [data.videoId]);

  if (!data || !data.videoId) {
    return <div>Error: videoId is undefined</div>;
  }

  return (
    <div className="w-[310px] md:w-[350px]  mx-auto select-none">
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%", // 16:9 aspect ratio
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <div ref={playerRef} id={`player-${data.videoId}`} style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}></div>
      </div>
      <div className=' flex justify-between py-4'>
        <div className='my-auto py-2'>
          <h2 className="text-xl lg:text-2xl font-semibold my-auto tracking-wide">{data.titles}</h2>
          <div className='flex justify-between w-[150px] mt-3 mb-[35px]'>
            <Image src='/star-icon.svg' width={20} height={20} alt='img' />
            <Image src='/star-icon.svg' width={20} height={20} alt='img' />
            <Image src='/star-icon.svg' width={20} height={20} alt='img' />
            <Image src='/star-icon.svg' width={20} height={20} alt='img' />
            <Image src='/star-icon.svg' width={20} height={20} alt='img' />
          </div>
        </div>
        <div className="border rounded-full w-[80px] h-[80px] bg-cover m shadow-xl" style={{ backgroundImage: `url(${data.images})` }}></div>
      </div>
    </div>
  );
}
