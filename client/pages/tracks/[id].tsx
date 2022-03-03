import { Card, Typography } from "@mui/material";
import MainLoyout from "../../layouts/MainLoyout";
import { ITrack } from "../../types/track";

const TrackPage: React.FC = () => {
    // const track = [
    //     {_id: 'asdasdasd32r3r', name: 'Rolling In The Deep', artist: 'Adele', text: 'lallalalal', listens: 0, picture: 'http://localhost:5000/image/91160a20-3aa8-497f-8239-2c0506d175da.jpg', audio: 'http://localhost:5000/audio/35f67815-2978-4d87-a688-c9cb9d5979d1.mp3', comments: [{ username: 'user', text: 'Norm pesnya', track: 'asdasdasd32r3r'}]},
    // ];

    return (
        <MainLoyout>
            <Card>
                details
                {/* <img src="" alt="album" /> */}
                {/* <Typography variant="h4">Artist - {track.artist}</Typography>
                <Typography variant="h2">Name track - {track.name}</Typography>
                <Typography variant="h6">Listening - {track.listens}</Typography> */}
            </Card>
        </MainLoyout>
    )
}

export default TrackPage;
