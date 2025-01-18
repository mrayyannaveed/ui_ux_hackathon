import { defineQuery } from "next-sanity";


export const allproducts = defineQuery(`
    *[_type == "product"]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url
    category,
    description,
    inventory,
    tags,
    }
    `)

export const fourPro = defineQuery(`
    *[_type == "product"]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url
    category,
    description,
    inventory,
    tags,
    }
    `)

    export default function cartProducts(id: string){
    const idPro = defineQuery(`
    *[_type == "product" && _id == "${id}"]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    priceWithoutDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageUrl": image.asset->url
    }
    `)
    return idPro
}