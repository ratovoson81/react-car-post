import { ItemCarType } from "../../api/types";
import { useAppSelector } from "../../hooks";
import { useCars } from "../../services/Car";

const ListCar = () => {
  useCars();
  const cars = useAppSelector((state) => state.car.cars);

  return (
    <>
      {cars.map((item: ItemCarType) => (
        <div key={item._id} className="flex justify-center ">
          <div className="flex flex-col justify-center w-2/3 m-8 border border-gray-100 bg-gray-100 rounded-lg">
            <div className="h-16 flex items-center justify-start ml-8">
              <p className="text-xl">{item.title}</p>
            </div>
            <div className="flex justify-center">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="my-4 flex items-center justify-start mx-8">
              <p>{item.user.name}</p>
            </div>
            <div className=" flex items-center justify-start mx-8">
              <p className="text-gray-700">{item.description}</p>
            </div>
            <div className="my-4 flex items-center justify-start mx-8">
              <p>{item.date}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListCar;
