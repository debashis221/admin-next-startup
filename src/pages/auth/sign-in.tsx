import React from "react";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import DefaultAuthLayout from "@/layouts/auth/Default";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { signIn } from "next-auth/react";
import { Field, Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";

export default function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const router = useRouter();
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <DefaultAuthLayout illustrationBackground={"/img/auth/auth.png"}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign In
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your email and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              signIn("credentials", {
                redirect: false,
                email: values.email,
                password: values.password,
              }).then((res) => {
                if (res?.ok) {
                  router.replace("/");
                  actions.setSubmitting(false);
                  toast({
                    title: "Signed in successfully!",
                    description:
                      "You've successfully signed in to your account.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                } else {
                  actions.setSubmitting(false);
                  toast({
                    title: "Something went wrong!",
                    description: `${res?.error}`,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  });
                }
              });
            }}
          >
            {(props: FormikProps<any>) => (
              <Form>
                <Field name="email">
                  {({ field }: { field: any }) => (
                    <FormControl isRequired>
                      <FormLabel
                        display="flex"
                        ms="4px"
                        fontSize="sm"
                        fontWeight="500"
                        color={textColor}
                        mb="8px"
                      >
                        Email
                      </FormLabel>
                      <Input
                        isRequired={true}
                        variant="auth"
                        fontSize="sm"
                        ms={{ base: "0px", md: "0px" }}
                        type="email"
                        placeholder="mail@simmmple.com"
                        fontWeight="500"
                        size="lg"
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field }: { field: any }) => (
                    <FormControl isRequired>
                      <FormLabel
                        ms="4px"
                        fontSize="sm"
                        fontWeight="500"
                        color={textColor}
                        display="flex"
                      >
                        Password
                      </FormLabel>
                      <InputGroup size="md">
                        <Input
                          isRequired={true}
                          fontSize="sm"
                          placeholder="Min. 8 characters"
                          mb="24px"
                          size="lg"
                          type={show ? "text" : "password"}
                          variant="auth"
                          {...field}
                        />
                        <InputRightElement
                          display="flex"
                          alignItems="center"
                          mt="4px"
                        >
                          <Icon
                            color={textColorSecondary}
                            _hover={{ cursor: "pointer" }}
                            as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                            onClick={handleClick}
                          />
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <Button
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                  type="submit"
                  isLoading={props.isSubmitting}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </DefaultAuthLayout>
  );
}
