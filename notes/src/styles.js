import styled from 'styled-components';

/***NAVBAR COMPONENT***/

export const DivNavBar = styled.div`
  border: 1px solid #c4c3c4;
  background-color: #d7d7d7;
  flex-direction: column;
  text-align: left;
  width: 195px;
  height: 100%;
  display: flex;
  position: fixed;
  padding: 2rem 1.8%;
  line-height: 0.9;

  @media (max-width: 650px) {
    position: static;
    width: 90%;
    margin: 0 auto;
  }
`;

/***NOTEFORM COMPONENT***/

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f2f1f2;
  margin-left: 300px;
  padding-top: 5.9rem;
  padding-left: 0.5rem;
  width: 70%;

  h2 {
    font-size: 2.1rem;
  }

  @media (max-width: 725px) {
    margin-left: 230px;
    width: 82%;
  }

  @media (max-width: 650px) {
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 1.4rem 1.7%;
  width: 55%;
`;

export const StyledTextArea = styled.textarea`
  height: 31rem;
  width: 55%;
  border-radius: 5px;
  padding: 1.9rem 1.8%;

  @media (max-width: 1150px) {
    max-width: 75%;
  }
`;

export const Button = styled.button`
  background-color: #2ac0c4;
  color: white;
  padding: 1.2rem 1%;
  font-weight: bold;
  font-size: 1.5rem;
  width: 100%;
  margin: 0.9rem 0;
  border-radius: 3px;
`;

export const ExportButton = styled.button`
  position: fixed;
  top: 95%;
  left: 1.3%;
  border-radius: 5px;
  background-color: #636378;
  color: white;

  @media (max-width: 600px) {
    position: relative;
    left: 11%;
    bottom: 5rem;
    width: 15%;
  }
`;

export const SearchButton = styled.button`
  padding: 1.2rem;
  margin-left: 0.2rem;
  background-color: #000000;
  font-size: 1.8rem;
  color: #2ac0c4;
  border-radius: 5px;
  height: 4reddm;
`;

export const SortSelect = styled.select`
  margin-top: 1rem;
  background-color: #000000;
  color: #2ac0c4;
  padding: 0.5rem;
  font-size: 1.5rem;
  border-radius: 3px;
`;

export const ClearFilter = styled.button`
  margin-left: 1%;
  color: #2ac0c4;
  border-radius: 2px;
  background-color: #000000;
`;

export const FormButton = styled(Button)`
  width: 31.5%;
  //padding: 5px 10px;
`;

export const DisplayingDiv = styled.div`
  background: #b9b2b3;
  width: 60%;
`;

/****NOTE COMPONENT****/

export const DivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  padding-top: 2rem;
  width: 100%;
  font-weight: bold;

  p {
    //padding: 0 10px;
    text-decoration: underline;
    padding-right: 3%;
  }
`;

export const SingleNote = styled.div`
  margin-left: 300px;
  text-align: left;
  width: 65%;
  padding: 2rem 1rem;
  height: 100vh;

  @media (max-width: 650px) {
    margin: 0 auto;
  }

  p {
    white-space: pre-wrap;
    line-height: 1.5;
  }
  h2 {
    margin-top: 0.3rem;
    margin-bottom: 3rem;
    font-size: 2.2rem;
  }
`;

/****NOTES COMPONENT****/
export const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 6rem;
  margin-left: 250px;

  @media (max-width: 800px) {
  }

  @media (max-width: 650px) {
    margin: 0 auto;
  }
`;

export const SearchBarWrapper = styled.div`
  padding-left: 3%;
  width: 80%;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const SearchBar = styled(StyledInput)`
  margin-bottom: 1rem;
  }
`;

export const DivNotes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
  justify-content: space-evenly;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledNote = styled.div`
  border: 1px solid #cecece;
  background-color: #ffffff;
  padding: 10px 15px;
  width: 25%;
  min-width: 100px;
  //margin: 1.2rem 1.5%;
  margin: 1.2rem 0;
  height: 17.8rem;
  overflow: hidden;
  text-align: left;
  white-space: pre-wrap;

  @media (min-width: 1200px) {
    width: 19%;
  }
  @media (max-width: 850px) {
    width: 40%;
  }

  @media (max-width: 750px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }

  h2 {
    font-weight: bold;
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    line-height: 1.2;
  }
`;

export const HeaderDiv = styled.div`
  height: 1.6rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

/***Modal Component***/

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const StyledModal = styled.div`
  width: 46%;
  min-width: 260px;
  max-width: 480px;
  height: 13rem;
  position: fixed;
  top: 25%;
  text-align: center;
  left: calc((100% - 46%) / 2);
  border: 1px solid red;
  background-color: #ffffff;
  z-index: 2;
  padding: 4.5rem 4rem 2rem;

  p {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    left: 20%;
  }

  @media (max-width: 430px) {
    left: 10%;
  }
  @media (max-width: 400px) {
    left: 0;
  }
`;

export const ModalButton = styled(Button)`
  margin: 10px;
  background-color: ${props => (props.delete ? '#CA001A' : null)};
  padding: 10px 20px;
`;
