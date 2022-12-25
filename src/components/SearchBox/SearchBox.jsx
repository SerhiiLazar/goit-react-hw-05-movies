import { Box, Input, Icon, Button } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <Box onSubmit={onSubmit}>
      <Input
        name="query"
        type="text"
        autoComplete="off"
        autoFocuse
        placeholder="Search movies"
      ></Input>
      <Button type="submit">
        <Icon />
      </Button>
    </Box>
  );
};
