interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-muted-foreground font-medium">{title}</h2>
      {children}
    </section>
  );
};
