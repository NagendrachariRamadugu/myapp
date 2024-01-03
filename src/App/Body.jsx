import './Body.css';

const Body = ({itemsInfo}) => {
    return (
        <div className='body-div'>
            <ul>
                {
                    itemsInfo.map(item => (
                        <li>{JSON.stringify(item)}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Body