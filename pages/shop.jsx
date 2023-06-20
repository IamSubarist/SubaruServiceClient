import { AboutUs } from "@/src/components/AboutUs";
import { Catalog } from "@/src/components/Catalog";
import Reviews from "@/src/components/Reviews";
import { Utp } from "@/src/components/Utp";
import YandexMetrica from "@/src/components/yandexMetrika";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Disk from "../public/assets/Disk.png";

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
      <div className="relative">
        <Image
          className="absolute -bottom-64 -left-full sm:-left-60"
          src={Disk}
          alt={Disk}
        />
      </div>
    </div>
  );
};

export default Shop;
