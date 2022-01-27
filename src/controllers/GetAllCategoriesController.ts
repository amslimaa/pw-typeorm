import { Request, Response } from "express";
import { GetAllCategoriesServices } from "../services/GetAllCategoriesService";

export class GetAllCategoriesController {
  async handle(req: Request, res: Response) {
    const service = new GetAllCategoriesServices;

    const categories = await service.execute();

    return res.json(categories);
  }
}