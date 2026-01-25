import { useForm } from 'react-hook-form';
import {
  Button,
  ErrorMessage,
  Flex,
  FormWrapper,
  Input,
  Message,
  TextArea,
} from './ContactForm.styled';
import { sendEmail } from 'helpers/sendEmail';
import { useRef, useState } from 'react';
import { animateCheckmark } from 'hooks/contactForm/useGSAPAnimation';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const messageRef = useRef();
  const submitButtonRef = useRef();
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    try {
      setErrorMsg('');
      await sendEmail(data);
      animateCheckmark(messageRef, submitButtonRef);
      reset();
    } catch (error) {
      console.log(error);
      setErrorMsg(t('Something went wrong. Please try again later.'));
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder={t('Name')}
        {...register('name', { required: 'Name is required' })}
        error={errors.name}
      />

      <Input
        type="email"
        placeholder={t('E-mail')}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Enter a valid email',
          },
        })}
        error={errors.email}
      />

      <TextArea
        placeholder={t('Your message')}
        {...register('message', { required: 'Message is required' })}
        error={errors.message}
      />

      <Flex>
        <Message ref={messageRef}>
          {t(
            'Thank you for the opportunity!🌟 I’m excited about the idea of collaborating and would love to discuss it further!💬🤗',
          )}
        </Message>
        <Button ref={submitButtonRef} type="submit">
          {t('Send me a message')}
          <span>→</span>
        </Button>
      </Flex>
      {errorMsg && <ErrorMessage>{t(errorMsg)}</ErrorMessage>}
    </FormWrapper>
  );
};

export default ContactForm;
