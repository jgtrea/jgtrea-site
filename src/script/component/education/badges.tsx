import { Timeline, Text, List, Group } from "@mantine/core";
import { BadgesData } from '../data/badges-data';
import { Award } from 'lucide-react';

const Badges = () => {
    const reversedBadges = [...BadgesData].reverse();

    return (
        <Timeline
            active={reversedBadges.length - 1}
            lineWidth={2}
            bulletSize={24}
            color="var(--text)"
            classNames={{
                item: 'timeline-item-custom',
                itemContent: 'timeline-content-custom',
                itemBody: 'timeline-body-custom',
            }}
        >
            {reversedBadges.map((badge) => (
                <Timeline.Item key={badge.id} bullet={<Award size={14} />} title={badge.title}>
                    <Group gap="xs" align="center">
                        <Text size="sm">{badge.issuer}</Text>
                        {badge.date && <Text size="xs" c="dimmed"> - {badge.date}</Text>}
                    </Group>
                    {badge.achievements && badge.achievements.length > 0 && (
                        <List
                            size="xs"
                            mt="xs"
                            type="ordered"
                            className="timeline-list"
                            style={{ paddingLeft: '20px' }}
                        >
                            {badge.achievements.map((achievement, index) => (
                                <List.Item key={index}>{achievement}</List.Item>
                            ))}
                        </List>
                    )}
                </Timeline.Item>
            ))}
        </Timeline>
    );
};

export default Badges;