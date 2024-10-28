import { Member, ContactMapping } from '../types/HouseholdList.types';
import './HouseholdMember.scss';

const HouseholdMember: React.FC<Member> = ({ name, description, favFruit }) => (
  <li className="household-member-item">
    <div className="household-member-container">
      <h3>{name}</h3>
      <ul className="member-info">
        <li className="member-item">
          <span className="descriptor">Description: </span>
          {ContactMapping[description] ?? ContactMapping[0]}
        </li>
        <li className="member-item">
          <span className="descriptor">Favorite fruit:</span> {favFruit}
        </li>
      </ul>
    </div>
  </li>
);

export default HouseholdMember;
