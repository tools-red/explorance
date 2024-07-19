import { Button } from "@chakra-ui/react";

interface LinkButtonProps {
  href: string;
  ctaLabel: string;
  altScheme: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  ctaLabel,
  href,
  altScheme,
}) => {
  return (
    <Button
      variant="none"
      px={5}
      borderRadius={20}
      fontWeight={400}
      color={altScheme ? "#CC723F" : "white"}
      bg={altScheme ? "#FAF1EC" : "#CC723F"}
      as="a"
      href={href}
    >
      {ctaLabel}
    </Button>
  );
};

export default LinkButton;
