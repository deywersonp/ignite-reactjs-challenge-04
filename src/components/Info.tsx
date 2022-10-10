import { Flex, Text, Tooltip, Icon } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface InfoProps {
  value: number;
  label: string;
  showTooltip?: boolean;
};

export const Info = ({
  value,
  label,
  showTooltip = false
}: InfoProps) => {
  return (
    <Flex
      direction="column"
      align={["flex-start", "center"]}
      justify="center"
    >
      <Text
        fontSize={["2xl", "5xl"]}
        fontWeight="semibold"
        lineHeight={["9", "18"]}
        color="yellow.400"
      >
        {value}
      </Text>

      <Flex
        align={["center"]}
        justify="center"
        gap="1"
      >
        <Text
          fontSize={["lg", "2xl"]}
          fontWeight={["normal", "semibold"]}
          lineHeight={["27px", "9"]}
        >
          {label}
        </Text>

        {showTooltip && (
          <Tooltip label={`Este continente possui ${value} cidades entre as top 100 cidades mais visitadas no mundo`}>
            <Text as="span" lineHeight="0">
              <Icon as={AiOutlineInfoCircle} />
            </Text>
          </Tooltip>
        )}
      </Flex>
    </Flex>
  )
};