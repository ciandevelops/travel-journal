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
        <div className="card--subtitle">
          <h4 className="card--location">
            <LocationMarkerIcon height={25} color={"#F55A5A"} />
            {props.item.location.toUpperCase()}
          </h4>
          <a className="card--link" href={props.item.googleMapsUrl}>
            View On Google Maps
          </a>
        </div>

        <h1 className="card--title">{props.item.title}</h1>

        <b className="card--bold">
          {props.item.startDate} - {props.item.endDate}
        </b>

        <p className="card--desc"> {props.item.description}</p>
      </div>
    </div>
  );
};

export default Card;
