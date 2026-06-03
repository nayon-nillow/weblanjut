import express from "express";

import {
    getAllDetailPinjam,
    tambahDetailPinjam,
    cariDetailByID,
    updateDetailPinjam,
    deleteDetailPinjam
} from "../controllers/detail_pinjam.controllers.js";

import { authenticateToken } from "../middleware/VerifyTokens.js";

const router = express.Router();

router.get("/", authenticateToken, getAllDetailPinjam);
router.post("/", authenticateToken, tambahDetailPinjam);
router.get("/:id", authenticateToken, cariDetailByID);
router.patch("/:id", authenticateToken, updateDetailPinjam);
router.delete("/:id", authenticateToken, deleteDetailPinjam);

export default router;