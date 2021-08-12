import { useEffect } from 'react';
import MainLayout from './../../../layout/Client/MainLayout';
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
      <MainLayout>
        <Banner />
        <NewProductList />
        <BestSeller />
      </MainLayout>
    </div>
  );
};

export default Home;
