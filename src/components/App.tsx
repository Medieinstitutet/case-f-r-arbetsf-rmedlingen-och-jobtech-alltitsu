import '../styles/App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from '../Router';

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
