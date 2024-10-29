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
        {members.map((member: Member, index) => (
          <HouseholdMember
            key={index}
            firstName={member.firstName}
            lastName={member.lastName}
            description={member.description}
            favFruit={member.favFruit}
          />
        ))}
      </ul>
    </section>
  );
};

export default HouseholdList;
