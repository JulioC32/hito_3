import Cart from './assets/components/Cart';
import Footer from './assets/components/Footer';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';


const App = () => {
  return (
    <>
      <Navbar />
      {<Home/>}
      {/*<Register/>*/}
      {/*<LoginPage/>*/}
      {/*<Cart />*/}
      <Footer/>
    </>
  );
};

export default App;
