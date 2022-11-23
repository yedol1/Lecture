import styled from "styled-components";

export const ProductWrapper = styled.li`
    width: 380px;
    img {
        width: 380px;
        height: 380px;
    }
    .product-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }
    p {
        line-height: 20px;
        .discount {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #828282;
            text-decoration-line: line-through;
        }
        .percent {
        }
    }
    strong {
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
    }
`;
