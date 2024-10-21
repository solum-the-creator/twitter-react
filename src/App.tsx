import { useState } from 'react';

import { Header } from '@/components/header';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default App;
