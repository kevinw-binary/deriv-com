import styled, { css } from 'styled-components'
import { Form } from 'formik'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text, Dropdown } from 'components/elements'
import { Button, LinkButton } from 'components/form'
import device from 'themes/device'

export const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

export const StyledSection = styled(SectionContainer)`
    position: relative;
    padding: 3rem 0;
`

export const SectionHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 32px;
    }
`

export const SectionSubtitle = styled(Text)`
    width: 79.2rem;
    margin: auto;
    margin-bottom: 4rem;
    font-size: 16px;
    @media ${device.tablet} {
        width: unset;
        padding: 0 16px;
    }
`

export const SwapTabSelector = styled(Flex)`
    padding: 2.4rem 4rem;
    width: 35rem;
    height: 8.4rem;
    border-radius: 4px;
    border: solid 1px rgba(51, 51, 51, 0.1);
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    ${(props) =>
        props.active
            ? css`
                  box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
                  border: unset;
                  ${Text} {
                      font-weight: bold;
                  }
              `
            : css`
                  box-shadow: unset;
                  ${Text} {
                      font-weight: unset;
                  }
              `}

    @media ${device.mobileL} {
        width: 164px;
        padding: 12px 24px;
    }
`

export const ContentContainer = styled(Flex)`
    @media ${device.laptopM} {
        flex-direction: column;
    }
`

export const FormWrapper = styled(Flex)`
    margin-right: 4.8rem;
    max-height: 705px;
    width: unset;

    @media ${device.laptopM} {
        padding: 0 16px;
        margin-bottom: 6rem;
        margin-right: 0;
    }
`
export const SwapFormWrapper = styled(FormWrapper)`
    height: 569px;
    margin-top: 45px;
    @media ${device.tabletL} {
        height: unset;
        margin-top: 0;
    }
`

export const CalculatorForm = styled(Form)`
    background-color: #ffffff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    width: 48.6rem;

    @media ${device.mobileL} {
        width: 328px;
        margin-bottom: 20px;
    }
`

export const CalculatorHeader = styled.div`
    border-radius: 8px 8px 0 0;
    padding: 2.4rem;
    background-color: var(--color-blue-4);
`

export const CalculatorLabel = styled.label`
    font-size: var(--text-size-xs);
    font-weight: 300;
    display: block;
    margin-bottom: 1.4rem;

    @media ${device.mobileL} {
        font-size: 14px;
    }
`

export const CalculatorOutputContainer = styled(Flex)`
    position: relative;
    border-radius: 5px;
    box-sizing: border-box;
    height: 7.5rem;
    border: 1.5px solid var(--color-blue-5);
    background-color: white;
`

export const CalculatorOutputField = styled(Flex)`
    width: 80%;
    white-space: nowrap;
    resize: none;
    background-color: white;
    justify-content: flex-start;
    height: 95%;
    border: 0;
    padding: 2.2rem;
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--color-blue-5);
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-text-fill-color: var(--color-blue-5);
    opacity: 1;
    -webkit-opacity: 1;
    margin: 1px;

    @media ${device.tabletL} {
        font-size: 18px;
    }

    @media ${device.mobileL} {
        padding-top: 2.4rem;
        font-size: 16px;
    }

    &::-webkit-scrollbar {
        width: 0;
        background: transparent; /* Chrome/Safari/Webkit */
    }

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
`

export const CalculatorOutputSymbol = styled.label`
    margin: 1px;
    pointer-events: none;
    color: var(--color-blue-5);
    font-weight: bold;
    font-size: 2.4rem;
    padding: 2.2rem;
    @media ${device.tabletL} {
        font-size: 18px;
    }

    @media ${device.mobileL} {
        font-size: 16px;
        padding-top: 2.4rem;
    }
`

export const CalculatorBody = styled.div`
    padding: 2.4rem;
    /* stylelint-disable property-no-vendor-prefix */
    ul::-webkit-scrollbar {
        width: 12px;
    }
    ul::-webkit-scrollbar-thumb {
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        -webkit-border-radius: 7px;
        border-radius: 7px;
        background-color: var(--color-grey-32);
        -webkit-box-shadow: inset -1px -1px 0 rgba(0, 0, 0, 0.05),
            inset 1px 1px 0 rgba(0, 0, 0, 0.05);
        box-shadow: inset -1px -1px 0 rgba(0, 0, 0, 0.05), inset 1px 1px 0 rgba(0, 0, 0, 0.05);
    }
    ul::-webkit-scrollbar-corner {
        background-color: transparent;
    }
`

export const CalculatorTabItem = styled.div`
    height: 72px;
    width: 21rem;
    border-radius: 1rem;
    padding: 2rem;
    border: solid 1px rgba(51, 51, 51, 0.1);
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    ${(props) =>
        props.active
            ? css`
                  pointer-events: none;
                  border: 1.5px solid var(--color-blue-5);
                  ${Text} {
                      font-weight: bold;
                  }
              `
            : css`
                  box-shadow: unset;
                  ${Text} {
                      font-weight: unset;
                  }
              `}

    @media ${device.mobileL} {
        width: 140px;
    }

    ${StyledText} {
        @media ${device.mobileL} {
            font-size: 14px;
        }
    }
`

export const CalculatorDropdown = styled(Dropdown)`
    margin-bottom: 3.6rem;
`

export const InputGroup = styled.div`
    position: relative;
    width: 100%;
    margin: 2.4rem 0;
`

export const ActionSection = styled(Flex)`
    margin-top: 3rem;
    justify-content: center;
`

export const SwapActionSection = styled(Flex)`
    padding: 0 2rem 2rem 2rem;
    justify-content: center;
