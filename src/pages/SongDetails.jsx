import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, error, Loader, RelatedSongs } from "../components";
import { setActiveSong,playPause } from "../redux/features/playerSlice";
const SongDetails = () => {
  const dispatch = useDispatch();

  const {songid} = useParams();
  const {activeSong, isplaying} = useSelector((state) => state.player)
  console.log(songid);
return (
<div className="flex flex-col">
  <DetailsHeader songData={songData} artistId={artistId} />
</div>

)};

export default SongDetails;
