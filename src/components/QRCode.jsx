import { useEffect, useRef, useState } from "react";
import QRCodeLib from "qrcode";

/**
 * Renders a QR code for the given URL.
 * Uses the `qrcode` npm package to draw onto a canvas.
 */
export default function QRCode({ url, size = 200 }) {
  const canvasRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url || !canvasRef.current) return;
    QRCodeLib.toCanvas(canvasRef.current, url, {
      width: size,
      margin: 2,
      color: { dark: "#d0daf0", light: "#0a0f1c" },
    }, err => {
      if (err) setError(true);
    });
  }, [url, size]);

  if (error) return (
    <div style={{ width:size, height:size, display:"flex", alignItems:"center", justifyContent:"center", background:"#0a0f1c", borderRadius:12, color:"#3a4a6a", fontSize:"0.7rem", textAlign:"center", padding:12 }}>
      QR generation failed
    </div>
  );

  return (
    <canvas
      ref={canvasRef}
      style={{ borderRadius:12, display:"block" }}
    />
  );
}
