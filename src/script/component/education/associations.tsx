import { Timeline, Text, List, Group } from "@mantine/core";
import { Building2 } from 'lucide-react';
import { AssociationsData } from "../data/associations-data";

    const Associations = () => {
        const reversedAssociationsData = [...AssociationsData].reverse();
        
        return (
            <Timeline
                active={reversedAssociationsData.length - 1}
                lineWidth={2}
                bulletSize={24}
                classNames={{
                    item: 'timeline-item-custom',
                    itemContent: 'timeline-content-custom',
                    itemBody: 'timeline-body-custom',
                }}
            >
                {reversedAssociationsData.map((association) => (
                    <Timeline.Item
                        key={association.id}
                        bullet={<Building2 size={14} />}
                        title={
                            <Group justify="space-between" gap="xs">
                                <span>{association.title}</span>
                                <Text size="sm" c="dimmed">{association.date}</Text>
                            </Group>
                        }
                    >
                        <Text size="sm">{association.issuer}</Text>
                        {association.achievements && association.achievements.length > 0 && (
                            <List
                                size="xs"
                                mt="xs"
                                type="ordered"
                                className="timeline-list"
                                style={{ paddingLeft: '20px' }}
                            >
                                {association.achievements.map((achievement, index) => (
                                    <List.Item key={index}>{achievement}</List.Item>
                                ))}
                            </List>
                        )}
                    </Timeline.Item>
                ))}
            </Timeline>
        );
    };

    export default Associations;