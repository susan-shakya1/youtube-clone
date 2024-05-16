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

}



export const MainMenuData:TMainmenu[]=[
    {
icons:MdHomeFilled ,
name:"Home"

},
    {
icons:SiYoutubeshorts,
name:"Short"

},
    {
icons:MdSubscriptions,
name:"Subcriptions"

},

]

export const YouMenuData:TMainmenu[]=[
    {
        icons:MdHistory,
        name:"History"
    },
    {
        icons:MdPlaylistPlay,
        name:"Playlist"
    },
    {
        icons:MdOutlineWatchLater,
        name:"Watch Later"
    },
    {
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
    icons:FaFire ,
    name:"Trending"
},
{
    icons:MdOutlineMusicNote,
    name:"Music"
},
{
    icons:IoGameController ,
    name:"Gamming"
},
{
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
        icons:IoSettingsOutline ,
        name:"Setting"
    },
    {
        icons:RiFlagLine ,
        name:"Report History"
    },
    {
        icons:FiHelpCircle ,
        name:"Help"
    },
    {
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

        icons: MdHomeFilled,
        name:"Home"
    },
    {

        icons:SiYoutubeshorts,
        name:"Shorts"
    },
    {

        icons:MdSubscriptions,
        name:"Subscriptions"
    },
    {

        icons:CiYoutube,
        name:"You"
    },
    ]