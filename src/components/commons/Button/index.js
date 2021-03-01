/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyledVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

// color: #fb7b6b;
const ButtonGhost = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`;
// background-color: #d7385e;
// background-color: ${props => props.theme.colors.primary.main.color};
const ButtonDefault = css`
  color: white;
  background-color: ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    get(props.theme, `colors.${props.variant}.color`)};
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;

  ${breakpointsMedia({
    xs: css`
      /* All devices */
      ${TextStyledVariantsMap.smallestException}
    `,
    md: css`
      /* From md breakpoint */
      ${TextStyledVariantsMap.paragraph1}
    `,
  })}

  ${TextStyledVariantsMap.smallestException};
  ${(props) => (props.ghost ? ButtonGhost : ButtonDefault)}
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${propToStyle('marginBottom')}
`;
