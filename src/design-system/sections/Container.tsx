import MuiContainer, { type ContainerProps as MuiContainerProps } from '@mui/material/Container';

export type ContainerProps = MuiContainerProps;

const Container = ({ maxWidth = 'lg', sx, ...props }: ContainerProps) => {
  return (
    <MuiContainer
      maxWidth={maxWidth}
      sx={[
        {
          px: { xs: 2, sm: 3, md: 4 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default Container;
