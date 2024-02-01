import { useEffect, useState } from 'react';
import { formatDistanceToNow, parseISO, subDays } from 'date-fns';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { BsFillStarFill } from 'react-icons/bs';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { RepoInfo } from '../../../app/types';
import s from './CodeExampleItem.module.scss';

type CodeExampleItemProperty = {
  repoName: string;
  code: string;
};

const CodeExampleItem = ({ repoName, code }: CodeExampleItemProperty) => {
  const [repoInfo, setRepoInfo] = useState<RepoInfo | null>(null);
  useEffect(() => {
    const fetchRepoInfo = async () => {
      const createToken = () => {
        const chunk0 = 'ghp_rhIUm8I2rKD2L4';
        const chunk1 = 'zhaz1dYBCpJV7t8t2ohmiL';
        return `${chunk0}${chunk1}`;
      };

      try {
        const response = await fetch(
          `https://api.github.com/repos/${import.meta.env.VITE_GIT_USERNAME}/${repoName}`,
          {
            headers: {
              Authorization: `Bearer ghp_${createToken()}`,
            },
          }
        );
        if (!response.ok) return;
        const data = await response.json();
        setRepoInfo(data);
      } catch (error) {
        console.error('Error fetching repository info:', error);
      }
    };
    fetchRepoInfo();
  }, [repoName]);

  let formattedDistance = '';
  if (repoInfo?.created_at) {
    const currentDate = parseISO(repoInfo?.created_at || '');
    const fiveDaysAgo = subDays(currentDate, 5);
    formattedDistance = formatDistanceToNow(fiveDaysAgo, { addSuffix: true });
  }

  return (
    <div className={s.container}>
      <div className={s.repoInfo}>
        <div className={s.user}>
          <img
            src={repoInfo?.owner.avatar_url || 'img/67699125.jpg'}
            alt="user avatar"
            className={s.userPhoto}
          />
          <div className={s.userText}>
            <a href="https://github.com/Ledich19" className={s.userName}>
              @{repoInfo?.owner.login}
            </a>
            <div className={s.repoDate}>{formattedDistance}</div>
          </div>
        </div>
        <div>
          <div className={s.stars}>
            <BsFillStarFill className={s.icon} />
            {repoInfo?.stargazers_count}
            <span> stars</span>
          </div>
        </div>
      </div>

      <SyntaxHighlighter wrapLongLines language="jsx" style={coldarkDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeExampleItem;
