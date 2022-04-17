import styled from "styled-components"

export const StyledImageContainer = styled.div`
display:flex;
  width: 300%;
    background-color: pink;
    height: 100%;
    clear: both;
    position: relative;
    -webkit-transition: left 2s;
    -moz-transition: left 2s;
    -o-transition: left 2s;
    transition: left 2s;
    left:${(props)=>props.left};
`