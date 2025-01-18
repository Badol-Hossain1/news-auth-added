import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import RightNav from '../../components/layout-component/RightNav';
import Navbar from '../../components/Navbar';

const NewsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl"> news details</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
