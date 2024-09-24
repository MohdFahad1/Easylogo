import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { icons } from "lucide-react";
import { useUpdateStorage } from "@/context/UpdateStorageContext";
import { toPng } from "html-to-image";

const LogoPreview = ({ downloadIcon }) => {
  const { storageValue } = useUpdateStorage();
  const ref = useRef(null);

  const downloadLogo = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `easy-logo-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  useEffect(() => {
    if (downloadIcon) {
      downloadLogo();
    }
  }, [downloadIcon]);

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
    <div className="flex items-center justify-center w-full mt-10 md:mt-0">
      <div
        className="rounded-md flex items-center justify-center bg-gray-200 outline-dotted outline-gray-300 md:h-[500px] md:w-[500px] h-[300px] w-[300px]"
        style={{ padding: storageValue.bgPadding }}
      >
        <div
          ref={ref}
          className="flex items-center justify-center w-full h-full"
          style={{
            borderRadius: storageValue.bgRounded,
            background: storageValue.bgColor,
          }}
        >
          {storageValue.icon.startsWith("shape-") ? (
            // For premium icons
            <div
              style={{
                width: `${storageValue.iconSize}px`,
                height: `${storageValue.iconSize}px`,
                transform: `rotate(${storageValue.iconRotate}deg)`,
              }}
            >
              <Image
                src={`/logos/${storageValue.icon}`}
                alt={storageValue.icon}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ) : (
            // For lucide-react icons
            <Icon
              name={storageValue.icon}
              color={storageValue.iconColor}
              size={storageValue.iconSize}
              rotate={storageValue.iconRotate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
