// Basically the thing is whatever thing i create in this (auth) and 
// if i have a seperate Layout.tsx it will act accordingly i.e, the layout 
// of this folder only 

// WHY

// if i want couple of my routes to hold the same side bar or color or whatever 
// i can you know group them in such a way and can give them a property together
// which can ease up my work

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
// using -:h-full flex items-center justify-center we center the sign-in and sign-up page
        <div className="h-full flex items-center justify-center">
            {children}
        </div>
     );
}
 
export default AuthLayout;