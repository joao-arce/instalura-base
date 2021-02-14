import styled, { css } from 'styled-components'
import get from 'lodash/get'

// color: #fb7b6b;
const ButtonGhost = css`
  color: ${props => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`
// background-color: #d7385e;
// background-color: ${props => props.theme.colors.primary.main.color};
const ButtonDefault = css`
  color: white;
  background-color: ${props =>
    get(props.theme, `colors.${props.variant}.color`)};
  color: ${props => get(props.theme, `colors.${props.variant}.contrastText`)};
`

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  ${props => (props.ghost ? ButtonGhost : ButtonDefault)}
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`