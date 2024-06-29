import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const AvatarComponent = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack>
    </Container>
  );
};

export default AvatarComponent;
