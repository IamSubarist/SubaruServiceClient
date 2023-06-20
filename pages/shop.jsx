import { AboutUs } from "@/src/components/AboutUs";
import { Catalog } from "@/src/components/Catalog";
import Reviews from "@/src/components/Reviews";
import { Utp } from "@/src/components/Utp";
import YandexMetrica from "@/src/components/yandexMetrika";
import Head from "next/head";
import React from "react";

const Shop = () => {
  return (
    <div>
      <Head>
        <YandexMetrica />
        <meta name="yandex-verification" content="8e69f77ba4a87830" />
      </Head>
      <Utp />
      <AboutUs />
      <Catalog />
      <Reviews />
    </div>
  );
};

export default Shop;
