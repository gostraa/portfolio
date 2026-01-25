import emailjs from '@emailjs/browser';

export const sendEmail = (data) => {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const apiKey = process.env.REACT_APP_PUBLIC_KEY;
  console.log(data);
  return emailjs.send(serviceId, templateId, data, {
    publicKey: apiKey,
  });
};
