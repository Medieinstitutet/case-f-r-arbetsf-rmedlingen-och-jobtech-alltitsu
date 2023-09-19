import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #c2efeb;
`;

export const JobWrapper = styled.div`
  background-color: #6ea4bf;
  margin: 1em;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid #41337a;
  box-shadow:
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ContactWrapper = styled.div`
  background-color: #6ea4bf;
  display: flex;
  max-width: 500px;
  justify-content: center;
  flex-direction: column;
  margin: 45px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #41337a;
  box-shadow:
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 700px) {
    margin: auto;
    margin-top: 5rem;
  }
`;

export const FooterWrapper = styled.footer`
  background-color: #6ea4bf;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 5px;
  overflow-x: hidden;
  box-sizing: border-box;
  margin-top: 5rem;
  position: absolute;
  bottom: 0;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const AdWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  section {
    padding: 20px;

    span {
      display: block;
      font-size: 0.8rem;
    }
  }
`;

export const DetailsWrapper = styled.div`
  border: 1px solid black;
  width: 45%;
  border-radius: 10px;
  padding: 15px;
`;
