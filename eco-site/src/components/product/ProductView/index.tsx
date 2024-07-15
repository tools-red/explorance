import { Flex } from "@chakra-ui/react";
import BreadCrumbs from "~/components/global/BreadCrumbs";
import { toTitleCase } from "~/utils/helpers";

interface ProductViewProps {
  productTypeCrumb: string;
  productNameCrumb: string;
}

const ProductView: React.FC<ProductViewProps> = ({
  productTypeCrumb,
  productNameCrumb,
}) => {
  return (
    <Flex w={1150} marginX="auto">
      <BreadCrumbs
        crumbArray={[
          { crumbLabel: "Home", isSelected: false },
          {
            crumbLabel: `${toTitleCase(productTypeCrumb)}`,
            isSelected: false,
          },
          { crumbLabel: `${productNameCrumb}`, isSelected: true },
        ]}
        selectedIndex={2}
      />
    </Flex>
  );
};

export default ProductView;
