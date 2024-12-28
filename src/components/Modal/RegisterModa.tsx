"use client";
import Heading from "@/containers/Heading/Heading";
import useRegisterModal from "@/hooks/useRegisterModal";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useState } from "react";

type Inputs = {
	email: string;
	password: string;
};

export const RegisterModa = () => {
	const registerModal = useRegisterModal();
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
			<Heading title="Вход" />
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
				id="password"
				name="password"
				label="Пароль"
				type="password"
				disabled={isLoading}
				// @ts-ignore
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col gap-4 mt-3">
			<hr />
			<div
				className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
			>
				<p>
					У вас уже есть аккаунт?
					<span
						onClick={() => {
							registerModal.onClose();
						}}
						className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
					>
						{" "}
						Войти
					</span>
				</p>
				<p>
					Забыли пароль?
					<span
						onClick={() => {
							registerModal.onClose();
						}}
						className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
					>
						{" "}
						Войти
					</span>
				</p>
			</div>
		</div>
	);

	return (
		<div>
			<Modal
				isOpen={registerModal.isOpen}
				onClose={registerModal.onClose}
				onSubmit={handleSubmit(onSubmit)}
				body={bodyContent}
				footer={footerContent}
			/>
		</div>
	);
};
