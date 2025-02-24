import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import snap from './assets/snap.svg';

function ScreenshotButton({ children }) {
    const screenshotRef = useRef(null);

    const handleScreenshot = async () => {
        if (screenshotRef.current) {
            try {
                const canvas = await html2canvas(screenshotRef.current);
                const image = canvas.toDataURL('image/png');
                downloadImage(image, 'screenshot.png');
            } catch (error) {
                console.error('Error taking screenshot:', error);
            }
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
            <img src={snap} className="screenshot-button" onClick={handleScreenshot} alt="Take Screenshot" />
            <div ref={screenshotRef} style={{ padding: '10px', marginTop: '10px' }}>
                {children}
            </div>
        </div>
    );
}

export default ScreenshotButton;