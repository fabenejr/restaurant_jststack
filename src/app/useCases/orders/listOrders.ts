import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response): Promise<void> {
  try {
    const orders = await Order.find();


    res.json(orders);
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json;
  }
}