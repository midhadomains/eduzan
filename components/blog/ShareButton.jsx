"use client"
import { useState } from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaCopy } from "react-icons/fa";

const ShareButton = () => {
    const [showSharePopup, setShowSharePopup] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    };

    const toggleSharePopup = () => {
        setShowSharePopup(!showSharePopup);
    };

    return (
        <div className="relative mt-6">
            <button
                onClick={toggleSharePopup}
                className="bg-[#BE4E1E] text-white p-2 rounded-md hover:bg-[#9A391D] focus:outline-none mx-auto"
            >
                Share This Blog
            </button>

            {showSharePopup && (
                <div className="absolute bottom-full mb-2 right-0 bg-white p-3 border border-gray-300 rounded-md shadow-lg z-10">
                    <p className="text-sm mb-2">Share this blog:</p>
                    <div className="flex space-x-3">
                        <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0A66C2] hover:text-[#004182]"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1877F2] hover:text-[#1056A1]"
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1DA1F2] hover:text-[#0A8CD8]"
                        >
                            <FaTwitter size={20} />
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
        </div>
    );
};

export default ShareButton;
