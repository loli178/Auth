import Modal from '../Modal';

import { openModal } from '../modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login';
import CreateAccount from '../Registro';
import { LoginForm } from '../features/auth/LoginForm';

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <div className="App">
      <LoginForm />
      <button onClick={handleOpenModal}>SING UP</button>
      <CreateAccount></CreateAccount>
      <Login></Login>
    </div>
  );
}

export default App;
