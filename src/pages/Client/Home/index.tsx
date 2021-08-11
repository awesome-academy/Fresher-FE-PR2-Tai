import { useEffect } from 'react';
import Header from './../../../layout/Client/header';
import Footer from './../../../layout/Client/footer';
import Banner from './../../../layout/Client/banner';
import NewProductList from '../../../components/NewProductList';
import BestSeller from '../../../components/BestSeller';
import {
  productActions,
  selectProductFilter,
} from '../../../features/product/productSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

const Home = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectProductFilter);
  useEffect(() => {
    dispatch(productActions.fetchProductList(filter));
  }, [dispatch, filter]);

  return (
    <div className='home'>
      <Header />
      <Banner />
      <NewProductList />
      <BestSeller />
      <Footer />
    </div>
  );
};

export default Home;
