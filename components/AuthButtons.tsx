import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

const AuthButtons = async () => {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <div>
      {(await isAuthenticated()) ? (
        <LogoutLink>
          <Button>Log out</Button>
        </LogoutLink>
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
