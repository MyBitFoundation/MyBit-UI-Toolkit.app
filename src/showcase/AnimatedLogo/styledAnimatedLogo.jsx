import styled from 'styled-components';

const StyledAnimatedLogo = styled.div`
    display: inline-block;
    font-size: ${props => props.size};
    line-height: 1;
    svg {
        width: 1em; height: 1em;
        display: inline-block;
        vertical-align: bottom;
    }
    .JVlbXHZN_0{
        stroke-dasharray:1343 1345;
        stroke-dashoffset:1344;
        animation: 
            JVlbXHZN_draw_0${props => props.animationIterationCount} ${props => props.animationSpeed} ease-in-out 0ms ${props => props.animationIterationCount},
            JVlbXHZN_fade${props => props.animationIterationCount} ${props => props.animationSpeed} linear 0ms ${props => props.animationIterationCount};
        animation-fill-mode: forwards;
    }
    .JVlbXHZN_1{
        stroke-dasharray:661 663;
        stroke-dashoffset:662;
        animation:
            JVlbXHZN_draw_1${props => props.animationIterationCount} ${props => props.animationSpeed} ease-in-out 0ms ${props => props.animationIterationCount},
            JVlbXHZN_fade${props => props.animationIterationCount} ${props => props.animationSpeed} linear 0ms ${props => props.animationIterationCount};
        animation-fill-mode: forwards;
    }
    @keyframes JVlbXHZN_fade${props => props.animationIterationCount}{
        0%{stroke-opacity:1;}
        77.27272727272728%{stroke-opacity:1;}
        100%{stroke-opacity:0;}
    }
    @keyframes JVlbXHZN_draw_0${props => props.animationIterationCount}{
        13.636363636363635%{stroke-dashoffset: 1344;}
        45%{fill-opacity:0;}
        60%{fill-opacity:0;}
        72.72727272727273%{ stroke-dashoffset: 0;}
        80%{fill-opacity:1;}
        100%{ ${props => { return props.animationIterationCount === '1' ? 'fill-opacity: 1;' : ''}}  stroke-dashoffset: 0;}
    }
    @keyframes JVlbXHZN_draw_1${props => props.animationIterationCount}{
        13.636363636363635%{stroke-dashoffset: 662}
        45%{fill-opacity:0;}
        60%{fill-opacity:0;}
        72.72727272727273%{ stroke-dashoffset: 0;}
        80%{fill-opacity:1;}
        100%{ ${props => { return props.animationIterationCount === '1' ? 'fill-opacity: 1;' : ''}}  stroke-dashoffset: 0;}
    }
`

export default StyledAnimatedLogo