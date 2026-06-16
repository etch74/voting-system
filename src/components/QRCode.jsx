import { useEffect, useRef, useState } from "react";
import QRCodeLib from "qrcode";
import { T } from "../constants";

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
      color: { dark: T.muted, light: T.bg },
    }, err => {
      if (err) setError(true);
    });
  }, [url, size]);

  if (error) return (
    <div style={{ width:size, height:size, display:"flex", alignItems:"center", justifyContent:"center", background:T.card, borderRadius:12, color:T.muted, fontSize:"0.7rem", textAlign:"center", padding:12 }}>
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
