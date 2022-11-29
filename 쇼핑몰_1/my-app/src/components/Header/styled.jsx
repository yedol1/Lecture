import styled from "styled-components";

export const HeaderWrapper = styled.header`
    background: var(--white-color);
    display: flex;
    justify-content: center;
    .max-width {
        display: flex;
        width: 1280px;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;
        padding: 1rem 0;
        h1 {
            font-size: 3rem;
        }
        ul {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }
`;
