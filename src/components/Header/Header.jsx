import header from './Header.module.css';

function Header() {
    return (
        <header>
            <h1 className={header['title']}>Ja<span className='color--primary'>mmm</span>ing</h1>
        </header>
    );
}

export default Header;