// ui/components/InputField.tsx
import { ReactNode } from "react";

type InputFieldProps = {
    label: string;
    type: string;
    name: string;
    icon: ReactNode;
};

export function InputField({ label, type, name, icon }: InputFieldProps) {
    return (
        <div className="flex flex-col gap-1">
            {/* <label className="text-sm font-medium text-white">{label}</label> */}
            <div className="flex items-center border border-gray-500 bg-gray-600 text-white rounded-lg p-2 mb-2 mt-2">
                {icon}
                <input
                    type={type}
                    name={name}
                    className="bg-transparent flex-1 ml-2 focus:outline-none"
                />
            </div>
        </div>
    );
}
