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
    console.log('ENV', import.meta.env.VITE_GIT_API_KEY);
    console.log('ENV2', import.meta.env.VITE_GIT_USERNAME);
    const fetchRepoInfo = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${import.meta.env.VITE_GIT_USERNAME}/${repoName}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GIT_API_KEY}`,
            },
          }
        );
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
          <img src={repoInfo?.owner.avatar_url} alt="user avatar" className={s.userPhoto} />
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
