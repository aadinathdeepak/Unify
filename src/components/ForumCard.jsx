import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Stack, Heading, Image, Text, Button } from "@chakra-ui/react";

export function ForumCard({ question, description }) {
  return (
    <div >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        className="m-4"
      >
        <div className="flex">
        <Stack >
          <CardBody>
            <Heading size="md">{question}</Heading>

            <Text py="2">{description}</Text>
          </CardBody>
          <div className="flex justify-center">
            <CardFooter>
              <Button variant="solid" colorScheme="purple">
                Open Threads
              </Button>
            </CardFooter>
          </div>
        </Stack>
        </div>
        
      </Card>
    </div>
  );
}
