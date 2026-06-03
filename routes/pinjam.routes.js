import express from "express";

import {
    getAllPinjam,
    insertPinjam,
    cariPinjamByID,
    deletePinjam,
    cariBukuPinjam,
    returnBuku,
    laporanReturnBuku,
} from "../controllers/pinjam.controllers.js";

import { authenticateToken } from "../middleware/VerifyTokens.js";

const router = express.Router();
router.get("/laporan-return", authenticateToken, laporanReturnBuku);
router.get("/dpinjam/:nim", authenticateToken, cariBukuPinjam);
router.post("/kembali", authenticateToken, returnBuku);

router.get("/", authenticateToken, getAllPinjam);
router.post("/", authenticateToken, insertPinjam);
router.get("/:id", authenticateToken, cariPinjamByID);
router.delete("/:id", authenticateToken, deletePinjam);

export default router;