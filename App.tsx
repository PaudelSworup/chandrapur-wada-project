import React from 'react';
import Route from './src/Navigations/Route';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const queryClient = new QueryClient();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <Route />
          </ToastProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
