import { ItemCarType } from "../../api/types";
import { useAppSelector } from "../../hooks";
import { useCars } from "../../services/Car";
import moment from "moment";
import { useComment } from "../../services/Comment";
import { SyntheticEvent } from "react";

const ListCar = () => {
  useCars();
  const cars = useAppSelector((state) => state.car.cars);
  const { form, handleChange, submit } = useComment();
  const user = useAppSelector((state) => state.user.user);

  return (
    <>
      {cars.map((item: ItemCarType) => (
        <div key={item._id} className="flex justify-center ">
          <div className="flex flex-col justify-center w-2/3 mt-8 border border-gray-100 bg-gray-100 rounded-lg">
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
            <div className="my-2 flex flex-col mx-8 text-sm text-gray-500">
              {user ? (
                item.comments.map((com) => (
                  <span key={com._id} className="flex mt-1">
                    <p className="text-black font-semibold">{com.user.name}</p>
                    <span className="flex flex-col">
                      <p className="text-gray-500 ml-2">{com.content}</p>
                      {/*<span className="text-gray-500 ml-2">
                      {moment(new Date(com.date), "YYYYMMDD").fromNow()}
                    </span>*/}
                    </span>
                  </span>
                ))
              ) : (
                <p>Connecter vous pour commenter !</p>
              )}
            </div>
            {user && (
              <div className="my-2 flex items-center justify-start mx-8">
                <input
                  type="text"
                  className="focus:outline-none bg-gray-100 w-full"
                  placeholder="Votre commentaire"
                  name="content"
                  onChange={handleChange}
                  value={form.content}
                />
                <button
                  className=""
                  onClick={(e: SyntheticEvent) => submit(e, item._id)}
                >
                  Envoyer
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListCar;
