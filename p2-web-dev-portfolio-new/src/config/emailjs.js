import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const sendEmail = async (formData) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      to_email: 'russellferrero@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }
  );
};