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
        height: 100%;
    }

    .item {
        margin-bottom: 60px;

        .imgage-area {
            width: 300px;
            height: 168px;
            overflow: hidden;
            border-radius: 3px;
            position: relative;

            .group-icon {
                position: absolute;
                top: 35%;
                left: 45%;

                .btn-play {
                    background-color: #FFFFFF;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), inset 0 2px 0 0 rgba(255, 255, 255, 0.25);
                    width: 44px;
                    height: 44px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0px 0 0 6px;
                    border-radius: 100%;
                    outline: 0;
                }
            }
        }
        
        &:hover, &:focus {
            .group-icon {
                top: 32%;
                left: 42%;

                .btn-play {
                    width: 54px;
                    height: 54px;

                    > svg {
                        width: 22px;
                        height: 30px;
                    }
                }
            }
        }

        .bg-blur {
            filter: blur(10px);
            opacity: 0.800000011920929;
        }

        .info-area {
            padding: 22px 0 8px;

            span {
                color: #000000;
                font-family: Helvetica;
                font-size: 12px;
                letter-spacing: 0.09px;
                line-height: 21px;
                opacity: 0.6000000238418579;
            }
        }
        .content-area {
            .title {
                color: #000000;
                font-family: Helvetica;
                font-size: 24px;
                letter-spacing: -0.58px;
                line-height: 29px;
                text-align: left;
                height: 58px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .description {
                color: #000000;
                font-family: Helvetica;
                font-size: 14px;
                letter-spacing: 0.11px;
                line-height: 21px;
                opacity: 0.6000000238418579;
                text-align: left;
                height: 63px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        }
        .icon-area {
            .btn-add {
                border: 1px solid #CECED2;
                border-radius: 3px;
                width: 100%;
                text-align: left;
                outline: none;

                &:hover, &:focus {
                    cursor: pointer;
                }

                svg {
                    margin: 12px 55px 12px 12px;
                }

                span {
                    text-align: center;
                    color: #000000;
                    font-family: Helvetica;
                    font-size: 12px;
                    letter-spacing: 0.09px;
                    line-height: 14px;
                    opacity: 0.4;
                }
            }
        }
    }
`;

export { ItemContainer };