import styled from 'styled-components';

export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
@media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
}
`; 