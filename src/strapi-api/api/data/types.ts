interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ImageForProduct {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string | null;
  available: boolean | null;
  area_of_room?: string;
  energy_efficiency_class?: string;
  compressor_type?: string;
  noise_level?: string;
  wifi_availability?: string;
  series?: string;
  sale?: number;
  heating_power?: string;
  cooling_power?: string;
  country_of_manufacturer?: string;
  warranty_period?: string;
  refrigerant?: string;
  max_pipe_length?: string | null;
  cooling_capacity?: string | null;
  color?: string;
  price?: number;
  old_price?: string | null;
  popularity?: number;
  compressor_brand?: string;
  images?: ImageForProduct[] | null;
  category?: Category;
  brand?: Brand;
  product_catalog?: ProductCatalog;
  char?: Char[];
  file?: FileMetadata;
  hit?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface FileMetadata {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null; // Обычно используется для изображений (mini, thumbnail и т. д.), но для PDF null
  hash: string;
  ext: string;
  mime: string;
  size: number; // Размер в КБ
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string; // ISO дата
  updatedAt: string; // ISO дата
  publishedAt: string; // ISO дата
}

export interface Char {
  id: number;
  key: string;
  value: string;
}

export interface ProductsData {
  data: Product[];
  meta: Meta;
}

export interface ProductCatalog {
  id: number;
  documentId: string;
  name: string;
  description?: string;
  slug: string;
  available: boolean | null;
  createdAt: string; // ISO 8601 format date string
  updatedAt: string; // ISO 8601 format date string
  publishedAt: string; // ISO 8601 format date string
  categories: CategoryInProductCatalog[];
}

export interface CategoryInProductCatalog {
  id: number;
  documentId: string;
  name: string;
  description: string;
  slug: string;
  available: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductCatalogData {
  data: ProductCatalog[];
  meta: Meta;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  description: string;
  slug: string;
  available: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  product_catalog: ProductCatalog;
  brands: Brand[];
}

export interface CategoryData {
  data: Category[];
  meta: Meta;
}

export interface BrandData {
  data: Brand[];
  meta: Meta;
}
export interface Brand {
  id: number;
  documentId: string;
  name: string;
  description?: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Pagination {
  page: number; // Текущая страница
  pageSize: number; // Количество элементов на странице
  pageCount: number; // Общее количество страниц
  total: number; // Общее количество элементов
}

export interface Meta {
  pagination: Pagination;
}

export type FilterResponse = {
  simpleFilters: {
    [key: string]: {
      label: string;
      values: (string | null)[];
    };
  };
  complexFilters: {
    [key: string]: {
      label: string;
      values: Array<{
        value: string | null;
        slug: string;
      }>;
    };
  };
};

export type CostServices = {
  id: number;
  documentId: string;
  service: string;
  model: string;
  price: string;
};
export type CostServicesResponse = {
  data: CostServices[];
  meta: Meta;
};
export type CostAdditionalServices = {
  id: number;
  documentId: string;
  service: string;
  price: string;
};
export type CostAdditionalServicesResponse = {
  data: CostServices[];
  meta: Meta;
};

export interface SertItem {
  id: number;
  documentId: string;
  title: string;
  date: string; // можно заменить на Date, если хочешь парсить дату
  img: ImageForProduct | null;
}
export interface SertificatData {
  data: SertItem[];
  meta: Meta;
}

export interface Blog {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  content?: string;
  tags?: { id: number; tag: string }[] | null;
  image?: ImageForProduct | null;
}

export interface BlogData {
  data: Blog[];
  meta: Meta;
}
