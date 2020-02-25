import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home/tabs/feed',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'feed',
                loadChildren: './feed/feed.module#FeedPageModule'
            },
            {
                path: 'timetable',
                loadChildren: './timetable/timetable.module#TimetablePageModule'
            },
            {
                path: 'whosinroom',
                loadChildren: './whos-in-room/whos-in-room.module#WhosInRoomPageModule'
            },
            {
                path: 'locateprofessor',
                loadChildren: './locate-professor/locate-professor.module#LocateProfessorPageModule'
            },
            {
                path: 'blogs',
                loadChildren: './blogs/blogs.module#BlogsPageModule'
            },
            {
                path: 'notices',
                loadChildren: './notices/notices.module#NoticesPageModule'
            },
            {
                path: 'events',
                loadChildren: './events/events.module#EventsPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}
