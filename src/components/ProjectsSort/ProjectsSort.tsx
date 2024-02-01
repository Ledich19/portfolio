import { useState } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiGraphql,
  SiNodedotjs,
  SiSocketdotio,
  SiPrisma,
  SiNestjs,
  SiThreedotjs,
} from 'react-icons/si';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import s from './ProjectsSort.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setTechnology } from '../../reducers/sort';

const ProjectsSort = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const filtersState = useAppSelector((state) => state.technologies);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { checked, name } = target;
    dispatch(setTechnology({ name, checked }));
  };

  return (
    <div className={s.list}>
      <div className={s.titleBlock}>
        <button type="button" onClick={toggleVisible} className={s.button}>
          <span>
            {!visible ? <FaSortDown className={s.open} /> : <FaSortUp className={s.close} />}
          </span>
        </button>
        <span className={visible ? s.title : s.title_active}>projects</span>
      </div>

      <div className={visible ? s.elementsList : s.elementsList_active}>
        <label htmlFor="SiHtml5" className={s.label}>
          <input
            checked={filtersState.html}
            name="html"
            id="SiHtml5"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiHtml5 className={s.icon} /> HTML
          </span>
        </label>

        <label htmlFor="SiCss3" className={s.label}>
          <input
            checked={filtersState.css}
            name="css"
            id="SiCss3"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiCss3 className={s.icon} /> css
          </span>
        </label>

        <label htmlFor="SiJavascript" className={s.label}>
          <input
            checked={filtersState.js}
            name="js"
            id="SiJavascript"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiJavascript className={s.icon} /> Javascript
          </span>
        </label>

        <label htmlFor="SiTypescript" className={s.label}>
          <input
            checked={filtersState.ts}
            name="typescript"
            id="SiTypescript"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiTypescript className={s.icon} /> Typescript
          </span>
        </label>

        <label htmlFor="SiReact" className={s.label}>
          <input
            checked={filtersState.react}
            name="React"
            id="SiReact"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiReact className={s.icon} /> React
          </span>
        </label>

        <label htmlFor="SiRedux" className={s.label}>
          <input
            checked={filtersState.redux}
            name="Redux"
            id="SiRedux"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiRedux className={s.icon} /> Redux
          </span>
        </label>

        <label htmlFor="SiGraphql" className={s.label}>
          <input
            checked={filtersState.GraphQl}
            name="GraphQl"
            id="SiGraphql"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiGraphql className={s.icon} /> GraphQl
          </span>
        </label>

        <label htmlFor="SiNodedotjs" className={s.label}>
          <input
            checked={filtersState.NodeJs}
            name="NodeJs"
            id="SiNodedotjs"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiNodedotjs className={s.icon} /> NodeJs
          </span>
        </label>

        <label htmlFor="SiSocketdotio" className={s.label}>
          <input
            checked={filtersState.WebSocket}
            name="WebSocket"
            id="SiSocketdotio"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiSocketdotio className={s.icon} /> WebSocket
          </span>
        </label>

        <label htmlFor="SiPrisma" className={s.label}>
          <input
            checked={filtersState.Prisma}
            name="Prisma"
            id="SiPrisma"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiPrisma className={s.icon} /> Prisma
          </span>
        </label>

        <label htmlFor="iNestjs" className={s.label}>
          <input
            checked={filtersState.Nest}
            name="Nest"
            id="iNestjs"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiNestjs className={s.icon} /> Nest
          </span>
        </label>

        <label htmlFor="THREEjs" className={s.label}>
          <input
            checked={filtersState.THREEjs}
            name="THREEjs"
            id="THREEjs"
            onChange={handleCheck}
            className={s.input}
            type="checkbox"
          />
          <span>
            <SiThreedotjs className={s.icon} /> THREE-Js
          </span>
        </label>
      </div>
    </div>
  );
};

export default ProjectsSort;
