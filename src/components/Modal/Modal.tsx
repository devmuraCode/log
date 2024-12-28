"use client";
import { useCallback, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: (
		event: React.FormEvent<HTMLFormElement>,
		remember: boolean,
	) => void;
	body: React.ReactNode;
	footer: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	body,
	footer,
}) => {
	const [showModal, setShowModal] = useState(isOpen);
	const [remember, setRemember] = useState(false);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose]);

	const handleCheckboxChange = () => {
		setRemember((prev) => !prev);
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-white z-50">
			<div className="bg-white w-full max-w-md mx-4 p-6 rounded-lg  relative">
				<button
					onClick={handleClose}
					className="absolute top-4 right-4 text-gray-500 hover:text-black"
				>
					<IoCloseOutline size={24} />
				</button>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						onSubmit(e, remember);
					}}
				>
					<div className="text-center">{body}</div>

					<div className="mt-4 flex justify-center items-center">
						<input
							type="checkbox"
							id="remember"
							checked={remember}
							onChange={handleCheckboxChange}
							className="mr-2"
						/>
						<label htmlFor="remember" className="text-gray-700 ">
							Запомнить на этом устройстве
						</label>
					</div>

					<div className="mt-4">
						<button
							type="submit"
							className="w-full bg-blue-500 text-white py-2 rounded-md text-lg font-medium hover:bg-blue-600 transition"
						>
							Вход
						</button>
					</div>
					<div>{footer}</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
