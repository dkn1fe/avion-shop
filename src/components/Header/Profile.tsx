import {
    CircleUserRound,
    Info,
    LogIn,
    LogOut,
} from 'lucide-react'

import { Button } from '@/shared/ui/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/ui/ui/dropdown-menu'

export const Profile = () => {
    const userList = [
        { id: 1, title: 'Profile', img: <CircleUserRound size={20} /> },
        { id: 2, title: 'Sign in', img: <LogIn size={20} /> },
        { id: 3, title: 'Sign out', img: <LogOut size={20} /> },
        { id: 4, title: 'About', img: <Info size={20} /> },
    ]
    return (
        <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className="p-2.5 max-[600px]:hidden">
                        <CircleUserRound size={20} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {userList.map((item) => (
                        <DropdownMenuItem className="flex gap-2" key={item.id}>
                            {item.img}
                            <span className="">{item.title}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}