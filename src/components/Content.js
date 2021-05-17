import './Content.css'
import Login from './Login.js';
import BookSeller from './BookSeller.js';

function Content(option) {
    switch (option.page) {
        case "home":
            return (<div><h1 className='heading'>Home Page</h1></div>);
        case "login":
            return (
                <Login />
            );
        case "bookseller":
            return (
                <BookSeller />
            );
        case "books":
            return (<div></div>);
        default:
            return (<div>
                <h1 className='heading'>Home Page</h1>
                <Login page={"login"} />
                <Login page={"register"} />
            </div>);
    }
}

export default Content;