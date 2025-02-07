import { RiRadarFill } from 'react-icons/ri'

const Header = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-row items-start justify-start gap-1'>
          <RiRadarFill size={24} color='rgba(29, 78, 216)'/>
          <h1 className='text-xl text-blue-700 font-semibold'>CampRadar</h1>
      </div>
    </div>
  )
}

export default Header