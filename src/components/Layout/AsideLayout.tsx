import React from "react";
import Aside from "../Aside/Index";
import { Outlet } from "react-router-dom";
import * as S from "./style";

export default function AsideLayout() {
  return (
    <S.LayoutWrapper>
      <Aside />
      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>
    </S.LayoutWrapper>
  );
} 