import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx'; //Import App.tsx
import CandidateSearch from './pages/CandidateSearch.tsx'; //Import CandidateSearch.tsx
import SavedCandidates from './pages/SavedCandidates.tsx'; //Import SavedCandidates.tsx
import ErrorPage from './pages/ErrorPage.tsx'; //Import ErrorPage.tsx

//Invoke createBrowserRouter()
const router = createBrowserRouter([
  {
    path: '/',
    //App 
    element: <App />,
    //ErrorPage
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        //CandidateSearch
        element: <CandidateSearch />,
      },
      {
        path: '/SavedCandidates',
        //SavedCandidates
        element: <SavedCandidates />,
      },
    ],
  },
]);

//Invoke document.getElementById()
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
