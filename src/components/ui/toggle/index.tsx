import { ToggleContainer, ToggleInput, ToggleSlider } from './toggle.styled';

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={checked} onChange={handleToggle} />
      <ToggleSlider $checked={checked} />
    </ToggleContainer>
  );
};
