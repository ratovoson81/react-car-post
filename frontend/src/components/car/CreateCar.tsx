import add from "../../assets/add.svg";
import Modal from "react-modal";
import { useState } from "react";
import "../../css/style.css";

Modal.setAppElement("#root");

const CreateCar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex justify-center mt-8">
        <div className="flex flex-row justify-start m-2 border border-gray-100 bg-gray-100 rounded-lg">
          <img src={add} alt="" width="40" />
          <div className="flex items-center justify-center">create car</div>
        </div>
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full m-auto relative top-8"
          overlayClassName="overlay"
          contentLabel="Example Modal"
        >
          <div className="bg-white pb-4">
            <h3 className="flex text-lg py-4 font-medium text-gray-900 items-center justify-center">
              Ajouter une nouvelle voiture
            </h3>
            <hr />
            <div className="sm:flex sm:items-start mx-4">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full ">
                <div className="mt-2">
                  <div className="md:flex flex-row md:space-x-4 w-full ">
                    <div className="mb-3 space-y-2 w-full ">
                      <label className="font-semibold text-gray-600 py-2">
                        Titre
                      </label>
                      <input
                        placeholder="Titre"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-12 px-4"
                      />
                    </div>
                  </div>
                  <div className="flex-auto w-full mb-1space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Description
                    </label>
                    <textarea
                      required
                      name="message"
                      id=""
                      className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="md:flex flex-row md:space-x-4 w-full ">
                    <div className="mb-3 space-y-2 w-full ">
                      <label className="font-semibold text-gray-600 py-2">
                        Image
                      </label>
                      <input
                        type="file"
                        placeholder="Image"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-12 px-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Deactivate
            </button>
            <button
              onClick={closeModal}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CreateCar;
