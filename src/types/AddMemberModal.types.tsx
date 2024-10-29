export type Contact = 0 | 1;

export interface AddMemberModalProps {
  firstName: string | undefined;
  lastName: string | undefined;
  favFruit: string | undefined;
  contactType: Contact;
  isOpen: boolean | undefined;
  closeDialog: (event: React.MouseEvent<HTMLButtonElement>) => void;
  addMember: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setFirstName: React.ChangeEventHandler<HTMLInputElement>;
  setLastName: React.ChangeEventHandler<HTMLInputElement>;
  setFavFruit: React.ChangeEventHandler<HTMLInputElement>;
  setContactType: React.ChangeEventHandler<HTMLSelectElement>;
}
