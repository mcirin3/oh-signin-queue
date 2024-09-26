'use client';
import { useState } from 'react';

export default function Queue() {
  // Your static Google Form and Spreadsheet URLs
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfxaMAA_heHg7Alcda_S-v96r8FuUi0AENtv9kes2-BoQQWkA/viewform?usp=sf_link";
  const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1bUjk5Ys1kH9UftKT8goLwvHwSg0abM3e46h-epZP2Nw/edit?usp=sharing";

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Sign-In Queue for Office Hours</h1>

      {/* Google Form Link */}
      <div style={{ marginBottom: '40px' }}>
        <h2>Sign-In Form</h2>
        <p>
          <a href={formUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            Click here to access the Sign-In Form
          </a>
        </p>
      </div>

      {/* Google Spreadsheet Embed */}
      <div style={{ marginTop: '40px' }}>
        <h2>Queue Display</h2>
        <iframe
          src={spreadsheetUrl}
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: '1px solid #ccc' }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
