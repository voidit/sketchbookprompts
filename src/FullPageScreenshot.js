import React from 'react';
import html2canvas from 'html2canvas';
import snap from './assets/snap.svg';

function FullPageScreenshot({ children }) {
    const handleScreenshot = async () => {
        try {
            const canvas = await html2canvas(document.documentElement, {
                useCORS: true, // Important for images from different origins
                scrollX: 0, // Ensure full-page capture
                scrollY: 0,
                windowWidth: document.documentElement.offsetWidth, // Capture full width
                windowHeight: document.documentElement.offsetHeight, // Capture full height
            });
            const image = canvas.toDataURL('image/png');
            downloadImage(image, 'full-page-screenshot.png');
        } catch (error) {
            console.error('Error taking full-page screenshot:', error);
        }
    };

    const downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement('a');
        fakeLink.style = 'display:none;';
        fakeLink.download = fileName;

        fakeLink.href = blob;

        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);

        fakeLink.remove();
    };

    return (
        <div>
            <img src={snap} onClick={handleScreenshot} className="screenshot-button" alt="Take Full Page Screenshot" />
            {children}
        </div>
    );
}

export default FullPageScreenshot;