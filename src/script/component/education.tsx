import { Tabs } from "@mantine/core";
import Schools from "./education/schools";
import Certifs from "./education/certifs";
import Badges from "./education/badges";
import Associations from "./education/associations";

const eduSections = [
  { id: "edu-education", label: "Education", Body: Schools },
  { id: "edu-associations", label: "Associations", Body: Associations },
  { id: "edu-certificates", label: "Certificates", Body: Certifs },
  { id: "edu-badges", label: "Badges", Body: Badges },
];

const Education = () => {
  return (
    <Tabs defaultValue={eduSections[0].id} variant="unstyled" keepMounted={false}>
      <div className="edu-tab-row">
        <Tabs.List className="pill-tabs-list">
          {eduSections.map((s) => (
            <Tabs.Tab key={s.id} value={s.id} className="pill-tab">
              <span className="pill-tab-label">{s.label}</span>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </div>

      <div className="edu-section">
        {eduSections.map((s) => (
          <Tabs.Panel key={s.id} value={s.id} className="education-content">
            <s.Body />
          </Tabs.Panel>
        ))}
      </div>
    </Tabs>
  );
};

export default Education;
