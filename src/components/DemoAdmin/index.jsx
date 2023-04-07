import Link from 'next/link'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Toggle from '@/widgets/toggle'

const DemoAdmin = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-primary p-4 text-white">
        <Link href="#" className="flex items-center gap-3 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
              fill="#fff"
            ></path>
          </svg>
          <span>Back to workflows</span>
        </Link>
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium">
            |90 Day Nurture| - Email - Qualified
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
          >
            <path
              d="M12.8995 6.85431L17.1421 11.0969L7.24264 20.9964H3V16.7538L12.8995 6.85431ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <p>Updated at Apr 7th, 4:37 pm</p>
          <button className="rounded bg-white px-5 py-1.5 text-primary">
            Save
          </button>
        </div>
      </div>
      <Tabs>
        <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 text-sm">
          <select className="ring-none my-2 rounded border border-gray-400 text-sm focus:ring-0">
            <option value="1">Actions</option>
          </select>
          <TabList>
            <Tab>Actions</Tab>
            <Tab>Settings</Tab>
            <Tab>History</Tab>
            <Tab>Status</Tab>
          </TabList>
          <div className="flex items-center gap-3">
            <button className="rounded-md border border-gray-400 px-4 py-2 text-sm transition hover:bg-primary hover:text-white">
              Test Workflow
            </button>
            <div className="flex items-center gap-3 ">
              <p>Draft</p>
              <Toggle />
              <p>Publish</p>
            </div>
          </div>
        </div>
        <div className="px-4 text-sm">
          <TabPanel>
            <div className="text-center">
              <div className="inline-block bg-light-gray p-4">
                <div className="flex items-center gap-3">
                  <button className="rounded-md border border-gray-400 bg-white px-4 py-2 text-primary transition hover:bg-primary hover:text-white">
                    Facebook Lead Form Submitted
                  </button>
                  <button className="rounded-md border border-gray-400 bg-white px-4 py-2 text-primary transition hover:bg-primary hover:text-white">
                    Form Submitted
                  </button>
                  <button className="rounded-md border border-gray-400 bg-white px-4 py-2 text-primary transition hover:bg-primary hover:text-white">
                    Survey Submitted
                  </button>
                </div>
                <div className="mt-5 text-center">
                  <button className="rounded-md bg-white px-4 py-2 text-gray-400 transition">
                    Add New Workflow Trigger
                  </button>
                </div>
              </div>
              <div className="relative pt-8">
                <div className="absolute top-0 left-0 right-0 -z-[1px] mx-auto h-full w-[1px] bg-gray-300"></div>
                <div className="relative grid gap-6">
                  <button className="mx-auto flex h-6 w-6 items-center justify-center rounded-full border-2 border-dark-blue bg-white text-dark-blue transition hover:bg-dark-blue hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <button className="inline-flex rounded-md border-2 border-orange bg-white px-4 py-1 text-orange transition hover:bg-orange hover:text-white">
                      Wait
                    </button>
                  </div>
                  <button className="mx-auto flex h-6 w-6 items-center justify-center rounded-full border-2 border-dark-blue bg-white text-dark-blue transition hover:bg-dark-blue hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <button className="inline-flex rounded-md border-2 border-dark-blue bg-white px-4 py-2 text-dark-blue transition hover:bg-dark-blue hover:text-white">
                      Email Day 1
                    </button>
                  </div>
                  <button className="mx-auto flex h-6 w-6 items-center justify-center rounded-full border-2 border-dark-blue bg-white text-dark-blue transition hover:bg-dark-blue hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <button className="inline-flex rounded-md border-2 border-orange bg-white px-4 py-1 text-orange transition hover:bg-orange hover:text-white">
                      Wait
                    </button>
                  </div>
                  <button className="mx-auto flex h-6 w-6 items-center justify-center rounded-full border-2 border-dark-blue bg-white text-dark-blue transition hover:bg-dark-blue hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  )
}

export default DemoAdmin
