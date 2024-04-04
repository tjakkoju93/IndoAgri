import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Icons.scss'



const Icons = () => {
  return (
    <div>
       <div className='address'>
            <div className='address-Icon'>
                <TwitterIcon className='Icons' />
                <FacebookIcon className='Icons' />
                <PinterestIcon className='Icons' />
                <InstagramIcon className='Icons' />
            </div>
        </div>
    </div>
  )
}

export default Icons
