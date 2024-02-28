import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { EventPage } from "../pages/EventPage";
import { ProjectPage } from "../pages/ProjectPage";
import { ForumPage } from "../pages/ForumPage";
export function ToggleBar() {
  return (
    <div className="pt-3">
      <Tabs variant="soft-rounded" colorScheme="red" align="center">
        <TabList>
          <Tab>Events</Tab>
          <Tab>Projects</Tab>
          <Tab>Forums</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <EventPage />
          </TabPanel>
          <TabPanel>
            <ProjectPage />
          </TabPanel>
          <TabPanel>
            <ForumPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
