import React from 'react';
import Route from './src/Navigations/Route';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ToastProvider} from 'react-native-toast-notifications';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Route />
      </ToastProvider>
    </QueryClientProvider>
  );
};

export default App;
