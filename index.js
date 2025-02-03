const fs = require("fs-extra");
const path = require("path");
const pdfPoppler = require("pdf-poppler");

const inputDir = path.join(__dirname, "pdf");
const outputDir = path.join(__dirname, "jpg");

async function convertPdfToImages(pdfPath, outputFolder) {
  await fs.ensureDir(outputFolder);

  let opts = {
    format: "jpeg",
    out_dir: outputFolder,
    out_prefix: path.basename(pdfPath, path.extname(pdfPath)),
    scale: 2000,
  };

  try {
    await pdfPoppler.convert(pdfPath, opts);
    console.log(`Convertido: ${pdfPath}`);
    const files = await fs.readdir(outputFolder);
    files.forEach(async (file) => {
      const newFileName = file.replace(/^.*?-(\d+)\.jpg$/, "$1.jpg");
      await fs.rename(
        path.join(outputFolder, file),
        path.join(outputFolder, newFileName)
      );
    });
  } catch (err) {
    console.error(`Erro ao converter ${pdfPath}:`, err);
  }
}

async function processPdfs() {
  try {
    const files = await fs.readdir(inputDir);
    const pdfFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".pdf"
    );

    if (pdfFiles.length === 0) {
      console.log("Nenhum PDF encontrado.");
      return;
    }

    for (const file of pdfFiles) {
      const pdfPath = path.join(inputDir, file);
      const outputFolder = path.join(outputDir, path.basename(file, ".pdf"));
      await convertPdfToImages(pdfPath, outputFolder);
    }
  } catch (err) {
    console.error("Erro ao processar PDFs:", err);
  }
}

processPdfs();
