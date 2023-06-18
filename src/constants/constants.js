export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const HEADER_NAVBAR = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Новости",
    href: "/news",
  },
  {
    name: "О нас",
    href: "/about",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
  {
    name: "Консультация/Запись",
    href: "/consultation",
  },
];

export const API_BASE_URL = "http://80.78.241.172:5000/";

export const CATEGORIES_URL = "api/type/";
export const BRANDS_URL = "api/brand/";
export const DEVICES_URL = "api/device/";
export const NEWS_URL = "api/news/";
export const ORDERS_URL = "api/order/";
export const REVIEWS_URL = "api/review/";
export const MAILS_URL = "api/mail/";
export const CARTS_URL = "api/cart/";
export const USERS_URL = "api/user/";
