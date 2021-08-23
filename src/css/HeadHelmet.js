import React from "react";
import { Helmet } from "react-helmet";

//import PlusJakartaSansBold from "../assets/fonts/plus-jakarta/PlusJakartaSans-Bold.woff2";
//import PlusJakartaSansMedium from "../assets/fonts/plus-jakarta/PlusJakartaSans-Medium.woff2";
import PlusJakartaSansRegular from "../assets/fonts/plus-jakarta/PlusJakartaSans-Regular.woff2";

//import InterMedium from "../assets/fonts/inter/inter-v3-latin-ext-500.woff2";
import InterRegular from "../assets/fonts/inter/inter-v3-latin-ext-regular.woff2";

export default function HeadHelmet({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>icerik</title>
        <link rel="canonical" href="https://icerik.com" />
        <link rel="preload" as="font" href={InterRegular} type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href={PlusJakartaSansRegular} type="font/woff2" crossOrigin="anonymous" />
      </Helmet>
      {children}
    </>
  );
}
