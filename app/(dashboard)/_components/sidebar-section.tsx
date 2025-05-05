interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <div className="mt-10 flex flex-col gap-2">
      <span className="ml-5 text-xs tracking-wide uppercase">{title}</span>
      <ul>{children}</ul>
    </div>
  );
};
