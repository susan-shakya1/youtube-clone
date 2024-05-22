import { IconType } from "react-icons";
import { BiLike } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoGameController, IoSettingsOutline } from "react-icons/io5";
import { LuTrophy } from "react-icons/lu";
import { MdHistory, MdHomeFilled, MdOutlineFeedback, MdOutlineMusicNote, MdOutlineWatchLater, MdPlaylistPlay, MdSubscriptions } from "react-icons/md";
import { RiFlagLine } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";


type TMainmenu={
    name:string
    icons:IconType;
    id:number;

}



export const MainMenuData:TMainmenu[]=[
    {
        id:0,
icons:MdHomeFilled ,
name:"Home"

},
    {
        id:1,
icons:SiYoutubeshorts,
name:"Short"

},
    {
        id:2,
icons:MdSubscriptions,
name:"Subcriptions"

},

]

export const YouMenuData:TMainmenu[]=[
    {
        id:3,
        icons:MdHistory,
        name:"History"
    },
    {
        id:5,
        icons:MdPlaylistPlay,
        name:"Playlist"
    },
    {
        id:6,
        icons:MdOutlineWatchLater,
        name:"Watch Later"
    },
    {
        id:7,
        icons:BiLike,
        name:"Liked videos"
    },

]

type TTypeOfSubscripe={
    img:string;
    name:string;
}

export const SubcriptionsChannelData:TTypeOfSubscripe[]=[
    {
        img:"/beestlogo.jpg",
        name:"Beest Production"
    },
    {
        img:"/ninja.png",
        name:"Net Ninja"
    },
    {
        img:"/hitesh.jpeg",
        name:"Chai aur Code"
    },
    {
        img:"/sisan.jpeg",
        name:"Sisan Baniya"
    },
    {
        img:"/sabin.jpg",
        name:"Sabin Karki-Beest"
    },
    {
        img:"/uniq.jpeg",
        name:"UNIQ POET"
    },
    {
        img:"/sisan.jpeg",
        name:"Sisan Baniya"
    },
    {
        img:"/sabin.jpg",
        name:"Sabin Karki-Beest"
    },
    {
        img:"/uniq.jpeg",
        name:"UNIQ POET"
    },
    
]

export const ExploreData:TMainmenu[]=[

{
    id:8,
    icons:FaFire ,
    name:"Trending"
},
{
    id:9,
    icons:MdOutlineMusicNote,
    name:"Music"
},
{
    id:10,
    icons:IoGameController ,
    name:"Gamming"
},
{
    id:11,
    icons:LuTrophy ,
    name:"Sports"
},
]

export const YouTubeType: TTypeOfSubscripe[] = [
    {
        img:"/logo.png",
        name:"YouTube Premium"
    },
    {
        img:"/music.png",
        name:"YouTube Music"
    },
    {
        img:"/kids.png",
        name:"YouTube Kids"
    },
  
]

export const settingData:TMainmenu[]=[

    {
        id:12,
        icons:IoSettingsOutline ,
        name:"Setting"
    },
    {
        id:13,
        icons:RiFlagLine ,
        name:"Report History"
    },
    {
        id:14,
        icons:FiHelpCircle ,
        name:"Help"
    },
    {
        id:15,
        icons:MdOutlineFeedback ,
        name:"Send feedback"
    },
    ]
    
        
    
    export const CatogoriesData:string[]=[
        "All",
        "JavaScript",
        "Music",
        "Cloud Computing",
        "suspense",
        "Horror",
        "Action",
        "Web Developement",
        "Cyber Security",
        "Python",
        "SmartPhones",
        "Python",
        "Web Developement",
        "Cyber Security",
        "SmartPhones",
        "Gadgets",
        "Python",
        "SmartPhones",
        "Python",
        "Web Developement",
        "Cyber Security",
        "SmartPhones",
        "Gadgets",

    ]



    export const Icons:TMainmenu[]=[{
        id:16,
        icons: MdHomeFilled,
        name:"Home"
    },
    {
        id:17,
        icons:SiYoutubeshorts,
        name:"Shorts"
    },
    {
        id:18,
        icons:MdSubscriptions,
        name:"Subscriptions"
    },
    {
        id:19,
        icons:CiYoutube,
        name:"You"
    },
    ]