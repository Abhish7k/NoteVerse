import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "./UserNav";

const AuthButtons = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      {(await isAuthenticated()) ? (
        <UserNav
          email={user?.email as string}
          image={user?.picture as string}
          name={user?.given_name as string}
        />
      ) : (
        <div className="flex items-center gap-x-2">
          <LoginButton />
          <RegisterButton />
        </div>
      )}
    </div>
  );
};

export default AuthButtons;

export function LoginButton() {
  return (
    <LoginLink>
      <Button className="rounded-lg">Sign In</Button>
    </LoginLink>
  );
}

export function RegisterButton() {
  return (
    <RegisterLink>
      <Button variant="secondary">Sign Up</Button>
    </RegisterLink>
  );
}
