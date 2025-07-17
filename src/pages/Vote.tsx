import styled from "@emotion/styled"
import TopTextLayer from "../components/topTextLayer/TopTextLayer";
import BarGraph from "../components/Graph/Index";
import { useEffect, useState } from "react";
import { getStatistics } from "../apis";

interface StatisticsData {
  totalAiPosts: number;
  totalHumanPosts: number;
  totalAiLikes: number;
  totalHumanLikes: number;
  averageAiLikes: number;
  averageHumanLikes: number;
  totalPosts: number;
  totalLikes: number;
}

export default function Vote() {
  const [aiPercent, setAiPercent] = useState(0);
  const [humanPercent, setHumanPercent] = useState(0);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await getStatistics();
        const data: StatisticsData = response.data;

        const totalLikes = data.totalAiLikes + data.totalHumanLikes;

        if (totalLikes > 0) {
          setAiPercent(Math.round((data.totalAiLikes / totalLikes) * 100));
          setHumanPercent(Math.round((data.totalHumanLikes / totalLikes) * 100));
        } else {
          setAiPercent(0);
          setHumanPercent(0);
        }

      } catch (error) {
        console.error("Failed to fetch statistics:", error);
        setAiPercent(0);
        setHumanPercent(0);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <>
      <Container>
        <TopTextLayer title="투표율 통계" text="AI와 사용자들의 글 통계를 확인해보세요" />
        <BarGraph humanPercent={humanPercent} aiPercent={aiPercent} />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3vh 3vw;
  gap: 30px;
`;