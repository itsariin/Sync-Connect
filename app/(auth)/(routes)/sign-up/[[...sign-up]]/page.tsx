// thre reason for using this [[...]] format because this is a convention in nexj
// and this is will expose all the necessary routes for the clerk to work inside the 
// app router

import {  SignUp  } from "@clerk/nextjs";

export default function Page() {
    return <SignUp />;
}