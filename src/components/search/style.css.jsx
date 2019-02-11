import styled from 'styled-components';

const Container = styled.section`
    display: flex;

    .header-area {
        padding: 108px 0 44px;

        .button-back {
            background: transparent;
            outline: none;
            border: 0;
            
            > svg {
                margin-right: 8px;
            }
            > span {
                color: #784CC0;
                font-family: Helvetica;
                font-size: 14px;
                line-height: 17px;
            }
        }
    }
    .search-area {
        h2.title {
            color: #000000;
            font-family: Helvetica;
            font-size: 40px;
            letter-spacing: -0.96px;
            line-height: 48px;
            opacity: 0.75;
            margin-bottom: 45px;
        }
        .form-area {
            position: relative;
            top: 0;
            bottom: 0;
            
            input {
                border: 1px solid #CECED2;
                border-radius: 3px;
                width: 100%;
                padding: 19px 0 18px 9px;
                position: relative;
                background: transparent;
                z-index: 1;
                outline: 0;

                &:focus {
                    background-color: #FFFFFF;
                    border: 1px solid #83838D;
                    border-radius: 3px;
                    box-shadow: 0 1px 5px 0 rgba(57, 24, 245, 0.9);
                    outline: 0;
                    padding: 26px 0 11px 9px;
                    color: #000000;
                }

                &:focus + label {
                    font-size: 12px;
                    padding: 7px 0 5px 9px;
                    z-index: 2;
                }

                // &:not(:hover) {
                //     &:valid + label {
                //         display: none;
                //     }
                // }

                &:valid:not(:focus) + label {
                    display: none;
                }
            }

            label {
                transition: // not padding
                    background 0.2s,
                    color 0.2s,
                    top 0.2s,
                    bottom 0.2s,
                    right 0.2s,
                    left 0.2s;
                color: #000000;
                font-family: Helvetica;
                font-size: 16px;
                letter-spacing: 0.13px;
                opacity: 0.3;
                position: absolute;
                left: 0;
                padding: 19px 0 18px 9px;
            }
        }
    }
`;

export { Container };