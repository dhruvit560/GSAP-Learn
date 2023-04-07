import React, { useState } from 'react'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import PieChartMain from './PieChartMain'
import dynamic from 'next/dynamic'

const Linegraph = dynamic(() => import('../components/Linegraph'), {
  ssr: false,
})
const PieChart = dynamic(() => import('../components/PieChart'), {
  ssr: false,
})

const Admin = () => {
  const [collapse, setCollapse] = useState(false)

  const handleCollapse = () => {
    return setCollapse(!collapse)
  }
  return (
    <div className="bg-black lg:flex">
      <div className="hidden lg:block">
        <ProSidebar collapsed={collapse}>
          <SidebarHeader className="py-3 text-center">
            <button onClick={handleCollapse}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                  fill="#fff"
                />
              </svg>
            </button>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={'1'}>Dashboard</MenuItem>
              <SubMenu title="Components" icon={'1'}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <p>Footer</p>
          </SidebarFooter>
        </ProSidebar>
      </div>

      <div className="w-full">
        <div className="flex">
          <div className={`${collapse && 'active'} block lg:hidden`}>
            <div className="flex items-center justify-center px-5 py-3">
              <button onClick={handleCollapse}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
            <ProSidebar>
              <SidebarContent>
                <Menu iconShape="square">
                  <MenuItem icon={'1'}>Dashboard</MenuItem>
                  <SubMenu title="Components" icon={'1'}>
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                  </SubMenu>
                </Menu>
              </SidebarContent>
              <SidebarFooter>
                <p>Footer</p>
              </SidebarFooter>
            </ProSidebar>
          </div>
          <div className="w-full bg-[#1D1D1D] px-5 py-4">
            <p>LOGO</p>
          </div>
        </div>
        <div className="admin-content p-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            molestias in quo, iste, aliquid at ducimus architecto enim doloribus
            expedita molestiae ipsum, omnis repudiandae? Vero asperiores sed
            possimus accusamus similique?
          </p>
          <div className="mt-6 grid grid-cols-3">
            <Linegraph />
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
