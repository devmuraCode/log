"use client";
import Heading from "@/containers/Heading/Heading";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useState } from "react";
import useContactModal from "@/hooks/useContactModal";

type Inputs = {
  email: string;
  selectservice: string;
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        id="name"
        name="name"
        label="Имя и фамилия"
        type="text"
        disabled={isLoading}
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
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        name="email"
        label="e-mail"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <div>
        <select
          id="selectservice"
          {...register("selectservice", {
            required: "Пожалуйста, выберите услугу",
          })}
          disabled={isLoading}
          className={`peer w-full p-4 pt-6 font-light bg-slate-50 border-0 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
            errors.selectservice ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="" disabled hidden>
            Выберите услугу...
          </option>
          <option value="consultation">Консультация</option>
          <option value="installation">Установка</option>
          <option value="repair">Ремонт</option>
        </select>
        {errors.selectservice && (
          <p className="text-red-500 text-sm mt-1">
            {errors.selectservice.message}
          </p>
        )}
      </div>
    </div>
  );

  const footerContent = (
    <div></div>
  );

  return (
    <Modal
      isOpen={contactModal.isOpen}
      onClose={contactModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
      title="отправить"
    />
  );
};
