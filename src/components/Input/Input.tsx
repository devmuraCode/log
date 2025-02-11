import { FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps<T> {
	id: string;
	name: string;
	label: string;
	type?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	// @ts-ignore
	register: UseFormRegister<T>;
	// @ts-ignore
	errors: FieldErrors<T>;
}

const Input = <T extends Record<string, unknown>>({
	id,
	label,
	name,
	type = "text",
	disabled,
	formatPrice,
	register,
	required,
	errors,
}: InputProps<T>) => {
	return (
		<div className="w-full relative">
			<input
				id={id}
				disabled={disabled}
				{...register(id as any, { required })}
				name={name}
				placeholder=" "
				type={type}
				className={`

          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-slate-50
          border-0
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
			/>
			<label
				className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
