import {
  Box,
  Card,
  CardBody,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import AdminLayout from "@/layouts/admin";
import History from "@/components/history/History";
import CompanyDetails from "@/components/company/CompanyDetails";
import { useSession } from "next-auth/react";

export default function UserReports() {
  const session = useSession();
  // Chakra Color Mode
  const navbarBg = useColorModeValue("rgba(244, 247, 254, 0.2)", "navy.700");

  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <HStack
          justify={"space-between"}
          align={"start"}
          direction={{ base: "column", md: "row" }}
        >
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
