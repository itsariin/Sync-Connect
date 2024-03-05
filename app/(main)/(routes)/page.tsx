// using the userbutton here from clerk only 
//this is the protected route
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
     <UserButton 
     afterSignOutUrl="/"
     />
     <ModeToggle />
    </div>
  )
} 
