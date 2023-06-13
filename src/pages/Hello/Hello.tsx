import { useParams } from 'react-router-dom';
import s from './Hello.module.scss';
import Hellos from '../../components/Hellos/Hellos';
import HelloSpice from '../../components/HelloSpice/HelloSpice';
import { useGetHellosQuery } from '../../services/HelloApi';
import { ProductsType } from '../../app/types';
import { useAppSelector } from '../../app/hooks';

const Hello = () => {
  
  return (
    <div className={s.hello}>
     
    </div>
  );
};

export default Hello;
