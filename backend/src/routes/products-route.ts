import { Router } from "express";
import { productController } from "../controllers/products-controller";
import { upload } from "../middlewares/multer-config";

const router = Router();

router.post("/file", upload.single("file"), productController.readFileProducts);

router.post("/update", productController.updateProducts);

export default router;
