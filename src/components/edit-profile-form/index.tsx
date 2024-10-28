import { EditProfileCover } from '../edit-profile-cover';
import { EditProfileImage } from '../edit-profile-image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { EditProfilceImageWrapper, FormContainer, FormControls } from './edit-profile-form.styled';

export const EditProfileForm: React.FC = () => {
  return (
    <FormContainer>
      <EditProfileCover />

      <FormControls>
        <EditProfilceImageWrapper>
          <EditProfileImage />
        </EditProfilceImageWrapper>

        <Input type="text" placeholder="Name" fullWidth={true} />
        <Input type="text" placeholder="Description" fullWidth={true} />
        <Input type="text" placeholder="Telegram link" fullWidth={true} />

        <Input type="password" placeholder="Password" fullWidth={true} />
        <Input type="password" placeholder="Confirm password" fullWidth={true} />

        <Button variant="primary">Save</Button>
      </FormControls>
    </FormContainer>
  );
};
