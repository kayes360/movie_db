"use client";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { 
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

export default function ShareOnSocialMedia() {
    const pathname = usePathname();
  
    // Construct the full share URL by combining the base URL and current pathname
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const shareUrl = `${baseUrl}${pathname}`;
 
  return (
    <div className="mb-6">
      <h3 className="text-gray-400 mb-2">Share on social media</h3>
      <div className="flex flex-wrap gap-4">
        <FacebookShareButton url={shareUrl}>
          <div className="relative w-8 h-10 mx-auto">
            <Image
              src="http://facebook.com/favicon.ico"
              alt="Facebook"
              fill
              className=" rounded-full object-contain mb-2"
            />
          </div>
          <p className="text-sm">Facebook</p>
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          className="text-center cursor-pointer "
        >
          <div className="relative w-8 h-10 mx-auto">
            <Image
              src="http://x.com/favicon.ico"
              alt="X"
              fill
              className=" rounded-full object-contain mb-2"
            />
          </div>
          <p className="text-sm">X</p>
        </TwitterShareButton>
        <LinkedinShareButton
          url={shareUrl}
          className="text-center cursor-pointer "
        >
          <div className="relative w-8 h-10 mx-auto">
            <Image
              src="http://linkedin.com/favicon.ico"
              alt="Linkedin"
              fill
              className=" rounded-full object-contain mb-2"
            />
          </div>
          <p className="text-sm">Linkedin</p>
        </LinkedinShareButton>
      </div>
    </div>
  );
}
