import { Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import HistoryCard from "./components/HistoryCard";
import { Select } from "chakra-react-select";

const History = () => {
  const color = useColorModeValue("gray.700", "white");
  return (
    <Stack>
      <Heading size={"sm"} textAlign="left" flex={1}>
        History
      </Heading>

      <Select
        options={[
          { label: "20 Days", value: "20" },
          { label: "40 Days", value: "40" },
          { label: "60 Days", value: "60" },
        ]}
        isClearable
        placeholder="Select Days"
        chakraStyles={{
          input: (provided, state) => {
            return {
              ...provided,
              color: color,
            };
          },
        }}
      />

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </Stack>
  );
};

export default History;
