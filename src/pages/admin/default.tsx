import {
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import MiniStatistics from "@/components/card/MiniStatistics";
import IconBox from "@/components/icons/IconBox";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import AdminLayout from "@/layouts/admin";
import Usa from "@/img/dashboards/usa.png";
import Image from "next/image";
import { api } from "@/utils/api";

export default function UserReports() {
  // Chakra Color Mode
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <>
          <Text>
            {" "}
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdBarChart}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Earnings"
              value="$350.4"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Spend this month"
              value="$642.39"
            />
            <MiniStatistics growth="+23%" name="Sales" value="$574.34" />
            <MiniStatistics
              endContent={
                <Flex me="-16px" mt="10px">
                  <FormLabel htmlFor="balance">
                    <Box boxSize={"12"}>
                      <Image src={Usa} alt="" width={100} height={100} />
                    </Box>
                  </FormLabel>
                  <Select
                    id="balance"
                    variant="mini"
                    mt="5px"
                    me="0px"
                    defaultValue="usd"
                  >
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gba">GBA</option>
                  </Select>
                </Flex>
              }
              name="Your balance"
              value="$1,000"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                  icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
                />
              }
              name="New Tasks"
              value="154"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdFileCopy}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Total Projects"
              value="2935"
            />
          </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  );
}
