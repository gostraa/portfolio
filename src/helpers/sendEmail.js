import emailjs from '@emailjs/browser';

export const sendMailLetter = async (data) => {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const apiKey = process.env.REACT_APP_PUBLIC_KEY;

  try {
    const response = await emailjs.sendForm(serviceId, templateId, data, {
      publicKey: apiKey,
    });

    if (response.status === 200) {
      return { message: 'success' };
    } else {
      return { message: 'failed', status: response.status };
    }
  } catch (error) {
    return { message: 'error', error: error.message };
  }
};
