import { useState, useEffect } from 'react';
import { API_DATA } from './server';
import Header from './components/Header';
import HouseholdList from './components/HouseholdList';
import Button from './components/Button';
import { Member, Contact } from './types/HouseholdList.types';
import AddMemberModal from './components/AddMemberModal';
import './global.scss';

function App() {
  // Pull data from the fake API
  const API = 'https://63d006cc8a780ae6e681fea9.mockapi.io/api/members';
  const pageHeader = API_DATA?.pageHeader;
  const householdList = API_DATA?.householdList;
  const ctaText = API_DATA?.ctaText;

  const [currentMembers, setCurrentMembers] = useState<Member[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Modal State
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [favFruit, setFavFruit] = useState<string>();
  const [contactType, setContactType] = useState<Contact>(0);

  useEffect(() => {
    fetch(API).then((response) => response.json()).then(data => 
      {
        data.forEach((member: Member) => {
          
        })
      })
    // try {
    //   const response = await fetch(API); 
    //   // { 
    //   //  firstName
    //   //  lastName
    //   //  description
    //   //  favoriteFruit
    //   // }
    //   if (response) {
    //     response.forEach((person) => {
    //       const member as Member = person;
    //       setCurrentMembers([...currentMembers, person]);
    //     })
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    // const names: Member[] = householdList?.members;
    // setCurrentMembers(names);
  }, []);

  const ClickAddMember = () => {
    setModalOpen(true);
  };

  const AddMember = () => {
    const newMember = {
      firstName: memberName,
      lastName:
      description: contactType,
      favFruit: favFruit,
    };
    setModalOpen(false);
    setCurrentMembers([newMember, ...currentMembers]);
    setMemberName('');
    setFavFruit('');
    setContactType(0);
  };

  const handleContactSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setContactType(Number(event.target.value) as Contact);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemberName(event.target.value);
  };

  const handleFruitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavFruit(event.target.value);
  };

  return (
    <>
      <Header pageTitle={pageHeader} />
      <main className="main-content">
        {modalOpen && <div className="overlay">This is an overlay</div>}
        <HouseholdList
          heading={householdList?.heading}
          description={householdList?.description}
          members={currentMembers}
        />
        <div className="add-member">
          <Button ctaText={ctaText} onClickEvent={ClickAddMember} />
        </div>
        <AddMemberModal
          memberName={memberName}
          favFruit={favFruit}
          contactType={contactType}
          isOpen={modalOpen}
          closeDialog={() => setModalOpen(false)}
          addMember={AddMember}
          setMemberName={handleNameChange}
          setFavFruit={handleFruitChange}
          setContactType={handleContactSelect}
        />
      </main>
    </>
  );
}

export default App;
