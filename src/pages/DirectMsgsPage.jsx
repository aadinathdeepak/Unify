import Sidebar from "components/Sidebar/Sidebar.js"
import appRoutes from "routes/app.js"
import logo from "assets/img/reactlogo.png"

export function DirectMsgsPage(){
    return <div>
        <Sidebar routes={appRoutes} logoText={"DASHBOARD"} variant="opaque" {...rest} />
    </div>
}