import { Provider } from 'react-redux';
import { UsersPage } from './pages';
import { store } from './store';

//Componente principal, se configura el provider para que todos los componente tengan acceso al store
function App() {
  return (
    <Provider store={ store }>
      <UsersPage/>
    </Provider>
  )
}

export default App
