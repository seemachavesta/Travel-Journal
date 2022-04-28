import {BiMap} from 'react-icons/bi'

export default function Card(props){
    const {img, title, location,  googleMapsUrl, startDate, endDate, description} = props.data;
   
    return (
        <div className='card-container'>
            <div className='card-img'>
                <img src={img} alt={title}/>

            </div>
            <div className='card-description'>
                <div className='card-loction'>
                    <div className='map-icon'>
                        <span className='card--map-img'><BiMap/></span>
                        <p>{location}</p>
                    </div>
                   
                    <a href={googleMapsUrl} target={'_blank'}>{"View on Google Map"}</a>
                </div>
                <h1>{title}</h1>
                <h2>{`${startDate} - ${endDate}`}</h2>
                <p>{description}</p>

            </div>
           
        </div>
    )
}