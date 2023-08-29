import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import {Product} from '../types/Product'


export async function getProducts(): Promise<Product[]> {
       
    return createClient(clientConfig).fetch(
      groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      price,
      "image": image.asset->url,
      description,
      "slug": slug.current,
      }`
    )
}

export async function getProduct(slug: string): Promise<Product> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        price,
        "image": image.asset->url,
        description,
        "slug": slug.current,
        }`,
      { slug }
    )
  }
