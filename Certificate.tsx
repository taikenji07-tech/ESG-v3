


import React from 'react';

interface CertificateProps {
  name: string;
  date: string;
  onClose: () => void;
}

const certificateImageUrl = 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/11d1797c-be0b-4171-8b4e-4f7f6da51d5c/versions/default/files/Screely-1721535940984.png';

export const Certificate: React.FC<CertificateProps> = ({ name, date, onClose }) => {

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          body > * {
            display: none;
          }
          .certificate-print-area, .certificate-print-area > * {
            display: block;
            visibility: visible;
          }
          .certificate-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background: none;
          }
          .certificate-container-wrapper {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
          }
          .certificate-container {
            width: 100%;
            max-width: 1654px; /* Native width for best quality */
          }
          .certificate-actions {
            display: none !important;
          }
        }
      `}</style>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 certificate-print-area backdrop-blur-sm">
        <div className="relative w-full max-w-5xl p-4 certificate-container-wrapper">
          <div 
            className="certificate-container"
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '70.68%', // Aspect ratio 1169 / 1654
              backgroundImage: `url(${certificateImageUrl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '32.5%',
                left: '9%',
                width: '50%',
                fontSize: 'clamp(1rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                color: '#0D274D',
                textTransform: 'uppercase',
              }}
            >
              {name}
            </div>
            <div
              style={{
                position: 'absolute',
                top: '44.8%',
                left: '21.5%',
                fontSize: 'clamp(0.6rem, 1.8vw, 1.2rem)',
                fontWeight: 400,
                color: '#333',
              }}
            >
              {date}
            </div>
          </div>
          <div className="certificate-actions text-center mt-4 flex justify-center gap-4">
            <button
              onClick={handlePrint}
              className="certificate-button cert-print"
            >
              Download / Print
            </button>
            <button
              onClick={onClose}
              className="certificate-button cert-close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};