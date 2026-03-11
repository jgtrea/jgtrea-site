import { Tabs } from "@mantine/core";

const Education = () => {
  return (
    <Tabs defaultValue="education" variant="unstyled" className="background-section" id="education">
      <Tabs.List>
        <Tabs.Tab value="education" className="tab">
          <a className="tab-item">Education</a>
        </Tabs.Tab>
        <Tabs.Tab value="certificates" className="tab">
          <a className="tab-item">Certificates</a>
        </Tabs.Tab>
      </Tabs.List>

      <div className="tab-seperator">
      </div>

      <Tabs.Panel value="education" className="education-content">        
        <div className="edu-content">
          <span className="dot"></span>
          <h1><b><i>Bachelor Degree of Information Technology</i></b></h1>
          <p>Mapua Malayan Colleges of Laguna (July 2022 - 2026)</p>
          <ul>            
            <li>Maintained Dean’s Lister status for three consecutive academic years.</li>
            <li>Passed Data Structure and Algorithms.</li>
          </ul>
        </div> 
               
        <div className="edu-content">
          <span className="dot"></span>
          <h1><b><i>JHS & SHS Graduate</i></b></h1>
          <p>Mater Ecclesiae School, San Pedro, Laguna (2018 - 2022)</p>
          <ul>            
            <li>CREOTEC Work Immersion Participant</li>
          </ul>
        </div>

        <div className="edu-content">
          <span className="dot"></span>
          <h1><b><i>Grade 7 Graduate</i></b></h1>
          <p>St. Odilard School, Imus Cavite (2016 - 2017)</p>
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="certificates">
        certificates
      </Tabs.Panel>

    </Tabs> 
  );
};

export default Education;