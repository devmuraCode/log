"use client";
import Heading from "@/containers/Heading/Heading";
import Input from "../Input/Input";
import { useForm, Controller } from "react-hook-form";
import Modal from "./Modal";
import { useState } from "react";
import useContactModal from "@/hooks/useContactModal";
import axios from "axios";

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
    reset,
  } = useForm<Inputs>();
  const [open, setOpen] = useState(false)


  const onSubmit = async (data: Inputs) => {
    console.log(data);
    await axios.post(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`, {
      chat_id: process.env.NEXT_PUBLIC_CHAT,
      text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n Selectservice: ${data.selectservice}`,
    } );

    reset();
    setOpen(false);
  };

  const handleClickOpen = () =>{
    setOpen(true);
  };
  const handleClose = () =>{
    setOpen(false)
    
  }






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
          className={`peer w-full p-4 pt-6 font-light bg-slate-50 border-0 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${errors.selectservice ? "border-red-500" : "border-gray-300"
            }`}
        >
          <option value="" disabled hidden>
            Выберите услугу...
          </option>
          <option value="Консультация ">Консультация</option>
          <option value="Установка">Установка</option>
          <option value="Ремонт">Ремонт</option>
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
