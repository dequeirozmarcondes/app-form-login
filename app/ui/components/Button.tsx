type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
};

export function Button({ children, type = "button" }: ButtonProps) {
    return (
        <button
            type={type}
            className="w-full p-2 bg-slate-900 text-white rounded-lg hover:bg-stone-700 transition font-semibold shadow-md cursor-pointer mt-2"
        >
            {children}
        </button>
    );
}