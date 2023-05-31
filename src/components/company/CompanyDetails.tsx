import {
  Button,
  Flex,
  FormControl,
  Stack,
  Heading,
  InputGroup,
  List,
  ListItem,
  Text,
  Textarea,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { Formik, Field, Form, FormikProps } from "formik";
import dynamic from "next/dynamic";

const AudioPlayer = dynamic(() => import("../AudioPlayer/AudioPlayer"), {
  ssr: false,
});

const CompanyDetails: React.FC = () => {
  const bg = useColorModeValue("#E9EDF7", "#0b1437");

  return (
    <Stack minH={"lg"} maxH={"lg"}>
      <HStack align={"flex-start"} justify={"space-between"}>
        <List spacing={3} w={"full"}>
          <ListItem>
            <Stack>
              <Heading size={"sm"}>Company Name: </Heading>
              <Text fontSize={"sm"} color={"gray.400"}>
                Black And Clark Funeral Home
              </Text>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack>
              Stack
              <Heading size={"sm"}>Company Email: </Heading>
              <Text fontSize={"sm"} color={"gray.400"}>
                bcfh@blackandclark.com
              </Text>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack>
              <Heading size={"sm"}>Company Number: </Heading>
              <Text fontSize={"sm"} color={"gray.400"}>
                2143768297
              </Text>
            </Stack>
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <Stack>
              <Heading size={"sm"}>Company Address: </Heading>
              <Text fontSize={"sm"} color={"gray.400"}>
                2517 East Illinois Street, Dallas, TX. Fax 2143761288
              </Text>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack>
              <Heading size={"sm"}>Company Greeting: </Heading>
              <Text fontSize={"sm"} color={"gray.400"}>
                Thank You For Calling Black and Clark Funeral Home
              </Text>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack>
              <Heading size={"sm"}>Company Website: </Heading>
              <Text fontSize={"sm"} color={"gray.400"}>
                https://blackandclark.com
              </Text>
            </Stack>
          </ListItem>
        </List>
        <Stack w={"full"}>
          <Heading size={"sm"}>Recordings: </Heading>
          <AudioPlayer src="https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3" />
        </Stack>
      </HStack>
      <Formik
        initialValues={{ name: "Company Name Will Be Here   " }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <Flex gap={4}>
              <Field name="notes">
                {({ field }: { field: any }) => (
                  <FormControl id="notes">
                    <InputGroup size="lg">
                      <Textarea placeholder="Notes" {...field} />
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
            </Flex>
            <Stack justify={"flex-end"} align={"flex-end"} p={3}>
              <Button
                type="submit"
                w={"36"}
                colorScheme="blue"
                isLoading={props.isSubmitting}
              >
                Update Note
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default CompanyDetails;
