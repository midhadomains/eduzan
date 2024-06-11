"use client";
import { useState } from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaCopy, FaWhatsapp } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const ShareButton = () => {
    const [showSharePopup, setShowSharePopup] = useState(false);
    const [showCopiedPopup, setShowCopiedPopup] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setShowCopiedPopup(true);
        setTimeout(() => {
            setShowCopiedPopup(false);
        }, 2000); // Hide the popup after 2 seconds
        setShowSharePopup(false); // Collapse the share menu
    };

    const handleShareClick = () => {
        setShowSharePopup(false); // Collapse the share menu
    };

    const toggleSharePopup = () => {
        setShowSharePopup(!showSharePopup);
    };

    return (
        <div className="relative mt-6">
            <button
                onClick={toggleSharePopup}
                className="group bg-slate-200 border border-[#9A391D] text-white p-[6px] transition-colors duration-150 rounded-lg hover:bg-[#9A391D] focus:outline-none mx-auto"
            >
                <FiShare2 className='text-[25px] text-[#9A391D] group-hover:text-white' />
            </button>

            {showSharePopup && (
                <div className="absolute top-full mt-2 right-0 bg-white p-3 border border-gray-300 rounded-md shadow-lg z-10">
                    <p className="text-sm mb-2">Share this blog:</p>
                    <div className="flex space-x-3">
                        <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0A66C2] hover:text-[#004182]"
                            onClick={handleShareClick}
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1877F2] hover:text-[#1056A1]"
                            onClick={handleShareClick}
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1DA1F2] hover:text-[#0A8CD8]"
                            onClick={handleShareClick}
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#25D366] hover:text-[#128C7E]"
                            onClick={handleShareClick}
                        >
                            <FaWhatsapp size={20} />
                        </a>
                        <button
                            onClick={handleCopyLink}
                            className="text-[#BE4E1E] hover:text-[#9A391D] focus:outline-none"
                        >
                            <FaCopy size={20} />
                        </button>
                    </div>
                </div>
            )}

            {showCopiedPopup && (
                <div className="absolute top-0 left-full ml-2 border text-sm p-2 rounded-md shadow-md z-20">
                    Link copied to clipboard!
                </div>
            )}
        </div>
    );
};

export default ShareButton;
