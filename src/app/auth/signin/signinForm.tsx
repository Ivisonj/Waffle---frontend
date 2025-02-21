"use client";
import { z } from "zod";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const signInFormFormSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Formato de E-mail inválido"),
});

type SignInFormFormData = z.infer<typeof signInFormFormSchema>;

const SigninForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormFormData>({
    resolver: zodResolver(signInFormFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "test@test.com",
    },
  });

  const handleClickSubmitForm = async (data: SignInFormFormData) => {
    const response = await signIn("credentials", {
      email: data.email,
      redirect: false,
    });

    if (response?.error) {
      toast.error("Credenciais inválidas");
      return;
    }

    router.replace(`/waffle/user/dashboard`);
  };

  return (
    <div className="flex items-center justify-center p-4 w-full max-w-md">
      <form
        onSubmit={handleSubmit(handleClickSubmitForm)}
        style={{ width: "100%" }}
        className="space-y-4"
      >
        <Input
          {...register("email")}
          className="mb-2"
          type="email"
          placeholder="Digite seu email..."
          required
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
        <Button
          type="submit"
          className="w-full bg-brand-pink hover:bg-brand-pink/90 text-white"
        >
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default SigninForm;
