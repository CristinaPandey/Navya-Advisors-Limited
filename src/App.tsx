import React from 'react';
import TableComponent from './component/pages/TableComponent.tsx';
import GraphComponent from './component/pages/GraphComponent.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import Card from 'antd/es/card/Card';

const queryClient = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <Card title="Market Data">
        <TableComponent />
      </Card>
      <br />
      <Card title="Stock Prices (MSFT)" className="mt-20">
        <GraphComponent />
      </Card>


    </QueryClientProvider>


  );
}

export default App;
