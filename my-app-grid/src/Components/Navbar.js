import { useDispatch, useSelector } from 'react-redux';

import './Styles/Navbar.css';
import { searchKeyword } from "../Redux-data/action";

export default function NavBar() {
    const dispatch = useDispatch();

    const keyword = useSelector((state) => state.keyword);

    const handleChange = (e) => {
        dispatch(searchKeyword(e.target.value));
    };

    return (
        <header id="nav-wrapper">
            <nav id="nav">
                <div className="nav left">
                    <span className="gradient skew"><h1 className="logo un-skew"><a href="#home">Shop</a></h1></span>
                    <button id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>
                    <input className='searchBar'
                        type="text"
                        placeholder='Enter text to search..'
                        onChange={handleChange} value={keyword} />
                </div>
                <div className="nav right">
                    <div className="nav-link">
                        <a href="/" className="nav-link"><span className="nav-link-span"><span className="u-nav">Home</span></span></a>
                        <a href="/" className="nav-link"><span className="nav-link-span"><span className="u-nav">Contact</span></span></a>
                    </div>
                </div>
            </nav>
        </header>
    );
}