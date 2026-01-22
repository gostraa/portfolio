export const handleDownloadCV = () => {
  const pdfPath = process.env.PUBLIC_URL + '/CV_Сherkashyna_Mariia.pdf';
  const link = document.createElement('a');
  link.href = pdfPath;

  link.download = 'CV_Сherkashyna_Mariia.pdf';

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
