import styled from "styled-components";
import { Sublayer } from "../../types";
import { ActiveSublayer } from "../../utils/active-sublayer";
import { SublayerWidget } from "./sublayer-widget";
import { FiltrationSection } from "./filtration-section/filtration-section";

const BuildingExplorerSublayers = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 16px;
  overflow-x: hidden;
`;

const SectionTitle = styled.div`
  width: 81px;
  height: 19px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.fontColor};
  margin: 18px 0 24px 16px;
`;

export const BuildingExplorer = ({
  sublayers,
  onUpdateSublayerVisibility,
}: {
  sublayers: ActiveSublayer[];
  onUpdateSublayerVisibility: (sublayer: Sublayer) => void;
}) => {
  return (
    <>
      <SectionTitle>Categories</SectionTitle>
      <BuildingExplorerSublayers>
        {sublayers.map((sublayer) => (
          <SublayerWidget
            sublayer={sublayer}
            key={sublayer.id}
            onUpdateSublayerVisibility={onUpdateSublayerVisibility}
          />
        ))}
      </BuildingExplorerSublayers>
      <SectionTitle>Filters</SectionTitle>
      <FiltrationSection />
    </>
  );
};
