export type UserRole = "crew" | "studio";

export interface RegisterRoleConfig {
  title: string;
  subtitle: string;
  showSocials: boolean;
  fields: {
    showNameFields: boolean;
    emailPlaceholder: string;
  };
}

export const registerConfigs: Record<UserRole, RegisterRoleConfig> = {
  crew: {
    title: "Sign Up Account",
    subtitle:
      "Sign up using your work/personal email address as a proxy linking it with your Studio&Set Profile",
    showSocials: true,
    fields: {
      showNameFields: true,
      emailPlaceholder: "ThabangMofokeng@design.co.za",
    },
  },
  studio: {
    title: "Sign Up Account",
    subtitle:
      "Sign up using your work/personal email address as a proxy linking it with your Studio&Set Profile",
    showSocials: false,
    fields: {
      showNameFields: false,
      emailPlaceholder: "studio@velicityfilms.co.za",
    },
  },
};