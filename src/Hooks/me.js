function download(fileURL, fileName) {
  const link = document.createElement("a");
  link.href = fileURL;
  link.download = fileName;
  link.click();
}
// download("https://example.com/file.pdf", "file.pdf");
