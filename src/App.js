import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './style/main.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from './components/header/Header';
import {BrowserRouter as Router} from "react-router-dom";
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchAllData } from './store/actions/fetchData';
import AppRoute from './routes/AppRoute';
import { getUser } from './store/actions/authAction';
import { ToastContainer} from 'react-toastify';
import { getAllOrders } from './store/actions/orderAction';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser());
    dispatch(fetchAllData());
    dispatch(getAllOrders());
    
    // eslint-disable-next-lin
  },[dispatch])
  return (
   <Router>
    <ToastContainer 
        position="bottom-left"
  />
      <div className="App">
        <Header/>
        <AppRoute/>
      </div>
   </Router>
  );
}

export default App;
