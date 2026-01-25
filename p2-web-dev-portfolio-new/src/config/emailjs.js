import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};