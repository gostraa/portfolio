export const handleDownloadCV = () => {
  const pdfPath =
    process.env.PUBLIC_URL + '/FRONT-END_DEV_Сherkashyna_Mariia.pdf';
  const link = document.createElement('a');
  link.href = pdfPath;

  link.download = 'FRONT-END_DEV_Сherkashyna_Mariia.pdf';

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
