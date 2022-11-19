import { Request, Response } from "express";
import { Category } from "../../models/Category";

import { Product } from "../../models/Product";

export async function listProductsbyCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params
    const products = await Product.find().where('category').equals(categoryId);


    res.json(products);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json;
  }
}