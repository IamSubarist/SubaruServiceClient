import React from "react";

const Contacts = () => {
  return (
    <div>
      <div className="mb-10 text-4xl">Контакты</div>
      <div className="flex justify-between ">
        <div className="w-3/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.095614526288!2d39.702335926388756!3d47.21471141495709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9a8f82b0a17%3A0xae4b6e608bcebd92!2z0KDQvtGB0YLQvtCy0YHQutC40Lkt0L3QsC3QlNC-0L3RgyDQutC-0LvQu9C10LTQtiDRgdCy0Y_Qt9C4INC4INC40L3RhNC-0YDQvNCw0YLQuNC60Lg!5e0!3m2!1sru!2sru!4v1683963674401!5m2!1sru!2sru"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col justify-between">
          <div className="rounded-md bg-blue-100 px-4 py-2">
            <p className="font-bold">Наш адрес</p>
            <ul>
              <li>ул. Восточная, 56</li>
              <li>Ежедневно с 8.00 до 20.00</li>
            </ul>
          </div>
          <div className="rounded-md bg-blue-100 px-4 py-2">
            <p className="font-bold">Позвоните нам</p>
            <ul>
              <li>8 800 555-35-35</li>
              <p className="text-sm">Станция</p>
              <li>8 951 846-91-94</li>
              <p className="text-sm">Роман, Руководитель</p>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <a
            className="px-4 py-2 rounded-md border-2 border-blue-100 translate-all duration-500 hover:bg-blue-100"
            href={"/"}
          >
            Телеграм
          </a>
          <a
            className="px-4 py-2 rounded-md border-2 border-blue-100 translate-all duration-500 hover:bg-blue-100"
            href={"/"}
          >
            Инстаграм
          </a>
          <a
            className="px-4 py-2 rounded-md border-2 border-blue-100 translate-all duration-500 hover:bg-blue-100"
            href={"/"}
          >
            Вконтакте
          </a>
          <a
            className="px-4 py-2 rounded-md border-2 border-blue-100 translate-all duration-500 hover:bg-blue-100"
            href={"/"}
          >
            Записаться на ТО
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
