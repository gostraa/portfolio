export const handleDownloadCV = () => {
  const pdfPath = "/1982264Сherkashyna_Mariia_FRONT-END_DEVELOPER.pdf";
  const link = document.createElement("a");
  link.href = pdfPath;

  link.download = "Сherkashyna_Mariia_FRONT-END_DEVELOPER.pdf";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
