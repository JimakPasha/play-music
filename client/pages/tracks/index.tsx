import { Box, Button, Card, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import TrackList from '../../components/TrackList';
import MainLoyout from '../../layouts/MainLoyout'
import { ITrack } from '../../types/track';

const TracksPage = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: 'asdasdasd32r3r', name: 'Rolling In The Deep', artist: 'Adele', text: 'lallalalal', listens: 0, picture: 'http://localhost:5000/image/91160a20-3aa8-497f-8239-2c0506d175da.jpg', audio: 'http://localhost:5000/audio/35f67815-2978-4d87-a688-c9cb9d5979d1.mp3', comments: [{ username: 'user', text: 'Norm pesnya', track: 'asdasdasd32r3r'}]},
        {_id: 'asdf32e', name: 'Song for JavaScript', artist: 'JavaStriptezer', text: 'Js the best set et t', listens: 0, picture: 'http://localhost:5000/image/thumb-zimnaa-skazka-bajkala-4-dna.jpg', audio: 'http://localhost:5000/audio/35f67815-2978-4d87-a688-c9cb9d5979d1.mp3', comments: [{ username: 'Bill', text: 'Cooool!', track: 'asdf32e'}]},
    ];
    
  return (
    <MainLoyout>
      <Card>
        <Box p={3} sx={{ justifyContent: 'space-between', display: 'flex' }}>
            <Typography variant="h4">TRACK LIST</Typography>
            <Button variant="contained" onClick={() => router.push('/tracks/create')}>
              Load new track
            </Button>
        </Box>
        <TrackList tracks={tracks}/>
      </Card>
    </MainLoyout>
  )
}

export default TracksPage;
