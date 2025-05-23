export const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-card shadow-primary/5 flex w-full flex-col gap-4 rounded-lg p-4 shadow-sm transition-all hover:shadow-xl sm:p-6">
      {children}
    </div>
  );
};
