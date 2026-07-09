import { Link } from 'react-router-dom';
import '../../styles/section.css';

type SectionAction = {
  label: string;
  to?: string;
  href?: string;
};

type SectionHeaderProps = {
  title: string;
  action?: SectionAction;
  trailing?: React.ReactNode;
};

const SectionHeader = ({ title, action, trailing }: SectionHeaderProps) => {
  const actionContent = action && (
    <>
      {action.label} <span className="section-action-arrow">&rarr;</span>
    </>
  );

  return (
    <div className="section-header">
      <span className="section-pill">{title}</span>
      {action && (
        action.to ? (
          <Link to={action.to} className="section-action">{actionContent}</Link>
        ) : (
          <a href={action.href} className="section-action">{actionContent}</a>
        )
      )}
      {trailing}
    </div>
  );
};

export default SectionHeader;
