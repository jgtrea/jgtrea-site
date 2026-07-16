    import { Timeline, Text, List, Group } from "@mantine/core";
    import { WorkData } from '../data/work-data';
    import { Briefcase } from 'lucide-react';

    const Work = () => {
        const reversedWorkData = [...WorkData].reverse();

        return (
            <Timeline
                active={reversedWorkData.length - 1}
                lineWidth={2}
                bulletSize={24}
                classNames={{
                    item: 'timeline-item-custom',
                    itemContent: 'timeline-content-custom',
                    itemBody: 'timeline-body-custom',
                }}
            >
                {reversedWorkData.map((work) => (
                    <Timeline.Item
                        key={work.id}
                        bullet={<Briefcase size={14} />}
                        title={
                            <Group justify="space-between" gap="xs">
                                <span>{work.company}</span>
                                <Text size="sm" c="dimmed">{work.year}</Text>
                            </Group>
                        }
                    >
                        <Text size="md">{work.title}</Text>
                        {work.tasks && work.tasks.length > 0 && (
                            <List
                                size="sm"
                                mt="xs"
                                type="ordered"
                                className="timeline-list"
                                style={{ paddingLeft: '20px' }}
                            >
                                {work.tasks.map((task, index) => (
                                    <List.Item key={index}>{task}</List.Item>
                                ))}
                            </List>
                        )}
                    </Timeline.Item>
                ))}
            </Timeline>
        );
    };

    export default Work;
