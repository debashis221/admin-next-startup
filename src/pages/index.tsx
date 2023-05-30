import { Box, Card, CardBody, HStack, useColorModeValue } from "@chakra-ui/react";
import AdminLayout from "@/layouts/admin";
import { api } from "@/utils/api";
import History from "@/components/history/History";
import CompanyDetails from "@/components/company/CompanyDetails";

export default function UserReports() {
  // Chakra Color Mode
  const { data, isLoading } = api.example.hello.useQuery({ text: "from tRPC" });
  const navbarBg = useColorModeValue("rgba(244, 247, 254, 0.2)", "navy.700");
  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <HStack justify={"space-between"} align={"start"}>
          <Card
            borderRadius={"xl"}
            backdropFilter={"blur(20px)"}
            background={navbarBg}
            backgroundPosition="center"
            backgroundSize="cover"
            flex={1}
          >
            <CardBody>
              <CompanyDetails />
            </CardBody>
          </Card>
          <Card
            borderRadius={"xl"}
            backdropFilter={"blur(20px)"}
            background={navbarBg}
            backgroundPosition="center"
            backgroundSize="cover"
          >
            <CardBody>
              <History />
            </CardBody>
          </Card>
        </HStack>
      </Box>
    </AdminLayout>
  );
}
