import Link from "next/link";

const Admin = () => {
  return (
    <>
      <div className="main-title">Админ панель</div>
      <div className="flex flex-col gap-4 w-full sm:w-1/3">
        <Link
          className="main-btn translate-all duration-500 mt-0"
          href="/admin/device"
        >
          Добавить товар
        </Link>
        <Link
          className="main-btn translate-all duration-500 mt-0"
          href="/admin/type"
        >
          Добавить категорию
        </Link>
        <Link
          className="main-btn translate-all duration-500 mt-0"
          href="/admin/brand"
        >
          Добавить бренд
        </Link>
        <Link
          className="main-btn translate-all duration-500 mt-0"
          href="/admin/news"
        >
          Добавить новость
        </Link>
      </div>
    </>
  );
};

export default Admin;
