import { useForm } from 'react-hook-form';
import {
  Button,
  Flex,
  FormWrapper,
  Input,
  Message,
  TextArea,
} from './ContactForm.styled';
import { sendMailLetter } from 'helpers/sendEmail';
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

  const formRef = useRef();
  const messageRef = useRef();
  const submitButtonRef = useRef();
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async () => {
    setErrorMsg('');
    try {
      const response = await sendMailLetter(formRef.current);

      if (response.message === 'success') {
        animateCheckmark(messageRef, submitButtonRef);
        reset();
      } else {
        setErrorMsg(t('Something went wrong. Please try again later.'));
      }
    } catch (error) {
      setErrorMsg(
        t(
          'Failed to send message. Please check your connection and try again.',
        ),
      );
    }
  };

  return (
    <FormWrapper ref={formRef} onSubmit={handleSubmit(onSubmit)}>
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
      {errorMsg && (
        <div
          style={{
            color: '#ce2c2c',
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '1.2rem',
            width: '100%',
          }}
        >
          {t(errorMsg)}
        </div>
      )}
    </FormWrapper>
  );
};

export default ContactForm;
