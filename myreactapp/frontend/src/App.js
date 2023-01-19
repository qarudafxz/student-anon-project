import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes, 
    Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Messages from './pages/Messages';
import AnonQuotes from './pages/AnonQuotes';
import Podcast from './pages/Podcast';

// import CustomError from './handlers/CustomError';
import ErrorBoundary from './handlers/ErrorBoundary';


class App extends Component {
    render() {
        return (
            //With error boundary, it will catch the error and display the error message
            //It will also resolve the error so that the App component will be rendered on the virtual dom
           <ErrorBoundary>
                <Router>
                    <div>
                        <Navbar />
                        <Routes>
                            <Route exact path="/" element={<Hero />}></Route>
                            <Route exact path="/messages" element={<Messages />}></Route>
                            <Route exact path="/podcast" element={<Podcast />}></Route>
                            <Route exact path="/quotes" element={<AnonQuotes/>}></Route>
                        </Routes>
                    </div>
            </Router>
           </ErrorBoundary>
        );
    }
}

export default App;