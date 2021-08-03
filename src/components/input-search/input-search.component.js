import { Input, Space } from 'antd';

const { Search } = Input;

const SearchPokemon = ({ setPokemonName }) => {

  const onSearch = (value) => {
    setPokemonName(value.toLowerCase());
  };

  return (
    <div id="search-bar" className="flex justify-center py-2 mt-4">
      <Space direction="vertical">
        <Search
          className="w-full"
          placeholder="Search pokemon..."
          allowClear
          onSearch={onSearch}
        />
      </Space>
    </div>
  );
};

export default SearchPokemon;