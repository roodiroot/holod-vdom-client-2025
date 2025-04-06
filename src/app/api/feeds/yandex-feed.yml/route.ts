import { getAllProductsApi } from "@/strapi-api/api/data/products-api";
import { NextResponse } from "next/server";

export async function GET() {
  const BASE_URL = "https://holod-vdom.ru";

  const params = new URLSearchParams({
    "filters[brand][name][$ne]": "Royal Clima",
    populate: "*",
    "pagination[pageSize]": "1000",
  });

  const data = await getAllProductsApi(params.toString());

  const yml = `
  <yml_catalog date="${new Date()
    .toISOString()
    .slice(0, 16)
    .replace("T", " ")}">
    <shop>
        <name>HOLOD V DOM</name>
        <company>Хлолд в дом</company>
        <url>${BASE_URL}/</url>
        <offers>
        ${data.data
          .map(
            (product) =>
              `<offer type="vendor.model" available="${
                product.available
              }" id="${product.slug}">
            <url>${BASE_URL}/catalog/product/${product.slug}</url>
            <price>${product.price}.00</price>
            <currencyId>RUR</currencyId>
            <picture>${process.env.NEXT_PUBLIC_URL}${
                product?.images ? product?.images[0]?.url : "/image/kond.jpg"
              }</picture>
            <typePrefix>${product.category?.name}</typePrefix>
            <vendor>${product.brand?.name}</vendor>
            <model>${product.name}</model>
            <sales_notes>Можем установить сегодня</sales_notes>
            <manufacturer_warranty>true</manufacturer_warranty>
            <vendorCode>${product.id}</vendorCode>
            ${product.hit ? "<label>Хит</label>" : ""}
            <param name="popularity">${product.popularity}</param>
            <param name="Серия:">${product.series}</param>
            <param name="Площадь помещения до м²:">${product.available}</param>
            <param name="Технология компрессора:">${
              product.compressor_type
            }</param>
            <param name="Наличие Wi-Fi:">${product.wifi_availability}</param>
            <param name="Охлаждающая способность, BTU:">${
              product.cooling_capacity
            }</param>
            <param name="Уровень шума, дБ:">${product.noise_level}</param>
            <param name="Цвет:">${product.color}</param>
            <param name="Класс энергоэффективности:">${
              product.energy_efficiency_class
            }</param>
            <param name="Страна производитель:">${
              product.country_of_manufacturer
            }</param>
            <param name="Гарантия:">${product.warranty_period}</param>

            ${
              product.char &&
              product.char
                .map(
                  (description) =>
                    `<param name="${description.key}">${description.value}</param>`
                )
                .join("")
            }
          </offer>`
          )
          .join("")}
          
        </offers>
    </shop>
  </yml_catalog>
  `;

  return new NextResponse(yml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
