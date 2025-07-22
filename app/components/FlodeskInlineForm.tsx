// components/FlodeskInlineForm.js
import { useEffect } from 'react';
import Script from 'next/script';

// Extend Window interface to include Flodesk's fd property
declare global {
  interface Window {
    fd: any;
  }
}

export default function FlodeskInlineForm() {
  useEffect(() => {
    // Initialize the Flodesk form once scripts are loaded
    if (typeof window !== 'undefined' && window.fd) {
      window.fd('form', {
        formId: '687fc1821489aec9aa851063',
        containerEl: '#fd-form-687fc1821489aec9aa851063',
      });
    }
  }, []);

  return (
    <>
      {/* Container div for the form */}
      <div id="fd-form-687fc1821489aec9aa851063"></div>

      {/* Load Flodesk universal scripts */}

      <Script
        src="https://assets.flodesk.com/universal.mjs"
        type="module"
        strategy="afterInteractive"
        onLoad={() => {
          // This ensures fd is ready before initializing
          if (window.fd) {
            window.fd('form', {
              formId: '687fc1821489aec9aa851063',
              containerEl: '#fd-form-687fc1821489aec9aa851063',
            });
          }
        }}
      />
      <Script
        src="https://assets.flodesk.com/universal.js"
        noModule
        strategy="afterInteractive"
      />
    </>
  );
}
