import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Photos from './pages/photos';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/PortTestThree' element={<Home />} />
		<Route path='/PortTestThree/about' element={<About/>} />
		<Route path='/PortTestThree/contact' element={<Contact/>} />
		<Route path='/PortTestThree/blogs' element={<Blogs/>} />
		<Route path='/PortTestThree/sign-up' element={<SignUp/>} />
    <Route path='/PortTestThree/photos' element={<Photos/>} />
	</Routes>
	</Router>
);
}

export default App;
