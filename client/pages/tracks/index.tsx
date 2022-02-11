import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import TrackList from '../../components/TrackList';
import MainLoyout from '../../layouts/MainLoyout'
import { ITrack } from '../../types/track';

const TracksPage = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: 'asdasdasd32r3r', name: 'Crazy cow', artist: 'Kirkorov', text: 'lallalalal', listens: 0, picture: 'ss', audio: 'ss', comments: [{ username: 'lol', text: 'Norm pesnya', track: 'sss'}]}
    ];
    
  return (
    <MainLoyout>
        <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
            <Typography variant="h4">TRACK LIST</Typography>
            <Button variant="contained" onClick={() => router.push('/tracks/create')}>Load new track</Button>
        </Box>
        <TrackList tracks={tracks}/>
    </MainLoyout>
  )
}

export default TracksPage;