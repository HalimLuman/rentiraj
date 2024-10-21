import mongoose, { Schema, model, models } from 'mongoose'

const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: { type: String, required: true },
})

const Product = models.Product || model('Product', productSchema)

export default Product
