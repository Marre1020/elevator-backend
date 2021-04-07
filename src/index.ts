import { createServer } from "./Server"
import { createElevatorMod } from "./Elevator"
import { createRoutes } from "./Routes"

const app = createServer()

const ElevatorMod = createElevatorMod({ app })

createRoutes({app, ElevatorMod})

