import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import SidebarItems from "../sidebar-items/sidebar-items.component";
import {Link} from "react-router-dom";

function SidebarMenuComponent(props, {defaultActive,}) {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return (
        <>
            <SidebarParent>
                <div style={{position: 'fixed'}}>
                  {
                    SidebarItems.map((item, index)=> {
                      return (
                        <Link to={item.route}>
                          <SidebarItem 
                            key={item.name}
                            active={index === activeIndex}
                          >
                            <p>{item.name}</p>
                          </SidebarItem>
                        </Link>
                      );
                    })
                  }
                </div>
            </SidebarParent>
        </>
    );
}

export default SidebarMenuComponent;

const SidebarParent = styled.div`
  background: #c34a36;
  width: 250px;
  height: 100vh;
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  //Change the background color if 'active' prop is received
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;




{/* <Layout>
<Layout>
  <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
            <SubMenu key="sub1" icon={<LogoPumps className="logo_pumps"/>} title="Pumps & Dumps">
              <Menu.Item key="p1">option1</Menu.Item>
              <Menu.Item key="p2">option2</Menu.Item>
              <Menu.Item key="p3">option3</Menu.Item>
              <Menu.Item key="p4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LogoNft className="logo_nft_market" />} title="NFT Market">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<LogoStableCoins className="logo_stablecoins" />} title="Stablecoins">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<LogoAltCoins className="logo_altcoins" />} title="Altcoins">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    </Layout> */}