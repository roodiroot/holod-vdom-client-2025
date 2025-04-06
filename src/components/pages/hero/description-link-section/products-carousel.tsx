import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Product } from "@/strapi-api/api/data/types";
import CardProductHero from "./card-product-hero";

interface ProductsSaleCarouselProps {
  products?: Product[];
}

const ProductsSaleCarousel: React.FC<ProductsSaleCarouselProps> = ({
  products,
}) => {
  // console.log(products);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full "
    >
      {/* <div className=""> */}
      <CarouselContent>
        {products
          ? products.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 pl-2"
              >
                <div className="p-1 h-full">
                  <CardProductHero
                    key={product.slug}
                    productId={product.slug}
                    title={product.brand?.name + " " + product.name}
                    price={product.price || 0}
                    area_of_room={product.area_of_room}
                    series={product.series}
                    sale={product.sale}
                    images={product.images}
                  />
                </div>
              </CarouselItem>
            ))
          : null}
      </CarouselContent>
      {/* </div> */}
      <CarouselPrevious className="left-3" />
      <CarouselNext className="right-3" />
    </Carousel>
  );
};

export default ProductsSaleCarousel;
