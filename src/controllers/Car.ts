import { Request, Response } from "express";
import { Car } from "../models/Car";

export const createCar = (req: Request, res: Response) => {
  delete req.body._id;
  const car = new Car({
    ...req.body,
  });
  car
    .save()
    .then((car) => res.status(201).json(car))
    .catch((error: Error) => res.status(400).json({ error }));
};

export const modifyCar = (req: Request, res: Response) => {
  Car.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(async () => {
      const value = await Car.findOne({ _id: req.params.id });
      res.status(200).json(value);
    })
    .catch((error) => res.status(400).json({ error }));
};

export const deleteCar = (req: Request, res: Response) => {
  Car.deleteOne({ _id: req.params.id })
    .then((car) => res.status(200).json(req.params.id))
    .catch((error) => res.status(400).json({ error }));
};

export const getOneCar = (req: Request, res: Response) => {
  Car.findOne({ _id: req.params.id })
    .then((car) => res.status(200).json(car))
    .catch((error) => res.status(404).json({ error }));
};

export const getAllCar = (req: Request, res: Response) => {
  Car.find()
    .then((cars) => res.status(200).json(cars))
    .catch((error) => res.status(400).json({ error }));
};
