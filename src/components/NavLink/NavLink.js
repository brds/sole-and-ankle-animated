import styled from "styled-components"
import { QUERIES, WEIGHTS } from "../../constants";


const NavLink = ({href, label}) => {


  return (
    <Anchor href={href}>
      <Wrapper>
        <span>{label}</span>
        <HoverState>{label}</HoverState>
      </Wrapper>
    </Anchor>
  );
}

const Anchor = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  overflow: hidden;
  height: ${28 / 16}rem;
  
  &:first-of-type {
    color: var(--color-secondary);
  }
  `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Anchor}:hover & {
    transform: translateY(-50%);
  }

  @media ${QUERIES.acceptsMotions} {
    transition: transform 400ms ease-in-out;

    ${Anchor}:hover & {
      transition-duration: 200ms;
    } 
  }
`;

const HoverState = styled.span`
  font-weight: ${WEIGHTS.bold};
`;

export default NavLink;