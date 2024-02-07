import { Option } from "@/Entities/Option/model/types"

export interface AdminProductPanelInterface {
    product: {
        id: number,
        title: string,
        description: string,
        catalog_id: number,
        price: number,
        quantity: number,
        updated_at: string,
        created_at: string
    },

    values: {
        id: number,
        option_id: number,
        title: string
    }[],

    catalog: {
        id: number,
        category_id: number,
        title: string
    },

    category: {
        id: number,
        title: string
    }

    images: {
        id: number,
        img_path: string,
        product_id: number
    }[],

    options: Option[]
}