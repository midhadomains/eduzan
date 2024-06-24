"use client"
import{ useEffect } from 'react';

const ContextMenuDisabler = () => {
    useEffect(() => {
        const handleContextMenu = event => {
            event.preventDefault();
        };

        // Add event listener to disable context menu on right-click
        document.addEventListener('contextmenu', handleContextMenu);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default ContextMenuDisabler;
