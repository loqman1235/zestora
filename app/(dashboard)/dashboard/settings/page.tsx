import { CardContainer } from "../../_components/card-containter";
import { SettingsForm } from "./_components/settings-form";

const SettingsPage = () => {
  return (
    <CardContainer>
      <div>
        <h3 className="font-bold">Settings</h3>
        <p className="text-muted-foreground text-sm">
          Manage your store&apos;s settings.
        </p>
      </div>

      <SettingsForm />
    </CardContainer>
  );
};
export default SettingsPage;
