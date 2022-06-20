import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: .25rem .25rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        color: var(--tex-title);
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }
`;