// ui/components/Form.tsx
import { Button } from "./Button";
import { InputField } from "./InputField";
import { User, Mail, Lock } from "lucide-react";
import Image from "next/image";

export function Form() {
    return (
        <form className="bg-gradient-to-b from-cyan-500 to-stone-500 p-6 rounded-xl shadow-lg flex flex-col gap-4 w-96 h-[30rem]">
            <div className="flex justify-center">
                <Image src="/logo.png" alt="Logo" width={150} height={150} className="mx-auto" />
            </div>
            <InputField label="Nome" type="text" name="name" icon={<User size={20} />} placeholder="Nome" />
            <InputField label="E-mail" type="email" name="email" icon={<Mail size={20} />} placeholder="E-mail" />
            <InputField label="Senha" type="password" name="password" icon={<Lock size={20} />} placeholder="Senha" />
            <Button type="submit">Cadastrar</Button>
        </form>
    );
}
