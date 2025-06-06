interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <div className="mt-10 flex flex-col gap-2">
      <span className="text-muted-foreground ml-2.5 text-sm capitalize">
        {title}
      </span>
      <ul className="flex flex-col gap-0.5">{children}</ul>
    </div>
  );
};
