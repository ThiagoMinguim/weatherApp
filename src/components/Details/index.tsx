import Button from '@/components/Button'
import { MdOutlineGpsFixed, MdLocationOn } from 'react-icons/md'
import { Shower } from '@/assets'
import {
  Container,
  Header,
  ImgContainer,
  TempInfo,
  Climate,
  DayContent,
  Location,
  BackgroundContainer
} from './styles'

const Details = () => {
  return (
    <Container>
      <Header>
        <Button text={'Search for places'} />
        <Button rounded>
          <MdOutlineGpsFixed style={{ color: 'white', fontSize: '2.5rem' }} />
        </Button>
      </Header>

      <ImgContainer>
        <BackgroundContainer />
        <img src={Shower} alt="sol" />
      </ImgContainer>

      <TempInfo>
        <span>1 </span>
        <p>5</p>
        <span>ºC</span>
      </TempInfo>

      <Climate>Shower</Climate>

      <DayContent>
        <span>Today</span>
        <span>•</span>
        <span>Fri,5 Jun</span>
      </DayContent>

      <Location>
        <MdLocationOn style={{ color: '#88869D', fontSize: '2rem' }} />
        <span>Helsinki</span>
      </Location>
    </Container>
  )
}

export default Details
