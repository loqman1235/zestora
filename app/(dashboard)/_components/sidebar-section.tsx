interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <div className="mt-10 flex flex-col gap-2">
      <span className="text-primary ml-2.5 text-xs tracking-wider uppercase">
        {title}
      </span>
      <ul className="flex flex-col gap-0.5">{children}</ul>
    </div>
  );
};
