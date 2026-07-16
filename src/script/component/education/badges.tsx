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
                <Timeline.Item
                    key={badge.id}
                    bullet={<Award size={14} />}
                    title={
                        <Group justify="space-between" gap="xs">
                            <span>{badge.title}</span>
                            {badge.date && <Text size="sm" c="dimmed">{badge.date}</Text>}
                        </Group>
                    }
                >
                    <Text size="sm">{badge.issuer}</Text>
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