import { Sequelize } from "sequelize-typescript";
import { CONFIG } from "~/config/config";
import Users from "./models/User.model";
import Languages from "./models/Language.model";
import Memberships from "./models/Membership.model";
import Participants from "./models/Participant.model";
import Profiles from "./models/Profile.model";
import Roles from "./models/Role.model";
import Rooms from "./models/Room.model";
import Suscriptions from "./models/Suscription.model";
import Topics from "./models/Topic.model";

export const sequelize = new Sequelize(CONFIG.DATABASE_URL, {
  dialect: "postgres",
});

sequelize.addModels([Users, Languages, Memberships, Participants, Profiles, Roles, Rooms, Suscriptions, Topics]);

export default async function DBInit() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }
}
