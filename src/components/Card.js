import './Card.css';

const Card = (props) => {


    return (
        <div className='main'>
            <img src={props.img} className='card-img'></img>
            <div className='block2'>

                <div className='Location'>
                    📍{props.loc}
                    <a href={props.loclink} target=" "><span className='link-gmap'>View on Google Maps</span></a>
                </div>


                <div className='heading'>{props.place}</div>

                <div className='date'>{props.date}</div>
                <div className='data'>{props.content}</div>
            </div>
        </div>
    )
}

export default Card;