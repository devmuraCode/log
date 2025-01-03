"use client";
import Heading from "@/containers/Heading/Heading";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useState } from "react";
import useContactModal from "@/hooks/useContactModal";

type Inputs = {
  email: string;
  country: string;
  name: string;
  phone: string;
  description: string;
};

export const ContactModal = () => {
  const contactModal = useContactModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Оставить запрос" />
      <div className="grid grid-cols-2 gap-3">
        <Input
          id="name"
          name="name"
          label="Имя и фамилия"
          type="text"
          disabled={isLoading}
          // @ts-ignore
          register={register}
          errors={errors}
          required
        />
        <Input
          id="phone"
          name="phone"
          label="Телефон"
          type="tel"
          disabled={isLoading}
          // @ts-ignore
          register={register}
          errors={errors}
          required
        />
        <Input
          id="email"
          name="email"
          label="email"
          disabled={isLoading}
          // @ts-ignore
          register={register}
          errors={errors}
          required
        />
        <Input
          id="сountry"
          name="country"
          label="Страна"
          type="text"
          disabled={isLoading}
          // @ts-ignore
          register={register}
          errors={errors}
          required
        />
      </div>
      <textarea
        name="description"
        placeholder="Опишите подробнее интересующий вас вопрос"
        id="description"
        className="
          w-full
          p-4
          bg-slate-50
        h-52
          "
      ></textarea>
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
     
    </div>
  );

  return (
    <div>
      <Modal
        isOpen={contactModal.isOpen}
        onClose={contactModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
        title="Отправить"
      />
    </div>
  );
};
