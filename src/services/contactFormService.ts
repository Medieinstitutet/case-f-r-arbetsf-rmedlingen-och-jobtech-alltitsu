import axios from 'axios';
import { IContactForm } from '../models/IContactForm';

const submitForm = async (formData: IContactForm) => {
  try {
    const response = await axios.post(
      'https://formsubmit.co/ajax/tittie.thomasson@medieinstitutet.se',
      {
        name: formData.username,
        email: formData.email,
        message: formData.message,
      },
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Något gick fel. Försök igen');
  }
};

export default submitForm;
