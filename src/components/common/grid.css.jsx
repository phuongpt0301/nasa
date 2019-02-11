import styled from 'styled-components';

const Row = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    align-items: ${props => props.alignItems || "flex-start"};
    justify-content: ${props => props.justifyContent || "flex-start"};
`;

const Col = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1;
`;

const Grid = styled.section`
    width: 960px;
    margin: 0 auto;
`;

export { Grid, Row, Col };