import {Link} from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title font-bold text-xl">{title}</h2>
        <div className="flex items-center">
            <p className="text-[#FF3881] text-lg font-medium">${price}</p>
            <Link><button><FaArrowRightLong className="text-[#FF3881] text-xl justify-center"></FaArrowRightLong></button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
