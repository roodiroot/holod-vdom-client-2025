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
            (p) =>
              `
            <offer id="${p.id}" type="vendor.model" available="${p.available}">
              <name>${p.brand?.name + " " + p.name}</name>
              <categoryId>123</categoryId>
              <url>${BASE_URL}/catalog/product/${p.slug}</url>
              ${p.images
                ?.map(
                  (i) =>
                    `<picture>${process.env.NEXT_PUBLIC_URL}${i.url}</picture>`
                )
                .join("")}
              <price>${p.price}</price>
              <oldprice>${
                p.sale
                  ? (p.price || 0) * (p.sale / 100) + (p.price || 0)
                  : p.sale
              }</oldprice>
              <currencyId>RUR</currencyId>
              <typePrefix>${p.category?.name}</typePrefix>
              <model>${p.series}</model>
              <vendor>${p.brand?.name}</vendor>
              <description>${p.description}</description>
              <sales_notes>Скидка 10% на первую покупку. Привезем и установим сегодня.</sales_notes>
              <param name="Площадь помещения до м²:">${p.available}</param>
              <param name="Технология компрессора:">${p.compressor_type}</param>
              <param name="Наличие Wi-Fi:">${p.wifi_availability}</param>
              <param name="Охлаждающая способность, BTU:">${
                p.cooling_capacity
              }</param>
              <param name="Уровень шума, дБ:">${p.noise_level}</param>
              <param name="Цвет:">${p.color}</param>
              <param name="Класс энергоэффективности:">${
                p.energy_efficiency_class
              }</param>
              <param name="Страна производитель:">${
                p.country_of_manufacturer
              }</param>
              <param name="Гарантия:">${p.warranty_period}</param>
              ${
                p.char &&
                p.char
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
