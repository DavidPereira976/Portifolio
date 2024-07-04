import styled from "styled-components";
import device from "../../assets/Styles/device";

export const FirstAlignContainer = styled.section`
/* border: solid green; */
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
justify-content: space-around;
background-color:#012e40 ;
`

export const Title = styled.h1`
padding: 50px;
color: #fff;

@media ${device.mobileN}{
padding: 30px;
font-size: 15px;
}
`

export const GradeContainer = styled.section`
/* border: solid yellow; */
width: 1600px;
height: 720px;
display: flex;
align-items: center;
justify-content: space-around;

@media ${device.laptopM}{
    width: 1200px;
    height: 600px;
}

@media ${device.tabletL}{
    flex-direction: column;
    height: 1100px;
    width: 750px;
}

@media ${device.tabletM}{
width: 730px;
}

@media ${device.tabletS}{
width: 700px;
}

@media ${device.mobileL}{
width: 350px;
min-height: 1350px;
}

@media ${device.mobileM}{
width: 340px;
}

@media ${device.mobileA}{
width: 330px;
}

@media ${device.mobileS}{
width: 300px;
}

@media ${device.mobileS}{
width: 280px;
}
`