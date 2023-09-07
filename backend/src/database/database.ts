import "ts-node/register";

import config from "./knexfile";
import knex, { Knex } from "knex";
import { Product } from "./models/products";
import { Pack } from "./models/packs";

export const db: Knex = knex(config);

declare module "knex/types/tables" {
    interface Tables {
        packs: Pack;
        products: Product;
    }
}