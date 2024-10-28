import { HouseholdListProps, Member } from '../types/HouseholdList.types';
import HouseholdMember from './HouseholdMember';

const HouseholdList: React.FC<HouseholdListProps> = ({
  heading,
  description,
  members,
}) => {
  return (
    <section className="household-list">
      <h2>{heading}</h2>
      <p>{description}</p>
      <ul className="household-members">
        {members.map((member: Member) => (
          <HouseholdMember
            key={member.name}
            name={member.name}
            description={member.description}
            favFruit={member.favFruit}
          />
        ))}
      </ul>
    </section>
  );
};

export default HouseholdList;
