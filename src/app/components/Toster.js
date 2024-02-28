// import "./styles.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Toster(message) {
  return (
    <div className="App">
      <h1>{message.message}</h1>
    </div>
  );
}
