import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { GetStartedButton, GoToYourDashboardButton } from "./GetStartedButton";

export default async function HeroSectionCta() {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <div className="flex justify-center max-w-sm mx-auto mt-6">
      {(await isAuthenticated()) ? (
        <GoToYourDashboardButton />
      ) : (
        <GetStartedButton />
      )}
    </div>
  );
}
