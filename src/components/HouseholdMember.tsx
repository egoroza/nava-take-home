import { Member } from '../types/HouseholdList.types';
import './HouseholdMember.scss';

const HouseholdMember: React.FC<Member> = ({ firstName, lastName, description, favFruit }) => (
  <li className="household-member-item">
    <div className="household-member-container">
      <h3>{firstName} {lastName}</h3>
      <ul className="member-info">
        <li className="member-item">
          <span className="descriptor">Description: </span>
          {description}
        </li>
        <li className="member-item">
          <span className="descriptor">Favorite fruit:</span> {favFruit}
        </li>
      </ul>
    </div>
  </li>
);

export default HouseholdMember;
