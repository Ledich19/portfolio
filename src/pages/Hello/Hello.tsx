import s from './Hello.module.scss';

const Hello = () => {
  return (
    <div className={s.hello}>
      <div className={s.box}>
        Hi all. I am
        <div className={s.name}>Oleksandr Chumachenko</div>
        <div className={s.position}> &gt; Front-end developer</div>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <div className={s.git}> // you can also see it my Github page </div>
        <span className={s.const}>const </span>
        <span className={s.variable}>githubLink</span>
        <span> = </span>
        <a href="https://github.com/Ledich19" className={s.link}>
          https://github.com/Ledich19
        </a>
      </div>
    </div>
  );
};

export default Hello;
