import {
  Checkbox,
  HStack,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import HistoryCard from "./components/HistoryCard";
import { Select } from "chakra-react-select";

const History = () => {
  const color = useColorModeValue("gray.700", "white");
  return (
    <Stack
      minH={"lg"}
      maxH={"lg"}
      overflowY={"scroll"}
      __css={{
        "&::-webkit-scrollbar": {
          width: "0",
        },
        "&::-webkit-scrollbar-track": {
          width: "0",
        },
      }}
      gap={3}
    >
      <HStack justify={"space-between"}>
        <Heading size={"sm"} textAlign="left" flex={1}>
          All History
        </Heading>
        <Checkbox defaultChecked>Death Call</Checkbox>
      </HStack>

      <Select
        options={[
          { label: "20 Days", value: "20" },
          { label: "40 Days", value: "40" },
          { label: "60 Days", value: "60" },
        ]}
        isClearable
        placeholder="Select Days"
        chakraStyles={{
          input: (provided) => {
            return {
              ...provided,
              color: color,
            };
          },
        }}
      />

      <HistoryCard isDeathCall />
      <HistoryCard isDeathCall isActive/>
      <HistoryCard isDeathCall />
      <HistoryCard isDeathCall />
    </Stack>
  );
};

export default History;
