import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
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
import { Formik, Field, Form } from "formik";

const CompanyDetails: React.FC = () => {
  const bg = useColorModeValue("gray", "#0b1437");
  return (
    <Stack>
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
          <AudioPlayer
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            layout="horizontal-reverse"
            customControlsSection={[
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.VOLUME_CONTROLS,
            ]}
            // customProgressBarSection={[]}
            style={{
              background: bg,
              boxShadow: "none",
              borderRadius: "1rem",
            }}
            customVolumeControls={[]}
          />
        </Stack>
      </HStack>
      <Formik
        initialValues={{ name: "Company Name Will Be Here   " }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props) => (
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
              <Button type="submit" w={"36"} colorScheme="blue">
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
