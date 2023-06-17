import React from "react";

const Filter = () => {
  return (
    <div className="max-w-md p-4 bg-white rounded-lg shadow-xl">
      <div className="mb-4">
        <p className="text-xl mb-0.5 font-bold text-gray-800">Тип</p>
        <select
          className="border border-blue-900 rounded-md bg-transparent outline-none w-full p-2"
          name=""
          id=""
        >
          <option value="">Летние</option>
          <option value="">Зимние</option>
          <option value="">Всесезонные</option>
        </select>
      </div>
      <div className="mb-4">
        <p className="text-xl mb-0.5 font-bold text-gray-800">Производитель</p>
        <select
          className="border border-blue-900 rounded-md bg-transparent outline-none w-full p-2"
          name=""
          id=""
        >
          <option value="">Michelin</option>
          <option value="">Yokohama</option>
          <option value="">Toyo Tires</option>
        </select>
      </div>
      <div className="mb-4">
        <p className="text-xl mb-0.5 font-bold text-gray-800">Размер</p>
        <select
          className="border border-blue-900 rounded-md bg-transparent outline-none w-full p-2"
          name=""
          id=""
        >
          <option value="">XXX/XX</option>
          <option value="">XXX/XX</option>
          <option value="">XXX/XX</option>
        </select>
      </div>
      <div className="mb-4">
        <p className="text-xl mb-0.5 font-bold text-gray-800">Диаметр</p>
        <select
          className="border border-blue-900 rounded-md bg-transparent outline-none w-full p-2"
          name=""
          id=""
        >
          <option value="">R16</option>
          <option value="">R17</option>
          <option value="">R18</option>
        </select>
      </div>
      <button className="text-center mt-6 py-3 w-full bg-gradient-to-t from-blue-900 to-blue-800 rounded-md text-white hover:bg-white">
        Подобрать
      </button>
    </div>
  );
};

export default Filter;
