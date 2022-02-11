import { Box } from '@mui/material'
import React from 'react'
import { ITrack } from '../types/track'

interface TrackListProps {
    tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        {tracks.map(({_id, name, artist, text}) => {
            return (
                <div key={_id}>{text}</div>
            )
        })}
    </Box>
  )
}

export default TrackList