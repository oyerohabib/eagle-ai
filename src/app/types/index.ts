export interface ButtonProps {
  text: string;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

export interface NavItemProps {
  title: string;
  href: string;
  active?: boolean;
}

export interface FeatureListItemProps {
  text: string;
  className?: string;
}

export interface FeatureListProps {
  items: string[];
}

export interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
}

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  telegramUser: string;
}

export interface BenefitCardProps {
  image: string;
  title: string;
  items: string[];
  alt: string;
}
