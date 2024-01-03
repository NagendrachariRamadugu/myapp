import './Header.css';
import Button from './Header/Button.jsx';

const Header = ({item, setItem, info}) => {
    return (
        <div className='header'>
            {
                info.map(value => (
                    <Button
                        value = {value}
                        item = {item}
                        setItem = {setItem}
                    />
                ))
            }
        </div>
    )
}

export default Header;