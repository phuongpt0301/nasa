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
        margin-bottom: 33px;
        
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
    .title-result-area {
        color: #000000;
        font-family: Helvetica;
        font-size: 12px;
        letter-spacing: 0.09px;
        line-height: 14px;
        margin-bottom: 34px;
    }
    .waiting-container {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        opacity: .8;
        z-index: 100;
    }
    .pagination-container {
        display: flex;
        flex-wrap: wrap;
    }
    /* Declare some variables */
    /* Define Styles */
    .current-page {
    font-size: 1.5rem;
    vertical-align: middle; }

    .country-card-container {
    height: 60px;
    cursor: pointer;
    position: relative;
    overflow: hidden; }

    .country-name {
    font-size: 0.9rem; }

    .country-region {
    font-size: 0.7rem; }

    .current-page,
    .country-name,
    .country-region {
    line-height: 1; }

    /* Override some Bootstrap pagination styles */
    ul.pagination {
        flex-wrap: wrap;
        margin-top: 0;
        margin-bottom: 0;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); 

        li.page-item.active a.page-link {
            color: #445565 !important;
            background-color: #e3e7eb !important;
            border-color: #ced4da !important; 
        }
        a.page-link {
            padding: 0.75rem 1rem;
            min-width: 3.5rem;
            text-align: center;
            box-shadow: none !important;
            border-color: #ced4da !important;
            color: #6b88a4;
            font-weight: 900;
            font-size: 1rem; 
            
            &:hover {
                background-color: #f4f4f4; 
            }
        }
    }
`;

export { Container };