import { IMAGE_URL } from "../../constants/config";
import { useAppSelector } from "../../hooks";

const ListCar = () => {
  const cars = useAppSelector((state) => state.car.cars);
  console.log(cars);

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col justify-center w-2/3 m-8 border border-gray-100 bg-gray-100 rounded-lg">
        <div className="h-16 flex items-center justify-start ml-8">
          <p className="text-xl">titre</p>
        </div>
        <div className="flex justify-center">
          <img src={`${IMAGE_URL + "/lambor.jpg"}`} alt="" />
        </div>
        <div className="my-4 flex items-center justify-start mx-8">
          <p>author</p>
        </div>
        <div className=" flex items-center justify-start mx-8">
          <p className="text-gray-700">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la
          </p>
        </div>
        <div className="my-4 flex items-center justify-start mx-8">
          <p>10 janvier 2021</p>
        </div>
      </div>
    </div>
  );
};

export default ListCar;
