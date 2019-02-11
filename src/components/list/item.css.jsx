import styled from 'styled-components';

const ItemContainer = styled.section`
    width: 300px;
    overflow: hidden;
    margin-left: 20px;

    &:first-child, &:nth-child(3n + 1) {
        margin-left: 0;
    }

    img {
        width: 100%;
        height: auto;
    }

    .item {
        .imgage-area {
            width: 300px;
            height: 168px;
            overflow: hidden;
        }
    }
`;

export { ItemContainer };