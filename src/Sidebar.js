import ChatIcon from '@material-ui/icons/Chat';
import LocalHospitalIcon  from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            {/* <SidebarRow src="https://scontent.flos1-1.fna.fbcdn.net/v/t1.0-9/104117646_3902300356463336_7044579275637561516_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_eui2=AeFmPeMbNZR61hoig05di3dU34F79IvqNSPfgXv0i-o1I9w9BCLD5ZwRlOs_s_iWwzHf88GFDAwUMdpS4NeWGVM5&_nc_ohc=7SpTMaikRfAAX8SaheA&_nc_ht=scontent.flos1-1.fna&oh=63835d1b512cc45bae9973aa035ec4f5&oe=5FB28704" title="Nelson Collins"/> */}
            <SidebarRow src={user.photoURL} title={
                user.displayName
            }/>
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon}
                title="Marketplace"
            />
             <SidebarRow Icon={VideoLibraryIcon}
                title="Videos"
            />
             <SidebarRow Icon={ExpandMoreIcon}
                title="Marketplace"
            />
            
        </div>
    );
}

export default Sidebar;
