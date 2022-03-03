import { useRouter } from "next/router";
import { ITrack } from "../types/track";
import { Button, Card, Grid, IconButton } from "@mui/material";
import styles from '../styles/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from "@mui/icons-material";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter();

    return (
        <Card className={styles.track}>
            {active ? <IconButton><Pause /></IconButton> : <IconButton><PlayArrow /></IconButton>}
            <img src={track.picture} alt="album" width={70} height={70}/>
            <Grid className={styles.track__wrapper} container direction="column">
                <div>{track.name}</div>
                <div className={styles.track__artist}>{track.artist}</div>
            </Grid>
                <Button className={styles.track__details} onClick={() => router.push('/tracks/' + track._id)}>
                more details {'>'}
                </Button>
            {active && <div>02:42 / 03: 11</div>}
            <IconButton className={styles.track__delete}>
                <Delete />
            </IconButton>
        </Card>
    )
}

export default TrackItem;
