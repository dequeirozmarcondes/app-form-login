// ui/components/InputField.tsx
import { ReactNode } from "react";

type InputFieldProps = {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    icon: ReactNode;
};

export function InputField({ label, type, name, icon, placeholder }: InputFieldProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-sm font-bold text-gray-800 rounded-lg pl-2">
                {label}
            </label>
            <div className="flex items-center border border-gray-500 bg-slate-900 text-white rounded-lg p-2">
                {icon}
                <input
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="bg-transparent flex-1 ml-2 focus:outline-none text-sm placeholder:text-sm placeholder-gray-400"
                    aria-label={label}
                />
            </div>
        </div>
    );
}