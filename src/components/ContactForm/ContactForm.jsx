import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  FormWrapper,
  Input,
  TextArea,
} from "./ContactForm.styled";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

      <Input
        type="email"
        placeholder="E-mail"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Enter a valid email",
          },
        })}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <TextArea
        placeholder="Your message"
        {...register("message", { required: "Message is required" })}
      />
      {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}

      <Button type="submit">
        Send me a message <span>→</span>
      </Button>
    </FormWrapper>
  );
};

export default ContactForm;
