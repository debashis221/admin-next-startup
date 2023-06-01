import {
  Button,
  Collapse,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AgentCard from "./AgentCard";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { Field, Form, Formik, FormikProps } from "formik";
import { client } from "api/axios";

const ActiveAgents: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [data, setData] = useState<any>([]);
  const [query, setQuery] = useState<string>("");
  const color = useColorModeValue("gray.700", "gray.200");

  const getAllUsers = async () => {
    const { data } = await client.get("/api/users");
    setData(data);
  
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Stack>
      <HStack p={2}>
        <Heading size={"sm"} textAlign="left" flex={1}>
          All Agents
        </Heading>
        <Button
          onClick={() => {
            onToggle();
            setQuery("");
          }}
          bg={isOpen ? "red.500" : ""}
        >
          {isOpen ? <CloseIcon /> : <Search2Icon />}
        </Button>
      </HStack>

      <Collapse in={isOpen} animateOpacity>
        <Formik
          initialValues={{
            name: "",
          }}
          onSubmit={(values, actions) => {
            setQuery(values.name);
            actions.setSubmitting(false);
          }}
        >
          {(props: FormikProps<any>) => (
            <Form>
              <Field name="name">
                {({ field }: any) => (
                  <InputGroup size="md">
                    <Input
                      fontSize="sm"
                      placeholder="Enter Agent Name"
                      type="text"
                      color={color}
                      {...field}
                    />

                    <InputRightAddon as={Button} type="submit">
                      <Search2Icon color={color} />
                    </InputRightAddon>
                  </InputGroup>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </Collapse>

      <Stack
        gap={2}
        overflowY={"scroll"}
        maxH={"xs"}
        position={"relative"}
        __css={{
          "&::-webkit-scrollbar": {
            width: "0",
            height: "0",
          },
          "&::-webkit-scrollbar-track": {
            width: "0",
            height: "0",
          },
        }}
      >
        {data?.data?.map((user) => (
          <AgentCard
            isActive={user.isLoggedIn}
            key={user.id}
            name={user.name!}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ActiveAgents;
