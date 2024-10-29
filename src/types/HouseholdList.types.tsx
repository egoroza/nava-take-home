// 0 = Household contact, 1 = Emergency contact
export type Contact = 0 | 1;

export interface HouseholdListProps {
  heading: string;
  description: Contact;
  members: Member[];
}

// export type Member = {
//   name?: string;
//   description: Contact;
//   favFruit?: string;
// };

export type Member = {
  firstName: string,
  lastName: string,
  description: string,
  favFruit: string,
}

export const ContactMapping = {
  [0]: 'Household contact',
  [1]: 'Emergency contact',
};
