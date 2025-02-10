import Brand from "../Brand/Brand"
import Featured from "../Featured/Featured"
import Heading from "../Heading/Heading"
import Latest from "../Latest/Latest"


function Home() {
  return (
    <div className='Home'>
      <Heading/>
      <Featured/>
      <Latest/>
      <Brand/>
    </div>
  )
}

export default Home
