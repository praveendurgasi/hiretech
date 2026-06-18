import Stack from '@mui/material/Stack';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import type { ReactNode } from 'react';

export interface PageHeadingProps {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  titleProps?: TypographyProps;
  subtitleProps?: TypographyProps;
}

const PageHeading = ({
  title,
  subtitle,
  align = 'left',
  titleProps,
  subtitleProps,
}: PageHeadingProps) => {
  return (
    <Stack spacing={1.5} sx={{ textAlign: align }}>
      <Typography
        variant="h1"
        {...titleProps}
        sx={[
          {
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.25rem' },
            letterSpacing: '-0.03em',
          },
          ...(Array.isArray(titleProps?.sx) ? titleProps.sx : [titleProps?.sx]),
        ]}
      >
        {title}
      </Typography>
      {subtitle ? (
        <Typography
          variant="subtitle1"
          {...subtitleProps}
          sx={[
            {
              color: 'text.secondary',
              maxWidth: 680,
              mx: align === 'center' ? 'auto' : 0,
            },
            ...(Array.isArray(subtitleProps?.sx)
              ? subtitleProps.sx
              : [subtitleProps?.sx]),
          ]}
        >
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
};

export default PageHeading;
