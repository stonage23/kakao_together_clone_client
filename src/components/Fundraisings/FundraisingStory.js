import React from 'react'
import { useParams } from 'react-router-dom';

function FundraisingStory() {

  const params = useParams();

  return (
    <div>FundraisingStory {params.campaignId}</div>
  )
}

export default FundraisingStory;