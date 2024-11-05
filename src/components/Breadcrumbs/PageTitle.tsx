import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { APP_TEXT } from '../../common/text';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title + ' | ' + APP_TEXT.app_name;
  }, [location, title]);

  return null; // This component doesn't render anything
};

export { PageTitle };
