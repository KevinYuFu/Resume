import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Resume from './body/Resume';
import { jsPDF } from "jspdf";

const root = ReactDOM.createRoot(document.getElementById('root'));


// Default export is a4 paper, portrait, using millimeters for units


root.render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);

const delay = ms => new Promise(res => setTimeout(res, ms));
await delay(1);

const doc = new jsPDF("p", "mm", "a4");
var pdfSource = window.document.getElementById("pdfSource");


doc.html(
  pdfSource,
  {
    callback: function (pdf) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
      document.body.appendChild(iframe);
      iframe.src = pdf.output('datauristring');
    },
    width: 11250
  });
