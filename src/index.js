import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './index.css';
import './scss/style.scss';
import './scss/responsive.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/col';
import HomePage from './Components/Home/Default';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/Common/SignIn';
import SignUp from './Components/Common/SignUp';
import Success from './Components/Common/Success';
import CreateNewPasswordSuccess from './Components/Common/CreatePasswordSuccess';
import CreatePassword from './Components/Common/CreatePassword';
import ChangePassword from './Components/Common/ChangePassword';
import ForgotPassword from './Components/Common/ForgotPassword';
import EditProfile from './Components/Common/EditProfile';
import useStyles from './Components/Common/RangeSlider';
import ChangePasswordSuccess from './Components/Common/ChangePasswordSuccess';
import NavigationBar from './Components/Header/Navigation';
import Events from './Components/Listing/Events/Events';
import EventsDetails from './Components/Listing/Events/EventsDetails';
import DatePickerInfo from './Components/Common/DatePickerInfo';
import UserCheckout from './Components/CheckoutSummary/UserCheckout';
import CheckoutSummary from './Components/CheckoutSummary/CheckoutSummary';
import DownloadTicket from './Components/Common/DownloadTicket';

class App extends React.Component {
    render() {
        return (
            <Router>
                <NavigationBar />
                <Route path="/Default" component={HomePage} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/DatePickerInfo" component={DatePickerInfo} />
                <Route path="/DownloadTicket" component={DownloadTicket} />
                <Route path="/CheckoutSummary" component={CheckoutSummary} />
                <Route path="/Success" component={Success} />
                <Route path="/ForgotPassword" component={ForgotPassword} />
                <Route path="/EditProfile" component={EditProfile} />
                <Route path="/CreatePasswordSuccess" component={CreateNewPasswordSuccess} />
                <Route path="/CreatePassword" component={CreatePassword} />
                <Route path="/ChangePassword" component={ChangePassword} />
                <Route path="/ChangePasswordSuccess" component={ChangePasswordSuccess} />
                <Route path="/EventsDetails" component={EventsDetails} />
                <Route path="/Events" component={Events} />
                <Route path="/useStyles" component={useStyles} />
                <Route exact path="/" render={props => (
                    <Col xs={12} className="p-0">
                        <HomePage />
                    </Col>
                )} />
                <Route path="/Footer" component={Footer} />
            </Router>
        )
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));