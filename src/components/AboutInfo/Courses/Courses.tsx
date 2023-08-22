import s from './Courses.module.scss';
import { useAppSelector } from '../../../app/hooks';
import CourseItem from './CourseItem/CourseItem';

const Courses = () => {
  const { certificates } = useAppSelector((store) => store.projects);
  return (
    <div className={s.container}>
      {certificates.map((certificate) => (
        <CourseItem key={certificate.img} certificate={certificate} />
      ))}
    </div>
  );
};

export default Courses;
