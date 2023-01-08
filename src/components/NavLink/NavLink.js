import styled from "styled-components"
import { QUERIES, WEIGHTS } from "../../constants";

const NavLink = ({href, label}) => {
  return (
    <Anchor href={href}>
      <IdleState>{label}</IdleState>
      <HoverState aria-hidden={true}>{label}</HoverState>
    </Anchor>
  );
}

const Anchor = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  position: relative;
  /*
    Hover animation moves the 2 children around, 
    and only one should be visible at a time.
  */
  overflow: hidden;
  
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-from));

  ${Anchor}:hover & {
    transform: translateY(var(--translate-to));
  }

  @media ${QUERIES.canHoverAndAcceptsMotion} {
    transition: transform 400ms ease-in-out;

    ${Anchor}:hover & {
      transition-duration: 200ms;
    } 
  }
`;

const IdleState = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
  `;

const HoverState = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;

  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${WEIGHTS.bold};
`;

export default NavLink;