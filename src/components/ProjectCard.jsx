import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Stack, Heading, Image, Text, Button } from "@chakra-ui/react";

export function ProjectCard({ title, description, Skills }) {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        className="m-4"
      >
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text py="2">{description}</Text>

            <Heading size="sm">Skills Required</Heading>
            <div className="flex justify-center gap-5">
              {Skills.map((skill) => (
                <Text py="2">{skill}</Text>
              ))}
            </div>
          </CardBody>
          <div className="flex justify-center">
            <CardFooter>
              <Button variant="solid" colorScheme="purple">
                Collaborate
              </Button>
            </CardFooter>
          </div>
        </Stack>
      </Card>
    </div>
  );
}
