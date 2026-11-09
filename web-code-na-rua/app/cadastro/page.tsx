import AuthPageTemplate from "@/components/AuthPageTemplate";
import CadastroForm from "@/components/CadastroForm";

export default function CadastroPage() {
  return (
    <AuthPageTemplate prompt="Crie sua conta para continuar">
      <CadastroForm />
    </AuthPageTemplate>
  );
}
