import React from "react";
import { client } from "@/sanity/lib/client";
import ProductDetails from "@/components/products/ProductCardDetails";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        name,
        description,
        price,
        "imageUrl": image.asset->url,
          "slug": slug.current,
        tags,
      }`;
  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  const data = await getData(resolvedParams.slug);

  return (
    <>
      <ProductDetails data={data} />
    </>
  );
}