`

export const CalculateButton = styled(Button)`
    width: 100%;

    @media ${device.mobileL} {
        font-size: 14px;
    }
`

export const RightContent = styled.div`
    display: block;
    max-width: 69rem;
    margin: 0;
    @media ${device.laptopM} {
        margin: auto;
    }
`

export const RightContentHeader = styled(Header)`
    line-height: 1.25;
    @media ${device.mobileL} {
        font-size: 24px;
    }
`

export const TextWrapper = styled.div`
    @media ${device.tabletM} {
        padding: 0 16px;
    }
`

export const ImageWrapper = styled.div`
    padding-left: 16px;
    max-width: 650px;

    @media ${device.laptop} {
        padding-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const FormulaText = styled.div`
    background-color: #f9fafc;
    padding: 1.6rem;
    font-size: 14px;
    width: 650px;
    line-height: 2;

    @media ${device.tabletL} {
        width: 360px;
    }
`

export const StyledOl = styled.ol`
    list-style: decimal;
    font-weight: bold;
    margin-left: 20px;

    span {
        font-weight: 300;
    }
`

export const BottomContent = styled(Flex)`
    max-width: 100%;
    align-items: center;
    margin-bottom: 7.2rem;
    font-size: 1.6rem;
    text-align: center;
    padding: 0 16px;
`

export const BottomText = styled(StyledText)`
    width: 120rem;

    @media ${device.laptopL} {
        width: auto;
    }

    @media ${device.tabletL} {
        font-size: 16px;
    }
`

// export const RightContentHeaderP = styled.div`
//     font-size: 16px;
//     font-weight: normal;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 1.5;
//     letter-spacing: normal;
//     text-align: center;
//     color: #333333;
//     margin-bottom: 40px;

//     @media ${device.mobileL} {
//         margin-bottom: 16px;
//     }
// `

export const LinkWrapper = styled(Flex)`
    padding: 2rem 2rem 1rem;
    width: 100%;
    justify-content: center;

    @media (max-width: 1420px) {
        top: 480px;
    }
    @media ${device.laptop} {
        top: 350px;
        flex-direction: column-reverse;
    }
    @media ${device.tabletL} {
        top: 236px;
    }
    @media ${device.tablet} {
        position: unset;
        top: unset;
        justify-content: start;
        margin-top: 12.8px;
        padding: 0;
    }
`

export const StyledLinkButton = styled(LinkButton)`
    padding: 1.2rem 1.5rem;
    font-size: 14px;
    max-height: 4rem;
    height: 100%;
    margin-right: 0.8rem;

    @media ${device.laptop} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
        display: block;
        max-height: 40px;

        :nth-child(2) {
            margin-bottom: 16px;
        }
    }

    :active {
        outline: none;
        border: none;
    }
    :focus {
        outline: 0;
    }
`

export const FormulaContainer = styled(Flex)`
    width: 650px;
    height: 172px;
    margin: 16px 0 0;
    border-radius: 4px;
    background-color: var(--color-blue-4);
`

export const FormulaContainerMobile = styled(Flex)`
    width: 360px;
    height: 160px;
    background-color: var(--color-blue-4);
`

export const FormulaHighlight = styled(Flex)`
    margin-top: 24px;
    width: 618px;
    height: 72px;
    border-radius: 4px;
    border: 1.5px solid var(--color-blue-5);
    background-color: #ffffff;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
`

export const FormulaHighlightMobile = styled(Flex)`
    margin-top: 54px;
    margin-bottom: 53px;
    width: 328px;
    height: 53px;
    border-radius: 4px;
    border: 1.5px solid var(--color-blue-5);
    background-color: #ffffff;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
`

export const FormulaValue = styled.div`
    display: inline-block;
    min-width: 55px;
    text-align: center;
`

export const FormulaValueSwapSynthetic = styled.div`
    display: inline-block;
    min-width: 40px;
    text-align: center;
`

export const FormulaValueMobile = styled.div`
    display: inline-block;
    min-width: 20px;
    text-align: center;
`

export const FormulaGreen = styled.span`
    display: inline-block;
    color: var(--color-blue-5);
`

export const PointerContainer = styled.div`
    display: flex;
    position: absolute;
    height: 80px;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    max-width: 55px;
    white-space: nowrap;
`

export const PointerContainerMobile = styled.div`
    display: flex;
    position: absolute;
    height: 80px;
    margin-top: ${(props) => (props.top ? '-100px' : '8px')};
    flex-direction: ${(props) => (props.top ? 'column-reverse' : 'column')};
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    align-items: center;
    max-width: 20px;
    white-space: nowrap;
`

export const PointerDot = styled.div`
    height: 9px;
    width: 9px;
    background-color: black;
    border-radius: 50%;
    opacity: 0.1;
`

export const PointerDotMobile = styled.div`
    height: 7px;
    width: 7px;
    background-color: black;
    border-radius: 50%;
    opacity: 0.1;
`

export const PointerStick = styled.div`
    position: relative;
    height: 25px;
    width: 1px;
    background-color: black;
    opacity: 0.1;
`

export const PointerStickMobile = styled.div`
    position: relative;
    height: 18px;
    width: 1px;
    background-color: black;
    opacity: 0.1;
`

export const PointerText = styled.div`
    margin-top: 5px;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-blue-5);
`

export const PointerTextMobile = styled.div`
    margin-top: ${(props) => (props.top ? '0' : '5px')};
    margin-bottom: ${(props) => (props.top ? '5px' : '0')};
    font-size: 14px;
    font-weight: 600;
    color: var(--color-blue-5);
`

export const Sup = styled.span`
    color: black;
    font-size: xx-small;
    vertical-align: super;
`
