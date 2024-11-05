import { ToggleContainer, ToggleInput, ToggleSlider } from './toggle.styled';

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <ToggleSlider $checked={checked} />
    </ToggleContainer>
  );
};
