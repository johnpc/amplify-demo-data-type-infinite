import {type ClientSchema, a, defineData} from "@aws-amplify/backend";

const schema = a.schema({
  Profile: a
    .model({
      id: a.string().required(),
      exampleField: a.hasOne("ExampleField"),
      exampleField2: a.hasOne("ExampleField2"),
      exampleField3: a.hasOne("ExampleField3"),
      exampleField4: a.hasOne("ExampleField4"),
      exampleField5: a.hasOne("ExampleField5"),
      exampleField6: a.hasOne("ExampleField6"),
      exampleField7: a.hasOne("ExampleField7"),
      exampleField8: a.hasOne("ExampleField8"),
      exampleField9: a.hasOne("ExampleField9"),
      exampleField10: a.hasOne("ExampleField10"),
    })
    .authorization([a.allow.owner()]),

  ExampleField: a
    .model({
      text: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.owner()]),

  ExampleField2: a
    .model({
      text: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.owner()]),

  ExampleField3: a
    .model({
      text: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.owner()]),

  ExampleField4: a
    .model({
      text: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.owner()]),

  ExampleField5: a
    .model({
      text: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.owner()]),

  ExampleField6: a
    .model({
      text: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.owner()]),

  ExampleField7: a
    .model({
      text: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.owner()]),

  ExampleField8: a
    .model({
      text: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.owner()]),

  ExampleField9: a
    .model({
      text: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.owner()]),

  ExampleField10: a
    .model({
      text: a.date().required(),
      profile: a.belongsTo("Profile"),
    })
    .authorization([a.allow.owner()]),

  Device: a
    .model({
      id: a.string().required(),
    })
    .authorization([a.allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
