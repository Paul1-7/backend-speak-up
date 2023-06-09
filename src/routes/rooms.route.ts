import { Router } from "express";
import { createRoom, getAllRooms, joinRoom, leaveRoom } from "~/controllers/rooms.controller";
import validateToken from "~/middlewares/auth.middleware";

const routeRoom = Router();

routeRoom.get("/", getAllRooms);
routeRoom.post("/", validateToken, createRoom);
routeRoom.post("/join-room", validateToken, joinRoom);
routeRoom.delete("/leave-room", validateToken, leaveRoom);

export default routeRoom;
