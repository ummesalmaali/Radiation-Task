import {
    CalendarIcon,
    ClipboardCheckIcon,
    CreditCardIcon,
    DocumentReportIcon,
    InboxInIcon,
    UserGroupIcon,
    ViewGridAddIcon,
} from '@heroicons/react/outline';
import React from 'react';
import SidebarItem from './SidebarItem';

function SidebarItems() {
    return (
        <>
            <SidebarItem Icon={UserGroupIcon} name="Clients" />
            <SidebarItem Icon={ClipboardCheckIcon} name="Appointments" />
            <SidebarItem Icon={DocumentReportIcon} name="Reports" />
            <SidebarItem Icon={CalendarIcon} name="Calender" />
            <SidebarItem Icon={ViewGridAddIcon} name="To-do" />
            <SidebarItem Icon={InboxInIcon} name="Invoice" />
            <SidebarItem Icon={CreditCardIcon} name="Credits/Debits" />
        </>
    );
}

export default SidebarItems;
