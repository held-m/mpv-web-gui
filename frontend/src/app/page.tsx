import { MainLayout } from "@layout/main";
import { ListSongs } from "@src/widget/content/Song";
import { PlayerMenu } from "@widget/content/PlayerMenu";

export default function Home() {
  return (
    <MainLayout>
      <PlayerMenu />
      <ListSongs />
    </MainLayout>
  );
}
