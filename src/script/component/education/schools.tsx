    import { Timeline, Text, List, Group } from "@mantine/core";
    import { SchoolData } from '../data/school-data';
    import { GraduationCap } from 'lucide-react';

    const School = () => {
        const reversedSchoolData = [...SchoolData].reverse();
        
        return (
            <Timeline
                active={reversedSchoolData.length - 1}
                lineWidth={2}
                bulletSize={24}
                classNames={{
                    item: 'timeline-item-custom',
                    itemContent: 'timeline-content-custom',
                    itemBody: 'timeline-body-custom',
                }}
            >
                {reversedSchoolData.map((school) => (
                    <Timeline.Item key={school.id} bullet={<GraduationCap size={14} />} title={school.school}>
                        <Group gap="xs" align="center">
                            <Text size="sm">{school.title}</Text>
                            <Text size="sm"> -  {school.year}</Text>
                        </Group>
                        {school.achievements && school.achievements.length > 0 && (
                            <List
                                size="xs"
                                mt="xs"
                                type="ordered"
                                className="timeline-list"
                                style={{ paddingLeft: '20px' }}
                            >
                                {school.achievements.map((achievement, index) => (
                                    <List.Item key={index}>{achievement}</List.Item>
                                ))}
                            </List>
                        )}
                    </Timeline.Item>
                ))}
            </Timeline>
        );
    };

    export default School;