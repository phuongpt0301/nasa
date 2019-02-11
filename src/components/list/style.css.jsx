import styled from 'styled-components';

const Container = styled.section`
    margin: 0 auto;
    
    .header-area {
        display: flex;
        align-items: center;
        padding: 73px 0 62px;
    }
    
    h1.title {
        color: #000000;
        font-family: Helvetica Bold;
        font-size: 50px;
        letter-spacing: -1.21px;
        line-height: 60px;
        opacity: 0.30327;
        text-align: left;
        display: flex;
        flex: 1;
    }

    a {
        text-decoration: none;
    }

    .button-primary {
        background-color: #784CC0;
        border-radius: 3px;
        padding: 7px 13px 7px 10px;
        color: #FFFFFF;
        font-family: Helvetica;
        font-size: 14px;
        letter-spacing: 0.11px;

        &:hover, &:focus {
            background-color: #976BE2;
        }

        &:active {
            background-color: #5D3999;
        }

        > svg {
            margin-right: 11px;
        }
    }
`;

export { Container };