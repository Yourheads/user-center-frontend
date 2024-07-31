import { PageHeaderWrapper } from '@ant-design/pro-components';
import React from 'react';
const Admin: React.FC = (prosp) => {
  const {children} = prosp;
  return (
    <PageHeaderWrapper>
      {children}
    </PageHeaderWrapper>
  );
};
export default Admin;
