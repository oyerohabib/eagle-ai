export interface ButtonProps {
  text: string;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface NavItemProps {
  title: string;
  href: string;
  active?: boolean;
}

export interface FeatureListItemProps {
  text: string;
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
  icon: React.ReactNode;
  title: string;
  items: string[];
}
