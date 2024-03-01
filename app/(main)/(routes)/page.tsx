// using the userbutton here from clerk only 
//this is the protected route
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
     <UserButton 
     afterSignOutUrl="/"
     />
    </div>
  )
} 
