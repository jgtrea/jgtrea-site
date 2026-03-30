import { Timeline, Text, List, Group } from "@mantine/core";
import { CertificateData } from '../data/certificate-data';
import { Award } from 'lucide-react';

const Certifs = () => {
    const reversedCertifs = [...CertificateData].reverse();

    return (
        <Timeline
            active={reversedCertifs.length - 1}
            lineWidth={2}
            bulletSize={24}
            classNames={{
                item: 'timeline-item-custom',
                itemContent: 'timeline-content-custom',
                itemBody: 'timeline-body-custom',
            }}
        >
            {reversedCertifs.map((cert) => (
                <Timeline.Item key={cert.id} bullet={<Award size={14} />} title={cert.title}>
                    <Group gap="xs" align="center">
                        <Text size="sm">{cert.issuer}</Text>
                        {cert.date && <Text size="sm"> - {cert.date}</Text>}
                    </Group>
                    {cert.achievements && cert.achievements.length > 0 && (
                        <List
                            size="xs"
                            mt="xs"
                            type="ordered"
                            className="timeline-list"
                            style={{ paddingLeft: '20px' }}
                        >
                            {cert.achievements.map((achievement, index) => (
                                <List.Item key={index}>{achievement}</List.Item>
                            ))}
                        </List>
                    )}
                </Timeline.Item>
            ))}
        </Timeline>
    );
};

export default Certifs;