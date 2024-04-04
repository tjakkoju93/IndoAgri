import React from 'react'
import man from '../../Assets/man.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import cow from '../../Assets/cow.png'
import freshproducts from '../../Assets/freshproducts.png'
import landclearing from '../../Assets/landclearing.png'
import strawberry from '../../Assets/strawberry.png'
import './ProjectSection.scss'

const ProjectSection = () => {
  const sidebar = [
    {
      title: "Service:",
      name: "Healthy Food"
    },
    {
      title: "Farmer:",
      name: "Mike Hardson"
    },
    {
      title: "Duration:",
      name: "4.5 Months"
    },
    {
      title: "Location:",
      name: "Broklyn, New Your"
    },
  ];

  const Icons = [TwitterIcon, FacebookIcon, PinterestIcon, InstagramIcon];

  return (
    <div className="projectsection">
      <img src={man} alt="" />
      <div className='project-section'>
        <div className="mainsection">
          <h2>Healthy Food</h2>
          <p>Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <h3>Biophilia is the idea that humans possess an innate tendency to seek connections with nature.
            The term translates</h3>
          <p>The term translates When an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
            finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p>Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <h2>Challenges</h2>
          <h4>Nemo enim ipsam voluptatem quia voluptas. <span>
            Accusamus et iusto odio dignissimos ducimus.</span><span>
              Nam liberto tempore, cum soluta nobis est elidend.</span><span>
              Accusamus et iusto odio dignissimos ducimus.</span></h4>
          <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged.</p>

        </div>
        <div className="sidebar">
          <div className="sidetop">
            {
              sidebar.map((item) => {
                return (
                  <div className="details">
                    <p>{item.title}</p>
                    <h3>{item.name}</h3>

                  </div>
                );
              })
            }
          </div>
          <div className="sidebottom">

            {
              Icons.map((Icon) => {

                return (
                  <div className="icon">
                    <Icon />
                  </div>
                )
              })
            }

          </div>

        </div>
      </div>



      <div className="gridgallery">
        <h4>Recently Completed</h4>
        <h2>Similar Projects</h2>
        <div className='cards'>
          <div className="cow">
            <h3>Agriculture <span>Farming</span> </h3>
          </div>
          <div className="berry">
            <h3>Ecological <span>Farming</span> </h3>
          </div>
          <div className="solutions">
            <h3>Organic <span>Solutions</span> </h3>
          </div>
          <div className="fresh">
            <h3>Fresh<span>Products</span> </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
