import {Link} from 'react-router-dom'
import NavBar from "../components/NavBar";

function NotFoundPage (){
    return (
        <>
        <header>
            <NavBar />
        </header>
        <main>
            <h1>Oops! Looks like something went wrong.</h1>
        </main>
        </>
    );
}
export default NotFoundPage;