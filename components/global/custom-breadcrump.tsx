import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Fragment } from "react";

interface CustomBreadcrumpProps {
  paths: { label: string; href?: string }[];
}

export const CustomBreadcrump = ({ paths }: CustomBreadcrumpProps) => {
  return (
    <Breadcrumb className="py-5">
      <BreadcrumbList>
        {paths.map((path, index) => (
          <Fragment key={index}>
            <BreadcrumbItem key={index}>
              {path.href ? (
                <BreadcrumbLink asChild>
                  <Link href={path.href}>{path.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{path.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < paths.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
