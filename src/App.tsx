import React from 'react';
import { ConfigProvider } from 'antd';
import AppRouter from './AppRouter';

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <AppRouter />
    </ConfigProvider>
  );
};

export default App;
