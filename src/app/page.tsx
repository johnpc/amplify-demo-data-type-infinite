import { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/api";

const client = generateClient<Schema>();
export default function Home() {
  type ProfileUpdateInput = {
    id: string;
    profileCustomTextId?: string;
    profileZipcodeId?: string;
    profileCalendarConfigId?: string;
    profileBirthdayId?: string;
  };
  const handleUpdate = async (profileUpdateInput: ProfileUpdateInput) => {
    const updatedProfile =
      await client.models.Profile.update(profileUpdateInput);
  };

  return <>Hello World</>;
}
