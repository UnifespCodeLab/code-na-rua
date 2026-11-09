import AuthPageTemplate from "@/components/AuthPageTemplate";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthPageTemplate prompt="Faça login para continuar">
      <LoginForm />
    </AuthPageTemplate>
  );
}
