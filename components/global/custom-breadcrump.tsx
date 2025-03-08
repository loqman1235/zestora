import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface CustomBreadcrumpProps {
  paths: { label: string; href?: string }[];
}

export const CustomBreadcrump = ({ paths }: CustomBreadcrumpProps) => {
  return (
    <Breadcrumb className="py-5">
      <BreadcrumbList>
        {paths.map((path, index) => (
          <BreadcrumbItem key={index}>
            {path.href ? (
              <BreadcrumbLink asChild>
                <Link href={path.href}>{path.label}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{path.label}</BreadcrumbPage>
            )}
            {index < paths.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
