import styled from "@emotion/styled";


export const Section = styled.section`

`;

export const List = styled.ul`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;`;

export const Link = styled.li`
display: flex;
flex-direction: column;
align-items: center;`;

export const Img = styled.img`
margin-bottom: 5px;
width: 300px;
height: auto;
`;

export const ActorName = styled.p``;

export const Character = styled.p``;

