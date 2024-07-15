import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/react";
import { BsSlashLg } from "react-icons/bs";

interface BreadCrumbProps {
  crumbArray: { crumbLabel: string; crumbHref: "/" }[];
  selectedIndex: number;
}

const BreadCrumbs: React.FC<BreadCrumbProps> = ({ crumbArray }) => {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<Icon as={BsSlashLg} color="gray.500" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Collections</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Shop All</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
