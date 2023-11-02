import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';

const App: FC = () => {
  return <div>sss</div>;
};

const root = ReactDOM.createRoot(document.getElementById('react-app') as HTMLElement);
root.render(<App />);
