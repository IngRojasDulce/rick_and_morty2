
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
const Nav =({onSearch})=>{

    return (
        <nav>
            <SearchBar onSearch={onSearch}></SearchBar>
            <button>
                 <Link to = '/about'>About</Link>
            </button>
            <button>
                <Link to = '/home'> Home </Link>
            </button>
            <Link to='/favorites'> Favorites </Link>
        </nav>
    )
}
export default Nav;