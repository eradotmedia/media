import React, {Component} from 'react';
import Navigation from './components/navigation/navigation';
import Footer from './components/navigation/footer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <main>{this.props.children}</main>
                <Footer />
                <Navigation />
            </div>
        );
    }
}

export default App;
