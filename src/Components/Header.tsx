import React from "react";
import styled from "../Styles/index";
import { Container } from "@material-ui/core";
import { Plus, Shuffle } from "../Icons";
import Input from "./Input";
import useInput from "../Hooks/useInput";

const ContainerWrapper = styled.div`
  width: 100%;
  top: 0px;
  background-color: ${props => props.theme.darkBleuColor};
  position: fixed;
  color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  padding-right: 16px;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
`;

const MenuItem = styled.div`
  :not(:last-child) {
    padding-right: 32px;
  }
`;

const SearchBox = styled.div`
  width: 100%;
  input {
    width: 100%;
  }
  padding-right: 8px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.blueColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export default () => {
  const search = useInput("");

  return (
    <ContainerWrapper>
      <Container maxWidth="md">
        <ContentWrapper>
          <Row>
            <Title>JJeoris</Title>
            <MenuItems>
              <MenuItem>Browse</MenuItem>
              <MenuItem>Categories</MenuItem>
              <MenuItem>Vote</MenuItem>
              <MenuItem>Store</MenuItem>
            </MenuItems>
          </Row>
          <Row>
            <SearchBox>
              <Input
                value={search.value}
                placeholder={"Type any words"}
                onChange={search.onChange}
              />
            </SearchBox>
            <Icons>
              <Icon>
                <Plus size={16} />
              </Icon>
              <Icon>
                <Shuffle size={20} />
              </Icon>
            </Icons>
          </Row>
        </ContentWrapper>
      </Container>
    </ContainerWrapper>
  );
};
