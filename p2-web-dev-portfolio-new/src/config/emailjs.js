import emailjs from '@emailjs/browser';

emailjs.init('XhQeCvEOTfzUU0krZ');

export const sendEmail = async (formData) => {
  return emailjs.send('service_qmrtn7u', 'template_lcxhib4', {
    to_email: 'russellferrero@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message
  });
};