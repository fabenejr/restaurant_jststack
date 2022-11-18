import { model, Schema, SchemaTypes } from "mongoose"

export const Product = model('Product', new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING, IN_PRODUCT, DONE',],
    default: 'WAITING',

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    }],
  },
}));


