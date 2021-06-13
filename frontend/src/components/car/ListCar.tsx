import { ItemCarType } from "../../api/types";
import { useAppSelector } from "../../hooks";
import { useCars } from "../../services/Car";
import moment from "moment";

const ListCar = () => {
  useCars();
  const cars = useAppSelector((state) => state.car.cars);

  return (
    <>
      {cars.map((item: ItemCarType) => (
        <div key={item._id} className="flex justify-center ">
          <div className="flex flex-col justify-center w-2/3 m-8 border border-gray-100 bg-gray-100 rounded-lg">
            <div className="h-14 flex items-center justify-start ml-8">
              <p className="text-lg">{item.title}</p>
            </div>
            <div className="flex justify-center">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="my-2 flex items-center justify-start mx-8">
              <p className="text-black font-semibold">{item.user.name}</p>{" "}
              <p className="text-gray-500 ml-2">{item.description}</p>
            </div>
            <div className="flex items-center justify-start mx-8 text-sm text-gray-500">
              <p>{moment(new Date(item.date), "YYYYMMDD").fromNow()}</p>
            </div>
            <div className="my-2 flex items-center justify-start mx-8 text-sm text-gray-500">
              <p>comments</p>
            </div>
            <div className="my-2 flex items-center justify-start mx-8">
              <input
                type="text"
                className="focus:outline-none bg-gray-100 w-full"
                placeholder="Votre commentaire"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListCar;
