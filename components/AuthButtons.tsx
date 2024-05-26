import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "./UserNav";

const AuthButtons = async () => {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <div>
      {(await isAuthenticated()) ? (
        <UserNav />
      ) : (
        <div className="flex items-center gap-x-5">
          <LoginLink>
            <Button>Sign In</Button>
          </LoginLink>
          <RegisterLink>
            <Button variant="secondary">Sign Up</Button>
          </RegisterLink>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
