import './Button.css';

const Button = ({item, setItem, value}) => {
    const backgroundColor = 
        (item === value)?
            ('black'):
            ('')
    const color = 
        (item === value)?
        ('white'):
        ('black')


    const style = {
        color: color,
        backgroundColor: backgroundColor
    }

    return (
        <button
            style = {style}
            onClick={() => {
                setItem(value);
            }}
        >
            {value}
        </button>
    )
}

export default Button;