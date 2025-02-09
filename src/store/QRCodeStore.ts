import { makeAutoObservable } from "mobx";
import { createRef } from "react";

class QRCodeStore {
  text = "";
  size = 256;
  fgColor = "#000000";
  bgColor = "#ffffff";
  canvasRef = createRef<HTMLCanvasElement>();
  svgRef = createRef<SVGSVGElement>();

  constructor() {
    makeAutoObservable(this);
  }

  setText(value: string) {
    this.text = value;
  }

  setSize(value: number) {
    this.size = value;
  }

  setFgColor(value: string) {
    this.fgColor = value;
  }

  setBgColor(value: string) {
    this.bgColor = value;
  }

  downloadQRCode(format: "png" | "svg") {
    if (format === "png" && this.canvasRef.current) {
      const link = document.createElement("a");
      link.href = this.canvasRef.current.toDataURL("image/png");
      link.download = "qrcode.png";
      link.click();
    } else if (format === "svg" && this.svgRef.current) {
      const serializer = new XMLSerializer();
      const source = serializer.serializeToString(this.svgRef.current);
      const blob = new Blob([source], { type: "image/svg+xml" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qrcode.svg";
      link.click();
    }
  }
}

export const qrCodeStore = new QRCodeStore();
