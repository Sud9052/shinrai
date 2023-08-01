import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const ContactForm = () => {
  const { handleSubmit, control, reset, register, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    // Display form data in the console (you can replace this with an email sending logic)
    console.log(data);
    // Send email using the email sending logic (you can use a server-side service for this)
    try {
      await axios.post('/api/send-email', data);
      alert('Email sent successfully!');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label>Name:</Label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: true, pattern: /^[A-Za-z\s]+$/ }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.name && <ErrorMessage>Please enter only letters for the name.</ErrorMessage>}
      </InputContainer>

      <InputContainer>
        <Label>Email:</Label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true, pattern: /^\S+@\S+$/i }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.email && <ErrorMessage>Please enter a valid email address.</ErrorMessage>}
      </InputContainer>

      <InputContainer>
        <Label>Phone:</Label>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{ required: true, pattern: /^[6-9]\d{9}$/ }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.phone && <ErrorMessage>Please enter a valid Indian phone number.</ErrorMessage>}
      </InputContainer>

      <InputContainer>
        <Label>Message:</Label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: true, maxLength: 500 }}
          render={({ field }) => <TextArea {...field} rows={4} />}
        />
        {errors.message && <ErrorMessage>Message is required and must be 500 characters or less.</ErrorMessage>}
      </InputContainer>

      <div>
        <p style={{ color: '#ccc', marginBottom: '10px' }}>
          Country would like to apply for and as well as Education Qualification
        </p>
      </div>

      <div>
        <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" /> {/* Replace with your reCAPTCHA site key */}
      </div>

      <div>
        <Button type="submit">Connect With Us</Button>
      </div>
    </FormContainer>
  );
};

export default ContactForm;
