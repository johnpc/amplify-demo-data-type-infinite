import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Profile: a
    .model({
      id: a.string().required(),
      birthday: a.hasOne("Birthday"),
      name: a.hasOne("Name"),
      calendarConfig: a.hasOne("Calendar"),
      zipcode: a.hasOne("Zipcode"),
    })
    .authorization([
      a.allow.custom(),
    ]),
  Birthday: a
    .model({
      birthday: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.custom()]),
  Zipcode: a
    .model({
      zipcode: a.string().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.custom()]),
  Name: a
    .model({
      name: a.string().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.custom()]),
  Event: a
    .model({
      title: a.string().required(),
      endDate: a.date().required(),
      thumbnailKey: a.string(),
      calendar: a.belongsTo("Calendar"),
    })
    .authorization([a.allow.custom()]),
  Calendar: a
    .model({
      countdownEvents: a.hasMany("Event"),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.custom()]),
  Device: a
    .model({
      id: a.string().required(),
    })
    .authorization([a.allow.custom()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data =
  defineData({
    schema,
    authorizationModes: {
      defaultAuthorizationMode: "userPool",
    },
  });

