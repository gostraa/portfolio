export const handleDownloadCV = () => {
  const pdfPath =
    process.env.PUBLIC_URL + "/Сherkashyna_Mariia_FRONT-END_DEVELOPER.pdf.pdf";
  const link = document.createElement("a");
  link.href = pdfPath;

  link.download = "Сherkashyna_Mariia_FRONT-END_DEVELOPER.pdf";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
