import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './modalSlice';
//import './index.css';
import imgFacebook from './image/icons8-facebook-48.png';
import imgGoogle from './image/icons8-logo-de-google-48.png';
import Login from './Login';
const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isOpen);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="circulo1"></div>
            <div className="circulo2"></div>
            <div className="circulo3"></div>
            <div className="circulo4"></div>
            <Login></Login>
            {/* <header>Inicia sesion o registrate</header>
            <div className="form">
              <h6>Te damos la bienvenida a ...</h6>
              <form>
                <input placeholder="Ingresa tu email"></input>
                <input placeholder="Ingresa tu contraseña"></input>
                <button type="submit" className="continuar">
                  Continuar
                </button>
              </form>
              <div className="registro-content">
                <div>¿No tienes cuenta?</div>
                <h5 className="registro">Registrate</h5>
                <div>
                  <img src={imgFacebook} alt="imgfacebook" />
                  <img src={imgGoogle} alt="imgGooglek" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
