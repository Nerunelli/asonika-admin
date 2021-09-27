import { Input, SearchIcon, Wrapper } from "./styled"

export const Search = () => {
  return (
    <>
      <Wrapper>
        <Input  placeholder='Поиск по категориям'/>
        <SearchIcon/>
      </Wrapper>
    </>
  )
}