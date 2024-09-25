import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { icons } from "lucide-react";
import { useUpdateStorage } from "@/context/UpdateStorageContext";
import { toPng } from "html-to-image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="w-full h-full ">
      <div className="flex justify-end h-full px-5 ">
        <Tabs defaultValue="icon" className="w-full mt-5">
          <TabsList>
            <TabsTrigger value="icon">Icon</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="icon">
            <div className="flex flex-col items-center justify-center w-full mt-10 md:mt-0">
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
          </TabsContent>
          <TabsContent value="preview">
            <div className="flex items-center justify-center mt-3">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="w-[400px] h-[155px] bg-[#fefefe] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl flex items-center justify-center gap-3">
                      {storageValue.icon.startsWith("shape-") ? (
                        // For premium icons
                        <div
                          style={{
                            width: "60px",
                            height: "60px",
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
                          size={60}
                          rotate={storageValue.iconRotate}
                        />
                      )}
                      <h2
                        className="text-4xl font-semibold"
                        style={{
                          color: `${storageValue.iconColor}`,
                        }}
                      >
                        EasyLogo
                      </h2>
                    </div>

                    <div className="w-[400px] h-[155px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl flex items-center justify-center gap-4 p-1">
                      <div
                        className="flex items-center justify-center w-full h-full gap-3 rounded-lg"
                        style={{
                          backgroundColor: `${storageValue.iconColor}`,
                        }}
                      >
                        {storageValue.icon.startsWith("shape-") ? (
                          // For premium icons
                          <div
                            style={{
                              width: "60px",
                              height: "60px",
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
                            color="white"
                            size={60}
                            rotate={storageValue.iconRotate}
                          />
                        )}
                        <h2 className="text-4xl font-semibold text-white">
                          EasyLogo
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-xl h-[324px] w-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative">
                    <Image
                      src="/twitter.png"
                      alt="preview"
                      fill
                      objectFit="cover"
                      className="rounded-xl"
                    />
                    <div className="absolute bottom-[67px] left-[76px]">
                      {storageValue.icon.startsWith("shape-") ? (
                        // For premium icons
                        <div
                          style={{
                            width: "70px",
                            height: "70px",
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
                          size={70}
                          rotate={storageValue.iconRotate}
                        />
                      )}
                    </div>

                    <div className="absolute bottom-4 left-[68px]">
                      <h1 className="text-xl font-semibold">EasyLogo</h1>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[180px] rounded-xl flex justify-end items-center relative">
                    <Image
                      src="/iphone.png"
                      alt="iphone"
                      width={250}
                      height={250}
                      objectFit="contain"
                      className="rounded-tr-xl rounded-br-xl"
                    />
                    <div className="absolute px-2 py-1 text-white rounded bottom-[72px] right-[103px]">
                      {storageValue.icon.startsWith("shape-") ? (
                        // For premium icons
                        <div
                          style={{
                            width: "45px",
                            height: "45px",
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
                          size={45}
                          rotate={storageValue.iconRotate}
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[180px] rounded-xl flex justify-end items-center relative">
                    <Image
                      src="/mac.png"
                      alt="mac"
                      fill
                      objectFit="cover"
                      className="rounded-xl"
                    />
                    <div className="absolute px-2 py-1 text-white  bottom-[136px] right-1/2">
                      {storageValue.icon.startsWith("shape-") ? (
                        // For premium icons
                        <div
                          style={{
                            width: "25px",
                            height: "25px",
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
                          size={25}
                          rotate={storageValue.iconRotate}
                        />
                      )}
                    </div>
                    <div className="absolute px-2 py-1 text-black text-lg font-semibold rounded bottom-[135px] right-[27%]">
                      EasyLogo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LogoPreview;
