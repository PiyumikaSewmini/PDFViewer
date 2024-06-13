const express = require("express");
const multer = require('multer');
const path = require('path');
const PdfDetails = require("./models/pdfDetails");

const pdfRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

pdfRouter.post("/upload-files", upload.single("file"), async (req, res) => {
    const title = req.body.title;
    const fileName = req.file.filename;

    try {
        const pdfDetail = new PdfDetails({ title: title, pdf: fileName });
        await pdfDetail.save();
        res.send({ status: "ok" });
    } catch (error) {
        console.error(error);
        res.json({ status: "error", message: error.message });
    }
});

pdfRouter.get("/get-files", async (req, res) => {
    try {
        const data = await PdfDetails.find({});
        res.send({ status: "ok", data: data });
    } catch (error) {
        console.error(error);
        res.json({ status: "error", message: error.message });
    }
});

pdfRouter.delete("/delete-file/:id", async (req, res) => {
    const pdfId = req.params.id;

    try {
        await PdfDetails.findByIdAndDelete(pdfId);
        res.send({ status: "ok", message: "PDF deleted successfully" });
    } catch (error) {
        console.error("Error deleting PDF:", error);
        res.status(500).json({ status: "error", message: "Failed to delete PDF" });
    }
});

module.exports = pdfRouter;
