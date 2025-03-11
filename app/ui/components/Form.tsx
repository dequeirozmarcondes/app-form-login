// ui/components/Form.tsx
import { Button } from "./Button";
import { InputField } from "./InputField";
import { User, Mail, Lock } from "lucide-react";

export function Form() {
    return (
        <form className="bg-slate-700 p-6 rounded-xl shadow-lg flex flex-col gap-4 w-96 h-[30rem]">
            <div className="flex justify-center">
                <Image src="/logo.png" alt="Logo" width={200} height={200} className="mx-auto" />
            </div>
            <InputField label="Nome" type="text" name="name" icon={<User size={20} />} />
            <InputField label="E-mail" type="email" name="email" icon={<Mail size={20} />} />
            <InputField label="Senha" type="password" name="password" icon={<Lock size={20} />} />
            <Button type="submit">Cadastrar</Button>
        </form>
    );
}
