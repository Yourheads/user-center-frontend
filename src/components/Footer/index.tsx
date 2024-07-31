import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'yourheads出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '黑龙江工业学院',
          href: 'https://www.hljut.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Yourheads',
          blankTarget: true,
        },
        {
          key: 'Blog',
          title: '我的博客',
          href: 'https://www.yourheads.xyz/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
