import {MdOutlineDashboard, MdOutlineHistory} from 'react-icons/md'
import {TbSailboat} from 'react-icons/tb'

export const menu = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    Icon: MdOutlineDashboard
  },
  {
    id: 2,
    name: "Overview",
    path: "/overview",
    Icon: MdOutlineHistory
  },
  {
    id: 3,
    name: "Terminal",
    path: "/terminal",
    Icon: TbSailboat
  }
]