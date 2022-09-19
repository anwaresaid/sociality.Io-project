import React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PublishIcon from '@mui/icons-material/Publish';
import ForumIcon from '@mui/icons-material/Forum';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import AssessmentIcon from '@mui/icons-material/Assessment';


export const SideBarElements = [
    {
        title: "NOTIFICATIONS",
        icon: <NotificationsActiveIcon/>,
        link:"/notifications",
    },
    {
        title: "SUMMARY",
        icon: <SummarizeIcon/>,
        link:"/summary",
    },
    {
        title: "PUBLISH",
        icon: <PublishIcon/>,
        link:"/publish",
        children: [
            {
                title:"Compose",
                link:"./publish/compose",
            },
            {
                title:"Feed",
                link:"./publish/feed",
            }
        ]
    },
    {
        title: "ENGAGE",
        icon: <ForumIcon/>,
        link:"/engage",
    },
    {
        title: "LISTEN",
        icon: <SsidChartIcon/>,
        link:"/listen",
    },
    {
        title: "REPORT",
        icon: <AssessmentIcon/>,
        link:"/report",
    }
]

export default SideBarElements