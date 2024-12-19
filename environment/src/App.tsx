import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

//Invoke App()
function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

//Export App
export default App;
