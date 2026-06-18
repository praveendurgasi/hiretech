import Box, { type BoxProps } from '@mui/material/Box';

export interface SectionProps extends BoxProps {
  y?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const ySpaceMap: Record<NonNullable<SectionProps['y']>, { xs: number; md: number }> = {
  xs: { xs: 4, md: 6 },
  sm: { xs: 6, md: 8 },
  md: { xs: 8, md: 10 },
  lg: { xs: 10, md: 14 },
  xl: { xs: 12, md: 18 },
};

const Section = ({ y = 'md', sx, ...props }: SectionProps) => {
  const pad = ySpaceMap[y];

  return (
    <Box
      sx={[
        {
          py: pad,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default Section;
