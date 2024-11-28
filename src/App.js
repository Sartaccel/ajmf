import './App.css';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import AppRouter from './AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,     // Whether animation should happen infinitely
    });

    AOS.refresh();   // Ensure AOS animations are refreshed on route/component changes
  }, []);
  return (
      <AppRouter />
  );
}

export default App;