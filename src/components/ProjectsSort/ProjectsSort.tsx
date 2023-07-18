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
} from 'react-icons/si';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import s from './ProjectsSort.module.scss';

const ProjectsSort = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
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
          <input value="html" id="SiHtml5" className={s.input} type="checkbox" />
          <span>
            <SiHtml5 className={s.icon} /> HTML
          </span>
        </label>

        <label htmlFor="SiCss3" className={s.label}>
          <input value="css" id="SiCss3" className={s.input} type="checkbox" />
          <span>
            <SiCss3 className={s.icon} /> css
          </span>
        </label>

        <label htmlFor="SiJavascript" className={s.label}>
          <input value="js" id="SiJavascript" className={s.input} type="checkbox" />
          <span>
            <SiJavascript className={s.icon} /> Javascript
          </span>
        </label>

        <label htmlFor="SiTypescript" className={s.label}>
          <input value="ts" id="SiTypescript" className={s.input} type="checkbox" />
          <span>
            <SiTypescript className={s.icon} /> Typescript
          </span>
        </label>

        <label htmlFor="SiReact" className={s.label}>
          <input value="react" id="SiReact" className={s.input} type="checkbox" />
          <span>
            <SiReact className={s.icon} /> React
          </span>
        </label>

        <label htmlFor="SiRedux" className={s.label}>
          <input value="redux" id="SiRedux" className={s.input} type="checkbox" />
          <span>
            <SiRedux className={s.icon} /> Redux
          </span>
        </label>

        <label htmlFor="SiGraphql" className={s.label}>
          <input value="GraphQl" id="SiGraphql" className={s.input} type="checkbox" />
          <span>
            <SiGraphql className={s.icon} /> GraphQl
          </span>
        </label>

        <label htmlFor="SiNodedotjs" className={s.label}>
          <input value="nodeJs" id="SiNodedotjs" className={s.input} type="checkbox" />
          <span>
            <SiNodedotjs className={s.icon} /> Node JS
          </span>
        </label>

        <label htmlFor="SiSocketdotio" className={s.label}>
          <input value="WebSocket" id="WebSocket" className={s.input} type="checkbox" />
          <span>
            <SiSocketdotio className={s.icon} /> WebSocket
          </span>
        </label>
      </div>
    </div>
  );
};

export default ProjectsSort;
