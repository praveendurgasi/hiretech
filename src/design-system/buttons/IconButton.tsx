import MuiIconButton, { type IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { alpha } from '@mui/material/styles';

export interface IconButtonProps extends MuiIconButtonProps {
  label: string;
}

const IconButton = ({ label, sx, ...props }: IconButtonProps) => {
  return (
    <Tooltip title={label} arrow>
      <MuiIconButton
        aria-label={label}
        sx={[
          {
            border: `1px solid ${alpha('#1565FF', 0.18)}`,
            backgroundColor: '#FFFFFF',
            '&:hover': {
              backgroundColor: alpha('#1565FF', 0.08),
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...props}
      />
    </Tooltip>
  );
};

export default IconButton;
