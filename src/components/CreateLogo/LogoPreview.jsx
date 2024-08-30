// LogoPreview.jsx
import React, { useEffect } from "react";
import { icons } from "lucide-react";
import { useUpdateStorage } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
const LogoPreview = ({ downloadIcon }) => {
  const { storageValue } = useUpdateStorage();

  useEffect(() => {
    if (downloadIcon) {
      downloadLogo();
    }
  }, [downloadIcon]);

  const downloadLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "easy_logo.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    return LucidIcon ? (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    ) : null;
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="rounded-md flex items-center justify-center bg-gray-200 outline-dotted outline-gray-300 h-[500px] w-[500px]"
        style={{ padding: storageValue.bgPadding }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue.bgRounded,
            background: storageValue.bgColor,
          }}
        >
          <Icon
            name={storageValue.icon}
            color={storageValue.iconColor}
            size={storageValue.iconSize}
            rotate={storageValue.iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
