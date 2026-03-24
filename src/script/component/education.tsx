import { Tabs } from "@mantine/core";
import Schools from "./education/schools";
import Certifs from "./education/certifs";

const Education = () => {
  return (
    <Tabs defaultValue="education" variant="unstyled" className="background-section">
      <Tabs.List>
        <Tabs.Tab value="education" className="tab">
          <a className="tab-item">Education</a>
        </Tabs.Tab>
        <Tabs.Tab value="certificates" className="tab">
          <a className="tab-item">Certificates</a>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="education" className="education-content">        
        <Schools />
      </Tabs.Panel>

      <Tabs.Panel value="certificates" className="education-content">
        <Certifs />
      </Tabs.Panel>

    </Tabs> 
  );
};

export default Education;