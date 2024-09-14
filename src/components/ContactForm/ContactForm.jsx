import { useForm } from "react-hook-form";
import {
  Button,
  Flex,
  FormWrapper,
  Input,
  Message,
  TextArea,
} from "./ContactForm.styled";
import { sendMailLetter } from "helpers/sendEmail";
import { useRef } from "react";
import { animateCheckmark } from "hooks/contactForm/useGSAPAnimation";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();
  const message = useRef();
  const submitButton = useRef();

  const onSubmit = async () => {
    const response = await sendMailLetter(form.current);

    if (response.message === "success") {
      animateCheckmark(message, submitButton);
      reset();
    }
  };

  return (
    <FormWrapper ref={form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder={t("Name")}
        {...register("name", { required: "Name is required" })}
        error={errors.name}
      />

      <Input
        type="email"
        placeholder={t("E-mail")}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Enter a valid email",
          },
        })}
        error={errors.email}
      />

      <TextArea
        placeholder={t("Your message")}
        {...register("message", { required: "Message is required" })}
        error={errors.message}
      />

      <Flex>
        <Message ref={message}>
          {t(
            "Thank you for the opportunity!🌟 I’m excited about the idea of collaborating and would love to discuss it further!💬🤗"
          )}
        </Message>
        <Button ref={submitButton} type="submit">
          {t("Send me a message")}
          <span>→</span>
        </Button>
      </Flex>
    </FormWrapper>
  );
};

export default ContactForm;
