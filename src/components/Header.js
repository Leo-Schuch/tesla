import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars);

  return (
    <Container>
      <a>
        <img src='/images/logo.svg'></img>
      </a>
      <Menu>
        {cars && cars.map((car, index) =>
        (
          <a key={index} href='#'>{car}</a>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) =>
        (
          <li><a key={index} href='#'>{car}</a></li>
        ))}
        <li> <a href='#'>Existing Inventory</a></li>
        <li> <a href='#'>Used Inventory</a></li>
        <li> <a href='#'>Trade-in</a></li>
        <li> <a href='#'>Cybertruck</a></li>
        <li> <a href='#'>Roadster</a></li>


      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60x;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20x;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const Menu = styled.div`
padding-left: 150px;
display: flex;
align-items: center;
justify-content: center;
flex: 1;
padding-left: 50px;

a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-size: 12px;
    

}

@media(max-width: 768px){
    display: none;
}

`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
a {
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
  font-size: 10px;
  
}
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 220px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: 12px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.6s;
  
  li{
      padding: 12px 0;
      

  }
  a{
    font-weight: 600;
  }

`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;

`


