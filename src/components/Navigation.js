import './Navigation.css';
function Navigation() {
    return (
        <div className='nav-bar'>
            <nav className='nav-items'>
                <li><button >Home</button></li>
                <li><button href='#'>Login/Register</button></li>
                <li><button href='#'>Explore</button></li>
                <li><button href='#'>Book-Sellers</button></li>
                <li><button href='#'>Others</button></li>
            </nav>
            <div className="title">
            <h1>Black Pearl Digital World</h1>
            <small>-A online Book Store</small>
            </div>
        </div>
    );
}

export default Navigation;