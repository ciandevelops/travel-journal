import { LocationMarkerIcon } from "@heroicons/react/solid";

const Card = (props) => {
  console.log(props.item.imageUrl);
  return (
    <div className="card">
      <div className="card--left">
        <img
          src={props.item.imageUrl}
          alt="card-image"
          className="card--image"
        />
      </div>

      <div className="card--right">
        <h2>
          <LocationMarkerIcon height={25} color={"#F55A5A"} />
          {props.item.location}
        </h2>

        <a href={props.item.googleMapsUrl}>View On Google Maps</a>

        <h1>{props.item.title}</h1>

        <b>
          {props.item.startDate} - {props.item.endDate}
        </b>

        <p> {props.item.description}</p>
      </div>
    </div>
  );
};

export default Card;
