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
  justify-content: center;
  flex-direction: column;
  margin: 1rem 2rem;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid #41337a;
  background: #6ea4bf;
  box-shadow:
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
