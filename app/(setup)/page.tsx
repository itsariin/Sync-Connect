//here after creating the first ever server with the name The Room
//and after crrating we got error 404 REASON being-:
//here we are gettinh the initial profile i.e, either we creating it or we are getting the current user
//--const profile = await intialProfile();--
//and if we have the profile we are attempting to find the initial server in which this user might be in
//---const server = await db.server.findFirst({
//     where: {
//         members: {
//             some: {
//                 profileId: profile.id
//             }
//         }
//     }
// });---

import { intialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { InitialModel } from "@/components/models/initial-model";


const SetupPage = async () => {
    const profile = await intialProfile();

    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (server) {
        return redirect(`/servers/${server.id}`);
    }
//if there is no server we return the intial model to create one
// otherwise we redirect to the url of that server
//--return redirect(`/servers/${server.id}`);--
    return <InitialModel />;
}

export default SetupPage;