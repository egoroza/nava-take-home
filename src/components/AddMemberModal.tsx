import Button from './Button';
import { AddMemberModalProps } from '../types/AddMemberModal.types';
import './AddMemberModal.scss';

const AddMemberModal: React.FC<AddMemberModalProps> = ({
  firstName,
  lastName,
  favFruit,
  contactType,
  isOpen,
  closeDialog,
  addMember,
  setFirstName,
  setLastName,
  setFavFruit,
  setContactType,
}) => {
  return (
    <dialog open={isOpen} className="add-member-modal">
      <div className="header-container">
        <h2>Add Member</h2>
        <button type="button" onClick={closeDialog} className="dismiss">
          X
        </button>
      </div>
      <p>
        To add a member to your household, please provide the following
        information.
      </p>
      <form className="new-member">
        <div className="modal-input">
          <div className="modal-form-item">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={setFirstName}
            ></input>
          </div>
          <div className="modal-form-item">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={setLastName}
            ></input>
          </div>
          <div className="modal-form-item">
            <label htmlFor="favorite-fruit">Favorite Fruit</label>
            <input
              type="text"
              id="favorite-fruit"
              value={favFruit}
              onChange={setFavFruit}
            ></input>
          </div>
          <div className="modal-form-item">
            <label htmlFor="contact-type">Contact Type</label>
            <select
              id="contact-type"
              value={contactType}
              onChange={setContactType}
            >
              <option key="0" value="0">
                Household Contact
              </option>
              <option key="1" value="1">
                Emergency Contact
              </option>
            </select>
          </div>
        </div>
        <div className="modal-actions">
          <Button ctaText="Add Member" onClickEvent={addMember} />
          <Button ctaText="Close" onClickEvent={closeDialog} />
        </div>
      </form>
    </dialog>
  );
};

export default AddMemberModal;
