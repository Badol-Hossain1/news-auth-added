import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import LeftNavbar from '../components/layout-component/LeftNavbar';
import RightNav from '../components/layout-component/RightNav';
import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';

const HomeLayout = () => {
  const newsPage = useLoaderData();

  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto ">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          {/* <Outlet></Outlet> */}
          {newsPage.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
